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
exports.AssortUtils = exports.TraderUtils = exports.Utils = void 0;
const LogTextColor_1 = require("C:/snapshot/project/obj/models/spt/logging/LogTextColor");
const ConfigTypes_1 = require("C:/snapshot/project/obj/models/enums/ConfigTypes");
const Enums_1 = require("../Refs/Enums");
const baseJson = __importStar(require("../../db/base.json"));
const path = __importStar(require("path"));
const fs = require("fs");
class Utils {
    ref;
    //#region ID Maps
    oldIdMap = [
        "Banshee",
        "Rhino",
        "KnightMask",
        "RPatrolBackpack",
        "RDragonEgg",
        "RSAT1",
        "OspreyArmless",
        "nicecommRO",
        "DeadArmband",
        "WaistPouch",
        "Alpha",
        "Beta",
        "Gamma",
        "Epsilon",
        "Kappa",
        "Aug762a",
        "Aug30Maga",
        "Aug42Maga",
        "MCM4",
        "MCM457",
        "MCM4300",
        "MCM4545",
        "MCM4762",
        "MCM4939",
        "MCM457Mag",
        "MCM4300Mag",
        "MCM4545Mag",
        "MCM4762Mag",
        "MCM4939Mag",
        "STM46",
        "STM46Mag",
        "STM46Drum",
        "STM46Rec",
        "Judge",
        "JudgeReceiver",
        "JudgeMag",
        "JudgeExtMag",
        "JudgeDrum",
        "Jury",
        "JuryMag",
        "JuryExtMag",
        "JuryDrum",
        "JuryReceiver",
        "Executioner",
        "ExecutionerOutdoorMag",
        "ExecutionerMagAICS",
        "ExecutionerMagPmag",
    ];
    newIdMap = {
        Banshee: "6621b1e0bd80eeb4de0c9ed8",
        Rhino: "6621b1f22310f5ff09476360",
        KnightMask: "6621b200cb248c192d90e324",
        RPatrolBackpack: "6621b2308e3a3a8692dfc142",
        RDragonEgg: "6621b246182282d29d2e5cb6",
        RSAT1: "6621b259bd90c86283283b4c",
        OspreyArmless: "6621b274485df00e750df4f2",
        nicecommRO: "6621b28d9411498998d408c3",
        DeadArmband: "6621b0dcbcfe66cdbbab48c7",
        WaistPouch: "6621b12c9f46c3eb4a0c8f40",
        Alpha: "6621b143edb81061ceb5d7cc",
        Beta: "6621b177ce1b117550362db5",
        Gamma: "6621b1895c9cd0794d536d14",
        Epsilon: "6621b1986f4ebd47e39eacb5",
        Kappa: "6621b1b3166c301c04facfc8",
        Aug762a: "6628f2e31084cf4d62b2b40b",
        Aug30Maga: "6628f31d2e4dbf64427b378d",
        Aug42Maga: "6628f33d585102d8bc5d75db",
        MCM4: "6628f50c78434b5effe5ced1",
        MCM457: "6628f534d238d16e71d27601",
        MCM4300: "6628f529b9886fa300b47de7",
        MCM4545: "6628f52f246a7106c3c3dd22",
        MCM4762: "6628f531ae7642ade7384366",
        MCM4939: "6628f52b821b61722b245c10",
        MCM457Mag: "6628f5244c3764ecf474f23c",
        MCM4300Mag: "6628f511ea0ab10dd0c5e2d4",
        MCM4545Mag: "6628f51c8df290deed8983e9",
        MCM4762Mag: "6628f51e54b4f59a7ade4ef9",
        MCM4939Mag: "6628f5191c445ab1b8b8cdf5",
        STM46: "6628f3786c4f8a10a65adee4",
        STM46Mag: "6628f38262cab98c01ffada1",
        STM46Drum: "6628f38835c496a91efdef37",
        STM46Rec: "6628f37eb50e789115223da9",
        Judge: "6628f76df1a913e3afc16360",
        JudgeReceiver: "6628f7705124be8295a0bdd9",
        JudgeMag: "6628f77390fd0c39ebfa1125",
        JudgeExtMag: "6628f7750e470be83e65dc76",
        JudgeDrum: "6628f7786fbce2d268af4913",
        Jury: "6628f8813e3fe94f5f035010",
        JuryMag: "6628f887f6ec08df7b7dc336",
        JuryExtMag: "6628f88aaa160dcd09a782e7",
        JuryDrum: "6628f88df6034dfe1933f636",
        JuryReceiver: "6628f885b95f6ae9d977162f",
        Executioner: "6628f96fd59ab54dedb55801",
        ExecutionerOutdoorMag: "6628f973b21453a8afc0db68",
        ExecutionerMagAICS: "6628f977030da8d4c028f5c7",
        ExecutionerMagPmag: "6628f979c3da61a625d97d69",
    };
    //#endregion
    constructor(ref) {
        this.ref = ref;
    }
    //#region Base Utils
    randomCount(base, random) {
        return base + Math.floor(Math.random() * random * 2) - random;
    }
    loadFiles(dirPath, extName, cb) {
        if (!fs.existsSync(dirPath))
            return;
        const dir = fs.readdirSync(dirPath, { withFileTypes: true });
        dir.forEach((item) => {
            const itemPath = path.normalize(`${dirPath}/${item.name}`);
            if (item.isDirectory())
                this.loadFiles(itemPath, extName, cb);
            else if (extName.includes(path.extname(item.name)))
                cb(itemPath);
        });
    }
    addQuests(tables, imagerouter, modPath, modName, debugLogging) {
        let questCount = 0;
        let imageCount = 0;
        this.loadFiles(`${modPath}../db/questFiles/quests/`, [".json"], function (filepath) {
            const keys = require(filepath);
            for (const i in keys) {
                tables.templates.quests[i] = keys[i];
                questCount++;
            }
        });
        this.loadFiles(`${modPath}../db/questFiles/locales/`, [".json"], function (localepath) {
            const Locales = require(localepath);
            for (const i in Locales) {
                for (const localeID in tables.locales.global) {
                    tables.locales.global[localeID][i] = Locales[i];
                }
            }
        });
        this.loadFiles(`${modPath}../db/questFiles/pics/`, [".png", ".jpg"], function (filepath) {
            imagerouter.addRoute(`/files/quest/icon/${path.basename(filepath, path.extname(filepath))}`, filepath);
            imageCount++;
        });
        if (debugLogging) {
            this.ref.logger.log(`[${modName}] Loaded ${imageCount} custom images and ${questCount} custom quests.`, "cyan");
        }
    }
    shuffle(array) {
        return array.sort(() => Math.random() - 0.5);
    }
    shufflePop(array) {
        return this.shuffle(array).pop().toString();
    }
    shuffleShift(array) {
        return this.shuffle(array).shift().toString();
    }
    shufflePullTwo(array) {
        return (this.shuffle(array).pop().toString() &&
            this.shuffle(array).shift().toString());
    }
    logToServer(message, logger) {
        logger.log("[Raid Overhaul] " + message, LogTextColor_1.LogTextColor.CYAN);
    }
    profileBackup(modName, sessionID, path, profile, randomUtil) {
        const backupPath = path.join(__dirname, "../../ProfileBackup/");
        const profileData = JSON.stringify(profile, null, 4);
        const randomNum = randomUtil.randInt(1, 20).toString();
        const date = new Date();
        const day = date.toISOString().slice(0, 10);
        const backupName = backupPath +
            sessionID +
            "_" +
            "RO" +
            "_" +
            day +
            "_" +
            randomNum +
            "-backup.json";
        const profileCount = this.ref.vfs
            .getFilesOfType(backupPath, "json")
            .sort((a, b) => fs.statSync(a).ctimeMs - fs.statSync(b).ctimeMs);
        const maxBackups = 3;
        if (!this.ref.vfs.exists(backupPath)) {
            this.ref.logger.log(`${modName}: "${backupPath}" has been created`, LogTextColor_1.LogTextColor.MAGENTA);
            this.ref.vfs.createDir(backupPath);
        }
        if (profileCount.length >= maxBackups) {
            const lastProfile = profileCount[0];
            this.ref.vfs.removeFile(lastProfile);
            profileCount.splice(0, 1);
        }
        fs.writeFile(backupName, profileData, { encoding: "utf8", flag: "w", mode: 0o666 }, (err) => {
            if (err)
                console.log(`[${modName}] Error Backing Up Profile;` + err);
            else {
                this.ref.logger.log(`[${modName}] Profile backup successful.`, LogTextColor_1.LogTextColor.MAGENTA);
            }
        });
    }
    getItemInHandbook(itemID) {
        try {
            const hbItem = this.ref.tables.templates.handbook.Items.find((i) => i.Id === itemID);
            return hbItem.Price;
        }
        catch (error) {
            this.ref.logger.warning(`\nError getting Handbook ID for ${itemID}`);
        }
    }
    getFleaPrice(itemID) {
        if (typeof this.ref.tables.templates.prices[itemID] != "undefined") {
            return this.ref.tables.templates.prices[itemID];
        }
        else {
            return this.getItemInHandbook(itemID);
        }
    }
    getFormCost(itemID) {
        return Math.ceil(this.getFleaPrice(itemID) / this.getFleaPrice("66292e79a4d9da25e683ab55"));
    }
    getReqCost(itemID) {
        return Math.ceil(this.getFleaPrice(itemID) / this.getFleaPrice("RequisitionSlips"));
    }
    buildBaseAssort(ItemID, assortUtils, StockCount, LoyaltyLevelToPush, tables) {
        if (Math.round(this.getFleaPrice(ItemID)) <= 49999) {
            assortUtils.createBarterOffer(ItemID, StockCount, LoyaltyLevelToPush, Enums_1.Currency.ReqForms, this.getFormCost(ItemID), tables);
        }
        else {
            assortUtils.createSingleOffer(ItemID, StockCount, LoyaltyLevelToPush, this.getReqCost(ItemID), tables);
        }
    }
    getPresetFormCost(PresetID) {
        return Math.round(this.ref.ragfairPriceService.getFleaPriceForOfferItems(PresetID) /
            this.getFleaPrice("66292e79a4d9da25e683ab55"));
    }
    getPresetReqCost(PresetID) {
        return Math.ceil(this.ref.ragfairPriceService.getFleaPriceForOfferItems(PresetID) /
            this.getFleaPrice("RequisitionSlips"));
    }
    buildPresetAssort(PresetID, assortUtils, ArrayToPull, ItemKeys, StockCount, LoyaltyLevelToPush, tables, logstring, presetName) {
        const presetPrice = Math.round(this.ref.ragfairPriceService.getFleaPriceForOfferItems(PresetID));
        const slipCost = Math.round(presetPrice / this.getFleaPrice("RequisitionSlips"));
        const formCost = Math.ceil(presetPrice / this.getFleaPrice("66292e79a4d9da25e683ab55"));
        try {
            if (presetPrice <= 0 || presetPrice == undefined) {
                assortUtils.createComplexOffer(ArrayToPull, ItemKeys, StockCount, LoyaltyLevelToPush, this.ref.randomUtil.randInt(1, 10), tables);
            }
            else if (presetPrice <= 49999) {
                assortUtils.createComplexFormOffer(ArrayToPull, ItemKeys, StockCount, LoyaltyLevelToPush, formCost, tables);
            }
            else if (presetPrice >= 50000) {
                assortUtils.createComplexOffer(ArrayToPull, ItemKeys, StockCount, LoyaltyLevelToPush, slipCost, tables);
            }
        }
        catch (error) {
            this.ref.logger.log(`[${logstring}] Error loading ${presetName} => ${error}, skipping preset.`, LogTextColor_1.LogTextColor.RED);
        }
    }
    getItemName(itemID, locale = "en") {
        if (this.ref.tables.locales.global[locale][`${itemID} Name`] != undefined) {
            return this.ref.tables.locales.global[locale][`${itemID} Name`];
        }
        else {
            return this.ref.tables.templates.items[itemID]?._name;
        }
    }
    fixOldROIds() {
        // On game start, see if we need to fix issues from previous versions
        // Note: We do this as a method replacement so we can run _before_ SPT's gameStart
        this.ref.container.afterResolution("GameController", (_, result) => {
            const originalGameStart = result.gameStart;
            result.gameStart = (url, info, sessionID, startTimeStampMS) => {
                // If there's a profile ID passed in, call our fixer method
                if (sessionID) {
                    this.fixProfileRO(sessionID);
                }
                // Call the original
                originalGameStart.apply(result, [
                    url,
                    info,
                    sessionID,
                    startTimeStampMS,
                ]);
            };
        });
    }
    // Handle updating the user profile between versions:
    // - Update the container IDs to the new MongoID format
    // - Look for any key cases in the user's inventory, and properly update the child key locations if we've moved them
    fixProfileRO(sessionId) {
        const modName = "RaidOverhaul";
        const items = this.ref.tables.templates.items;
        const pmcProfile = this.ref.profileHelper.getFullProfile(sessionId)?.characters?.pmc;
        // Do nothing if the profile isn't initialized
        if (!pmcProfile?.Inventory?.items)
            return;
        // Update the container IDs to the new MongoID format
        for (const item of pmcProfile.Inventory.items) {
            if (this.newIdMap[item._tpl]) {
                item._tpl = this.newIdMap[item._tpl];
            }
        }
        // Backup the PMC inventory
        const pmcInventory = structuredClone(pmcProfile.Inventory.items);
        // Look for any key cases in the user's inventory, and properly update the child key locations if we've moved them
        for (const oldCaseId of this.oldIdMap) {
            if (this.newIdMap[oldCaseId]) {
                const newCaseId = this.newIdMap[oldCaseId];
                // Get the template for the case
                const caseTemplate = items[newCaseId];
                // Try to find the case in the user's profile
                const inventoryCases = pmcProfile.Inventory.items.filter((x) => x._tpl === oldCaseId);
                for (const inventoryCase of inventoryCases) {
                    const caseChildren = pmcProfile.Inventory.items.filter((x) => x.parentId === inventoryCase._id);
                    for (const child of caseChildren) {
                        const newSlot = caseTemplate._props?.Slots?.find((x) => x._props?.filters[0]?.Filter[0] === child._tpl);
                        // If we couldn't find a new slot for this key, something has gone horribly wrong, restore the inventory and exit
                        if (!newSlot) {
                            this.ref.logger.error(`[${modName}] : ERROR: Unable to find new slot for ${child._tpl}. Restoring inventory and exiting`);
                            pmcProfile.Inventory.items = pmcInventory;
                            return;
                        }
                        if (newSlot._name !== child.slotId) {
                            this.ref.logger.debug(`[${modName}] : Need to move ${child.slotId} to ${newSlot._name}`);
                            child.slotId = newSlot._name;
                        }
                    }
                }
            }
        }
    }
    //#endregion
    //
    //
    //
    //#region Item Gen
    createItem(itemGen) {
        const newItemGen = itemGen.newItem;
        const newItem = {
            itemTplToClone: newItemGen.ItemToClone,
            overrideProperties: newItemGen.OverrideProperties,
            parentId: newItemGen.parentID,
            newId: newItemGen.newID,
            handbookParentId: newItemGen.HandbookParent,
            handbookPriceRoubles: newItemGen.HandbookPrice,
            fleaPriceRoubles: newItemGen.HandbookPrice,
            locales: {
                en: {
                    name: newItemGen.LocalePush.en.name,
                    shortName: newItemGen.LocalePush.en.shortName,
                    description: newItemGen.LocalePush.en.description,
                },
            },
        };
        this.ref.customItem.createItemFromClone(newItem);
        if (newItemGen.CloneToFilters) {
            this.updateFilters(newItemGen.newID, newItemGen.ItemToClone);
        }
        if (newItemGen.PushMastery) {
            this.addNewMastery(newItemGen.LocalePush.en.name, newItemGen.newID);
        }
        if (newItemGen.AddToBots) {
            this.addToBots(newItemGen.BotLootItemToClone, newItemGen.newID);
        }
        if (newItemGen.QuestPush?.AddToQuests) {
            this.addToQuests(this.ref.tables.templates.quests, newItemGen.QuestPush.QuestConditionType, newItemGen.QuestPush.QuestTargetConditionToClone, newItemGen.newID);
        }
        if (newItemGen.LootPush?.AddToStaticLoot) {
            this.addToStaticLoot(newItemGen.LootPush.LootContainersToAdd, newItemGen.newID, newItemGen.LootPush.StaticLootProbability);
        }
        if (newItemGen.AddToCases) {
            this.addToCases(newItemGen.CasesToPush, newItemGen.newID);
        }
        if (newItemGen.PushToFleaBlacklist) {
            this.pushToBlacklist(newItemGen.newID);
        }
        if (newItemGen.SlotInfo?.AddToSlot) {
            this.pushToSlots(newItemGen.newID, newItemGen.SlotInfo.Slot);
        }
    }
    pushToSlots(itemToPush, slot) {
        const DefaultInventory = this.ref.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots;
        DefaultInventory[slot]._props.filters[0].Filter.push(itemToPush);
    }
    pushToBlacklist(itemToPush) {
        const ragfair = this.ref.configServer.getConfig(ConfigTypes_1.ConfigTypes.RAGFAIR);
        ragfair.dynamic.blacklist.custom.push(...[itemToPush]);
    }
    addNewMastery(localeMasteryName, masteryTemplateItemID) {
        const new_mastery_ro = {
            Name: localeMasteryName,
            Templates: [masteryTemplateItemID],
            Level2: 450,
            Level3: 900,
        };
        this.ref.tables.globals.config.Mastering.push(new_mastery_ro);
    }
    addToCases(casesToAdd, itemToAdd) {
        const items = this.ref.tables.templates.items;
        for (const cases of casesToAdd) {
            for (const item in items) {
                if (items[item]._id === cases) {
                    if (items[item]._props?.Grids[0]._props.filters[0].Filter === undefined) {
                        this.stopHurtingMeSVM(cases);
                    }
                    if (items[item]._props?.Grids[0]._props.filters[0].Filter !== undefined) {
                        items[item]._props?.Grids[0]._props.filters[0].Filter.push(itemToAdd);
                    }
                }
            }
        }
    }
    addToQuests(quests, condition, target, newTarget) {
        for (const quest of Object.keys(quests)) {
            const questConditions = quests[quest];
            for (const nextCondition of questConditions.conditions
                .AvailableForFinish) {
                const nextConditionData = nextCondition;
                if (nextConditionData.conditionType == condition &&
                    nextConditionData.target.includes(target)) {
                    nextConditionData.target.push(newTarget);
                }
            }
        }
    }
    addToBots(itemToClone, itemToPush) {
        for (const botId in this.ref.tables.bots.types) {
            const botType = Enums_1.BossAndFollow[botId];
            if (botType) {
                for (const lootSlot in this.ref.tables.bots.types[botId].inventory
                    .items) {
                    const items = this.ref.tables.bots.types[botId].inventory.items;
                    if (items[lootSlot][itemToClone] !== undefined) {
                        const weight = items[lootSlot][itemToClone];
                        items[lootSlot][itemToPush] = weight;
                    }
                }
            }
        }
    }
    updateFilters(newItemID, itemToClone) {
        for (const item in this.ref.tables.templates.items) {
            const itemConflictId = this.ref.tables.templates.items[item]._props.ConflictingItems;
            for (const itemInConflicts in itemConflictId) {
                const itemInConflictsFiltersId = itemConflictId[itemInConflicts];
                if (itemInConflictsFiltersId === itemToClone) {
                    itemConflictId.push(newItemID);
                }
            }
            for (const slots in this.ref.tables.templates.items[item]._props.Slots) {
                const slotsId = this.ref.tables.templates.items[item]._props.Slots[slots]._props
                    .filters[0].Filter;
                for (const itemInFilters in slotsId) {
                    const itemInFiltersId = slotsId[itemInFilters];
                    if (itemInFiltersId === itemToClone) {
                        slotsId.push(newItemID);
                    }
                }
            }
        }
    }
    addToStaticLoot(lootContainers, itemToPush, probability) {
        for (const lootContainer of lootContainers) {
            const lootToPush = {
                tpl: itemToPush,
                relativeProbability: probability,
            };
            this.ref.tables.loot.staticLoot[lootContainer].itemDistribution.push(lootToPush);
        }
    }
    stopHurtingMeSVM(caseToAdd) {
        const unbreakFilters = [
            {
                Filter: ["54009119af1c881c07000029"],
                ExcludedFilter: [""],
            },
        ];
        this.ref.tables.templates.items[caseToAdd]._props.Grids[0]._props.filters =
            unbreakFilters;
    }
    //#endregion
    //
    //
    //
    //#region Clothing Gen
    createClothingTop(clothingTopGen) {
        const newTop = this.ref.jsonUtil.clone(this.ref.tables.templates.customization["5d28adcb86f77429242fc893"]);
        const newHands = this.ref.jsonUtil.clone(this.ref.tables.templates.customization[clothingTopGen.HandsToClone]);
        const newSuite = this.ref.jsonUtil.clone(this.ref.tables.templates.customization["5d1f623e86f7744bce0ef705"]);
        newTop._id = clothingTopGen.NewOutfitID;
        newTop._name = clothingTopGen.NewOutfitID;
        newTop._props.Prefab.path = clothingTopGen.BundlePath;
        this.ref.tables.templates.customization[clothingTopGen.NewOutfitID] =
            newTop;
        newHands._id = `${clothingTopGen.NewOutfitID}Hands`;
        newHands._name = `${clothingTopGen.NewOutfitID}Hands`;
        newHands._props.Prefab.path = clothingTopGen.HandsBundlePath;
        this.ref.tables.templates.customization[`${clothingTopGen.NewOutfitID}Hands`] = newHands;
        newSuite._id = `${clothingTopGen.NewOutfitID}Suite`;
        newSuite._name = `${clothingTopGen.NewOutfitID}Suite`;
        newSuite._props.Body = clothingTopGen.NewOutfitID;
        newSuite._props.Hands = `${clothingTopGen.NewOutfitID}Hands`;
        newSuite._props.Side = ["Usec", "Bear", "Savage"];
        this.ref.tables.templates.customization[`${clothingTopGen.NewOutfitID}Suite`] = newSuite;
    }
    createClothingBottom(clothingBottomGen) {
        const newBottom = this.ref.jsonUtil.clone(this.ref.tables.templates.customization["5d5e7f4986f7746956659f8a"]);
        const newSuite = this.ref.jsonUtil.clone(this.ref.tables.templates.customization["5cd946231388ce000d572fe3"]);
        newBottom._id = clothingBottomGen.NewBottomsID;
        newBottom._name = clothingBottomGen.NewBottomsID;
        newBottom._props.Prefab.path = clothingBottomGen.BundlePath;
        this.ref.tables.templates.customization[clothingBottomGen.NewBottomsID] =
            newBottom;
        newSuite._id = `${clothingBottomGen.NewBottomsID}Suite`;
        newSuite._name = `${clothingBottomGen.NewBottomsID}Suite`;
        newSuite._props.Feet = clothingBottomGen.NewBottomsID;
        newSuite._props.Side = ["Usec", "Bear", "Savage"];
        this.ref.tables.templates.customization[`${clothingBottomGen.NewBottomsID}Suite`] = newSuite;
    }
}
exports.Utils = Utils;
class TraderUtils {
    //#region Trader Base Utils
    registerProfileImage(baseJson, modName, preAkiModLoader, imageRouter, traderImageName) {
        const imageFilepath = `./${preAkiModLoader.getModPath(modName)}res`;
        imageRouter.addRoute(baseJson.avatar.replace(".jpg", ""), `${imageFilepath}/${traderImageName}`);
    }
    setTraderUpdateTime(traderConfig, baseJson, minSeconds, maxSeconds) {
        const traderRefreshRecord = {
            traderId: baseJson._id,
            seconds: {
                min: minSeconds,
                max: maxSeconds,
            },
        };
        traderConfig.updateTime.push(traderRefreshRecord);
    }
    addTraderToDb(traderDetailsToAdd, tables, jsonUtil, dialogueToAdd, servicesToAdd) {
        tables.traders[traderDetailsToAdd._id] = {
            assort: this.createAssortTable(),
            base: jsonUtil.deserialize(jsonUtil.serialize(traderDetailsToAdd)),
            dialogue: jsonUtil.deserialize(jsonUtil.serialize(dialogueToAdd)),
            services: jsonUtil.deserialize(jsonUtil.serialize(servicesToAdd)),
            questassort: {
                started: {},
                success: {},
                fail: {},
            },
        };
    }
    createAssortTable() {
        const assortTable = {
            nextResupply: 0,
            items: [],
            barter_scheme: {},
            loyal_level_items: {},
        };
        return assortTable;
    }
    addTraderToLocales(baseJson, tables, fullName, firstName, nickName, location, description) {
        const locales = Object.values(tables.locales.global);
        for (const locale of locales) {
            locale[`${baseJson._id} FullName`] = fullName;
            locale[`${baseJson._id} FirstName`] = firstName;
            locale[`${baseJson._id} Nickname`] = nickName;
            locale[`${baseJson._id} Location`] = location;
            locale[`${baseJson._id} Description`] = description;
        }
    }
}
exports.TraderUtils = TraderUtils;
class AssortUtils {
    //#region AssortUtils
    itemsToSell = [];
    barterScheme = {};
    loyaltyLevel = {};
    hashUtil;
    logger;
    constructor(hashutil, logger) {
        this.hashUtil = hashutil;
        this.logger = logger;
    }
    /**
     * Start selling item with tpl
     * @param itemTpl Tpl id of the item you want trader to sell
     * @param itemId Optional - set your own Id, otherwise unique id will be generated
     */
    createSingleAssortItem(itemTpl, itemId = undefined) {
        // Create item ready for insertion into assort table
        const newItemToAdd = {
            _id: !itemId ? this.hashUtil.generate() : itemId,
            _tpl: itemTpl,
            parentId: "hideout", // Should always be "hideout"
            slotId: "hideout", // Should always be "hideout"
            upd: {
                UnlimitedCount: false,
                StackObjectsCount: 100,
            },
        };
        this.itemsToSell.push(newItemToAdd);
        return this;
    }
    createComplexAssortItem(items) {
        items[0].parentId = "hideout";
        items[0].slotId = "hideout";
        if (!items[0].upd) {
            items[0].upd = {};
        }
        items[0].upd.UnlimitedCount = false;
        items[0].upd.StackObjectsCount = 100;
        this.itemsToSell.push(...items);
        return this;
    }
    addStackCount(stackCount) {
        this.itemsToSell[0].upd.StackObjectsCount = stackCount;
        return this;
    }
    addUnlimitedStackCount() {
        this.itemsToSell[0].upd.StackObjectsCount = 999999;
        this.itemsToSell[0].upd.UnlimitedCount = true;
        return this;
    }
    makeStackCountUnlimited() {
        this.itemsToSell[0].upd.StackObjectsCount = 999999;
        return this;
    }
    addBuyRestriction(maxBuyLimit) {
        this.itemsToSell[0].upd.BuyRestrictionMax = maxBuyLimit;
        this.itemsToSell[0].upd.BuyRestrictionCurrent = 0;
        return this;
    }
    addLoyaltyLevel(level) {
        this.loyaltyLevel[this.itemsToSell[0]._id] = level;
        return this;
    }
    addMoneyCost(currencyType, amount) {
        this.barterScheme[this.itemsToSell[0]._id] = [
            [
                {
                    count: amount,
                    _tpl: currencyType,
                },
            ],
        ];
        return this;
    }
    addBarterCost(itemTpl, count) {
        const sellableItemId = this.itemsToSell[0]._id;
        // No data at all, create
        if (Object.keys(this.barterScheme).length === 0) {
            this.barterScheme[sellableItemId] = [
                [
                    {
                        count: count,
                        _tpl: itemTpl,
                    },
                ],
            ];
        }
        else {
            // Item already exists, add to
            const existingData = this.barterScheme[sellableItemId][0].find((x) => x._tpl === itemTpl);
            if (existingData) {
                // itemtpl already a barter for item, add to count
                existingData.count += count;
            }
            else {
                // No barter for item, add it fresh
                this.barterScheme[sellableItemId][0].push({
                    count: count,
                    _tpl: itemTpl,
                });
            }
        }
        return this;
    }
    /**
     * Reset object ready for reuse
     * @returns
     */
    export(data, blockDupes) {
        const itemBeingSoldId = this.itemsToSell[0]._id;
        const itemBeingSoldTpl = this.itemsToSell[0]._tpl;
        if (blockDupes) {
            if (data.assort.items.find((x) => x._id === itemBeingSoldId)) {
                return;
            }
            if (data.assort.items.find((x) => x._tpl === itemBeingSoldTpl)) {
                return;
            }
        }
        data.assort.items.push(...this.itemsToSell);
        data.assort.barter_scheme[itemBeingSoldId] =
            this.barterScheme[itemBeingSoldId];
        data.assort.loyal_level_items[itemBeingSoldId] =
            this.loyaltyLevel[itemBeingSoldId];
        this.itemsToSell = [];
        this.barterScheme = {};
        this.loyaltyLevel = {};
        return this;
    }
    pushFromTraderAssort(items, itemTpl, count, stackCount, level, data, blockDupes) {
        items[0].parentId = "hideout";
        items[0].slotId = "hideout";
        if (!items[0].upd) {
            items[0].upd = {};
        }
        items[0].upd.UnlimitedCount = false;
        items[0].upd.StackObjectsCount = 100;
        this.itemsToSell.push(...items);
        const sellableItemId = this.itemsToSell[0]._id;
        // No data at all, create
        if (Object.keys(this.barterScheme).length === 0) {
            this.barterScheme[sellableItemId] = [
                [
                    {
                        count: count,
                        _tpl: itemTpl,
                    },
                ],
            ];
        }
        else {
            // Item already exists, add to
            const existingData = this.barterScheme[sellableItemId][0].find((x) => x._tpl === itemTpl);
            if (existingData) {
                // itemtpl already a barter for item, add to count
                existingData.count += count;
            }
            else {
                // No barter for item, add it fresh
                this.barterScheme[sellableItemId][0].push({
                    count: count,
                    _tpl: itemTpl,
                });
            }
        }
        this.itemsToSell[0].upd.StackObjectsCount = stackCount;
        this.loyaltyLevel[this.itemsToSell[0]._id] = level;
        const itemBeingSoldId = this.itemsToSell[0]._id;
        const itemBeingSoldTpl = this.itemsToSell[0]._tpl;
        if (blockDupes) {
            if (data.assort.items.find((x) => x._id === itemBeingSoldId)) {
                return;
            }
            if (data.assort.items.find((x) => x._tpl === itemBeingSoldTpl)) {
                return;
            }
        }
        data.assort.items.push(...this.itemsToSell);
        data.assort.barter_scheme[itemBeingSoldId] =
            this.barterScheme[itemBeingSoldId];
        data.assort.loyal_level_items[itemBeingSoldId] =
            this.loyaltyLevel[itemBeingSoldId];
        this.itemsToSell = [];
        this.barterScheme = {};
        this.loyaltyLevel = {};
    }
    createSingleOffer(ItemToAdd, StockCount, LoyaltyLevelToPush, ReqCost, tables) {
        this.createSingleAssortItem(ItemToAdd)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .addBarterCost(Enums_1.Currency.ReqSlips, ReqCost)
            .export(tables.traders[baseJson._id], false);
    }
    createSingleCashOffer(ItemToAdd, StockCount, LoyaltyLevelToPush, CurrencyToUse, ReqCost, tables) {
        this.createSingleAssortItem(ItemToAdd)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .addMoneyCost(CurrencyToUse, ReqCost)
            .export(tables.traders[baseJson._id], false);
    }
    createBarterOffer(ItemToAdd, StockCount, LoyaltyLevelToPush, BarterToUse, ReqCost, tables) {
        this.createSingleAssortItem(ItemToAdd)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .addBarterCost(BarterToUse, ReqCost)
            .export(tables.traders[baseJson._id], false);
    }
    createComplexOffer(ArrayToPull, ItemKeys, StockCount, LoyaltyLevelToPush, ReqCost, tables) {
        this.createComplexAssortItem(ArrayToPull[ItemKeys]._items)
            .addMoneyCost(Enums_1.Currency.ReqSlips, ReqCost)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .export(tables.traders[baseJson._id], true);
    }
    createComplexFormOffer(ArrayToPull, ItemKeys, StockCount, LoyaltyLevelToPush, ReqCost, tables) {
        this.createComplexAssortItem(ArrayToPull[ItemKeys]._items)
            .addMoneyCost(Enums_1.Currency.ReqForms, ReqCost)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .export(tables.traders[baseJson._id], true);
    }
    createPresetFormOffer(PresetItem, StockCount, LoyaltyLevelToPush, ReqCost, tables) {
        this.createComplexAssortItem(PresetItem)
            .addMoneyCost(Enums_1.Currency.ReqForms, ReqCost)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .export(tables.traders[baseJson._id], true);
    }
    createPresetSlipOffer(PresetItem, StockCount, LoyaltyLevelToPush, ReqCost, tables) {
        this.createComplexAssortItem(PresetItem)
            .addMoneyCost(Enums_1.Currency.ReqSlips, ReqCost)
            .addStackCount(StockCount)
            .addLoyaltyLevel(LoyaltyLevelToPush)
            .export(tables.traders[baseJson._id], true);
    }
}
exports.AssortUtils = AssortUtils;
//#endregion
//# sourceMappingURL=Utils.js.map