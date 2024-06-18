"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const Traders_1 = require("C:/snapshot/project/obj/models/enums/Traders");
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const References_1 = require("./Refs/References");
const Utils_1 = require("./Refs/Utils");
const Legion_1 = require("./RaidBoss/Legion");
const ReqShop_1 = require("./Trader/ReqShop");
const baseFeatures_1 = require("./BaseFeatures/baseFeatures");
const ItemGenerator_1 = require("./CustomItems/ItemGenerator");
const TraderPushes_1 = require("./Trader/TraderPushes");
const modConfig = __importStar(require("../config/config.json"));
const EventWeightingsConfig = __importStar(require("../config/EventWeightings.json"));
const baseJson = __importStar(require("../db/base.json"));
const path = __importStar(require("path"));
const fs = require("fs");
class RaidOverhaul {
    modName;
    profilePath;
    modPath = path.normalize(path.join(__dirname, ".."));
    static container;
    imageRouter;
    ref = new References_1.References();
    utils = new Utils_1.Utils(this.ref);
    static pluginDepCheck() {
        const pluginRO = "raidoverhaul.dll";
        try {
            const pluginPath = fs
                .readdirSync("./BepInEx/plugins/RaidOverhaul")
                .map((plugin) => plugin.toLowerCase());
            return pluginPath.includes(pluginRO);
        }
        catch {
            return false;
        }
    }
    static preloaderDepCheck() {
        const prePatchLegion = "legionprepatch.dll";
        try {
            const pluginPath = fs
                .readdirSync("./BepInEx/patchers")
                .map((plugin) => plugin.toLowerCase());
            return pluginPath.includes(prePatchLegion);
        }
        catch {
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
    preAkiLoad(container) {
        this.ref.preAkiLoad(container, "RaidOverhaul");
        const ragfair = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        const traderConfig = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        const traderData = new ReqShop_1.TraderData(traderConfig, this.ref, this.utils);
        const staticRouterModService = container.resolve("StaticRouterModService");
        const dynamicRouterModService = container.resolve("DynamicRouterModService");
        if (modConfig.RemoveFromSwag) {
            return;
        }
        traderData.registerProfileImage();
        traderData.setupTraderUpdateTime();
        Traders_1.Traders["Requisitions"] = "Requisitions";
        ragfair.traders[baseJson._id] = true;
        staticRouterModService.registerStaticRouter(`${this.modName}-/client/game/start`, [
            {
                url: "/client/game/start",
                action: (url, info, sessionID, output) => {
                    const profileInfo = this.ref.profileHelper.getFullProfile(sessionID);
                    if (modConfig.BackupProfile) {
                        this.utils.profileBackup(this.modName, sessionID, path, profileInfo, this.ref.randomUtil);
                    }
                    return output;
                },
            },
        ], "aki");
        staticRouterModService.registerStaticRouter("GetEventWeightings", [
            {
                url: "/RaidOverhaul/GetEventWeightings",
                action: (url, info, sessionId, output) => {
                    const EventWeightings = EventWeightingsConfig;
                    return JSON.stringify(EventWeightings);
                },
            },
        ], "");
        if (modConfig.Debug.ExtraLogging) {
            dynamicRouterModService.registerDynamicRouter(`DynamicReportError${this.modName}`, [
                {
                    url: "/RaidOverhaul/LogToServer/",
                    action: (url) => {
                        const urlParts = url.split("/");
                        const clientMessage = urlParts[urlParts.length - 1];
                        const regex = /%20/g;
                        this.utils.logToServer(clientMessage.replace(regex, " "), this.ref.logger);
                        return JSON.stringify({ resp: "OK" });
                    },
                },
            ], "LogToServer");
        }
        staticRouterModService.registerStaticRouter(`${this.modName}:RaidSaved`, [
            {
                url: "/raid/profile/save",
                action: (url, info, sessionId, output) => {
                    ReqShop_1.TraderData.traderRepLogic(info, sessionId, this.ref.traderHelper);
                    ReqShop_1.TraderData.legionRepLogic(info, sessionId, this.ref.traderHelper);
                    Legion_1.LegionData.modifySpawnChance(info, output);
                    Legion_1.LegionData.LoadBossData();
                    if (this.ref.preAkiModLoader.getImportedModsNames().includes("SWAG")) {
                        Legion_1.LegionData.swagPatch();
                    }
                    return output;
                },
            },
        ], "aki");
        if (this.ref.preAkiModLoader.getImportedModsNames().includes("SWAG")) {
            Legion_1.LegionData.swagPatch();
            this.ref.logger.log("[RaidOverhaul] SWAG detected, modifying Legion patterns.", LogTextColor_1.LogTextColor.MAGENTA);
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
    postDBLoad(container) {
        this.ref.postDBLoad(container);
        const traderConfig = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.TRADER);
        //Imports
        const traderData = new ReqShop_1.TraderData(traderConfig, this.ref, this.utils);
        const modFeatures = new baseFeatures_1.Base(this.utils, this.ref);
        const itemGenerator = new ItemGenerator_1.ItemGenerator(this.utils, this.ref);
        const traderFeatures = new TraderPushes_1.pushTraderFeatures(this.utils, this.ref, traderData);
        //For new items
        const modPath = path.resolve(__dirname.toString()).split(path.sep).join("/") + "/";
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
        const randomMessage = messageArray[Math.floor(Math.random() * messageArray.length)];
        if (modConfig.RemoveFromSwag) {
            const swagBossConfigPath = path.join(__dirname, "../../SWAG/config/bossConfig.json");
            const swagBossConfig = JSON.parse(fs.readFileSync(swagBossConfigPath, "utf-8"));
            swagBossConfig.CustomBosses.legion.enabled = false;
            fs.writeFileSync(swagBossConfigPath, JSON.stringify(swagBossConfig, null, 2), "utf-8");
            return this.ref.logger.error(`[${this.modName}] Removing Legion from Swag config. Ready to uninstall.`);
        }
        if (!RaidOverhaul.pluginDepCheck()) {
            return this.ref.logger.error(`[${this.modName}] Error, client portion of Raid Overhaul is missing from BepInEx/plugins folder.\nPlease install correctly.`);
        }
        if (!RaidOverhaul.preloaderDepCheck()) {
            return this.ref.logger.error(`[${this.modName}] Error, Legion Boss Preloader is missing from BepInEx/patchers folder.\nPlease install correctly.`);
        }
        //Load all custom items
        if (modConfig.EnableCustomItems) {
            if (this.ref.preAkiModLoader.getImportedModsNames().includes("SPT-Realism")) {
                itemGenerator.createRealismAmmo();
                this.ref.logger.log("[RaidOverhaul] Realism detected, modifying custom ammunition.", LogTextColor_1.LogTextColor.MAGENTA);
            }
            if (!this.ref.preAkiModLoader.getImportedModsNames().includes("SPT-Realism")) {
                itemGenerator.createAmmo();
            }
            itemGenerator.createGear();
            itemGenerator.createWeapons();
        }
        itemGenerator.createConstItems();
        // Load custom boss data
        Legion_1.LegionData.LoadBossData();
        // Load Trader Data
        traderFeatures.pushExports(modPath);
        //Push all of the mods base features
        modFeatures.pushModFeatures();
        this.ref.logger.log(`[${this.modName}] has finished modifying your raids. ${randomMessage}.`, LogTextColor_1.LogTextColor.CYAN);
    }
}
//      \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/     \('_')/
module.exports = { mod: new RaidOverhaul() };
//# sourceMappingURL=mod.js.map