import { IAirdropConfig } from "@spt-aki/models/spt/config/IAirdropConfig";
import { IRagfairConfig } from "@spt-aki/models/spt/config/IRagfairConfig";
import { IWeatherConfig } from "@spt-aki/models/spt/config/IWeatherConfig";
import { ILocationConfig } from "@spt-aki/models/spt/config/ILocationConfig";
import { ILostOnDeathConfig } from "@spt-aki/models/spt/config/ILostOnDeathConfig";
import { LogTextColor } from "@spt-aki/models/spt/logging/LogTextColor";
import { ConfigTypes } from "@spt-aki/models/enums/ConfigTypes";

import { Utils } from "../Refs/Utils";
import { AllBots } from "../Refs/Enums";
import { References } from "../Refs/References";

import * as modConfig from "../../config/config.json";
import * as ammoList from "../Refs/ArrayFiles/Items/ammoStackList.json";
import * as globalPresets from "../../db/Presets/Globals.json";

const modName = "Raid Overhaul";

export class Base {
  constructor(private utils: Utils, private ref: References) {}

  public pushModFeatures(): void {
    const randomEventList = ["Halloween", "Christmas", "HalloweenIllumination"];

    const randomEvent = this.ref.randomUtil
      .drawRandomFromList(randomEventList, 1)
      .toString();
    const questItems = this.ref.configServer.getConfig<ILostOnDeathConfig>(
      ConfigTypes.LOST_ON_DEATH
    );
    const ragfair = this.ref.configServer.getConfig<IRagfairConfig>(
      ConfigTypes.RAGFAIR
    );
    const maps = this.ref.configServer.getConfig<ILocationConfig>(
      ConfigTypes.LOCATION
    );
    const weatherConfig = this.ref.configServer.getConfig<IWeatherConfig>(
      ConfigTypes.WEATHER
    );
    const airdropConfig = this.ref.configServer.getConfig<IAirdropConfig>(
      ConfigTypes.AIRDROP
    );
    const handbookBase = this.ref.tables.templates.handbook;
    const fleaPrices = this.ref.tables.templates.prices;
    const presets = this.ref.tables.globals;
    const globals = this.ref.tables.globals.config;
    const items = this.ref.tables.templates.items;
    const stamina = this.ref.tables.globals.config.Stamina;
    const traders = this.ref.tables.traders;
    const pockets = this.ref.tables.templates.items["627a4e6b255f7527fb05a0f6"];
    const whiteFlare = "62178be9d0050232da3485d9";

    //#region Raid Changes
    if (modConfig.Raid.EnableExtendedRaids) {
      for (const location in this.ref.tables.locations) {
        if (location == "base") continue;

        this.ref.tables.locations[location].base.EscapeTimeLimit =
          modConfig.Raid.TimeLimit * 60;
        this.ref.tables.locations[location].base.EscapeTimeLimitCoop =
          modConfig.Raid.TimeLimit * 60;
      }
    }

    if (modConfig.Raid.ReduceFoodAndHydroDegrade.Enabled) {
      globals.Health.Effects.Existence.EnergyDamage =
        modConfig.Raid.ReduceFoodAndHydroDegrade.EnergyDecay;
      globals.Health.Effects.Existence.HydrationDamage =
        modConfig.Raid.ReduceFoodAndHydroDegrade.HydroDecay;
    }

    if (modConfig.Raid.ChangeAirdropValues.Enabled) {
      airdropConfig.airdropChancePercent.bigmap =
        modConfig.Raid.ChangeAirdropValues.Customs;
      airdropConfig.airdropChancePercent.woods =
        modConfig.Raid.ChangeAirdropValues.Woods;
      airdropConfig.airdropChancePercent.lighthouse =
        modConfig.Raid.ChangeAirdropValues.Lighthouse;
      airdropConfig.airdropChancePercent.shoreline =
        modConfig.Raid.ChangeAirdropValues.Interchange;
      airdropConfig.airdropChancePercent.interchange =
        modConfig.Raid.ChangeAirdropValues.Shoreline;
      airdropConfig.airdropChancePercent.reserve =
        modConfig.Raid.ChangeAirdropValues.Reserve;
    }

    if (modConfig.WeightChanges.Enabled) {
      stamina.BaseOverweightLimits["x"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.BaseOverweightLimits["y"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.WalkOverweightLimits["x"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.WalkOverweightLimits["y"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.WalkSpeedOverweightLimits["x"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.WalkSpeedOverweightLimits["y"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.SprintOverweightLimits["x"] *=
        modConfig.WeightChanges.WeightMultiplier;
      stamina.SprintOverweightLimits["y"] *=
        modConfig.WeightChanges.WeightMultiplier;
    }

    if (modConfig.Raid.SaveQuestItems) {
      questItems.questItems = false;
    }

    if (modConfig.Raid.NoRunThrough) {
      globals.exp.match_end.survived_exp_requirement = 0;
      globals.exp.match_end.survived_seconds_requirement = 0;
    }
    //#endregion
    //
    //
    //
    //#region Item Changes
    for (const id in items) {
      const base = items[id];

      if (
        base._parent === "5447e1d04bdc2dff2f8b4567" &&
        modConfig.Raid.LootableMelee
      ) {
        items[id]._props.Unlootable = false;
        items[id]._props.UnlootableFromSide = [];
      }
    }

    for (const id in items) {
      const base = items[id];

      if (
        base._parent === "5b3f15d486f77432d0509248" &&
        modConfig.Raid.LootableArmbands
      ) {
        items[id]._props.Unlootable = false;
        items[id]._props.UnlootableFromSide = [];
      }
    }

    if (modConfig.PocketChanges.Enabled) {
      (pockets._props.Grids = [
        {
          _id: this.ref.hashUtil.generate(),
          _name: "pocket1",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: {
            cellsH: modConfig.PocketChanges.Pocket1.Horizontal,
            cellsV: modConfig.PocketChanges.Pocket1.Vertical,
            filters: [
              {
                ExcludedFilter: ["5448bf274bdc2dfc2f8b456a"],
                Filter: ["54009119af1c881c07000029"],
              },
            ],
            isSortingTable: false,
            maxCount: 0,
            maxWeight: 0,
            minCount: 0,
          },
          _proto: "55d329c24bdc2d892f8b4567",
        },
        {
          _id: this.ref.hashUtil.generate(),
          _name: "pocket2",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: {
            cellsH: modConfig.PocketChanges.Pocket2.Horizontal,
            cellsV: modConfig.PocketChanges.Pocket2.Vertical,
            filters: [
              {
                ExcludedFilter: ["5448bf274bdc2dfc2f8b456a"],
                Filter: ["54009119af1c881c07000029"],
              },
            ],
            isSortingTable: false,
            maxCount: 0,
            maxWeight: 0,
            minCount: 0,
          },
          _proto: "55d329c24bdc2d892f8b4567",
        },
        {
          _id: this.ref.hashUtil.generate(),
          _name: "pocket3",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: {
            cellsH: modConfig.PocketChanges.Pocket3.Horizontal,
            cellsV: modConfig.PocketChanges.Pocket3.Vertical,
            filters: [
              {
                ExcludedFilter: ["5448bf274bdc2dfc2f8b456a"],
                Filter: ["54009119af1c881c07000029"],
              },
            ],
            isSortingTable: false,
            maxCount: 0,
            maxWeight: 0,
            minCount: 0,
          },
          _proto: "55d329c24bdc2d892f8b4567",
        },
        {
          _id: this.ref.hashUtil.generate(),
          _name: "pocket4",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: {
            cellsH: modConfig.PocketChanges.Pocket4.Horizontal,
            cellsV: modConfig.PocketChanges.Pocket4.Vertical,
            filters: [
              {
                ExcludedFilter: ["5448bf274bdc2dfc2f8b456a"],
                Filter: ["54009119af1c881c07000029"],
              },
            ],
            isSortingTable: false,
            maxCount: 0,
            maxWeight: 0,
            minCount: 0,
          },
          _proto: "55d329c24bdc2d892f8b4567",
        },
      ]),
        this.utils.stopHurtingMeSVM("627a4e6b255f7527fb05a0f6");
    }

    if (modConfig.Raid.SpecialSlotChanges) {
      pockets._props.Slots = [
        {
          _id: this.ref.hashUtil.generate(),
          _mergeSlotWithChildren: false,
          _name: "SpecialSlot1",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: { filters: [{ Filter: ["54009119af1c881c07000029"] }] },
          _proto: "55d721144bdc2d89028b456f",
          _required: false,
        },
        {
          _id: this.ref.hashUtil.generate(),
          _mergeSlotWithChildren: false,
          _name: "SpecialSlot2",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: { filters: [{ Filter: ["54009119af1c881c07000029"] }] },
          _proto: "55d721144bdc2d89028b456f",
          _required: false,
        },
        {
          _id: this.ref.hashUtil.generate(),
          _mergeSlotWithChildren: false,
          _name: "SpecialSlot3",
          _parent: "627a4e6b255f7527fb05a0f6",
          _props: { filters: [{ Filter: ["54009119af1c881c07000029"] }] },
          _proto: "55d721144bdc2d89028b456f",
          _required: false,
        },
      ];
      this.utils.stopHurtingMeSVM("627a4e6b255f7527fb05a0f6");
    }

    if (modConfig.EnableCustomItems) {
      for (const itemPreset in globalPresets.ItemPresets) {
        presets.ItemPresets[itemPreset] = globalPresets.ItemPresets[itemPreset];
      }
    }

    if (modConfig.Raid.HolsterAnything) {
      const inventory = items["55d7217a4bdc2d86028b456d"];
      const holster = inventory._props.Slots[2];

      holster._props.filters[0].Filter.push("5422acb9af1c889c16000029");
    }

    if (modConfig.Raid.LowerExamineTime) {
      for (const id in items) {
        items[id]._props.ExamineTime = 0.1;
      }
    }

    for (const flare in handbookBase.Items) {
      if (handbookBase.Items[flare].Id == whiteFlare) {
        handbookBase.Items[flare].Price = 89999;
      }
    }
    fleaPrices[whiteFlare] = 97388 + this.ref.randomUtil.getInt(500, 53000);

    for (const botId in this.ref.tables.bots.types) {
      const botType = AllBots[botId];

      if (botType) {
        for (const lootSlot in this.ref.tables.bots.types[botId].inventory
          .items) {
          const items = this.ref.tables.bots.types[botId].inventory.items;

          if (items[lootSlot]["5c94bbff86f7747ee735c08f"] !== undefined) {
            const weight = items[lootSlot]["5c94bbff86f7747ee735c08f"];
            items[lootSlot]["RequisitionSlips"] = weight;
          }
        }
      }
    }

    for (const botId in this.ref.tables.bots.types) {
      const botType = AllBots[botId];

      if (botType) {
        for (const lootSlot in this.ref.tables.bots.types[botId].inventory
          .items) {
          const items = this.ref.tables.bots.types[botId].inventory.items;

          if (items[lootSlot]["573475fb24597737fb1379e1"] !== undefined) {
            const weight = items[lootSlot]["573475fb24597737fb1379e1"];
            items[lootSlot]["66292e79a4d9da25e683ab55"] = weight;
          }
        }
      }
    }

    this.utils.addToCases(
      [
        "5783c43d2459774bbe137486",
        "60b0f6c058e0b0481a09ad11",
        "590c60fc86f77412b13fddcf",
        "5d235bb686f77443f4331278",
      ],
      "59f32c3b86f77472a31742f0"
    );
    this.utils.addToCases(
      [
        "5783c43d2459774bbe137486",
        "60b0f6c058e0b0481a09ad11",
        "590c60fc86f77412b13fddcf",
        "5d235bb686f77443f4331278",
      ],
      "59f32bb586f774757e1e8442"
    );
    //#endregion
    //
    //
    //
    //#region Trader/Insurance
    if (modConfig.Insurance.Enabled) {
      traders["54cb50c76803fa8b248b4571"].base.insurance.min_return_hour =
        modConfig.Insurance.PraporMinReturn;
      traders["54cb50c76803fa8b248b4571"].base.insurance.max_return_hour =
        modConfig.Insurance.PraporMaxReturn;
      traders["54cb57776803fa99248b456e"].base.insurance.min_return_hour =
        modConfig.Insurance.TherapistMinReturn;
      traders["54cb57776803fa99248b456e"].base.insurance.max_return_hour =
        modConfig.Insurance.TherapistMaxReturn;
    }

    for (const item in this.ref.tables.traders["Requisitions"].assort
      .loyal_level_items) {
      if (modConfig.Trader.LL1Items) {
        this.ref.tables.traders["Requisitions"].assort.loyal_level_items[
          item
        ] = 1;
      }
    }

    if (modConfig.Trader.DisableFleaBlacklist) {
      ragfair.dynamic.blacklist.enableBsgList = false;
    }
    //#endregion
    //
    //
    //
    //#region Stack Tuning
    if (
      modConfig.AdvancedStackTuning.Enabled &&
      !modConfig.BasicStackTuning.Enabled
    ) {
      for (const id of ammoList.Shotgun) {
        items[id]._props.StackMaxSize =
          modConfig.AdvancedStackTuning.ShotgunStack;
      }

      for (const id of ammoList.UBGL) {
        items[id]._props.StackMaxSize =
          modConfig.AdvancedStackTuning.FlaresAndUBGL;
      }

      for (const id of ammoList.Sniper) {
        items[id]._props.StackMaxSize =
          modConfig.AdvancedStackTuning.SniperStack;
      }

      for (const id of ammoList.SMG) {
        items[id]._props.StackMaxSize = modConfig.AdvancedStackTuning.SMGStack;
      }

      for (const id of ammoList.Rifle) {
        items[id]._props.StackMaxSize =
          modConfig.AdvancedStackTuning.RifleStack;
      }
    }

    if (
      modConfig.BasicStackTuning.Enabled &&
      !modConfig.AdvancedStackTuning.Enabled
    ) {
      for (const id in items) {
        if (
          items[id]._parent === "5485a8684bdc2da71d8b4567" &&
          items[id]._props.StackMaxSize !== undefined
        ) {
          items[id]._props.StackMaxSize *=
            modConfig.BasicStackTuning.StackMultiplier;
        }
      }
    }

    if (
      modConfig.BasicStackTuning.Enabled &&
      modConfig.AdvancedStackTuning.Enabled
    ) {
      this.ref.logger.log(
        `[${modName}] Error multiplying your ammo stacks. Make sure you only have ONE of the Stack Tuning options enabled`,
        LogTextColor.RED
      );
    }

    if (modConfig.MoneyStackMultiplier.Enabled) {
      for (const id in items) {
        if (
          items[id]._parent === "543be5dd4bdc2deb348b4569" &&
          items[id]._props.StackMaxSize !== undefined
        ) {
          items[id]._props.StackMaxSize =
            modConfig.MoneyStackMultiplier.MoneyMultiplier;
        }
      }
    }
    //#endregion
    //
    //
    //
    //#region Loot
    if (modConfig.LootChanges.EnableLootOptions) {
      maps.looseLootMultiplier.bigmap =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.factory4_day =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.factory4_night =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.interchange =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.laboratory =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.rezervbase =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.shoreline =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.woods =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.lighthouse =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.tarkovstreets =
        modConfig.LootChanges.LooseLootMultiplier;
      maps.looseLootMultiplier.sandbox =
        modConfig.LootChanges.LooseLootMultiplier;

      maps.staticLootMultiplier.bigmap =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.factory4_day =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.factory4_night =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.interchange =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.laboratory =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.rezervbase =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.shoreline =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.woods =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.lighthouse =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.tarkovstreets =
        modConfig.LootChanges.StaticLootMultiplier;
      maps.staticLootMultiplier.sandbox =
        modConfig.LootChanges.StaticLootMultiplier;
    }
    //#endregion
    //
    //
    //
    //#region Weather & Events
    if (modConfig.Events.EnableWeatherOptions) {
      globals.EventType = [];
      globals.EventType = ["None"];

      if (
        modConfig.Events.RandomizedWeather &&
        !modConfig.Events.WinterWonderland
      ) {
        if (this.ref.probHelper.rollChance(30, 100)) {
          weatherConfig.forceWinterEvent = true;
          this.ref.logger.log(
            `[${modName}] Snow is active. It's a whole fuckin' winter wonderland out there.`,
            LogTextColor.MAGENTA
          );
        } else {
          return;
        }
      }

      if (
        modConfig.Events.WinterWonderland &&
        !modConfig.Events.RandomizedWeather
      ) {
        weatherConfig.forceWinterEvent = true;
        this.ref.logger.log(
          `[${modName}] Snow is active. It's a whole fuckin' winter wonderland out there.`,
          LogTextColor.MAGENTA
        );
      }

      if (
        modConfig.Events.RandomizedWeather &&
        modConfig.Events.WinterWonderland
      ) {
        this.ref.logger.log(
          `[${modName}] Error modifying your weather. Make sure you only have ONE of the weather options enabled`,
          LogTextColor.RED
        );
      }

      if (modConfig.Events.RandomizedSeasonalEvents) {
        if (this.ref.probHelper.rollChance(15, 100)) {
          globals.EventType.push(randomEvent);
          this.ref.logger.log(
            `[${modName}] ${randomEvent} event has been loaded`,
            LogTextColor.MAGENTA
          );
        }
      }
    }
    //#endregion
  }
}
