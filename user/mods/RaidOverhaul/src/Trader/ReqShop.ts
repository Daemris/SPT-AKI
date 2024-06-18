import { container } from "tsyringe";

import { IDatabaseTables } from "@spt-aki/models/spt/server/IDatabaseTables";
import {
  ITraderConfig,
  UpdateTime,
} from "@spt-aki/models/spt/config/ITraderConfig";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { ILogger } from "@spt-aki/models/spt/utils/ILogger";
import { IPmcData } from "@spt-aki/models/eft/common/IPmcData";

import { References } from "../Refs/References";
import { AssortUtils, TraderUtils, Utils } from "../Refs/Utils";
import { Currency, AllItemList } from "../Refs/Enums";

import * as customPresetArray from "../Refs/ArrayFiles/Items/customPresets.json";
import * as weaponPresetArray from "../Refs/ArrayFiles/Items/weaponPresets.json";
import * as gearPresetArray from "../Refs/ArrayFiles/Items/gearPresets.json";
import * as items from "../Refs/ArrayFiles/Items/shopArrays.json";
import * as dialogue from "../../db/dialogue.json";
import * as services from "../../db/services.json";
import * as baseJson from "../../db/base.json";

export class TraderData {
  mod: string;
  logString: string;
  private traderHelper: TraderUtils;
  private assortUtils: AssortUtils;

  constructor(
    private traderConfig: ITraderConfig,
    private ref: References,
    private utils: Utils
  ) {
    this.mod = "RaidOverhaul";
    this.logString = "AssortMaker";
  }

  //#region Base Trader Methods
  public registerProfileImage(): void {
    const imageFilepath = `./${this.ref.preAkiModLoader.getModPath(
      this.mod
    )}res`;

    this.ref.imageRouter.addRoute(
      baseJson.avatar.replace(".jpg", ""),
      `${imageFilepath}/Reqs.jpg`
    );
  }

  public setupTraderUpdateTime(): void {
    const traderRefreshRecord: UpdateTime = {
      traderId: baseJson._id,
      seconds: {
        min: 1800,
        max: 7200,
      },
    };
    this.traderConfig.updateTime.push(traderRefreshRecord);
  }

  public pushTrader(): void {
    this.traderHelper = new TraderUtils();
    this.traderHelper.addTraderToDb(
      baseJson,
      this.ref.tables,
      this.ref.jsonUtil,
      dialogue,
      services
    );
  }

