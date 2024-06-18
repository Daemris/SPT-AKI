import { DependencyContainer } from "tsyringe";

import { IPreAkiLoadMod } from "@spt-aki/models/external/IPreAkiLoadMod";
import { IPostDBLoadMod } from "@spt-aki/models/external/IPostDBLoadMod";
import { ITraderConfig } from "@spt-aki/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt-aki/models/spt/config/IRagfairConfig";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { Traders } from "@spt-aki/models/enums/Traders";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { StaticRouterModService } from "@spt-aki/services/mod/staticRouter/StaticRouterModService";
import { DynamicRouterModService } from "@spt-aki/services/mod/dynamicRouter/DynamicRouterModService";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";

import { References } from "./Refs/References";
import { Utils } from "./Refs/Utils";
import { LegionData } from "./RaidBoss/Legion";
import { TraderData } from "./Trader/ReqShop";
import { Base } from "./BaseFeatures/baseFeatures";
import { ItemGenerator } from "./CustomItems/ItemGenerator";
import { pushTraderFeatures } from "./Trader/TraderPushes";

import * as modConfig from "../config/config.json";
import * as EventWeightingsConfig from "../config/EventWeightings.json";
import * as baseJson from "../db/base.json";
import * as path from "path";

const fs = require("fs");

class RaidOverhaul implements IPreAkiLoadMod, IPostDBLoadMod {
  modName: string;
  protected profilePath: string;
  modPath: string = path.normalize(path.join(__dirname, ".."));

  static container: DependencyContainer;
  public imageRouter: ImageRouter;

  private ref: References = new References();
  private utils: Utils = new Utils(this.ref);

  private static pluginDepCheck(): boolean {
    const pluginRO = "raidoverhaul.dll";

    try {
      const pluginPath = fs
        .readdirSync("./BepInEx/plugins/RaidOverhaul")
        .map((plugin) => plugin.toLowerCase());
      return pluginPath.includes(pluginRO);
    } catch {
      return false;
    }
  }

  private static preloaderDepCheck(): boolean {
    const prePatchLegion = "legionprepatch.dll";

    try {
      const pluginPath = fs
        .readdirSync("./BepInEx/patchers")
        .map((plugin) => plugin.toLowerCase());
      return pluginPath.includes(prePatchLegion);
    } catch {
      return false;
    }
  }

  constructor() {
    this.modName = "RaidOverhaul";
  }

  //
  //
  //
  //
  //

  /**
   * @param container
   */
  public preAkiLoad(container: DependencyContainer): void {
    this.ref.preAkiLoad(container, "RaidOverhaul");
    const ragfair = this.ref.configServer.getConfig<IRagfairConfig>(
      ConfigTypes.RAGFAIR
    );
    const traderConfig: ITraderConfig =
      this.ref.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);
    const traderData = new TraderData(traderConfig, this.ref, this.utils);

    const staticRouterModService: StaticRouterModService =
      container.resolve<StaticRouterModService>("StaticRouterModService");
    const dynamicRouterModService: DynamicRouterModService =
      container.resolve<DynamicRouterModService>("DynamicRouterModService");

    if (modConfig.RemoveFromSwag) {
      return;
    }

    traderData.registerProfileImage();
    traderData.setupTraderUpdateTime();

    Traders["Requisitions"] = "Requisitions";
    ragfair.traders[baseJson._id] = true;

    staticRouterModService.registerStaticRouter(
      `${this.modName}-/client/game/start`,
      [
        {
          url: "/client/game/start",
          action: (
            url: string,
            info: string,
            sessionID: string,
            output: string
          ): string => {
            const profileInfo =
              this.ref.profileHelper.getFullProfile(sessionID);

            if (modConfig.BackupProfile) {
              this.utils.profileBackup(
                this.modName,
                sessionID,
                path,
                profileInfo,
                this.ref.randomUtil
              );
            }
            return output;
          },
        },
      ],
      "aki"
    );

    staticRouterModService.registerStaticRouter(
      "GetEventWeightings",
      [
        {
          url: "/RaidOverhaul/GetEventWeightings",
          action: (
            url: string,
            info: string,
            sessionId: string,
            output: string
          ) => {
            const EventWeightings = EventWeightingsConfig;

            return JSON.stringify(EventWeightings);
          },
        },
      ],
      ""
    );

    if (modConfig.Debug.ExtraLogging) {
      dynamicRouterModService.registerDynamicRouter(
        `DynamicReportError${this.modName}`,
        [
          {
            url: "/RaidOverhaul/LogToServer/",
            action: (url: string) => {
              const urlParts = url.split("/");
              const clientMessage = urlParts[urlParts.length - 1];

              const regex = /%20/g;
              this.utils.logToServer(
                clientMessage.replace(regex, " "),
                this.ref.logger
              );

              return JSON.stringify({ resp: "OK" });
            },
          },
        ],
        "LogToServer"
      );
    }

