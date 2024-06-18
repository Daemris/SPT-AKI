import { Item } from "@spt-aki/models/eft/common/tables/IItem";
import {
  IBarterScheme,
  ITrader,
} from "@spt-aki/models/eft/common/tables/ITrader";
import {
  ITraderBase,
  ITraderAssort,
} from "@spt-aki/models/eft/common/tables/ITrader";
import type { IEmptyRequestData } from "@spt-aki/models/eft/common/IEmptyRequestData";
import { Props } from "@spt-aki/models/eft/common/tables/ITemplateItem";
import { IAkiProfile } from "@spt-aki/models/eft/profile/IAkiProfile";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { NewItemFromCloneDetails } from "@spt-aki/models/spt/mod/NewItemDetails";
import {
  ITraderConfig,
  UpdateTime,
} from "@spt-aki/models/spt/config/ITraderConfig";
import { IRagfairConfig } from "@spt-aki/models/spt/config/IRagfairConfig";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";
import { HashUtil } from "@spt-aki/utils/HashUtil";
import { JsonUtil } from "@spt-aki/utils/JsonUtil";
import { ImageRouter } from "@spt-aki/routers/ImageRouter";
import { PreAkiModLoader } from "@spt-aki/loaders/PreAkiModLoader";
import type { GameController } from "@spt-aki/controllers/GameController";

import { Currency, BossAndFollow } from "../Refs/Enums";
import { References } from "../Refs/References";
import * as baseJson from "../../db/base.json";
import * as path from "path";

const fs = require("fs");

export class Utils {
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

  constructor(public ref: References) {}

  //#region Base Utils
  public randomCount(base: number, random: number): number {
    return base + Math.floor(Math.random() * random * 2) - random;
  }

  public loadFiles(dirPath, extName, cb): void {
    if (!fs.existsSync(dirPath)) return;
    const dir = fs.readdirSync(dirPath, { withFileTypes: true });
    dir.forEach((item) => {
      const itemPath = path.normalize(`${dirPath}/${item.name}`);
      if (item.isDirectory()) this.loadFiles(itemPath, extName, cb);
      else if (extName.includes(path.extname(item.name))) cb(itemPath);
    });
  }

  public addQuests(tables, imagerouter, modPath, modName, debugLogging): void {
    let questCount = 0;
    let imageCount = 0;

    this.loadFiles(
      `${modPath}../db/questFiles/quests/`,
      [".json"],
      function (filepath) {
        const keys = require(filepath);
        for (const i in keys) {
          tables.templates.quests[i] = keys[i];
          questCount++;
        }
      }
    );

    this.loadFiles(
      `${modPath}../db/questFiles/locales/`,
      [".json"],
      function (localepath) {
        const Locales = require(localepath);
        for (const i in Locales) {
          for (const localeID in tables.locales.global) {
            tables.locales.global[localeID][i] = Locales[i];
          }
        }
      }
    );

    this.loadFiles(
      `${modPath}../db/questFiles/pics/`,
      [".png", ".jpg"],
      function (filepath) {
        imagerouter.addRoute(
          `/files/quest/icon/${path.basename(
            filepath,
            path.extname(filepath)
          )}`,
          filepath
        );
        imageCount++;
      }
    );

    if (debugLogging) {
      this.ref.logger.log(
        `[${modName}] Loaded ${imageCount} custom images and ${questCount} custom quests.`,
        "cyan"
      );
    }
  }

  public shuffle(array: string[]): any {
    return array.sort(() => Math.random() - 0.5);
  }

  public shufflePop(array: string[]): any {
    return this.shuffle(array).pop().toString();
  }

  public shuffleShift(array: string[]): any {
    return this.shuffle(array).shift().toString();
  }

  public shufflePullTwo(array: string[]): any {
    return (
      this.shuffle(array).pop().toString() &&
      this.shuffle(array).shift().toString()
    );
  }

