import { container } from "tsyringe";

import { ConfigServer } from "@spt-aki/servers/ConfigServer";
import { DatabaseServer } from "@spt-aki/servers/DatabaseServer";
import { VFS } from "@spt-aki/utils/VFS";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { RandomUtil } from "@spt-aki/utils/RandomUtil";
import { IPmcData } from "@spt-aki/models/eft/common/IPmcData";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IBotConfig } from "@spt-aki/models/spt/config/IBotConfig";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { BossLocationSpawn } from "@spt-aki/models/eft/common/ILocationBase";

import * as modConfig from "../../config/config.json";
import * as botSettings from "../Refs/ArrayFiles/botInfo.json";
import * as bosslegion from "../../db/RaidBoss/bosslegion.json";
import * as bosslegion2 from "../../db/RaidBoss/bosslegion2.json";
import * as path from "path";

const fs = require("fs");

export class LegionData {
  constructor() {}

  static LoadBossData(): void {
    const logger = container.resolve<ILogger>("WinstonLogger");
    const logString = "Boss Legion";
    const tables = container
      .resolve<DatabaseServer>("DatabaseServer")
      .getTables();
    const randomUtil = container.resolve<RandomUtil>("RandomUtil");
    const jsonUtil = container.resolve<JsonUtil>("JsonUtil");
    const configServer = container.resolve<ConfigServer>("ConfigServer");
    const botConfig = configServer.getConfig<IBotConfig>(ConfigTypes.BOT);
    const preset: any = botConfig.presetBatch;
    const escortAmount = randomUtil.randInt(1, 4).toString();
    const diffType = randomUtil
      .drawRandomFromList(botSettings.difficulties, 1)
      .toString();
    const escortType = randomUtil
      .drawRandomFromList(botSettings.followers, 1)
      .toString();
    const legionSpawnPath = path.join(
      __dirname,
      "../../config/LegionChance.json"
    );

    let bossLegionChance = 15;

    try {
      const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
      bossLegionChance = spawnChance?.legionChance ?? 15;
    } catch (error) {
      console.log(
        "Can't find Legion spawn chance file. Make sure you have it in your config folder."
      );
    }

    if (modConfig.Debug.ExtraLogging) {
      logger.log(
        `[${logString}] Current spawn chance for Legion is [${bossLegionChance}]`,
        LogTextColor.BLUE
      );
      logger.log(
        `[${logString}] Current Boss and Escort Difficulty is [${diffType}]`,
        LogTextColor.BLUE
      );
      logger.log(
        `[${logString}] Current Escort type is [${escortType}]`,
        LogTextColor.BLUE
      );
      logger.log(
        `[${logString}] Current number of Escorts is [${escortAmount}]`,
        LogTextColor.BLUE
      );
    }

    let bossLegionSpawn: BossLocationSpawn = {
      BossChance: bossLegionChance,
      BossDifficult: diffType,
      BossEscortAmount: escortAmount,
      BossEscortDifficult: diffType,
      BossEscortType: escortType,
      BossName: "bosslegion",
      BossPlayer: false,
      BossZone: "?",
      RandomTimeSpawn: false,
      Time: -1,
      TriggerId: "",
      TriggerName: "",
    };

    preset.bosslegion = 1;
    botConfig.equipment["bosslegion"] = botSettings.equipmentSettings;
    botConfig.itemSpawnLimits["bosslegion"] = {};
    botConfig.walletLoot["bosslegion"] = botConfig.walletLoot["bossgluhar"];
    botConfig.bosses.push("bosslegion");

    if (modConfig.EnableCustomItems) {
      try {
        tables.bots.types["bosslegion"] = jsonUtil.deserialize(
          jsonUtil.serialize(bosslegion)
        );
      } catch (error) {
        logger.error(
          `[${logString}] Error loading default Legion files:` + error
        );
      }
    }

    if (!modConfig.EnableCustomItems) {
      try {
        tables.bots.types["bosslegion"] = jsonUtil.deserialize(
          jsonUtil.serialize(bosslegion2)
        );
      } catch (error) {
        logger.error(
          `[${logString}] Error loading default Legion files:` + error
        );
      }
    }

    for (const location of Object.values(tables.locations)) {
      if (location.base) {
        const zonesString =
          location.base.Id === "factory4_night"
            ? tables.locations.factory4_day.base.OpenZones
            : location.base.OpenZones;
        if (!zonesString) {
          continue;
        }

        const foundOpenZones = zonesString
          .split(",")
          .map((zone) => zone.trim())
          .filter((zone) => zone && !zone.includes("Snipe"));

        if (foundOpenZones.length === 0) {
          continue;
        }

        const randomIndex = Math.floor(Math.random() * foundOpenZones.length);
        const randomZone = foundOpenZones[randomIndex];

        bossLegionSpawn = {
          ...bossLegionSpawn,
          BossZone: randomZone,
        };
        location.base.BossLocationSpawn.push(bossLegionSpawn);
      }
    }
  }