    staticRouterModService.registerStaticRouter(
      `${this.modName}:RaidSaved`,
      [
        {
          url: "/raid/profile/save",
          action: (
            url: string,
            info: string,
            sessionId: string,
            output: string
          ) => {
            TraderData.traderRepLogic(info, sessionId, this.ref.traderHelper);
            TraderData.legionRepLogic(info, sessionId, this.ref.traderHelper);
            LegionData.modifySpawnChance(info, output);
            LegionData.LoadBossData();
            if (
              this.ref.preAkiModLoader.getImportedModsNames().includes("SWAG")
            ) {
              LegionData.swagPatch();
            }
            return output;
          },
        },
      ],
      "aki"
    );
    if (this.ref.preAkiModLoader.getImportedModsNames().includes("SWAG")) {
      LegionData.swagPatch();
      this.ref.logger.log(
        "[RaidOverhaul] SWAG detected, modifying Legion patterns.",
        LogTextColor.MAGENTA
      );
    }
    this.utils.fixOldROIds();
  }

  //
  //
  //
  //
  //
  //

  /**
   * @param container
   */
  public postDBLoad(container: DependencyContainer): void {
    this.ref.postDBLoad(container);

    const traderConfig: ITraderConfig =
      this.ref.configServer.getConfig<ITraderConfig>(ConfigTypes.TRADER);

    //Imports
    const traderData = new TraderData(traderConfig, this.ref, this.utils);
    const modFeatures = new Base(this.utils, this.ref);
    const itemGenerator = new ItemGenerator(this.utils, this.ref);
    const traderFeatures = new pushTraderFeatures(
      this.utils,
      this.ref,
      traderData
    );

    //For new items
    const modPath =
      path.resolve(__dirname.toString()).split(path.sep).join("/") + "/";

    //Random message on server on startup
    const messageArray = [
      "The hamsters can take a break now",
      "Time to get wrecked by Birdeye LOL",
      "Back to looking for cat pics",
      "I made sure to crank up your heart attack event chances",
      "If there's a bunch of red text it's 100% not my fault",
      "We are legion, for we are many",
      "All Hail the Cult of Cj",
      "Good luck out there",
    ];
    const randomMessage =
      messageArray[Math.floor(Math.random() * messageArray.length)];

    if (modConfig.RemoveFromSwag) {
      const swagBossConfigPath = path.join(
        __dirname,
        "../../SWAG/config/bossConfig.json"
      );
      const swagBossConfig = JSON.parse(
        fs.readFileSync(swagBossConfigPath, "utf-8")
      );

      swagBossConfig.CustomBosses.legion.enabled = false;

      fs.writeFileSync(
        swagBossConfigPath,
        JSON.stringify(swagBossConfig, null, 2),
        "utf-8"
      );

      return this.ref.logger.error(
        `[${this.modName}] Removing Legion from Swag config. Ready to uninstall.`
      );
    }

    if (!RaidOverhaul.pluginDepCheck()) {
      return this.ref.logger.error(
        `[${this.modName}] Error, client portion of Raid Overhaul is missing from BepInEx/plugins folder.\nPlease install correctly.`
      );
    }

    if (!RaidOverhaul.preloaderDepCheck()) {
      return this.ref.logger.error(
        `[${this.modName}] Error, Legion Boss Preloader is missing from BepInEx/patchers folder.\nPlease install correctly.`
      );
    }

    //Load all custom items
    if (modConfig.EnableCustomItems) {
      if (
        this.ref.preAkiModLoader.getImportedModsNames().includes("SPT-Realism")
      ) {
        itemGenerator.createRealismAmmo();
        this.ref.logger.log(
          "[RaidOverhaul] Realism detected, modifying custom ammunition.",
          LogTextColor.MAGENTA
        );
      }

      if (
        !this.ref.preAkiModLoader.getImportedModsNames().includes("SPT-Realism")
      ) {
        itemGenerator.createAmmo();
      }
      itemGenerator.createGear();
      itemGenerator.createWeapons();
    }
    itemGenerator.createConstItems();

    // Load custom boss data
    LegionData.LoadBossData();

    // Load Trader Data
    traderFeatures.pushExports(modPath);

    //Push all of the mods base features
    modFeatures.pushModFeatures();

    this.ref.logger.log(
      `[${this.modName}] has finished modifying your raids. ${randomMessage}.`,
      LogTextColor.CYAN
    );
  }
}
//      \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/

module.exports = { mod: new RaidOverhaul() };