  public logToServer(message: string, logger: any): void {
    logger.log("[Raid Overhaul] " + message, LogTextColor.CYAN);
  }

  public profileBackup(
    modName,
    sessionID: string,
    path,
    profile: IAkiProfile,
    randomUtil
  ): void {
    const backupPath = path.join(__dirname, "../../ProfileBackup/");
    const profileData = JSON.stringify(profile, null, 4);
    const randomNum = randomUtil.randInt(1, 20).toString();
    const date = new Date();
    const day = date.toISOString().slice(0, 10);
    const backupName =
      backupPath +
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
      this.ref.logger.log(
        `${modName}: "${backupPath}" has been created`,
        LogTextColor.MAGENTA
      );
      this.ref.vfs.createDir(backupPath);
    }

    if (profileCount.length >= maxBackups) {
      const lastProfile = profileCount[0];
      this.ref.vfs.removeFile(lastProfile);
      profileCount.splice(0, 1);
    }

    fs.writeFile(
      backupName,
      profileData,
      { encoding: "utf8", flag: "w", mode: 0o666 },
      (err) => {
        if (err) console.log(`[${modName}] Error Backing Up Profile;` + err);
        else {
          this.ref.logger.log(
            `[${modName}] Profile backup successful.`,
            LogTextColor.MAGENTA
          );
        }
      }
    );
  }

  public getItemInHandbook(itemID: string): number {
    try {
      const hbItem = this.ref.tables.templates.handbook.Items.find(
        (i) => i.Id === itemID
      );
      return hbItem.Price;
    } catch (error) {
      this.ref.logger.warning(`\nError getting Handbook ID for ${itemID}`);
    }
  }

  public getFleaPrice(itemID: string): number {
    if (typeof this.ref.tables.templates.prices[itemID] != "undefined") {
      return this.ref.tables.templates.prices[itemID];
    } else {
      return this.getItemInHandbook(itemID);
    }
  }

  public getFormCost(itemID: string): number {
    return Math.ceil(
      this.getFleaPrice(itemID) / this.getFleaPrice("66292e79a4d9da25e683ab55")
    );
  }

  public getReqCost(itemID: string): number {
    return Math.ceil(
      this.getFleaPrice(itemID) / this.getFleaPrice("RequisitionSlips")
    );
  }

  public buildBaseAssort(
    ItemID: string,
    assortUtils: any,
    StockCount: number,
    LoyaltyLevelToPush: number,
    tables: any
  ) {
    if (Math.round(this.getFleaPrice(ItemID)) <= 49999) {
      assortUtils.createBarterOffer(
        ItemID,
        StockCount,
        LoyaltyLevelToPush,
        Currency.ReqForms,
        this.getFormCost(ItemID),
        tables
      );
    } else {
      assortUtils.createSingleOffer(
        ItemID,
        StockCount,
        LoyaltyLevelToPush,
        this.getReqCost(ItemID),
        tables
      );
    }
  }

  public getPresetFormCost(PresetID): number {
    return Math.round(
      this.ref.ragfairPriceService.getFleaPriceForOfferItems(PresetID) /
        this.getFleaPrice("66292e79a4d9da25e683ab55")
    );
  }

  public getPresetReqCost(PresetID): number {
    return Math.ceil(
      this.ref.ragfairPriceService.getFleaPriceForOfferItems(PresetID) /
        this.getFleaPrice("RequisitionSlips")
    );
  }

  public buildPresetAssort(
    PresetID,
    assortUtils: any,
    ArrayToPull: any,
    ItemKeys: string,
    StockCount: number,
    LoyaltyLevelToPush: number,
    tables: any,
    logstring: any,
    presetName: any
  ) {
    const presetPrice = Math.round(
      this.ref.ragfairPriceService.getFleaPriceForOfferItems(PresetID)
    );
    const slipCost = Math.round(
      presetPrice / this.getFleaPrice("RequisitionSlips")
    );
    const formCost = Math.ceil(
      presetPrice / this.getFleaPrice("66292e79a4d9da25e683ab55")
    );

    try {
      if (presetPrice <= 0 || presetPrice == undefined) {
        assortUtils.createComplexOffer(
          ArrayToPull,
          ItemKeys,
          StockCount,
          LoyaltyLevelToPush,
          this.ref.randomUtil.randInt(1, 10),
          tables
        );
      } else if (presetPrice <= 49999) {
        assortUtils.createComplexFormOffer(
          ArrayToPull,
          ItemKeys,
          StockCount,
          LoyaltyLevelToPush,
          formCost,
          tables
        );
      } else if (presetPrice >= 50000) {
        assortUtils.createComplexOffer(
          ArrayToPull,
          ItemKeys,
          StockCount,
          LoyaltyLevelToPush,
          slipCost,
          tables
        );
      }
    } catch (error) {
      this.ref.logger.log(
        `[${logstring}] Error loading ${presetName} => ${error}, skipping preset.`,
        LogTextColor.RED
      );
    }
  }

  public getItemName(itemID: string, locale = "en") {
    if (this.ref.tables.locales.global[locale][`${itemID} Name`] != undefined) {
      return this.ref.tables.locales.global[locale][`${itemID} Name`];
    } else {
      return this.ref.tables.templates.items[itemID]?._name;
    }
  }

  public fixOldROIds(): void {
    // On game start, see if we need to fix issues from previous versions
    // Note: We do this as a method replacement so we can run _before_ SPT's gameStart
    this.ref.container.afterResolution(
      "GameController",
      (_, result: GameController) => {
        const originalGameStart = result.gameStart;

        result.gameStart = (
          url: string,
          info: IEmptyRequestData,
          sessionID: string,
          startTimeStampMS: number
        ) => {
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
      }
    );
  }

  // Handle updating the user profile between versions:
  // - Update the container IDs to the new MongoID format
  // - Look for any key cases in the user's inventory, and properly update the child key locations if we've moved them
  public fixProfileRO(sessionId: string) {
    const modName = "RaidOverhaul";
    const items = this.ref.tables.templates.items;
    const pmcProfile =
      this.ref.profileHelper.getFullProfile(sessionId)?.characters?.pmc;

    // Do nothing if the profile isn't initialized
    if (!pmcProfile?.Inventory?.items) return;

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
        const inventoryCases = pmcProfile.Inventory.items.filter(
          (x) => x._tpl === oldCaseId
        );

        for (const inventoryCase of inventoryCases) {
          const caseChildren = pmcProfile.Inventory.items.filter(
            (x) => x.parentId === inventoryCase._id
          );

          for (const child of caseChildren) {
            const newSlot = caseTemplate._props?.Slots?.find(
              (x) => x._props?.filters[0]?.Filter[0] === child._tpl
            );

            // If we couldn't find a new slot for this key, something has gone horribly wrong, restore the inventory and exit
            if (!newSlot) {
              this.ref.logger.error(
                `[${modName}] : ERROR: Unable to find new slot for ${child._tpl}. Restoring inventory and exiting`
              );
              pmcProfile.Inventory.items = pmcInventory;
              return;
            }

            if (newSlot._name !== child.slotId) {
              this.ref.logger.debug(
                `[${modName}] : Need to move ${child.slotId} to ${newSlot._name}`
              );
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
  public createItem(itemGen: ItemGeneratorSettings): void {
    const newItemGen = itemGen.newItem;

    const newItem: NewItemFromCloneDetails = {
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
      this.addToQuests(
        this.ref.tables.templates.quests,
        newItemGen.QuestPush.QuestConditionType,
        newItemGen.QuestPush.QuestTargetConditionToClone,
        newItemGen.newID
      );
    }

    if (newItemGen.LootPush?.AddToStaticLoot) {
      this.addToStaticLoot(
        newItemGen.LootPush.LootContainersToAdd,
        newItemGen.newID,
        newItemGen.LootPush.StaticLootProbability
      );
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

  private pushToSlots(itemToPush: string, slot): void {
    const DefaultInventory =
      this.ref.tables.templates.items["55d7217a4bdc2d86028b456d"]._props.Slots;
    DefaultInventory[slot]._props.filters[0].Filter.push(itemToPush);
  }

  private pushToBlacklist(itemToPush: string): void {
    const ragfair = this.ref.configServer.getConfig<IRagfairConfig>(
      ConfigTypes.RAGFAIR
    );
    ragfair.dynamic.blacklist.custom.push(...[itemToPush]);
  }

  private addNewMastery(
    localeMasteryName: string,
    masteryTemplateItemID: string
  ): void {
    const new_mastery_ro = {
      Name: localeMasteryName,
      Templates: [masteryTemplateItemID],
      Level2: 450,
      Level3: 900,
    };
    this.ref.tables.globals.config.Mastering.push(new_mastery_ro);
  }

  public addToCases(casesToAdd: string[], itemToAdd: string): void {
    const items = this.ref.tables.templates.items;

    for (const cases of casesToAdd) {
      for (const item in items) {
        if (items[item]._id === cases) {
          if (
            items[item]._props?.Grids[0]._props.filters[0].Filter === undefined
          ) {
            this.stopHurtingMeSVM(cases);
          }

          if (
            items[item]._props?.Grids[0]._props.filters[0].Filter !== undefined
          ) {
            items[item]._props?.Grids[0]._props.filters[0].Filter.push(
              itemToAdd
            );
          }
        }
      }
    }
  }

  private addToQuests(
    quests: any,
    condition: string,
    target: string,
    newTarget: string
  ): void {
    for (const quest of Object.keys(quests)) {
      const questConditions = quests[quest];
      for (const nextCondition of questConditions.conditions
        .AvailableForFinish) {
        const nextConditionData = nextCondition;
        if (
          nextConditionData.conditionType == condition &&
          nextConditionData.target.includes(target)
        ) {
          nextConditionData.target.push(newTarget);
        }
      }
    }
  }

  private addToBots(itemToClone: string, itemToPush: any): void {
    for (const botId in this.ref.tables.bots.types) {
      const botType = BossAndFollow[botId];

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

  private updateFilters(newItemID: string, itemToClone: string): void {
    for (const item in this.ref.tables.templates.items) {
      const itemConflictId =
        this.ref.tables.templates.items[item]._props.ConflictingItems;

      for (const itemInConflicts in itemConflictId) {
        const itemInConflictsFiltersId = itemConflictId[itemInConflicts];

        if (itemInConflictsFiltersId === itemToClone) {
          itemConflictId.push(newItemID);
        }
      }

      for (const slots in this.ref.tables.templates.items[item]._props.Slots) {
        const slotsId =
          this.ref.tables.templates.items[item]._props.Slots[slots]._props
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

  public addToStaticLoot(
    lootContainers: string[],
    itemToPush: string,
    probability: number
  ): void {
    for (const lootContainer of lootContainers) {
      const lootToPush = {
        tpl: itemToPush,
        relativeProbability: probability,
      };

      this.ref.tables.loot.staticLoot[lootContainer].itemDistribution.push(
        lootToPush
      );
    }
  }

  public stopHurtingMeSVM(caseToAdd: string) {
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
  public createClothingTop(clothingTopGen: ClothingTopSettings): void {
    const newTop = this.ref.jsonUtil.clone(
      this.ref.tables.templates.customization["5d28adcb86f77429242fc893"]
    );
    const newHands = this.ref.jsonUtil.clone(
      this.ref.tables.templates.customization[clothingTopGen.HandsToClone]
    );
    const newSuite = this.ref.jsonUtil.clone(
      this.ref.tables.templates.customization["5d1f623e86f7744bce0ef705"]
    );

    newTop._id = clothingTopGen.NewOutfitID;
    newTop._name = clothingTopGen.NewOutfitID;
    newTop._props.Prefab.path = clothingTopGen.BundlePath;
    this.ref.tables.templates.customization[clothingTopGen.NewOutfitID] =
      newTop;

    newHands._id = `${clothingTopGen.NewOutfitID}Hands`;
    newHands._name = `${clothingTopGen.NewOutfitID}Hands`;
    newHands._props.Prefab.path = clothingTopGen.HandsBundlePath;
    this.ref.tables.templates.customization[
      `${clothingTopGen.NewOutfitID}Hands`
    ] = newHands;

    newSuite._id = `${clothingTopGen.NewOutfitID}Suite`;
    newSuite._name = `${clothingTopGen.NewOutfitID}Suite`;
    newSuite._props.Body = clothingTopGen.NewOutfitID;
    newSuite._props.Hands = `${clothingTopGen.NewOutfitID}Hands`;
    newSuite._props.Side = ["Usec", "Bear", "Savage"];
    this.ref.tables.templates.customization[
      `${clothingTopGen.NewOutfitID}Suite`
    ] = newSuite;
  }

  public createClothingBottom(clothingBottomGen: ClothingBottomSettings): void {
    const newBottom = this.ref.jsonUtil.clone(
      this.ref.tables.templates.customization["5d5e7f4986f7746956659f8a"]
    );
    const newSuite = this.ref.jsonUtil.clone(
      this.ref.tables.templates.customization["5cd946231388ce000d572fe3"]
    );

    newBottom._id = clothingBottomGen.NewBottomsID;
    newBottom._name = clothingBottomGen.NewBottomsID;
    newBottom._props.Prefab.path = clothingBottomGen.BundlePath;
    this.ref.tables.templates.customization[clothingBottomGen.NewBottomsID] =
      newBottom;

    newSuite._id = `${clothingBottomGen.NewBottomsID}Suite`;
    newSuite._name = `${clothingBottomGen.NewBottomsID}Suite`;
    newSuite._props.Feet = clothingBottomGen.NewBottomsID;
    newSuite._props.Side = ["Usec", "Bear", "Savage"];
    this.ref.tables.templates.customization[
      `${clothingBottomGen.NewBottomsID}Suite`
    ] = newSuite;
  }
  //#endregion
}

export class TraderUtils {
  //#region Trader Base Utils
  public registerProfileImage(
    baseJson: any,
    modName: string,
    preAkiModLoader: PreAkiModLoader,
    imageRouter: ImageRouter,
    traderImageName: string
  ): void {
    const imageFilepath = `./${preAkiModLoader.getModPath(modName)}res`;
    imageRouter.addRoute(
      baseJson.avatar.replace(".jpg", ""),
      `${imageFilepath}/${traderImageName}`
    );
  }

  public setTraderUpdateTime(
    traderConfig: ITraderConfig,
    baseJson: any,
    minSeconds: number,
    maxSeconds: number
  ): void {
    const traderRefreshRecord: UpdateTime = {
      traderId: baseJson._id,
      seconds: {
        min: minSeconds,
        max: maxSeconds,
      },
    };
    traderConfig.updateTime.push(traderRefreshRecord);
  }

  public addTraderToDb(
    traderDetailsToAdd: any,
    tables: IDatabaseTables,
    jsonUtil: JsonUtil,
    dialogueToAdd: any,
    servicesToAdd: any
  ): void {
    tables.traders[traderDetailsToAdd._id] = {
      assort: this.createAssortTable(),
      base: jsonUtil.deserialize(
        jsonUtil.serialize(traderDetailsToAdd)
      ) as ITraderBase,
      dialogue: jsonUtil.deserialize(jsonUtil.serialize(dialogueToAdd)),
      services: jsonUtil.deserialize(jsonUtil.serialize(servicesToAdd)),
      questassort: {
        started: {},
        success: {},
        fail: {},
      },
    };
  }

  private createAssortTable(): ITraderAssort {
    const assortTable: ITraderAssort = {
      nextResupply: 0,
      items: [],
      barter_scheme: {},
      loyal_level_items: {},
    };

    return assortTable;
  }

  public addTraderToLocales(
    baseJson: any,
    tables: IDatabaseTables,
    fullName: string,
    firstName: string,
    nickName: string,
    location: string,
    description: string
  ) {
    const locales = Object.values(tables.locales.global) as Record<
      string,
      string
    >[];
    for (const locale of locales) {
      locale[`${baseJson._id} FullName`] = fullName;
      locale[`${baseJson._id} FirstName`] = firstName;
      locale[`${baseJson._id} Nickname`] = nickName;
      locale[`${baseJson._id} Location`] = location;
      locale[`${baseJson._id} Description`] = description;
    }
  }
  //#endregion
}

export class AssortUtils {
  //#region AssortUtils

  protected itemsToSell: Item[] = [];
  protected barterScheme: Record<string, IBarterScheme[][]> = {};
  protected loyaltyLevel: Record<string, number> = {};
  protected hashUtil: HashUtil;
  protected logger: ILogger;

  constructor(hashutil: HashUtil, logger: ILogger) {
    this.hashUtil = hashutil;
    this.logger = logger;
  }

  /**
   * Start selling item with tpl
   * @param itemTpl Tpl id of the item you want trader to sell
   * @param itemId Optional - set your own Id, otherwise unique id will be generated
   */
  public createSingleAssortItem(
    itemTpl: string,
    itemId = undefined
  ): AssortUtils {
    // Create item ready for insertion into assort table
    const newItemToAdd: Item = {
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

  public createComplexAssortItem(items: Item[]): AssortUtils {
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

  public addStackCount(stackCount: number): AssortUtils {
    this.itemsToSell[0].upd.StackObjectsCount = stackCount;

    return this;
  }

  public addUnlimitedStackCount(): AssortUtils {
    this.itemsToSell[0].upd.StackObjectsCount = 999999;
    this.itemsToSell[0].upd.UnlimitedCount = true;

    return this;
  }

  public makeStackCountUnlimited(): AssortUtils {
    this.itemsToSell[0].upd.StackObjectsCount = 999999;

    return this;
  }

  public addBuyRestriction(maxBuyLimit: number): AssortUtils {
    this.itemsToSell[0].upd.BuyRestrictionMax = maxBuyLimit;
    this.itemsToSell[0].upd.BuyRestrictionCurrent = 0;

    return this;
  }

  public addLoyaltyLevel(level: number) {
    this.loyaltyLevel[this.itemsToSell[0]._id] = level;

    return this;
  }

  public addMoneyCost(currencyType: Currency, amount: number): AssortUtils {
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

  public addBarterCost(itemTpl: string, count: number): AssortUtils {
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
    } else {
      // Item already exists, add to
      const existingData = this.barterScheme[sellableItemId][0].find(
        (x) => x._tpl === itemTpl
      );
      if (existingData) {
        // itemtpl already a barter for item, add to count
        existingData.count += count;
      } else {
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
  public export(data: ITrader, blockDupes: boolean): AssortUtils {
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

  public pushFromTraderAssort(
    items: Item[],
    itemTpl: string,
    count: number,
    stackCount: number,
    level: number,
    data: ITrader,
    blockDupes: boolean
  ) {
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
    } else {
      // Item already exists, add to
      const existingData = this.barterScheme[sellableItemId][0].find(
        (x) => x._tpl === itemTpl
      );
      if (existingData) {
        // itemtpl already a barter for item, add to count
        existingData.count += count;
      } else {
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

  public createSingleOffer(
    ItemToAdd: string,
    StockCount: number,
    LoyaltyLevelToPush: number,
    ReqCost: number,
    tables: any
  ) {
    this.createSingleAssortItem(ItemToAdd)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .addBarterCost(Currency.ReqSlips, ReqCost)
      .export(tables.traders[baseJson._id], false);
  }

  public createSingleCashOffer(
    ItemToAdd: string,
    StockCount: number,
    LoyaltyLevelToPush: number,
    CurrencyToUse: any,
    ReqCost: number,
    tables: any
  ) {
    this.createSingleAssortItem(ItemToAdd)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .addMoneyCost(CurrencyToUse, ReqCost)
      .export(tables.traders[baseJson._id], false);
  }

  public createBarterOffer(
    ItemToAdd: string,
    StockCount: number,
    LoyaltyLevelToPush: number,
    BarterToUse: string,
    ReqCost: number,
    tables: any
  ) {
    this.createSingleAssortItem(ItemToAdd)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .addBarterCost(BarterToUse, ReqCost)
      .export(tables.traders[baseJson._id], false);
  }

  public createComplexOffer(
    ArrayToPull: any,
    ItemKeys: string,
    StockCount: number,
    LoyaltyLevelToPush: number,
    ReqCost: number,
    tables: any
  ) {
    this.createComplexAssortItem(ArrayToPull[ItemKeys]._items)
      .addMoneyCost(Currency.ReqSlips, ReqCost)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .export(tables.traders[baseJson._id], true);
  }

  public createComplexFormOffer(
    ArrayToPull: any,
    ItemKeys: string,
    StockCount: number,
    LoyaltyLevelToPush: number,
    ReqCost: number,
    tables: any
  ) {
    this.createComplexAssortItem(ArrayToPull[ItemKeys]._items)
      .addMoneyCost(Currency.ReqForms, ReqCost)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .export(tables.traders[baseJson._id], true);
  }

  public createPresetFormOffer(
    PresetItem: any,
    StockCount: number,
    LoyaltyLevelToPush: number,
    ReqCost: number,
    tables: any
  ) {
    this.createComplexAssortItem(PresetItem)
      .addMoneyCost(Currency.ReqForms, ReqCost)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .export(tables.traders[baseJson._id], true);
  }

  public createPresetSlipOffer(
    PresetItem: any,
    StockCount: number,
    LoyaltyLevelToPush: number,
    ReqCost: number,
    tables: any
  ) {
    this.createComplexAssortItem(PresetItem)
      .addMoneyCost(Currency.ReqSlips, ReqCost)
      .addStackCount(StockCount)
      .addLoyaltyLevel(LoyaltyLevelToPush)
      .export(tables.traders[baseJson._id], true);
  }
  //#endregion
}
//#region Item Gen Types
export type ItemGeneratorSettings = {
  newItem: {
    ItemToClone: string;
    newID: string;
    parentID: string;
    OverrideProperties: Props;
    LocalePush: {
      en: {
        name: string;
        shortName: string;
        description: string;
      };
    };
    HandbookParent: string;
    HandbookPrice: number;
    CloneToFilters?: boolean;
    PushMastery?: boolean;
    AddToBots?: boolean;
    BotLootItemToClone?: string;
    QuestPush?: {
      AddToQuests: boolean;
      QuestConditionType: string;
      QuestTargetConditionToClone: string;
    };
    LootPush?: {
      AddToStaticLoot: boolean;
      LootContainersToAdd: string[];
      StaticLootProbability: number;
    };
    AddToCases?: boolean;
    CasesToPush?: string[];
    PushToFleaBlacklist?: boolean;
    SlotInfo?: {
      AddToSlot: boolean;
      Slot: number;
    };
  };
};

export type ClothingTopSettings = {
  NewOutfitID: string;
  BundlePath: string;
  HandsToClone: string;
  HandsBundlePath: string;
};

export type ClothingBottomSettings = {
  NewBottomsID: string;
  BundlePath: string;
};
//#endregion