  static swagPatch(): void {
    let bossLegionChance = 15;

    const logger = container.resolve<ILogger>("WinstonLogger");
    const logString = "Boss Legion";
    const legionSpawnPath = path.join(
      __dirname,
      "../../config/LegionChance.json"
    );
    const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
    bossLegionChance = spawnChance?.legionChance ?? 15;

    try {
      const swagBossConfigPath = path.join(
        __dirname,
        "../../../SWAG/config/bossConfig.json"
      );
      const swagBossConfig = JSON.parse(
        fs.readFileSync(swagBossConfigPath, "utf-8")
      );

      if (!swagBossConfig.CustomBosses.legion.enabled) {
        swagBossConfig.CustomBosses.legion.enabled = true;
      }

      if (swagBossConfig.CustomBosses.legion.useProgressSpawnChance) {
        swagBossConfig.CustomBosses.legion.customs = bossLegionChance;
        swagBossConfig.CustomBosses.legion.factory = bossLegionChance;
        swagBossConfig.CustomBosses.legion.factory_night = bossLegionChance;
        swagBossConfig.CustomBosses.legion.groundzero = bossLegionChance;
        swagBossConfig.CustomBosses.legion.interchange = bossLegionChance;
        swagBossConfig.CustomBosses.legion.laboratory = bossLegionChance;
        swagBossConfig.CustomBosses.legion.lighthouse = bossLegionChance;
        swagBossConfig.CustomBosses.legion.reserve = bossLegionChance;
        swagBossConfig.CustomBosses.legion.shoreline = bossLegionChance;
        swagBossConfig.CustomBosses.legion.streets = bossLegionChance;
        swagBossConfig.CustomBosses.legion.woods = bossLegionChance;

        this.modifySwagLegionSettings();
      }

      fs.writeFileSync(
        swagBossConfigPath,
        JSON.stringify(swagBossConfig, null, 2),
        "utf-8"
      );
    } catch (error) {
      logger.error(`[${logString}] Error adding Legion to SWAG:` + error);
    }
  }

  private static modifySwagLegionSettings() {
    const logString = "Boss Legion";

    let bossLegionChance = 15;

    const logger = container.resolve<ILogger>("WinstonLogger");
    const vfs = container.resolve<VFS>("VFS");
    const randomUtil = container.resolve<RandomUtil>("RandomUtil");
    const type = randomUtil
      .drawRandomFromList(botSettings.followers, 1)
      .toString();
    const bossDifficulty = randomUtil
      .drawRandomFromList(botSettings.difficulties, 1)
      .toString();
    const escortDifficulty = "impossible";
    const escortCount = randomUtil.randInt(1, 4).toString();
    const legionSpawnPath = path.join(
      __dirname,
      "../../config/LegionChance.json"
    );
    const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
    bossLegionChance = spawnChance?.legionChance ?? 15;

    try {
      const customSettings = {
        customs: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        factory: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: "2",
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        factory_night: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: "2",
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        groundzero: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        interchange: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        laboratory: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: "3",
            BossEscortType: type,
            BossDifficult: "impossible",
            BossEscortDifficult: "impossible",
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        lighthouse: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        reserve: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        shoreline: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        streets: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
        woods: [
          {
            BossChance: bossLegionChance,
            BossEscortAmount: escortCount,
            BossEscortType: type,
            BossDifficult: bossDifficulty,
            BossEscortDifficult: escortDifficulty,
            BossName: "bosslegion",
            BossZone: null,
            Time: -1,
          },
        ],
      };
      const customSettingsFile = JSON.stringify(customSettings, null, 2);
      vfs.writeFile(
        "./user/mods/SWAG/config/custom/legion.json",
        customSettingsFile
      );
    } catch (error) {
      logger.error(
        `[${logString}] Error modifying Legion patterns in SWAG:` + error
      );
    }
  }

  static modifySpawnChance(info: any, output: any) {
    let bossLegionChance = 15;

    const legionSpawnPath = path.join(
      __dirname,
      "../../config/LegionChance.json"
    );
    const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
    const pmcData: IPmcData = info.profile;
    const victimRoles = pmcData.Stats.Eft.Victims?.map((victim) =>
      victim.Role.toLowerCase()
    );
    const aggressorName = pmcData.Stats.Eft.Aggressor?.Name?.toLowerCase();
    bossLegionChance = spawnChance?.legionChance ?? 15;

    if (victimRoles?.includes("bosslegion")) {
      bossLegionChance = 10;
    }

    if (aggressorName === "legion") {
      bossLegionChance /= 2;
    }

    if (info.exit === "survived") {
      bossLegionChance += 1.5;
    }

    if (info.exit === "runner") {
      bossLegionChance += 3;
    }

    if (info.exit === "Left") {
      bossLegionChance += 0.5;
    }

    if (info.exit === "killed") {
      bossLegionChance += 1;
    }

    if (bossLegionChance > 100) {
      bossLegionChance = 100;
    }

    if (bossLegionChance < 1) {
      bossLegionChance = 1;
    }

    spawnChance.legionChance = bossLegionChance;

    fs.writeFileSync(
      legionSpawnPath,
      JSON.stringify(spawnChance, null, 2),
      "utf-8"
    );

    return output;
  }
}
