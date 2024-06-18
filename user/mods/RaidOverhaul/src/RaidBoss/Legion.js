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
exports.LegionData = void 0;
const tsyringe_1 = require("C:/snapshot/project/node_modules/tsyringe");
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const modConfig = __importStar(require("../../config/config.json"));
const botSettings = __importStar(require("../Refs/ArrayFiles/botInfo.json"));
const bosslegion = __importStar(require("../../db/RaidBoss/bosslegion.json"));
const bosslegion2 = __importStar(require("../../db/RaidBoss/bosslegion2.json"));
const path = __importStar(require("path"));
const fs = require("fs");
class LegionData {
    constructor() { }
    static LoadBossData() {
        const logger = tsyringe_1.container.resolve("WinstonLogger");
        const logString = "Boss Legion";
        const tables = tsyringe_1.container
            .resolve("DatabaseServer")
            .getTables();
        const randomUtil = tsyringe_1.container.resolve("RandomUtil");
        const jsonUtil = tsyringe_1.container.resolve("JsonUtil");
        const configServer = tsyringe_1.container.resolve("ConfigServer");
        const botConfig = configServer.getConfig(ConfigTypes_1.ConfigTypes.BOT);
        const preset = botConfig.presetBatch;
        const escortAmount = randomUtil.randInt(1, 4).toString();
        const diffType = randomUtil
            .drawRandomFromList(botSettings.difficulties, 1)
            .toString();
        const escortType = randomUtil
            .drawRandomFromList(botSettings.followers, 1)
            .toString();
        const legionSpawnPath = path.join(__dirname, "../../config/LegionChance.json");
        let bossLegionChance = 15;
        try {
            const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
            bossLegionChance = spawnChance?.legionChance ?? 15;
        }
        catch (error) {
            console.log("Can't find Legion spawn chance file. Make sure you have it in your config folder.");
        }
        if (modConfig.Debug.ExtraLogging) {
            logger.log(`[${logString}] Current spawn chance for Legion is [${bossLegionChance}]`, LogTextColor_1.LogTextColor.BLUE);
            logger.log(`[${logString}] Current Boss and Escort Difficulty is [${diffType}]`, LogTextColor_1.LogTextColor.BLUE);
            logger.log(`[${logString}] Current Escort type is [${escortType}]`, LogTextColor_1.LogTextColor.BLUE);
            logger.log(`[${logString}] Current number of Escorts is [${escortAmount}]`, LogTextColor_1.LogTextColor.BLUE);
        }
        let bossLegionSpawn = {
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
                tables.bots.types["bosslegion"] = jsonUtil.deserialize(jsonUtil.serialize(bosslegion));
            }
            catch (error) {
                logger.error(`[${logString}] Error loading default Legion files:` + error);
            }
        }
        if (!modConfig.EnableCustomItems) {
            try {
                tables.bots.types["bosslegion"] = jsonUtil.deserialize(jsonUtil.serialize(bosslegion2));
            }
            catch (error) {
                logger.error(`[${logString}] Error loading default Legion files:` + error);
            }
        }
        for (const location of Object.values(tables.locations)) {
            if (location.base) {
                const zonesString = location.base.Id === "factory4_night"
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
    static swagPatch() {
        let bossLegionChance = 15;
        const logger = tsyringe_1.container.resolve("WinstonLogger");
        const logString = "Boss Legion";
        const legionSpawnPath = path.join(__dirname, "../../config/LegionChance.json");
        const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
        bossLegionChance = spawnChance?.legionChance ?? 15;
        try {
            const swagBossConfigPath = path.join(__dirname, "../../../SWAG/config/bossConfig.json");
            const swagBossConfig = JSON.parse(fs.readFileSync(swagBossConfigPath, "utf-8"));
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
            fs.writeFileSync(swagBossConfigPath, JSON.stringify(swagBossConfig, null, 2), "utf-8");
        }
        catch (error) {
            logger.error(`[${logString}] Error adding Legion to SWAG:` + error);
        }
    }
    static modifySwagLegionSettings() {
        const logString = "Boss Legion";
        let bossLegionChance = 15;
        const logger = tsyringe_1.container.resolve("WinstonLogger");
        const vfs = tsyringe_1.container.resolve("VFS");
        const randomUtil = tsyringe_1.container.resolve("RandomUtil");
        const type = randomUtil
            .drawRandomFromList(botSettings.followers, 1)
            .toString();
        const bossDifficulty = randomUtil
            .drawRandomFromList(botSettings.difficulties, 1)
            .toString();
        const escortDifficulty = "impossible";
        const escortCount = randomUtil.randInt(1, 4).toString();
        const legionSpawnPath = path.join(__dirname, "../../config/LegionChance.json");
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
            vfs.writeFile("./user/mods/SWAG/config/custom/legion.json", customSettingsFile);
        }
        catch (error) {
            logger.error(`[${logString}] Error modifying Legion patterns in SWAG:` + error);
        }
    }
    static modifySpawnChance(info, output) {
        let bossLegionChance = 15;
        const legionSpawnPath = path.join(__dirname, "../../config/LegionChance.json");
        const spawnChance = JSON.parse(fs.readFileSync(legionSpawnPath, "utf8"));
        const pmcData = info.profile;
        const victimRoles = pmcData.Stats.Eft.Victims?.map((victim) => victim.Role.toLowerCase());
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
        fs.writeFileSync(legionSpawnPath, JSON.stringify(spawnChance, null, 2), "utf-8");
        return output;
    }
}
exports.LegionData = LegionData;
//# sourceMappingURL=Legion.js.map