  public addTraderToLocales(
    tables: IDatabaseTables,
    fullName: string,
    firstName: string,
    nickName: string,
    location: string,
    description: string
  ): void {
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
  //
  //
  //

  public createPlateFluidAssort(debugLogging: boolean): void {
    //#region Plates
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.plates.forEach((item) => {
      if (this.ref.probHelper.rollChance(20, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total plates have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createMedsFluidAssort(debugLogging: boolean): void {
    //#region Meds
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.meds.forEach((item) => {
      if (this.ref.probHelper.rollChance(25, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total meds have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createGearFluidAssort(debugLogging: boolean): void {
    //#region Gear
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.gear.forEach((item) => {
      if (this.ref.probHelper.rollChance(12, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total pieces of gear have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createModsFluidAssort(debugLogging: boolean): void {
    //#region Mods
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.mods.forEach((item) => {
      if (this.ref.probHelper.rollChance(7, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total pieces of gear have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createAmmoFluidAssort(debugLogging: boolean): void {
    //#region Ammo
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(50, 300);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.ammo.forEach((item) => {
      if (this.ref.probHelper.rollChance(17, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total types of ammo have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createItemsFluidAssort(debugLogging: boolean): void {
    //#region Items
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.items.forEach((item) => {
      if (this.ref.probHelper.rollChance(13, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total items have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createWeaponFluidAssort(debugLogging: boolean): void {
    //#region Weapon Bases
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.weaponBase.forEach((item) => {
      if (this.ref.probHelper.rollChance(11, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total weapons have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public createSpecFluidAssort(debugLogging: boolean): void {
    //#region Special Items
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);

    var count = 0;

    items.special.forEach((item) => {
      if (this.ref.probHelper.rollChance(10, 100)) {
        const randomAssortCount = this.ref.randomUtil.randInt(0, 1);
        const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
        count++;

        try {
          this.assortUtils.createSingleOffer(
            item,
            randomAssortCount,
            randomLoyaltyLevel,
            this.utils.getReqCost(item),
            this.ref.tables
          );
        } catch (error) {
          this.ref.logger.error(
            `[${this.logString}] Error loading Special Items from Fluid Assort Trader Generator:` +
              error
          );
        }
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total special items have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public addStaticItems(debugLogging: boolean): void {
    //#region Static Items
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 7);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var count = 0;

    items.staticItems.forEach((item) => {
      if (this.ref.probHelper.rollChance(23, 100)) {
        this.utils.buildBaseAssort(
          item,
          this.assortUtils,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables
        );
        count++;
      }
    });

    if (debugLogging) {
      this.ref.logger.log(
        `[${this.logString}] ${count} total static items have been added`,
        LogTextColor.GREEN
      );
    }
    //#endregion
  }

  //
  //
  //

  public addReqSlips(): void {
    //#region Req Slips
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);

    const randomBrtAssortCount = this.ref.randomUtil.randInt(0, 20);
    const randomAssortCount = this.ref.randomUtil.randInt(0, 20);
    const randomReqBrtCount = this.ref.randomUtil.randInt(1, 5);

    this.assortUtils.createSingleCashOffer(
      "RequisitionSlips",
      randomAssortCount,
      1,
      Currency.ReqForms,
      this.utils.getFormCost("RequisitionSlips"),
      this.ref.tables
    );
    this.assortUtils.createBarterOffer(
      "RequisitionSlips",
      randomBrtAssortCount,
      1,
      "5d235b4d86f7742e017bc88a",
      randomReqBrtCount,
      this.ref.tables
    );
    //#endregion
  }

  //
  //
  //

  public addReqForms(): void {
    //#region Req Forms
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(100, 7000);

    this.assortUtils.createSingleCashOffer(
      "66292e79a4d9da25e683ab55",
      randomAssortCount,
      1,
      Currency.Roubles,
      this.utils.getFleaPrice("66292e79a4d9da25e683ab55"),
      this.ref.tables
    );
    //#endregion
  }

  //
  //
  //

  public addFlares(): void {
    //#region Flares
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);
    const randomAssortCount = this.ref.randomUtil.randInt(1, 3);
    const randomReqSlipCount = this.ref.randomUtil.randInt(2, 6);

    this.assortUtils.createSingleOffer(
      AllItemList.GRENADELAUNCHER_FLARE,
      randomAssortCount,
      1,
      randomReqSlipCount,
      this.ref.tables
    );
    //#endregion
  }

  //
  //
  //

  public addAmmo(): void {
    //#region Custom Ammo
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);

    this.assortUtils.createSingleCashOffer(
      "66280a30d3b6f288cb6b9653",
      this.ref.randomUtil.randInt(50, 300),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("66280a30d3b6f288cb6b9653"),
      this.ref.tables
    );
    this.assortUtils.createSingleCashOffer(
      "662809f445b5ff428e21ac0a",
      this.ref.randomUtil.randInt(50, 300),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("662809f445b5ff428e21ac0a"),
      this.ref.tables
    );
    this.assortUtils.createSingleCashOffer(
      "662808ec26a8e83120bb25fe",
      this.ref.randomUtil.randInt(50, 300),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("662808ec26a8e83120bb25fe"),
      this.ref.tables
    );

    this.assortUtils.createSingleCashOffer(
      "6628185208dd86f969db7e03",
      this.ref.randomUtil.randInt(50, 300),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("6628185208dd86f969db7e03"),
      this.ref.tables
    );
    this.assortUtils.createSingleCashOffer(
      "662818a23a552da6aef8fada",
      this.ref.randomUtil.randInt(50, 300),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("662818a23a552da6aef8fada"),
      this.ref.tables
    );

    this.assortUtils.createSingleCashOffer(
      "66281ab7fca966e5021f81b5",
      this.ref.randomUtil.randInt(10, 50),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("66281ab7fca966e5021f81b5"),
      this.ref.tables
    );
    this.assortUtils.createSingleCashOffer(
      "66281ac038f9aebf6f914138",
      this.ref.randomUtil.randInt(5, 30),
      1,
      Currency.ReqForms,
      this.utils.getFormCost("66281ac038f9aebf6f914138"),
      this.ref.tables
    );
    //#endregion
  }

  //
  //
  //

  public addWeaponPresets(count: number, debugLogging: boolean): void {
    //#region Weapon Presets
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);

    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var keys = Object.keys(weaponPresetArray);
    const shuffledKeys = this.utils.shuffle(keys).shift();

    try {
      if (shuffledKeys == "undefined") {
        const reshuffledKeys = this.utils.shuffle(keys).shift();

        this.utils.buildPresetAssort(
          weaponPresetArray[reshuffledKeys]._items,
          this.assortUtils,
          weaponPresetArray,
          reshuffledKeys,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables,
          this.logString,
          weaponPresetArray[reshuffledKeys]._name
        );
        count++;

        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${weaponPresetArray[reshuffledKeys]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }
      } else {
        this.utils.buildPresetAssort(
          weaponPresetArray[shuffledKeys]._items,
          this.assortUtils,
          weaponPresetArray,
          shuffledKeys,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables,
          this.logString,
          weaponPresetArray[shuffledKeys]._name
        );
        count++;

        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${weaponPresetArray[shuffledKeys]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }
      }
    } catch (error) {
      this.ref.logger.log(
        `[${this.logString}] Error loading weapon preset => ${error}, skipping.`,
        LogTextColor.RED
      );
    }
    //#endregion
  }

  //
  //
  //

  public addGearPresets(count: number, debugLogging: boolean): void {
    //#region Gear Presets
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);

    const randomAssortCount = this.ref.randomUtil.randInt(0, 10);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);
    var keys = Object.keys(gearPresetArray);
    const shuffledKeys = this.utils.shuffle(keys).shift();

    try {
      if (shuffledKeys == "undefined") {
        const reshuffledKeys = this.utils.shuffle(keys).shift();

        this.utils.buildPresetAssort(
          gearPresetArray[reshuffledKeys]._items,
          this.assortUtils,
          gearPresetArray,
          reshuffledKeys,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables,
          this.logString,
          gearPresetArray[reshuffledKeys]._name
        );
        count++;

        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${gearPresetArray[reshuffledKeys]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }
      } else {
        this.utils.buildPresetAssort(
          gearPresetArray[shuffledKeys]._items,
          this.assortUtils,
          gearPresetArray,
          shuffledKeys,
          randomAssortCount,
          randomLoyaltyLevel,
          this.ref.tables,
          this.logString,
          gearPresetArray[shuffledKeys]._name
        );
        count++;

        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${gearPresetArray[shuffledKeys]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }
      }
    } catch (error) {
      this.ref.logger.log(
        `[${this.logString}] Error loading gear preset => ${error}, skipping.`,
        LogTextColor.RED
      );
    }
    //#endregion
  }

  //
  //
  //

  public addCustomPresets(debugLogging: boolean): void {
    //#region Custom Presets
    this.assortUtils = new AssortUtils(this.ref.hashUtil, this.ref.logger);

    const randomAssortCount = this.ref.randomUtil.randInt(1, 3);
    const randomReqSlipCount = this.ref.randomUtil.randInt(4, 7);
    const randomLoyaltyLevel = this.ref.randomUtil.randInt(1, 4);

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a705236745f8648ad53e"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a705236745f8648ad53e",
          randomAssortCount,
          randomLoyaltyLevel,
          this.utils.getPresetReqCost(
            customPresetArray["6621a705236745f8648ad53e"]._items
          ),
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a70f59ffa60ecae8e733"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a70f59ffa60ecae8e733",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a717ff5912103bdf740d"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a717ff5912103bdf740d",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a72ac62d870df2cbdb86"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a72ac62d870df2cbdb86",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a731bd4c9ff51d29aaaf"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a731bd4c9ff51d29aaaf",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a739fb888fa092777660"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a739fb888fa092777660",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(10, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["66282d088ae153cc12239517"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "66282d088ae153cc12239517",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(10, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["66282dc3786b67507908d9f6"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "66282dc3786b67507908d9f6",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(10, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["66282e057a8efc7fb524a0e7"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "66282e057a8efc7fb524a0e7",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(15, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["662180630faa3ed9ec5b9614"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "662180630faa3ed9ec5b9614",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(15, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["662180b4039f9de4ae12f266"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "662180b4039f9de4ae12f266",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(22, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a59a20e3b56082a2d70f"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a59a20e3b56082a2d70f",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(20, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621a6bcf5385547fc81e504"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621a6bcf5385547fc81e504",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(15, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621b36441f789405703caa7"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621b36441f789405703caa7",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(30, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621b3a294b2a82f3e040046"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621b3a294b2a82f3e040046",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }

    if (this.ref.probHelper.rollChance(30, 100)) {
      try {
        if (debugLogging) {
          this.ref.logger.log(
            `[${this.logString}] ${customPresetArray["6621b3d68b97256266b89703"]._name} has been added to the Req Shop`,
            LogTextColor.GREEN
          );
        }

        this.assortUtils.createComplexOffer(
          customPresetArray,
          "6621b3d68b97256266b89703",
          randomAssortCount,
          randomLoyaltyLevel,
          randomReqSlipCount,
          this.ref.tables
        );
      } catch (error) {
        this.ref.logger.error(
          `[${this.logString}] Error loading Custom Presets from Fluid Assort Trader Generator:` +
            error
        );
      }
    }
    //#endregion
  }

  //
  //
  //
  //#region Reputation Change Logic
  static traderRepLogic(info: any, sessionId: string, traderHelper: any): void {
    const logger = container.resolve<ILogger>("WinstonLogger");
    const logString = "Rep Logic";

    try {
      if (info.exit === "Left") {
        return;
      } else if (info.exit === "killed") {
        return;
      } else if (info.exit === "runner") {
        return;
      } else if (info.exit === "survived") {
        traderHelper.addStandingToTrader(sessionId, "Requisitions", 0.03);
        return;
      }
    } catch (error) {
      logger.error(
        `[${logString}] Error modifying Trader Rep on Successful Raid Exfil:` +
          error
      );
    }
  }

  static legionRepLogic(info: any, sessionId: string, traderHelper: any): void {
    const logger = container.resolve<ILogger>("WinstonLogger");
    const logString = "LegionRepLogic";

    try {
      const pmcData: IPmcData = info.profile;
      const victimRole = pmcData.Stats.Eft.Victims?.map((victim) =>
        victim.Role.toLowerCase()
      );

      if (victimRole?.includes("bosslegion")) {
        traderHelper.addStandingToTrader(sessionId, "Requisitions", 0.15);
        return;
      } else {
        return;
      }
    } catch (error) {
      logger.error(
        `[${logString}] Error modifying Trader Rep on killing Legion:` + error
      );
    }
  }
  //#endregion
}
