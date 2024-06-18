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
exports.pushTraderFeatures = void 0;
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const baseJson = __importStar(require("../../db/base.json"));
const modConfig = __importStar(require("../../config/config.json"));
class pushTraderFeatures {
    utils;
    ref;
    traderData;
    constructor(utils, ref, traderData) {
        this.utils = utils;
        this.ref = ref;
        this.traderData = traderData;
    }
    pushExports(modPath) {
        const logString = "AssortMaker";
        const modName = "RaidOverhaul";
        //Add Req Shop to the game
        this.traderData.pushTrader();
        //Add Req Shop to Locales
        this.traderData.addTraderToLocales(this.ref.tables, baseJson.name, "Requisitions Office", baseJson.nickname, baseJson.location, "A collection of Ex-PMC's and rogue Scavs who formed a group to aid others in Tarkov. They routinely scour the battlefield for any leftover supplies and aren't afraid to fight their old comrades for it. They may not be the most trustworthy but they do have some much needed provisions in stock.");
        //Push each type of item to the assort
        this.traderData.createPlateFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createGearFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createMedsFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createWeaponFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createSpecFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createModsFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createAmmoFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.createItemsFluidAssort(modConfig.Debug.ExtraLogging);
        this.traderData.addReqSlips();
        this.traderData.addReqForms();
        this.traderData.addFlares();
        if (modConfig.EnableCustomItems) {
            this.traderData.addStaticItems(modConfig.Debug.ExtraLogging);
            this.traderData.addCustomPresets(modConfig.Debug.ExtraLogging);
            this.traderData.addAmmo();
        }
        for (var wepPresetCount = 0; wepPresetCount < this.ref.randomUtil.getInt(18, 37); wepPresetCount++)
            this.traderData.addWeaponPresets(wepPresetCount, modConfig.Debug.ExtraLogging);
        for (var gearPresetCount = 0; gearPresetCount < this.ref.randomUtil.getInt(15, 33); gearPresetCount++)
            this.traderData.addGearPresets(gearPresetCount, modConfig.Debug.ExtraLogging);
        //18, 34 and 12, 30
        if (modConfig.Debug.ExtraLogging) {
            this.ref.logger.log(`[${logString}] ${wepPresetCount} total weapon presets have been added`, LogTextColor_1.LogTextColor.GREEN);
            this.ref.logger.log(`[${logString}] ${gearPresetCount} total gear presets have been added`, LogTextColor_1.LogTextColor.GREEN);
        }
        //Add custom quests
        this.utils.addQuests(this.ref.tables, this.ref.imageRouter, modPath, modName, modConfig.Debug.ExtraLogging);
    }
}
exports.pushTraderFeatures = pushTraderFeatures;
//# sourceMappingURL=TraderPushes.js.map