import { References } from "../Refs/References";
import { Utils } from "../Refs/Utils";
import { HandbookIDs, AllItemList, BaseClasses } from "../Refs/Enums";

export class ItemGenerator {
  constructor(private utils: Utils, private ref: References) {}

  public createWeapons(): void {
    //#region Aug762
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.ASSAULTRIFLE_AUG_A3,
        newID: "6628f2e31084cf4d62b2b40b",
        parentID: BaseClasses.ASSAULT_RIFLE,
        OverrideProperties: {
          Chambers: [
            {
              _name: "patron_in_weapon",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f2e31084cf4d62b2b40b",
              _props: {
                filters: [
                  {
                    Filter: [
                      "59e0d99486f7744a32234762", //762x39
                      "59e4d3d286f774176a36250a",
                      "5656d7c34bdc2d9d198b4587",
                      "59e4cf5286f7741778269d8a",
                      "59e4d24686f7741776641ac7",
                      "601aa3d2b2bcb34913271e6d",
                      "64b7af5a8532cf95ee0a0dbd",
                      "64b7af434b75259c590fa893",
                      "64b7af734b75259c590fa895",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d4af244bdc2d962f8b4571",
            },
          ],
          ConflictingItems: [
            "59e6920f86f77411d82aa167",
            "59e6927d86f77411da468256",
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6918f86f7746c9f75e849",
            "60194943740c5d77f6705eea",
            "601949593ae8f707c4608daa",
            "5c0d5ae286f7741e46554302",
            "5fbe3ffdf8b6a877a729ea82",
            "5fd20ff893a8961fc660a954",
            "619636be6db0f2477964e710",
            "6196364158ef8c428c287d9f",
            "6196365d58ef8c428c287da1",
            "64b8725c4b75259c590fa899",
          ],
          Slots: [
            {
              _id: "63171672192e68c5460cebc6",
              _mergeSlotWithChildren: false,
              _name: "mod_magazine",
              _parent: "6628f2e31084cf4d62b2b40b",
              _props: {
                filters: [
                  {
                    AnimationIndex: -1,
                    Filter: [
                      "6628f31d2e4dbf64427b378d",
                      "6628f33d585102d8bc5d75db",
                    ],
                  },
                ],
              },
              _proto: "55d30c394bdc2dae468b4577",
              _required: false,
            },
            {
              _id: "62e7c6b6da5b3b57e805e2c9",
              _mergeSlotWithChildren: false,
              _name: "mod_charge",
              _parent: "6628f2e31084cf4d62b2b40b",
              _props: {
                filters: [
                  {
                    Filter: [
                      "62e7c880f68e7a0676050c7c",
                      "62ebbc53e3c1e1ec7c02c44f",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: "62e7c6b6da5b3b57e805e2ca",
              _mergeSlotWithChildren: false,
              _name: "mod_reciever",
              _parent: "6628f2e31084cf4d62b2b40b",
              _props: {
                filters: [
                  {
                    Filter: [
                      "62e7c72df68e7a0676050c77",
                      "62ea7c793043d74a0306e19f",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
          ],
          ammoCaliber: "Caliber762x39",
          defAmmo: "64b7af5a8532cf95ee0a0dbd",
          defMagType: "Aug762Maga",
        },
        LocalePush: {
          en: {
            name: "Modified AUG A3 7.62x39 assault rifle",
            shortName: "AUG 762",
            description:
              "Steyr AUG A3 is a 5.56x45 bullpup assault rifle, developed by the Austrian company Steyr-Daimler-Puch. AUG is known for good ergonomics, decent accuracy, low recoil and sufficient reliability. The rifle also stands out for its futuristic design. The A3 version features a bolt-catch button. This rifles has been modified to be compatible with 7.62x39mm caliber ammunition while retaining it's standout characteristics.",
          },
        },
        HandbookParent: HandbookIDs.MarksmanRifles,
        HandbookPrice: 61999,
        PushMastery: true,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_AUG_30RND,
        newID: "6628f31d2e4dbf64427b378d",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 30,
              _parent: "6628f31d2e4dbf64427b378d",
              _props: {
                filters: [
                  {
                    Filter: [
                      "59e0d99486f7744a32234762",
                      "59e4d3d286f774176a36250a",
                      "5656d7c34bdc2d9d198b4587",
                      "59e4cf5286f7741778269d8a",
                      "59e4d24686f7741776641ac7",
                      "601aa3d2b2bcb34913271e6d",
                      "64b7af5a8532cf95ee0a0dbd",
                      "64b7af434b75259c590fa893",
                      "64b7af734b75259c590fa895",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Steyr AUG 7.62x39 30-round magazine",
            shortName: "AUG",
            description:
              "A 30-round polymer Steyr AUG magazine, for 7.62x39 ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 11999,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_AUG_42RND,
        newID: "6628f33d585102d8bc5d75db",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 42,
              _parent: "6628f33d585102d8bc5d75db",
              _props: {
                filters: [
                  {
                    Filter: [
                      "59e0d99486f7744a32234762",
                      "59e4d3d286f774176a36250a",
                      "5656d7c34bdc2d9d198b4587",
                      "59e4cf5286f7741778269d8a",
                      "59e4d24686f7741776641ac7",
                      "601aa3d2b2bcb34913271e6d",
                      "64b7af5a8532cf95ee0a0dbd",
                      "64b7af434b75259c590fa893",
                      "64b7af734b75259c590fa895",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Steyr AUG 7.62x39 42-round magazine",
            shortName: "AUG",
            description:
              "A 42-round polymer Steyr AUG magazine, for 7.62x39 ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 19999,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });
    //#endregion
    //
    //
    //
    //#region MultiCalibre M4
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.ASSAULTRIFLE_M4A1,
        newID: "6628f50c78434b5effe5ced1",
        parentID: BaseClasses.ASSAULT_RIFLE,
        OverrideProperties: {
          Chambers: [
            {
              _id: this.ref.hashUtil.generate(),
              _mergeSlotWithChildren: false,
              _name: "patron_in_weapon",
              _parent: "6628f50c78434b5effe5ced1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0d5e4486f77478390952fe", //545x39
                      "61962b617c6c7b169525f168",
                      "56dfef82d2720bbd668b4567",
                      "56dff026d2720bb8668b4567",
                      "56dff061d2720bb5668b4567",
                      "56dff0bed2720bb0668b4567",
                      "56dff216d2720bbd668b4568",
                      "56dff2ced2720bb4668b4567",
                      "56dff338d2720bbd668b4569",
                      "56dff3afd2720bba668b4567",
                      "56dff421d2720b5f5a8b4567",
                      "56dff4a2d2720bbd668b456a",
                      "56dff4ecd2720b5f5a8b4568",

                      "59e6920f86f77411d82aa167", //556x54
                      "59e6927d86f77411da468256",
                      "54527a984bdc2d4e668b4567",
                      "54527ac44bdc2d36668b4567",
                      "59e68f6f86f7746c9f75e846",
                      "59e6906286f7746c9f75e847",
                      "59e690b686f7746c9f75e848",
                      "59e6918f86f7746c9f75e849",
                      "60194943740c5d77f6705eea",
                      "601949593ae8f707c4608daa",
                      "5c0d5ae286f7741e46554302",

                      "5fbe3ffdf8b6a877a729ea82", //300blackout
                      "5fd20ff893a8961fc660a954",
                      "619636be6db0f2477964e710",
                      "6196364158ef8c428c287d9f",
                      "6196365d58ef8c428c287da1",
                      "64b8725c4b75259c590fa899",

                      "59e0d99486f7744a32234762", //762x39
                      "59e4d3d286f774176a36250a",
                      "5656d7c34bdc2d9d198b4587",
                      "59e4cf5286f7741778269d8a",
                      "59e4d24686f7741776641ac7",
                      "601aa3d2b2bcb34913271e6d",
                      "64b7af5a8532cf95ee0a0dbd",
                      "64b7af434b75259c590fa893",
                      "64b7af734b75259c590fa895",

                      "5c0d688c86f77413ae3407b2", //9x39
                      "61962d879bb3d20b0946d385",
                      "57a0dfb82459774d3078b56c",
                      "57a0e5022459774d1673f889",
                      "5c0d668f86f7747ccb7f13b2",
                      "6576f96220d53a5b8f3e395e",

                      "5cc80f53e4a949000e1ea4f8", //57
                      "5cc86832d7f00c000d3a6e6c",
                      "5cc86840d7f00c002412c56c",
                      "5cc80f67e4a949035e43bbba",
                      "5cc80f38e4a949001152b560",
                      "5cc80f8fe4a949033b0224a2",
                      "5cc80f79e4a949033c7343b2",
                    ],
                  },
                ],
              },
              _proto: "55d4af244bdc2d962f8b4571",
              _required: false,
            },
          ],
          Slots: [
            {
              _id: "55d354084bdc2d8c2f8b4568",
              _mergeSlotWithChildren: false,
              _name: "mod_pistol_grip",
              _parent: "6628f50c78434b5effe5ced1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0e2ff6d174af02a1659d4a",
                      "5a33e75ac4a2826c6e06d759",
                      "55d4b9964bdc2d1d4e8b456e",
                      "571659bb2459771fb2755a12",
                      "602e71bd53a60014f9705bfa",
                      "6113c3586c780c1e710c90bc",
                      "6113cc78d3a39d50044c065a",
                      "6113cce3d92c473c770200c7",
                      "5cc9bcaed7f00c011c04e179",
                      "5bb20e18d4351e00320205d5",
                      "5bb20e0ed4351e3bac1212dc",
                      "6193dcd0f8ee7e52e4210a28",
                      "5d025cc1d7ad1a53845279ef",
                      "5c6d7b3d2e221600114c9b7d",
                      "57c55efc2459772d2c6271e7",
                      "57af48872459771f0b2ebf11",
                      "57c55f092459772d291a8463",
                      "57c55f112459772d28133310",
                      "57c55f172459772d27602381",
                      "5a339805c4a2826c6e06d73d",
                      "55802f5d4bdc2dac148b458f",
                      "5d15cf3bd7ad1a67e71518b2",
                      "59db3a1d86f77429e05b4e92",
                      "5fbcbd6c187fea44d52eda14",
                      "59db3acc86f7742a2c4ab912",
                      "59db3b0886f77429d72fb895",
                      "615d8faecabb9b7ad90f4d5d",
                      "5b07db875acfc40dc528a5f6",
                      "63f5feead259b42f0b4d6d0f",
                      "652911675ae2ae97b80fdf3c",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: this.ref.hashUtil.generate(),
              _mergeSlotWithChildren: false,
              _name: "mod_magazine",
              _parent: "6628f50c78434b5effe5ced1",
              _props: {
                filters: [
                  {
                    AnimationIndex: -1,
                    Filter: [
                      "55d4887d4bdc2d962f8b4570",
                      "61840bedd92c473c77021635",
                      "61840d85568c120fdd2962a5",
                      "5c05413a0db834001c390617",
                      "5c6d450c2e221600114c997d",
                      "5c6d42cb2e2216000e69d7d1",
                      "59c1383d86f774290a37e0ca",
                      "5aaa5e60e5b5b000140293d6",
                      "5448c1d04bdc2dff2f8b4569",
                      "5aaa5dfee5b5b000140293d3",
                      "5d1340b3d7ad1a0b52682ed7",
                      "544a378f4bdc2d30388b4567",
                      "5d1340bdd7ad1a0e8d245aab",
                      "55802d5f4bdc2dac148b458e",
                      "5d1340cad7ad1a0b0b249869",
                      "6241c2c2117ad530666a5108",
                      "5c6592372e221600133e47d7",
                      "544a37c44bdc2d25388b4567",
                      AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
                      "6628f511ea0ab10dd0c5e2d4",
                      "6628f5191c445ab1b8b8cdf5",
                      "6628f51c8df290deed8983e9",
                      "6628f51e54b4f59a7ade4ef9",
                      "6628f5244c3764ecf474f23c",
                    ],
                  },
                ],
              },
              _proto: "55d30c394bdc2dae468b4577",
              _required: false,
            },
            {
              _id: this.ref.hashUtil.generate(),
              _mergeSlotWithChildren: false,
              _name: "mod_reciever",
              _parent: "6628f50c78434b5effe5ced1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0e2f26d174af02a9625114",
                      "55d355e64bdc2d962f8b4569",
                      "5d4405aaa4b9361e6a4e6bd3",
                      "5c07a8770db8340023300450",
                      AllItemList.RECEIVER_MUR1S,
                      "63f5ed14534b2c3d5479a677",
                      "6628f529b9886fa300b47de7",
                      "6628f52b821b61722b245c10",
                      "6628f52f246a7106c3c3dd22",
                      "6628f531ae7642ade7384366",
                      "6628f534d238d16e71d27601",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: "55d5a3074bdc2d61338b4574",
              _mergeSlotWithChildren: false,
              _name: "mod_stock",
              _parent: "6628f50c78434b5effe5ced1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5a33ca0fc4a282000d72292f",
                      "5c0faeddd174af02a962601f",
                      "5649be884bdc2d79388b4577",
                      "5d120a10d7ad1a4e1026ba85",
                      "5b0800175acfc400153aebd4",
                      "5947e98b86f774778f1448bc",
                      "5947eab886f77475961d96c5",
                      "602e3f1254072b51b239f713",
                      "5c793fb92e221644f31bfb64",
                      "5c793fc42e221600114ca25d",
                      "591aef7986f774139d495f03",
                      "591af10186f774139d495f0e",
                      "627254cc9c563e6e442c398f",
                      "638de3603a1a4031d8260b8c",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: "55d5a30f4bdc2d882f8b4574",
              _mergeSlotWithChildren: false,
              _name: "mod_charge",
              _parent: "6628f50c78434b5effe5ced1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0faf68d174af02a96260b8",
                      "56ea7165d2720b6e518b4583",
                      "55d44fd14bdc2d962f8b456e",
                      "5ea16d4d5aad6446a939753d",
                      "5bb20dbcd4351e44f824c04e",
                      "6033749e88382f4fab3fd2c5",
                      "5b2240bf5acfc40dc528af69",
                      "5d44334ba4b9362b346d1948",
                      "5f633ff5c444ce7e3c30a006",
                      "651bf5617b3b552ef6712cb7",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Multi-Calibre M4A1 Assault Rifle",
            shortName: "MCM4",
            description:
              "A Multi-Calibre variant of the standard M4A1 assault rifle. Modified to be compatible with 5.45, 5.56, 5.7, .300, 7.62 and 9x39 ammunition with the accompanying receivers.",
          },
        },
        HandbookParent: HandbookIDs.AssaultRifles,
        HandbookPrice: 51999,
        PushMastery: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_MUR1S,
        newID: "6628f534d238d16e71d27601",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "5c0d5e4486f77478390952fe", //545x39
            "61962b617c6c7b169525f168",
            "56dfef82d2720bbd668b4567",
            "56dff026d2720bb8668b4567",
            "56dff061d2720bb5668b4567",
            "56dff0bed2720bb0668b4567",
            "56dff216d2720bbd668b4568",
            "56dff2ced2720bb4668b4567",
            "56dff338d2720bbd668b4569",
            "56dff3afd2720bba668b4567",
            "56dff421d2720b5f5a8b4567",
            "56dff4a2d2720bbd668b456a",
            "56dff4ecd2720b5f5a8b4568",

            "59e6920f86f77411d82aa167", //556x45
            "59e6927d86f77411da468256",
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6918f86f7746c9f75e849",
            "60194943740c5d77f6705eea",
            "601949593ae8f707c4608daa",
            "5c0d5ae286f7741e46554302",

            "5fbe3ffdf8b6a877a729ea82", //300blackout
            "5fd20ff893a8961fc660a954",
            "619636be6db0f2477964e710",
            "6196364158ef8c428c287d9f",
            "6196365d58ef8c428c287da1",
            "64b8725c4b75259c590fa899",

            "59e0d99486f7744a32234762", //762x39
            "59e4d3d286f774176a36250a",
            "5656d7c34bdc2d9d198b4587",
            "59e4cf5286f7741778269d8a",
            "59e4d24686f7741776641ac7",
            "601aa3d2b2bcb34913271e6d",
            "64b7af5a8532cf95ee0a0dbd",
            "64b7af434b75259c590fa893",
            "64b7af734b75259c590fa895",

            "5c0d688c86f77413ae3407b2", //9x39
            "61962d879bb3d20b0946d385",
            "57a0dfb82459774d3078b56c",
            "57a0e5022459774d1673f889",
            "5c0d668f86f7747ccb7f13b2",
            "6576f96220d53a5b8f3e395e",
          ],
        },
        LocalePush: {
          en: {
            name: "MCM4 5.7mm Receiver",
            shortName: "MCM4 57",
            description:
              "The MUR-1S modular upper receiver for AR-based weapons, manufactured by Vltor. Fitted with mounts for attaching additional equipment. Chambered in 5.7mm.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 43999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_MUR1S,
        newID: "6628f529b9886fa300b47de7",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "5c0d5e4486f77478390952fe", //545x39
            "61962b617c6c7b169525f168",
            "56dfef82d2720bbd668b4567",
            "56dff026d2720bb8668b4567",
            "56dff061d2720bb5668b4567",
            "56dff0bed2720bb0668b4567",
            "56dff216d2720bbd668b4568",
            "56dff2ced2720bb4668b4567",
            "56dff338d2720bbd668b4569",
            "56dff3afd2720bba668b4567",
            "56dff421d2720b5f5a8b4567",
            "56dff4a2d2720bbd668b456a",
            "56dff4ecd2720b5f5a8b4568",

            "59e6920f86f77411d82aa167", //556x45
            "59e6927d86f77411da468256",
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6918f86f7746c9f75e849",
            "60194943740c5d77f6705eea",
            "601949593ae8f707c4608daa",
            "5c0d5ae286f7741e46554302",

            "59e0d99486f7744a32234762", //762x39
            "59e4d3d286f774176a36250a",
            "5656d7c34bdc2d9d198b4587",
            "59e4cf5286f7741778269d8a",
            "59e4d24686f7741776641ac7",
            "601aa3d2b2bcb34913271e6d",
            "64b7af5a8532cf95ee0a0dbd",
            "64b7af434b75259c590fa893",
            "64b7af734b75259c590fa895",

            "5c0d688c86f77413ae3407b2", //9x39
            "61962d879bb3d20b0946d385",
            "57a0dfb82459774d3078b56c",
            "57a0e5022459774d1673f889",
            "5c0d668f86f7747ccb7f13b2",
            "6576f96220d53a5b8f3e395e",

            "5cc80f53e4a949000e1ea4f8", //57
            "5cc86832d7f00c000d3a6e6c",
            "5cc86840d7f00c002412c56c",
            "5cc80f67e4a949035e43bbba",
            "5cc80f38e4a949001152b560",
            "5cc80f8fe4a949033b0224a2",
            "5cc80f79e4a949033c7343b2",
          ],
        },
        LocalePush: {
          en: {
            name: "MCM4 .300 Receiver",
            shortName: "MCM4 300",
            description:
              "The MUR-1S modular upper receiver for AR-based weapons, manufactured by Vltor. Fitted with mounts for attaching additional equipment. Chambered in .300 blackout.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 43999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_MUR1S,
        newID: "6628f52f246a7106c3c3dd22",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "59e6920f86f77411d82aa167", //556x45
            "59e6927d86f77411da468256",
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6918f86f7746c9f75e849",
            "60194943740c5d77f6705eea",
            "601949593ae8f707c4608daa",
            "5c0d5ae286f7741e46554302",

            "5fbe3ffdf8b6a877a729ea82", //300blackout
            "5fd20ff893a8961fc660a954",
            "619636be6db0f2477964e710",
            "6196364158ef8c428c287d9f",
            "6196365d58ef8c428c287da1",
            "64b8725c4b75259c590fa899",

            "59e0d99486f7744a32234762", //762x39
            "59e4d3d286f774176a36250a",
            "5656d7c34bdc2d9d198b4587",
            "59e4cf5286f7741778269d8a",
            "59e4d24686f7741776641ac7",
            "601aa3d2b2bcb34913271e6d",
            "64b7af5a8532cf95ee0a0dbd",
            "64b7af434b75259c590fa893",
            "64b7af734b75259c590fa895",

            "5c0d688c86f77413ae3407b2", //9x39
            "61962d879bb3d20b0946d385",
            "57a0dfb82459774d3078b56c",
            "57a0e5022459774d1673f889",
            "5c0d668f86f7747ccb7f13b2",
            "6576f96220d53a5b8f3e395e",

            "5cc80f53e4a949000e1ea4f8", //57
            "5cc86832d7f00c000d3a6e6c",
            "5cc86840d7f00c002412c56c",
            "5cc80f67e4a949035e43bbba",
            "5cc80f38e4a949001152b560",
            "5cc80f8fe4a949033b0224a2",
            "5cc80f79e4a949033c7343b2",
          ],
        },
        LocalePush: {
          en: {
            name: "MCM4 5.45x39mm Receiver",
            shortName: "MCM4 545",
            description:
              "The MUR-1S modular upper receiver for AR-based weapons, manufactured by Vltor. Fitted with mounts for attaching additional equipment. Chambered in 5.45x39mm.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 43999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_MUR1S,
        newID: "6628f531ae7642ade7384366",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "5c0d5e4486f77478390952fe", //545x39
            "61962b617c6c7b169525f168",
            "56dfef82d2720bbd668b4567",
            "56dff026d2720bb8668b4567",
            "56dff061d2720bb5668b4567",
            "56dff0bed2720bb0668b4567",
            "56dff216d2720bbd668b4568",
            "56dff2ced2720bb4668b4567",
            "56dff338d2720bbd668b4569",
            "56dff3afd2720bba668b4567",
            "56dff421d2720b5f5a8b4567",
            "56dff4a2d2720bbd668b456a",
            "56dff4ecd2720b5f5a8b4568",

            "59e6920f86f77411d82aa167", //556x45
            "59e6927d86f77411da468256",
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6918f86f7746c9f75e849",
            "60194943740c5d77f6705eea",
            "601949593ae8f707c4608daa",
            "5c0d5ae286f7741e46554302",

            "5fbe3ffdf8b6a877a729ea82", //300blackout
            "5fd20ff893a8961fc660a954",
            "619636be6db0f2477964e710",
            "6196364158ef8c428c287d9f",
            "6196365d58ef8c428c287da1",
            "64b8725c4b75259c590fa899",

            "5c0d688c86f77413ae3407b2", //9x39
            "61962d879bb3d20b0946d385",
            "57a0dfb82459774d3078b56c",
            "57a0e5022459774d1673f889",
            "5c0d668f86f7747ccb7f13b2",
            "6576f96220d53a5b8f3e395e",

            "5cc80f53e4a949000e1ea4f8", //57
            "5cc86832d7f00c000d3a6e6c",
            "5cc86840d7f00c002412c56c",
            "5cc80f67e4a949035e43bbba",
            "5cc80f38e4a949001152b560",
            "5cc80f8fe4a949033b0224a2",
            "5cc80f79e4a949033c7343b2",
          ],
        },
        LocalePush: {
          en: {
            name: "MCM4 7.62x39mm Receiver",
            shortName: "MCM4 762",
            description:
              "The MUR-1S modular upper receiver for AR-based weapons, manufactured by Vltor. Fitted with mounts for attaching additional equipment. Chambered in 7.62x39mm.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 43999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_MUR1S,
        newID: "6628f52b821b61722b245c10",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "5c0d5e4486f77478390952fe", //545x39
            "61962b617c6c7b169525f168",
            "56dfef82d2720bbd668b4567",
            "56dff026d2720bb8668b4567",
            "56dff061d2720bb5668b4567",
            "56dff0bed2720bb0668b4567",
            "56dff216d2720bbd668b4568",
            "56dff2ced2720bb4668b4567",
            "56dff338d2720bbd668b4569",
            "56dff3afd2720bba668b4567",
            "56dff421d2720b5f5a8b4567",
            "56dff4a2d2720bbd668b456a",
            "56dff4ecd2720b5f5a8b4568",

            "59e6920f86f77411d82aa167", //556x45
            "59e6927d86f77411da468256",
            "54527a984bdc2d4e668b4567",
            "54527ac44bdc2d36668b4567",
            "59e68f6f86f7746c9f75e846",
            "59e6906286f7746c9f75e847",
            "59e690b686f7746c9f75e848",
            "59e6918f86f7746c9f75e849",
            "60194943740c5d77f6705eea",
            "601949593ae8f707c4608daa",
            "5c0d5ae286f7741e46554302",

            "5fbe3ffdf8b6a877a729ea82", //300blackout
            "5fd20ff893a8961fc660a954",
            "619636be6db0f2477964e710",
            "6196364158ef8c428c287d9f",
            "6196365d58ef8c428c287da1",
            "64b8725c4b75259c590fa899",

            "59e0d99486f7744a32234762", //762x39
            "59e4d3d286f774176a36250a",
            "5656d7c34bdc2d9d198b4587",
            "59e4cf5286f7741778269d8a",
            "59e4d24686f7741776641ac7",
            "601aa3d2b2bcb34913271e6d",
            "64b7af5a8532cf95ee0a0dbd",
            "64b7af434b75259c590fa893",
            "64b7af734b75259c590fa895",

            "5cc80f53e4a949000e1ea4f8", //57
            "5cc86832d7f00c000d3a6e6c",
            "5cc86840d7f00c002412c56c",
            "5cc80f67e4a949035e43bbba",
            "5cc80f38e4a949001152b560",
            "5cc80f8fe4a949033b0224a2",
            "5cc80f79e4a949033c7343b2",
          ],
        },
        LocalePush: {
          en: {
            name: "MCM4 9x39mm Receiver",
            shortName: "MCM4 939",
            description:
              "The MUR-1S modular upper receiver for AR-based weapons, manufactured by Vltor. Fitted with mounts for attaching additional equipment. Chambered in 9x39mm.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 43999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "6628f5244c3764ecf474f23c",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 32,
              _parent: "6628f5244c3764ecf474f23c",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5cc80f53e4a949000e1ea4f8", //57
                      "5cc86832d7f00c000d3a6e6c",
                      "5cc86840d7f00c002412c56c",
                      "5cc80f67e4a949035e43bbba",
                      "5cc80f38e4a949001152b560",
                      "5cc80f8fe4a949033b0224a2",
                      "5cc80f79e4a949033c7343b2",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "5.7mm Magpul PMAG 32-round magazine",
            shortName: "MCM4 57Mag",
            description:
              "A 32-round polymer Magpul PMAG magazine, for 5.7mm ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 7999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "6628f511ea0ab10dd0c5e2d4",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 32,
              _parent: "6628f511ea0ab10dd0c5e2d4",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5fbe3ffdf8b6a877a729ea82", //300blackout
                      "5fd20ff893a8961fc660a954",
                      "619636be6db0f2477964e710",
                      "6196364158ef8c428c287d9f",
                      "6196365d58ef8c428c287da1",
                      "64b8725c4b75259c590fa899",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: ".300 blackout Magpul PMAG 32-round magazine",
            shortName: "MCM4 300Mag",
            description:
              "A 32-round polymer Magpul PMAG magazine, for .300 blackout ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 7999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "6628f51c8df290deed8983e9",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 32,
              _parent: "6628f51c8df290deed8983e9",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0d5e4486f77478390952fe", //545x39
                      "61962b617c6c7b169525f168",
                      "56dfef82d2720bbd668b4567",
                      "56dff026d2720bb8668b4567",
                      "56dff061d2720bb5668b4567",
                      "56dff0bed2720bb0668b4567",
                      "56dff216d2720bbd668b4568",
                      "56dff2ced2720bb4668b4567",
                      "56dff338d2720bbd668b4569",
                      "56dff3afd2720bba668b4567",
                      "56dff421d2720b5f5a8b4567",
                      "56dff4a2d2720bbd668b456a",
                      "56dff4ecd2720b5f5a8b4568",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "5.45x39mm Magpul PMAG 32-round magazine",
            shortName: "MCM4 545Mag",
            description:
              "A 32-round polymer Magpul PMAG magazine, for 5.45x39mm ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 7999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "6628f51e54b4f59a7ade4ef9",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 32,
              _parent: "6628f51e54b4f59a7ade4ef9",
              _props: {
                filters: [
                  {
                    Filter: [
                      "59e0d99486f7744a32234762", //762x39
                      "59e4d3d286f774176a36250a",
                      "5656d7c34bdc2d9d198b4587",
                      "59e4cf5286f7741778269d8a",
                      "59e4d24686f7741776641ac7",
                      "601aa3d2b2bcb34913271e6d",
                      "64b7af5a8532cf95ee0a0dbd",
                      "64b7af434b75259c590fa893",
                      "64b7af734b75259c590fa895",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "7.62x39mm Magpul PMAG 32-round magazine",
            shortName: "MCM4 762Mag",
            description:
              "A 32-round polymer Magpul PMAG magazine, for 7.62x39mm ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 7999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "6628f5191c445ab1b8b8cdf5",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 32,
              _parent: "6628f5191c445ab1b8b8cdf5",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0d688c86f77413ae3407b2", //9x39
                      "61962d879bb3d20b0946d385",
                      "57a0dfb82459774d3078b56c",
                      "57a0e5022459774d1673f889",
                      "5c0d668f86f7747ccb7f13b2",
                      "6576f96220d53a5b8f3e395e",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "9x39mm Magpul PMAG 32-round magazine",
            shortName: "MCM4 939Mag",
            description:
              "A 32-round polymer Magpul PMAG magazine, for 9x39mm ammunition.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 7999,
      },
    });
    //#endregion
    //
    //
    //
    //#region STIM 46
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SMG_STM9,
        newID: "6628f3786c4f8a10a65adee4",
        parentID: BaseClasses.SMG,
        OverrideProperties: {
          Chambers: [
            {
              _id: this.ref.hashUtil.generate(),
              _mergeSlotWithChildren: false,
              _name: "patron_in_weapon",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5ba26812d4351e003201fef1", //4.6x30
                      "5ba26835d4351e0035628ff5",
                      "5ba2678ad4351e44f824b344",
                      "5ba26844d4351e00334c9475",
                      "64b6979341772715af0f9c39",
                    ],
                  },
                ],
              },
              _proto: "55d4af244bdc2d962f8b4571",
              _required: false,
            },
          ],
          ConflictingItems: [
            "5efb0da7a29a85116f6ea05f",
            "5c3df7d588a4501f290594e5",
            "58864a4f2459770fcc257101",
            "56d59d3ad2720bdb418b4577",
            "5c925fa22e221601da359b7b",
            "5a3c16fe86f77452b62de32a",
            "5efb0e16aeb21837e749c7ff",
            "5c0d56a986f774449d5de529",
            "64b7bbb74b75259c590fa897",
          ],
          Slots: [
            {
              _id: "60339954d62c9b14ed777c08",
              _mergeSlotWithChildren: false,
              _name: "mod_pistol_grip",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0e2ff6d174af02a1659d4a",
                      "5a33e75ac4a2826c6e06d759",
                      "55d4b9964bdc2d1d4e8b456e",
                      "571659bb2459771fb2755a12",
                      "602e71bd53a60014f9705bfa",
                      "6113c3586c780c1e710c90bc",
                      "6113cc78d3a39d50044c065a",
                      "6113cce3d92c473c770200c7",
                      "5cc9bcaed7f00c011c04e179",
                      "5bb20e18d4351e00320205d5",
                      "5bb20e0ed4351e3bac1212dc",
                      "6193dcd0f8ee7e52e4210a28",
                      "5d025cc1d7ad1a53845279ef",
                      "5c6d7b3d2e221600114c9b7d",
                      "57c55efc2459772d2c6271e7",
                      "57af48872459771f0b2ebf11",
                      "57c55f092459772d291a8463",
                      "57c55f112459772d28133310",
                      "57c55f172459772d27602381",
                      "5a339805c4a2826c6e06d73d",
                      "55802f5d4bdc2dac148b458f",
                      "5d15cf3bd7ad1a67e71518b2",
                      "59db3a1d86f77429e05b4e92",
                      "5fbcbd6c187fea44d52eda14",
                      "59db3acc86f7742a2c4ab912",
                      "59db3b0886f77429d72fb895",
                      "615d8faecabb9b7ad90f4d5d",
                      "5b07db875acfc40dc528a5f6",
                      "63f5feead259b42f0b4d6d0f",
                      "652911675ae2ae97b80fdf3c",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: this.ref.hashUtil.generate(),
              _mergeSlotWithChildren: false,
              _name: "mod_magazine",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    AnimationIndex: -1,
                    Filter: [
                      "6628f38262cab98c01ffada1",
                      "6628f38835c496a91efdef37",
                    ],
                  },
                ],
              },
              _proto: "55d30c394bdc2dae468b4577",
              _required: false,
            },
            {
              _id: this.ref.hashUtil.generate(),
              _mergeSlotWithChildren: false,
              _name: "mod_reciever",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    Filter: ["6628f37eb50e789115223da9"],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: "60339954d62c9b14ed777c0b",
              _mergeSlotWithChildren: false,
              _name: "mod_stock_001",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5a33ca0fc4a282000d72292f",
                      "5c0faeddd174af02a962601f",
                      "5649be884bdc2d79388b4577",
                      "5d120a10d7ad1a4e1026ba85",
                      "5b0800175acfc400153aebd4",
                      "5947e98b86f774778f1448bc",
                      "5947eab886f77475961d96c5",
                      "602e3f1254072b51b239f713",
                      "5c793fb92e221644f31bfb64",
                      "5c793fc42e221600114ca25d",
                      "591aef7986f774139d495f03",
                      "591af10186f774139d495f0e",
                      "627254cc9c563e6e442c398f",
                      "638de3603a1a4031d8260b8c",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: "60339954d62c9b14ed777c0c",
              _mergeSlotWithChildren: false,
              _name: "mod_charge",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5c0faf68d174af02a96260b8",
                      "56ea7165d2720b6e518b4583",
                      "55d44fd14bdc2d962f8b456e",
                      "5ea16d4d5aad6446a939753d",
                      "5bb20dbcd4351e44f824c04e",
                      "6033749e88382f4fab3fd2c5",
                      "5b2240bf5acfc40dc528af69",
                      "5d44334ba4b9362b346d1948",
                      "5f633ff5c444ce7e3c30a006",
                      "651bf5617b3b552ef6712cb7",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: true,
            },
            {
              _id: "6033d3b2af437007501f2b03",
              _mergeSlotWithChildren: false,
              _name: "mod_tactical_000",
              _parent: "6628f3786c4f8a10a65adee4",
              _props: {
                filters: [
                  {
                    Filter: [
                      "602f85fd9b513876d4338d9c",
                      "60338ff388382f4fab3fd2c8",
                    ],
                    Shift: 0,
                  },
                ],
              },
              _proto: "55d30c4c4bdc2db4468b457e",
              _required: false,
            },
          ],
          ammoCaliber: "Caliber46x30",
          defAmmo: "5ba2678ad4351e44f824b344",
          defMagType: "6628f38262cab98c01ffada1",
          weapFireType: ["single", "fullauto"],
        },
        LocalePush: {
          en: {
            name: "Soyuz-TM STM-46 Gen.2 4.6x30 carbine",
            shortName: "STM 4.6x30",
            description:
              'A PCC carbine with excellent performance already "out of the box", manufactured by Soyuz-TM Arms. Designed with the participation of world bronze medalist in Semi-Auto Rifle Vadim Mikhailov. Accuracy, speed, comfort of recoil. Compatible with custom 4.6x30mm magazines.',
          },
        },
        HandbookParent: HandbookIDs.SMGs,
        HandbookPrice: 47999,
        PushMastery: true,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_9X19_BIG_STICK_33RND,
        newID: "6628f38262cab98c01ffada1",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 33,
              _parent: "6628f38262cab98c01ffada1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5ba26812d4351e003201fef1",
                      "5ba26835d4351e0035628ff5",
                      "5ba2678ad4351e44f824b344",
                      "5ba26844d4351e00334c9475",
                      "64b6979341772715af0f9c39",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: 'Glock 4.6x30 "Big Stick" 33-round magazine',
            shortName: "STM-46M",
            description:
              "A factory-produced 33-round 4.6x30 magazine for the custom Soyuz-TM STM-46 Gen.2 4.6x30mm carbine.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 8999,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_9X19_G_SGMT_50RND,
        newID: "6628f38835c496a91efdef37",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 50,
              _parent: "6628f38262cab98c01ffada1",
              _props: {
                filters: [
                  {
                    Filter: [
                      "5ba26812d4351e003201fef1",
                      "5ba26835d4351e0035628ff5",
                      "5ba2678ad4351e44f824b344",
                      "5ba26844d4351e00334c9475",
                      "64b6979341772715af0f9c39",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Glock 4.6x30 SGM Tactical 50-round drum magazine",
            shortName: "STM-46D",
            description:
              "A high-capacity 50-round magazine for the custom Soyuz-TM STM-46 Gen.2 4.6x30mm carbine. Made in Korea and imported by SGM Tactical. Can hold even more than 50 rounds, but the manufacturer does not recommend loading more.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 18499,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_STM9,
        newID: "6628f37eb50e789115223da9",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "5efb0da7a29a85116f6ea05f", //9x19
            "5c3df7d588a4501f290594e5",
            "58864a4f2459770fcc257101",
            "56d59d3ad2720bdb418b4577",
            "5c925fa22e221601da359b7b",
            "5a3c16fe86f77452b62de32a",
            "5efb0e16aeb21837e749c7ff",
            "5c0d56a986f774449d5de529",
            "64b7bbb74b75259c590fa897",
          ],
        },
        LocalePush: {
          en: {
            name: "STM-46 4.6x30 upper receiver",
            shortName: "6628f3786c4f8a10a65adee4 Rec",
            description:
              "An upper receiver for the STM-46 Gen.2 4.6x30 carbine. Equipped with a mount for attaching additional tactical devices.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 31999,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
      },
    });
    //#endregion
    //
    //
    //
    //#region Judge
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.PISTOL_GLOCK_17,
        newID: "6628f76df1a913e3afc16360",
        parentID: BaseClasses.PISTOL,
        OverrideProperties: {
          Chambers: [
            {
              _name: "patron_in_weapon",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66280a30d3b6f288cb6b9653",
                      "662809f445b5ff428e21ac0a",
                      "662808ec26a8e83120bb25fe",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d4af244bdc2d962f8b4571",
            },
          ],
          Slots: [
            {
              _name: "mod_barrel",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5a6b5b8a8dc32e001207faf3",
                      "5a6b5e468dc32e001207faf5",
                      "5a6b60158dc32e000a31138b",
                      "5a6b5f868dc32e000a311389",
                      "5a6b5ed88dc32e000c52ec86",
                    ],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_pistol_grip",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["5a7b4960e899ef197b331a2d"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_reciever",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["6628f7705124be8295a0bdd9"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_magazine",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    AnimationIndex: 0,
                    Filter: [
                      "6628f77390fd0c39ebfa1125",
                      "6628f7750e470be83e65dc76",
                      "6628f7786fbce2d268af4913",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c394bdc2dae468b4577",
            },
            {
              _name: "mod_tactical",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5a7ad74e51dfba0015068f45",
                      "5a800961159bd4315e3a1657",
                      "5cc9c20cd7f00c001336c65d",
                      "5d2369418abbc306c62e0c80",
                      "5b07dd285acfc4001754240d",
                      "56def37dd2720bec348b456a",
                      "5a7b483fe899ef0016170d15",
                      "5a5f1ce64f39f90b401987bc",
                      "560d657b4bdc2da74d8b4572",
                      "5a7ad4af51dfba0013379717",
                      "5a7b4900e899ef197b331a2a",
                      "6272370ee4013c5d7e31f418",
                      "6272379924e29f06af4d5ecb",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_mount",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["5a7ad55551dfba0015068f42"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_stock",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f76df1a913e3afc16360",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["5d1c702ad7ad1a632267f429"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
          ammoCaliber: "Caliber1143x23ACP",
          defAmmo: "5efb0cabfb3e451d70735af5",
          defMagType: "6628f77390fd0c39ebfa1125",
          weapFireType: ["single", "fullauto"],
        },
        LocalePush: {
          en: {
            name: "The Judge",
            shortName: "Judge",
            description:
              "The Judge is a handgun capable of loading 12 gauge shotgun shells. Many scavs quiver in fear when they hear the name.",
          },
        },
        HandbookParent: HandbookIDs.Pistols,
        HandbookPrice: 55999,
        PushMastery: true,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_G_AW_C,
        newID: "6628f7705124be8295a0bdd9",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "5efb0da7a29a85116f6ea05f", //9x19
            "5c3df7d588a4501f290594e5",
            "58864a4f2459770fcc257101",
            "56d59d3ad2720bdb418b4577",
            "5c925fa22e221601da359b7b",
            "5a3c16fe86f77452b62de32a",
            "5efb0e16aeb21837e749c7ff",
            "5c0d56a986f774449d5de529",
            "64b7bbb74b75259c590fa897",
          ],
        },
        LocalePush: {
          en: {
            name: "Judge custom Lone Wolf Slide",
            shortName: "Judge Lone Wolf",
            description:
              "A custom Lone Wolf receiver modified to fit on the Judge handgun. The sound of the slide brings nightmares to many.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 41999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_9X19_GLOCK_9X19_17RND,
        newID: "6628f77390fd0c39ebfa1125",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 17,
              _parent: "6628f77390fd0c39ebfa1125",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66280a30d3b6f288cb6b9653",
                      "662809f445b5ff428e21ac0a",
                      "662808ec26a8e83120bb25fe",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Judge 17 Round Magazine",
            shortName: "Judge 17 Mag",
            description:
              "A 17-round magazine made for the Judge handgun, the sound of which causes scavs to quiver in fear.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 11999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_9X19_BIG_STICK_33RND,
        newID: "6628f7750e470be83e65dc76",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 33,
              _parent: "6628f7750e470be83e65dc76",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66280a30d3b6f288cb6b9653",
                      "662809f445b5ff428e21ac0a",
                      "662808ec26a8e83120bb25fe",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Judge 33 Round Magazine",
            shortName: "Judge 33 Mag",
            description:
              "A 33-round magazine made for the Judge handgun, the sound of which causes scavs to quiver in fear.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 15499,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_9X19_G_SGMT_50RND,
        newID: "6628f7786fbce2d268af4913",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 50,
              _parent: "6628f7786fbce2d268af4913",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66280a30d3b6f288cb6b9653",
                      "662809f445b5ff428e21ac0a",
                      "662808ec26a8e83120bb25fe",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Judge Drum Magazine",
            shortName: "Judge Drum",
            description:
              "A 50-round Drum magazine made for the Judge handgun, the sound of which causes scavs to quiver in fear.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 25999,
      },
    });
    //#endregion
    //
    //
    //
    //#region Jury
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.ASSAULT_RIFLE_SPEAR,
        newID: "6628f8813e3fe94f5f035010",
        parentID: BaseClasses.ASSAULT_RIFLE,
        OverrideProperties: {
          Chambers: [
            {
              _name: "patron_in_weapon",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f8813e3fe94f5f035010",
              _props: {
                filters: [
                  {
                    Filter: [
                      "6628185208dd86f969db7e03",
                      "662818a23a552da6aef8fada",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d4af244bdc2d962f8b4571",
            },
          ],
          Slots: [
            {
              _name: "mod_pistol_grip",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f8813e3fe94f5f035010",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "55d4b9964bdc2d1d4e8b456e",
                      "571659bb2459771fb2755a12",
                      "602e71bd53a60014f9705bfa",
                      "6113c3586c780c1e710c90bc",
                      "6113cc78d3a39d50044c065a",
                      "6113cce3d92c473c770200c7",
                      "5cc9bcaed7f00c011c04e179",
                      "5bb20e18d4351e00320205d5",
                      "5bb20e0ed4351e3bac1212dc",
                      "6193dcd0f8ee7e52e4210a28",
                      "5d025cc1d7ad1a53845279ef",
                      "5c6d7b3d2e221600114c9b7d",
                      "57c55efc2459772d2c6271e7",
                      "57af48872459771f0b2ebf11",
                      "57c55f092459772d291a8463",
                      "57c55f112459772d28133310",
                      "57c55f172459772d27602381",
                      "5a339805c4a2826c6e06d73d",
                      "55802f5d4bdc2dac148b458f",
                      "5d15cf3bd7ad1a67e71518b2",
                      "59db3a1d86f77429e05b4e92",
                      "5fbcbd6c187fea44d52eda14",
                      "59db3acc86f7742a2c4ab912",
                      "59db3b0886f77429d72fb895",
                      "615d8faecabb9b7ad90f4d5d",
                      "5b07db875acfc40dc528a5f6",
                      "63f5feead259b42f0b4d6d0f",
                      "652911675ae2ae97b80fdf3c",
                    ],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_magazine",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f8813e3fe94f5f035010",
              _props: {
                filters: [
                  {
                    AnimationIndex: -1,
                    Filter: [
                      "6628f887f6ec08df7b7dc336",
                      "6628f88aaa160dcd09a782e7",
                      "6628f88df6034dfe1933f636",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c394bdc2dae468b4577",
            },
            {
              _name: "mod_reciever",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f8813e3fe94f5f035010",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["6628f885b95f6ae9d977162f"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_stock_000",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f8813e3fe94f5f035010",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "58ac1bf086f77420ed183f9f",
                      "5894a13e86f7742405482982",
                      "5fbcc429900b1d5091531dd7",
                      "5fbcc437d724d907e2077d5c",
                      "5c5db6ee2e221600113fba54",
                      "5c5db6f82e2216003a0fe914",
                      "6529348224cbe3c74a05e5c4",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_charge",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f8813e3fe94f5f035010",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["6529109524cbe3c74a05e5b7"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
          ammoCaliber: "Caliber68x51",
          defAmmo: "6628185208dd86f969db7e03",
          defMagType: "6628f887f6ec08df7b7dc336",
        },
        LocalePush: {
          en: {
            name: "The Jury",
            shortName: "Jury",
            description:
              "The Overseer of judgement. Or at least that's what it appears to be, considering the amount of scavs and PMC's brought down by it.",
          },
        },
        HandbookParent: HandbookIDs.MarksmanRifles,
        HandbookPrice: 60999,
        PushMastery: true,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_SPEAR,
        newID: "6628f887f6ec08df7b7dc336",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 20,
              _parent: "6628f887f6ec08df7b7dc336",
              _props: {
                filters: [
                  {
                    Filter: [
                      "6628185208dd86f969db7e03",
                      "662818a23a552da6aef8fada",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Jury Magazine",
            shortName: "Jury Mag",
            description:
              "A 20 round extended magazine for the Jury marksman rifle. Nobody knows who produced these or where they come from.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 6999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_SPEAR_EXT,
        newID: "6628f88aaa160dcd09a782e7",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 25,
              _parent: "6628f88aaa160dcd09a782e7",
              _props: {
                filters: [
                  {
                    Filter: [
                      "6628185208dd86f969db7e03",
                      "662818a23a552da6aef8fada",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Jury Extended Magazine",
            shortName: "Jury ExtMag",
            description:
              "A 25 round extended magazine for the Jury marksman rifle. Nobody knows who produced these or where they come from.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 14999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_762X51_X14_762_50RND,
        newID: "6628f88df6034dfe1933f636",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 50,
              _parent: "6628f88df6034dfe1933f636",
              _props: {
                filters: [
                  {
                    Filter: [
                      "6628185208dd86f969db7e03",
                      "662818a23a552da6aef8fada",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Jury Drum Magazine",
            shortName: "Jury Drum",
            description:
              "A 50 round drum magazine for the Jury marksman rifle. Nobody knows who produced these or where they come from.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 29999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_SPEAR,
        newID: "6628f885b95f6ae9d977162f",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          ConflictingItems: [
            "6529243824cbe3c74a05e5c1", //6.8x51
            "6529302b8c26af6326029fb7",
          ],
        },
        LocalePush: {
          en: {
            name: "Jury Custom upper receiver",
            shortName: "Jury Rec",
            description:
              "An upper receiver for the Jury marksman rifle. Although its origin is a mystery, it is very effective at what it does, killing enemies.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 39999,
      },
    });
    //#endregion
    //
    //
    //
    //#region Executioner
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SNIPERRIFLE_M700,
        newID: "6628f96fd59ab54dedb55801",
        parentID: BaseClasses.SNIPER_RIFLE,
        OverrideProperties: {
          Chambers: [
            {
              _name: "patron_in_weapon",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f96fd59ab54dedb55801",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66281ab7fca966e5021f81b5",
                      "66281ac038f9aebf6f914138",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d4af244bdc2d962f8b4571",
            },
          ],
          Slots: [
            {
              _name: "mod_magazine",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f96fd59ab54dedb55801",
              _props: {
                filters: [
                  {
                    AnimationIndex: 0,
                    Filter: [
                      "6628f973b21453a8afc0db68",
                      "6628f977030da8d4c028f5c7",
                      "6628f979c3da61a625d97d69",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c394bdc2dae468b4577",
            },
            {
              _name: "mod_stock",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f96fd59ab54dedb55801",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5cde739cd7f00c0010373bd3",
                      "5d25d0ac8abbc3054f3e61f7",
                      "5bfeb32b0db834001a6694d9",
                      "5cdeac22d7f00c000f26168f",
                      "5cf13123d7f00c1085616a50",
                    ],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_barrel",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f96fd59ab54dedb55801",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5d2703038abbc3105103d94c",
                      "5bfebc250db834001a6694e1",
                      "5bfebc320db8340019668d79",
                      "5d2702e88abbc31ed91efc44",
                    ],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_mount",
              _id: this.ref.hashUtil.generate(),
              _parent: "6628f96fd59ab54dedb55801",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5cde7b43d7f00c000d36b93e",
                      "5bfebc5e0db834001a6694e5",
                      "5bfebc530db834001d23eb65",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
          defMagType: "6628f973b21453a8afc0db68",
          defAmmo: "66281ab7fca966e5021f81b5",
          ammoCaliber: "Caliber762x51",
        },
        LocalePush: {
          en: {
            name: "The Executioner",
            shortName: "Executioner",
            description:
              "The Executioner. This is the final stop for many scavs and PMCs. It truly does live up to its name.",
          },
        },
        HandbookParent: HandbookIDs.BoltActionRifles,
        HandbookPrice: 91999,
        PushMastery: true,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            "5909d89086f77472591234a0",
            "5909d7cf86f77470ee57d75a",
            "5909d76c86f77471e53d2adf",
            "5909d5ef86f77467974efbd8",
            "578f87ad245977356274f2cc",
          ],
          StaticLootProbability: 5,
        },
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_762X51_WYATT_5RND,
        newID: "6628f973b21453a8afc0db68",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 5,
              _parent: "6628f973b21453a8afc0db68",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66281ab7fca966e5021f81b5",
                      "66281ac038f9aebf6f914138",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Executioner Wyatt Magazine",
            shortName: "Executioner Mag",
            description:
              "A custom Wyatt outdoor magazine for the Executioner sniper rifle. With the stopping power loaded inside, you probably only need one of these.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 14999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_762X51_AICS_5RND,
        newID: "6628f977030da8d4c028f5c7",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 5,
              _parent: "6628f977030da8d4c028f5c7",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66281ab7fca966e5021f81b5",
                      "66281ac038f9aebf6f914138",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Executioner AICS Magazine",
            shortName: "Executioner AICS",
            description:
              "A custom AICS magazine for the Executioner sniper rifle. With the stopping power loaded inside, you probably only need one of these.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 14999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_762X51_PMAG_AC_5RND,
        newID: "6628f979c3da61a625d97d69",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Cartridges: [
            {
              _name: "cartridges",
              _id: this.ref.hashUtil.generate(),
              _max_count: 5,
              _parent: "6628f979c3da61a625d97d69",
              _props: {
                filters: [
                  {
                    Filter: [
                      "66281ab7fca966e5021f81b5",
                      "66281ac038f9aebf6f914138",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Executioner PMAG",
            shortName: "Executioner PMAG",
            description:
              "A custom PMAG for the Executioner sniper rifle. With the stopping power loaded inside, you probably only need one of these.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 14999,
      },
    });
    //#endregion
    //
    //
    //
    //#region Famas
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.ASSAULTRIFLE_AUG_A3,
        newID: "FamasAR",
        parentID: BaseClasses.ASSAULT_RIFLE,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/weapons/famas/weapon_mas_famas_556x45_container.bundle",
            rcid: "",
          },
          Slots: [
            {
              _name: "mod_muzzle",
              _id: "FamasAR_barrel",
              _parent: "FamasAR",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["Famas488mmBrl"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_magazine",
              _id: "FamasAR_magazine",
              _parent: "FamasAR",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["Famas25rd", "Famas30rd"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_scope",
              _id: "FamasAR_scope",
              _parent: "FamasAR",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["FamasUR"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_handguard",
              _id: "FamasAR_handguard",
              _parent: "FamasAR",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["FamasBottomRail"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_tactical_002",
              _id: "FamasAR_tac02",
              _parent: "FamasAR",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["FamasSideRail"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
          ammoCaliber: "Caliber556x45NATO",
          SingleFireRate: 450,
          bFirerate: 1100,
          defMagType: "Famas30rd",
          Width: 2,
          Height: 1,
          BaseMalfunctionChance: 0,
        },
        LocalePush: {
          en: {
            name: "GIAT FAMAS 5.56x45 Assault Rifle",
            shortName: "FAMAS",
            description:
              "The FAMAS (Fusil d'Assaut de la Manufacture d'Armes de Saint-Étienne) is a bullpup assault rifle designed and manufactured in France by MAS in 1978. The FAMAS is recognised for its high rate of fire at 1,100 rounds per minute.",
          },
        },
        HandbookParent: HandbookIDs.AssaultRifles,
        HandbookPrice: 34230,
        PushMastery: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.RECEIVER_AUG_A3,
        newID: "FamasUR",
        parentID: BaseClasses.RECEIVER,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/upper_famas.bundle",
            rcid: "",
          },
          Slots: [
            {
              _name: "mod_mount",
              _id: "FamasUR_mount",
              _parent: "FamasUR",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["FamasOpticRail"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Upper part for GIAT FAMAS",
            shortName: "FAMAS Upper",
            description:
              "Standard upper part manufactured by GIAT for FAMAS assault rifle 5.56x45.",
          },
        },
        HandbookParent: HandbookIDs.ReceiversAndSlides,
        HandbookPrice: 22640,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "Famas25rd",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/mag_famas_556x45_25.bundle",
            rcid: "",
          },
          Cartridges: [
            {
              _name: "cartridges",
              _id: "Famas25rd_cartridges",
              _parent: "Famas25rd",
              _max_count: 25,
              _props: {
                filters: [
                  {
                    Filter: [
                      "59e6920f86f77411d82aa167",
                      "59e6927d86f77411da468256",
                      "54527a984bdc2d4e668b4567",
                      "54527ac44bdc2d36668b4567",
                      "59e68f6f86f7746c9f75e846",
                      "59e6906286f7746c9f75e847",
                      "59e690b686f7746c9f75e848",
                      "59e6918f86f7746c9f75e849",
                      "60194943740c5d77f6705eea",
                      "601949593ae8f707c4608daa",
                      "5c0d5ae286f7741e46554302",
                      "5fbe3ffdf8b6a877a729ea82",
                      "5fd20ff893a8961fc660a954",
                      "619636be6db0f2477964e710",
                      "6196364158ef8c428c287d9f",
                      "6196365d58ef8c428c287da1",
                      "64b8725c4b75259c590fa899",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "GIAT FAMAS 5.56x45 25-round box magazine",
            shortName: "FAMAS 25",
            description:
              "25-round standard GIAT FAMAS metal magazine for 5.56x45 NATO cartridges.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 3120,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MAGAZINE_556X45_BATTLEMAG_30RND,
        newID: "Famas30rd",
        parentID: BaseClasses.MAGAZINE,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/mag_famas_556x45_30.bundle",
            rcid: "",
          },
          Cartridges: [
            {
              _name: "cartridges",
              _id: "Famas30rd_cartridges",
              _parent: "Famas30rd",
              _max_count: 30,
              _props: {
                filters: [
                  {
                    Filter: [
                      "59e6920f86f77411d82aa167",
                      "59e6927d86f77411da468256",
                      "54527a984bdc2d4e668b4567",
                      "54527ac44bdc2d36668b4567",
                      "59e68f6f86f7746c9f75e846",
                      "59e6906286f7746c9f75e847",
                      "59e690b686f7746c9f75e848",
                      "59e6918f86f7746c9f75e849",
                      "60194943740c5d77f6705eea",
                      "601949593ae8f707c4608daa",
                      "5c0d5ae286f7741e46554302",
                      "5fbe3ffdf8b6a877a729ea82",
                      "5fd20ff893a8961fc660a954",
                      "619636be6db0f2477964e710",
                      "6196364158ef8c428c287d9f",
                      "6196365d58ef8c428c287da1",
                      "64b8725c4b75259c590fa899",
                    ],
                  },
                ],
              },
              _proto: "5748538b2459770af276a261",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "GIAT FAMAS 5.56x45 30-round extended magazine",
            shortName: "FAMAS 30",
            description:
              "30-round extended GIAT FAMAS metal magazine for 5.56x45 NATO cartridges.",
          },
        },
        HandbookParent: HandbookIDs.Magazines,
        HandbookPrice: 4210,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.BARREL_AR15_18,
        newID: "Famas488mmBrl",
        parentID: BaseClasses.BARREL,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/barrel_famas_488mm.bundle",
            rcid: "",
          },
          Slots: [
            {
              _name: "mod_muzzle",
              _id: "Famas488mmBrl_muzzle",
              _parent: "Famas488mmBrl",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5b3a16655acfc40016387a2a",
                      "5c7e5f112e221600106f4ede",
                      "5c0fafb6d174af02a96260ba",
                      "5cf6937cd7f00c056c53fb39",
                      "544a38634bdc2d58388b4568",
                      "5cff9e5ed7ad1a09407397d4",
                      "5c48a2a42e221602b66d1e07",
                      "5f6372e2865db925d54f3869",
                      "615d8e2f1cb55961fa0fd9a4",
                      "56ea8180d2720bf2698b456a",
                      "5d02676dd7ad1a049e54f6dc",
                      "56ea6fafd2720b844b8b4593",
                      "5943ee5a86f77413872d25ec",
                      "609269c3b0e443224b421cc1",
                      "5c7fb51d2e2216001219ce11",
                      "5ea172e498dacb342978818e",
                      "5c6d710d2e22165df16b81e7",
                      "612e0e55a112697a4b3a66e7",
                      "5d440625a4b9361eec4ae6c5",
                      "5cc9b815d7f00c000e2579d6",
                      "5a7c147ce899ef00150bd8b8",
                      "5c7954d52e221600106f4cc7",
                      "59bffc1f86f77435b128b872",
                      "5a9fbb84a2750c00137fa685",
                      "626667e87379c44d557b7550",
                      "62669bccdb9ebb4daa44cd14",
                      "626a74340be03179a165e30c",
                      "6386120cd6baa055ad1e201c",
                      "63ac5c9658d0485fc039f0b8",
                      "6405ff6bd4578826ec3e377a",
                      "64943b74e9998d641b0412ed",
                      "FamasFlashHider",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "488mm barrel for FAMAS 5.56x45",
            shortName: "488mm FAMAS 5.56x45",
            description: "A barrel for GIAT FAMAS 5.56x45 ammo, 488mm long.",
          },
        },
        HandbookParent: HandbookIDs.Barrels,
        HandbookPrice: 26460,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.FLASHHIDER_WAR_556,
        newID: "FamasFlashHider",
        parentID: BaseClasses.FLASH_HIDER,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/muzzle_famas_flash_hider.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "GIAT 5.56x45 flash hider for FAMAS",
            shortName: "FAMAS FH",
            description:
              "Standard issue flash hider designed for installation on GIAT FAMAS chambered in 5.56x45mm.",
          },
        },
        HandbookParent: HandbookIDs.FlashhidersAndBrakes,
        HandbookPrice: 1340,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MOUNT_M700_MULTISLOT,
        newID: "FamasOpticRail",
        parentID: BaseClasses.MOUNT,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/mount_famas_opticrail.bundle",
            rcid: "",
          },
          Slots: [
            {
              _name: "mod_scope",
              _id: "FamasOpticRail_scope",
              _parent: "FamasOpticRail",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "57ac965c24597706be5f975c",
                      "57aca93d2459771f2c7e26db",
                      "544a3f024bdc2d1d388b4568",
                      "544a3a774bdc2d3a388b4567",
                      "5d2dc3e548f035404a1a4798",
                      "57adff4f24597737f373b6e6",
                      "5c0517910db83400232ffee5",
                      "591c4efa86f7741030027726",
                      "570fd79bd2720bc7458b4583",
                      "570fd6c2d2720bc6458b457f",
                      "558022b54bdc2dac148b458d",
                      "5c07dd120db834001c39092d",
                      "5c0a2cec0db834001b7ce47d",
                      "58491f3324597764bc48fa02",
                      "584924ec24597768f12ae244",
                      "5b30b0dc5acfc400153b7124",
                      "6165ac8c290d254f5e6b2f6c",
                      "60a23797a37c940de7062d02",
                      "5d2da1e948f035477b1ce2ba",
                      "5c0505e00db834001b735073",
                      "609a63b6e2ff132951242d09",
                      "584984812459776a704a82a6",
                      "59f9d81586f7744c7506ee62",
                      "570fd721d2720bc5458b4596",
                      "57ae0171245977343c27bfcf",
                      "5dfe6104585a0c3e995c7b82",
                      "5d1b5e94d7ad1a2b865a96b0",
                      "609bab8b455afd752b2e6138",
                      "58d39d3d86f77445bb794ae7",
                      "616554fe50224f204c1da2aa",
                      "5c7d55f52e221644f31bff6a",
                      "616584766ef05c2ce828ef57",
                      "5b3b6dc75acfc47a8773fb1e",
                      "615d8d878004cc50514c3233",
                      "5b2389515acfc4771e1be0c0",
                      "577d128124597739d65d0e56",
                      "618b9643526131765025ab35",
                      "618bab21526131765025ab3f",
                      "5c86592b2e2216000e69e77c",
                      "5a37ca54c4a282000d72296a",
                      "5d0a29fed7ad1a002769ad08",
                      "58d2664f86f7747fec5834f6",
                      "57c69dd424597774c03b7bbc",
                      "5b3b99265acfc4704b4a1afb",
                      "5aa66a9be5b5b0214e506e89",
                      "5aa66c72e5b5b00016327c93",
                      "5c1cdd302e221602b3137250",
                      "61714b2467085e45ef140b2c",
                      "6171407e50224f204c1da3c5",
                      "61713cc4d8e3106d9806c109",
                      "5b31163c5acfc400153b71cb",
                      "5a33b652c4a28232996e407c",
                      "5a33b2c9c4a282000c5a9511",
                      "59db7eed86f77461f8380365",
                      "5a1ead28fcdbcb001912fa9f",
                      "5dff77c759400025ea5150cf",
                      "626bb8532c923541184624b4",
                      "62811f461d5df4475f46a332",
                      "63fc449f5bd61c6cf3784a88",
                      "6477772ea8a38bb2050ed4db",
                      "6478641c19d732620e045e17",
                      "64785e7c19d732620e045e15",
                      "653931da5db71d30ab1d6296",
                      "65392f611406374f82152ba5",
                      "655f13e0a246670fb0373245",
                      "6567e751a715f85433025998",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_sight_rear",
              _id: "FamasOpticRail_rearsight",
              _parent: "FamasOpticRail",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5ba26b17d4351e00367f9bdd",
                      "5dfa3d7ac41b2312ea33362a",
                      "5c1780312e221602b66cc189",
                      "5fb6564947ce63734e3fa1da",
                      "5bc09a18d4351e003562b68e",
                      "5c18b9192e2216398b5a8104",
                      "5fc0fa957283c4046c58147e",
                      "5894a81786f77427140b8347",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_sight_front",
              _id: "FamasOpticRail_frontsight",
              _parent: "FamasOpticRail",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5ba26b01d4351e0085325a51",
                      "5dfa3d950dee1b22f862eae0",
                      "5c17804b2e2216152006c02f",
                      "5fb6567747ce63734e3fa1dc",
                      "5bc09a30d4351e00367fb7c8",
                      "5c18b90d2e2216152142466b",
                      "5fc0fa362770a0045c59c677",
                      "5894a73486f77426d259076c",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_tactical_000",
              _id: "FamasOpticRail_tac00",
              _parent: "FamasOpticRail",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["5649a2464bdc2d91118b45a8"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "GIAT top optic rail for FAMAS",
            shortName: "FAMAS top",
            description:
              "Custom top mount for installation of optical scopes, collimator sights and other devices and accessories on FAMAS.",
          },
        },
        HandbookParent: HandbookIDs.Mounts,
        HandbookPrice: 5640,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MOUNT_CASV_4,
        newID: "FamasSideRail",
        parentID: BaseClasses.MOUNT,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/mount_famas_side.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "GIAT FAMAS side rail",
            shortName: "FAMAS side",
            description:
              "Short side rail allows you to install additional equipment on the side of a FAMAS assault rifle.",
          },
        },
        HandbookParent: HandbookIDs.Mounts,
        HandbookPrice: 2033,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MOUNT_CASV_6,
        newID: "FamasBottomRail",
        parentID: BaseClasses.MOUNT,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/famas/mount_famas_bottom.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "GIAT FAMAS bottom rail",
            shortName: "FAMAS bottom",
            description:
              "Bottom rail allows you to install different foregrips on a FAMAS assault rifle.",
          },
        },
        HandbookParent: HandbookIDs.Mounts,
        HandbookPrice: 3340,
      },
    });
    //#endregion
    //
    //
    //
    //#region L85A2
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.ASSAULTRIFLE_MDR_556X45,
        newID: "L85A2",
        parentID: BaseClasses.ASSAULT_RIFLE,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/weapons/l85a2/weapon_l85a2_556x45_container.bundle",
            rcid: "",
          },
          Slots: [
            {
              _name: "mod_pistol_grip",
              _id: "5c488a752e221602b412af65",
              _parent: "L85A2",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["L85A2PistolGrip"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_magazine",
              _id: "5c488a752e221602b412af66",
              _parent: "L85A2",
              _props: {
                filters: [
                  {
                    AnimationIndex: -1,
                    Filter: [
                      "55d4887d4bdc2d962f8b4570",
                      "61840bedd92c473c77021635",
                      "61840d85568c120fdd2962a5",
                      "5c05413a0db834001c390617",
                      "5c6d450c2e221600114c997d",
                      "5c6d42cb2e2216000e69d7d1",
                      "59c1383d86f774290a37e0ca",
                      "5aaa5e60e5b5b000140293d6",
                      "5448c1d04bdc2dff2f8b4569",
                      "5aaa5dfee5b5b000140293d3",
                      "5d1340b3d7ad1a0b52682ed7",
                      "544a378f4bdc2d30388b4567",
                      "5d1340bdd7ad1a0e8d245aab",
                      "55802d5f4bdc2dac148b458e",
                      "5d1340cad7ad1a0b0b249869",
                      "6241c2c2117ad530666a5108",
                      "5c6592372e221600133e47d7",
                      "544a37c44bdc2d25388b4567",
                      "5c6d46132e221601da357d56",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c394bdc2dae468b4577",
            },
            {
              _name: "mod_handguard",
              _id: "5c488acd2e221602b177c2ab",
              _parent: "L85A2",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["L85A2StdHG", "L85A2RisHG"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_barrel",
              _id: "5c488ad82e221602b412af6b",
              _parent: "L85A2",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["L85A2Barrel"],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_scope",
              _id: "5c488ae82e221602b313fa6e",
              _parent: "L85A2",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["L85A2RailTop", "L85A2CarryHandle"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
          ammoCaliber: "Caliber556x45NATO",
          weapFireType: ["single", "fullauto"],
          SingleFireRate: 450,
          bFirerate: 650,
          isChamberLoad: true,
          Width: 2,
        },
        LocalePush: {
          en: {
            name: "L85A2 5.56x45 Assault Rifle",
            shortName: "L85A2",
            description:
              "The L85A2 is a gas-operated, rotating bolt, magazine fed British assault rifle in a bullpup layout. A2 variant is the result of a significant upgrade in the early 2000s by Heckler & Koch of SA80, which was designed in the 1970s to 1980s.",
          },
        },
        HandbookParent: HandbookIDs.AssaultRifles,
        HandbookPrice: 95605,
        PushMastery: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.BARREL_416A5_20,
        newID: "L85A2Barrel",
        parentID: BaseClasses.BARREL,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/barrel_l85a2_518mm.bundle",
            rcid: "",
          },
          Slots: [
            {
              _name: "mod_muzzle",
              _id: "L85A2Barrel_muzzle",
              _parent: "L85A2Barrel",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5b3a16655acfc40016387a2a",
                      "5c7e5f112e221600106f4ede",
                      "5c0fafb6d174af02a96260ba",
                      "5cf6937cd7f00c056c53fb39",
                      "544a38634bdc2d58388b4568",
                      "5cff9e5ed7ad1a09407397d4",
                      "5c48a2a42e221602b66d1e07",
                      "5f6372e2865db925d54f3869",
                      "615d8e2f1cb55961fa0fd9a4",
                      "56ea8180d2720bf2698b456a",
                      "5d02676dd7ad1a049e54f6dc",
                      "56ea6fafd2720b844b8b4593",
                      "5943ee5a86f77413872d25ec",
                      "609269c3b0e443224b421cc1",
                      "5c7fb51d2e2216001219ce11",
                      "5ea172e498dacb342978818e",
                      "5c6d710d2e22165df16b81e7",
                      "612e0e55a112697a4b3a66e7",
                      "5d440625a4b9361eec4ae6c5",
                      "5cc9b815d7f00c000e2579d6",
                      "5a7c147ce899ef00150bd8b8",
                      "5c7954d52e221600106f4cc7",
                      "59bffc1f86f77435b128b872",
                      "5a9fbb84a2750c00137fa685",
                      "626667e87379c44d557b7550",
                      "62669bccdb9ebb4daa44cd14",
                      "626a74340be03179a165e30c",
                      "6386120cd6baa055ad1e201c",
                      "63ac5c9658d0485fc039f0b8",
                      "6405ff6bd4578826ec3e377a",
                      "64943b74e9998d641b0412ed",
                      "L85A2MuzzleBrake",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_sight_front",
              _id: "L85A2Barrel_sfront",
              _parent: "L85A2Barrel",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: ["L85A2FrontSight"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "518mm barrel for L85A2 5.56x45",
            shortName: "518mm L85A2 5.56x45",
            description:
              "Standard barrel for L85A2 assault rifle for 5.56x45 NATO ammo, 518mm long.",
          },
        },
        HandbookParent: HandbookIDs.Barrels,
        HandbookPrice: 27627,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.HANDGUARD_416A5_TROY_13,
        newID: "L85A2RisHG",
        parentID: BaseClasses.HANDGUARD,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/handguard_l85a2_daniel_defense_rail.bundle",
            rcid: "",
          },
          Ergonomics: 14,
          Slots: [
            {
              _name: "mod_foregrip",
              _id: "5efaf417aeb21837e749c7f4",
              _parent: "L85A2RisHG",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5c7fc87d2e221644f31c0298",
                      "5cda9bcfd7f00c0c0b53e900",
                      "59f8a37386f7747af3328f06",
                      "619386379fb0c665d5490dbe",
                      "5c87ca002e221600114cb150",
                      "588226d124597767ad33f787",
                      "588226dd24597767ad33f789",
                      "588226e62459776e3e094af7",
                      "588226ef24597767af46e39c",
                      "59fc48e086f77463b1118392",
                      "5fce0cf655375d18a253eff0",
                      "5cf4fb76d7f00c065703d3ac",
                      "5b057b4f5acfc4771e1bd3e9",
                      "5c791e872e2216001219c40a",
                      "558032614bdc2de7118b4585",
                      "58c157be86f77403c74b2bb6",
                      "58c157c886f774032749fb06",
                      "5f6340d3ca442212f4047eb2",
                      "591af28e86f77414a27a9e1d",
                      "5c1cd46f2e22164bef5cfedb",
                      "5c1bc4812e22164bef5cfde7",
                      "5c1bc5612e221602b5429350",
                      "5c1bc5af2e221602b412949b",
                      "5c1bc5fb2e221602b1779b32",
                      "5c1bc7432e221602b412949d",
                      "5c1bc7752e221602b1779b34",
                      "64806bdd26c80811d408d37a",
                      "64807a29e5ffe165600abc97",
                      "648067db042be0705c0b3009",
                      "65169d5b30425317755f8e25",
                      "655df24fdf80b12750626d0a",
                      "655dccfdbdcc6b5df71382b6",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_scope",
              _id: "5efaf417aeb21837e749c7f5",
              _parent: "L85A2RisHG",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "57ac965c24597706be5f975c",
                      "57aca93d2459771f2c7e26db",
                      "544a3f024bdc2d1d388b4568",
                      "544a3a774bdc2d3a388b4567",
                      "5d2dc3e548f035404a1a4798",
                      "57adff4f24597737f373b6e6",
                      "5c0517910db83400232ffee5",
                      "591c4efa86f7741030027726",
                      "570fd79bd2720bc7458b4583",
                      "570fd6c2d2720bc6458b457f",
                      "558022b54bdc2dac148b458d",
                      "5c07dd120db834001c39092d",
                      "5c0a2cec0db834001b7ce47d",
                      "58491f3324597764bc48fa02",
                      "584924ec24597768f12ae244",
                      "5b30b0dc5acfc400153b7124",
                      "6165ac8c290d254f5e6b2f6c",
                      "60a23797a37c940de7062d02",
                      "5d2da1e948f035477b1ce2ba",
                      "5c0505e00db834001b735073",
                      "609a63b6e2ff132951242d09",
                      "584984812459776a704a82a6",
                      "59f9d81586f7744c7506ee62",
                      "570fd721d2720bc5458b4596",
                      "57ae0171245977343c27bfcf",
                      "5dfe6104585a0c3e995c7b82",
                      "5d1b5e94d7ad1a2b865a96b0",
                      "609bab8b455afd752b2e6138",
                      "58d39d3d86f77445bb794ae7",
                      "616554fe50224f204c1da2aa",
                      "5c7d55f52e221644f31bff6a",
                      "616584766ef05c2ce828ef57",
                      "5b3b6dc75acfc47a8773fb1e",
                      "615d8d878004cc50514c3233",
                      "5b2389515acfc4771e1be0c0",
                      "577d128124597739d65d0e56",
                      "618b9643526131765025ab35",
                      "618bab21526131765025ab3f",
                      "5c86592b2e2216000e69e77c",
                      "5a37ca54c4a282000d72296a",
                      "5d0a29fed7ad1a002769ad08",
                      "58d2664f86f7747fec5834f6",
                      "57c69dd424597774c03b7bbc",
                      "5b3b99265acfc4704b4a1afb",
                      "5aa66a9be5b5b0214e506e89",
                      "5aa66c72e5b5b00016327c93",
                      "5c1cdd302e221602b3137250",
                      "61714b2467085e45ef140b2c",
                      "6171407e50224f204c1da3c5",
                      "61713cc4d8e3106d9806c109",
                      "5b31163c5acfc400153b71cb",
                      "5a33b652c4a28232996e407c",
                      "5a33b2c9c4a282000c5a9511",
                      "59db7eed86f77461f8380365",
                      "5a1ead28fcdbcb001912fa9f",
                      "5dff77c759400025ea5150cf",
                      "626bb8532c923541184624b4",
                      "62811f461d5df4475f46a332",
                      "63fc449f5bd61c6cf3784a88",
                      "6477772ea8a38bb2050ed4db",
                      "6478641c19d732620e045e17",
                      "64785e7c19d732620e045e15",
                      "653931da5db71d30ab1d6296",
                      "65392f611406374f82152ba5",
                      "655f13e0a246670fb0373245",
                      "6567e751a715f85433025998",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_tactical_001",
              _id: "5efaf417aeb21837e749c7f6",
              _parent: "L85A2RisHG",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5a800961159bd4315e3a1657",
                      "57fd23e32459772d0805bcf1",
                      "544909bb4bdc2d6f028b4577",
                      "5d10b49bd7ad1a1a560708b0",
                      "5c06595c0db834001a66af6c",
                      "5cc9c20cd7f00c001336c65d",
                      "5d2369418abbc306c62e0c80",
                      "5b07dd285acfc4001754240d",
                      "56def37dd2720bec348b456a",
                      "5a7b483fe899ef0016170d15",
                      "61605d88ffa6e502ac5e7eeb",
                      "5a5f1ce64f39f90b401987bc",
                      "560d657b4bdc2da74d8b4572",
                      "5b3a337e5acfc4704b4a19a0",
                      "5c5952732e2216398b5abda2",
                      "57d17e212459775a1179a0f5",
                      "6267c6396b642f77f56f5c1c",
                      "6272370ee4013c5d7e31f418",
                      "6272379924e29f06af4d5ecb",
                      "626becf9582c3e319310b837",
                      "644a3df63b0b6f03e101e065",
                      "646f6322f43d0c5d62063715",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_tactical_002",
              _id: "5efaf417aeb21837e749c7f7",
              _parent: "L85A2RisHG",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5a800961159bd4315e3a1657",
                      "57fd23e32459772d0805bcf1",
                      "544909bb4bdc2d6f028b4577",
                      "5d10b49bd7ad1a1a560708b0",
                      "5c06595c0db834001a66af6c",
                      "5cc9c20cd7f00c001336c65d",
                      "5d2369418abbc306c62e0c80",
                      "5b07dd285acfc4001754240d",
                      "56def37dd2720bec348b456a",
                      "5a7b483fe899ef0016170d15",
                      "61605d88ffa6e502ac5e7eeb",
                      "5a5f1ce64f39f90b401987bc",
                      "560d657b4bdc2da74d8b4572",
                      "5b3a337e5acfc4704b4a19a0",
                      "5c5952732e2216398b5abda2",
                      "57d17e212459775a1179a0f5",
                      "6267c6396b642f77f56f5c1c",
                      "6272370ee4013c5d7e31f418",
                      "6272379924e29f06af4d5ecb",
                      "626becf9582c3e319310b837",
                      "644a3df63b0b6f03e101e065",
                      "646f6322f43d0c5d62063715",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
            {
              _name: "mod_tactical_000",
              _id: "5efafe76a2f64932a722aa74",
              _parent: "L85A2RisHG",
              _props: {
                filters: [
                  {
                    Shift: 0,
                    Filter: [
                      "5a800961159bd4315e3a1657",
                      "57fd23e32459772d0805bcf1",
                      "544909bb4bdc2d6f028b4577",
                      "5c06595c0db834001a66af6c",
                      "5cc9c20cd7f00c001336c65d",
                      "5d2369418abbc306c62e0c80",
                      "5b07dd285acfc4001754240d",
                      "56def37dd2720bec348b456a",
                      "5a7b483fe899ef0016170d15",
                      "61605d88ffa6e502ac5e7eeb",
                      "5a5f1ce64f39f90b401987bc",
                      "560d657b4bdc2da74d8b4572",
                      "5b3a337e5acfc4704b4a19a0",
                      "5c5952732e2216398b5abda2",
                      "57d17e212459775a1179a0f5",
                    ],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: false,
              _proto: "55d30c4c4bdc2db4468b457e",
            },
          ],
          BaseMalfunctionChance: 0,
        },
        LocalePush: {
          en: {
            name: "Daniel Defense L85 / SA80 handguard rail",
            shortName: "L85 RIS",
            description:
              "Aluminium handguard for L85A2, equipped with multiple rail mounts for installation of a wide range of additional equipment.",
          },
        },
        HandbookParent: HandbookIDs.Handguards,
        HandbookPrice: 14327,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.HANDGUARD_DELTA_CARBON,
        newID: "L85A2StdHG",
        parentID: BaseClasses.HANDGUARD,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/handguard_l85a2_std.bundle",
            rcid: "",
          },
          Ergonomics: 9,
        },
        LocalePush: {
          en: {
            name: "L85A2 regular handguard",
            shortName: "L85A2 HG",
            description: "Regular polymer L85A2 handguard.",
          },
        },
        HandbookParent: HandbookIDs.Handguards,
        HandbookPrice: 7665,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.MOUNT_M700_MULTISLOT,
        newID: "L85A2RailTop",
        parentID: BaseClasses.MOUNT,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/mount_l85a2_rail.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "Weaver base for L85A2",
            shortName: "L85 RM",
            description:
              "Universal base mount for installation of optical scopes, collimator sights and other devices and accessories on L85A2.",
          },
        },
        HandbookParent: HandbookIDs.Mounts,
        HandbookPrice: 2640,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.FLASHHIDER_ALIENTECH,
        newID: "L85A2MuzzleBrake",
        parentID: BaseClasses.FLASH_HIDER,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/muzzle_l85a2_556x45.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "L85A2 Flash hider 5.56x45",
            shortName: "L85 FH",
            description: "Standard muzzle device for L85A2.",
          },
        },
        HandbookParent: HandbookIDs.FlashhidersAndBrakes,
        HandbookPrice: 1340,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.PISTOLGRIP_TD_HEX,
        newID: "L85A2PistolGrip",
        parentID: BaseClasses.PISTOL_GRIP,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/pistolgrip_l85a2.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "Pistol grip for L85A2",
            shortName: "L85 PG",
            description: "Standard pistol grip can be installed on L85A2.",
          },
        },
        HandbookParent: HandbookIDs.PistolGrips,
        HandbookPrice: 2320,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.IRONSIGHT_SCAR_FS,
        newID: "L85A2FrontSight",
        parentID: BaseClasses.IRON_SIGHT,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/sight_front_l85a2.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "L85A2 front sight",
            shortName: "L85 FS",
            description: "Standard front sight can be installed on L85A2.",
          },
        },
        HandbookParent: HandbookIDs.Ironsights,
        HandbookPrice: 1000,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.IRONSIGHT_CHANDLE,
        newID: "L85A2CarryHandle",
        parentID: BaseClasses.IRON_SIGHT,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/mods/l85a2/sight_rear_l85a2.bundle",
            rcid: "",
          },
        },
        LocalePush: {
          en: {
            name: "Rearsight L85A2 carry-handle",
            shortName: "L85 RS",
            description:
              "Detachable Carry Handle with a rear sight, standard issue for L85A2.",
          },
        },
        HandbookParent: HandbookIDs.Ironsights,
        HandbookPrice: 823,
      },
    });
    //#endregion
  }

  public createGear(): void {
    //#region Equipment/Gear
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.ARMOR_HEXGRID,
        newID: "6621b1e0bd80eeb4de0c9ed8",
        parentID: BaseClasses.ARMOR,
        OverrideProperties: {
          Prefab: {
            path: "ArmoredVests/banshee_armor.bundle",
            rcid: "",
          },
          Height: 3,
          Width: 3,
          Slots: [
            {
              _name: "Front_plate",
              _id: "6575eb77da698a4e980677b7",
              _parent: "6621b1e0bd80eeb4de0c9ed8",
              _props: {
                filters: [
                  {
                    locked: false,
                    Plate: "656f611f94b480b8a500c0db",
                    Filter: [
                      "656f63c027aed95beb08f62c",
                      "656f57dc27aed95beb08f628",
                      "656f611f94b480b8a500c0db",
                      "656f603f94b480b8a500c0d6",
                    ],
                    armorColliders: [],
                    armorPlateColliders: ["Plate_Korund_chest"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: true,
              _proto: "64479fdf9731c8fadc0642c1",
            },
            {
              _name: "Back_plate",
              _id: "6575eb77da698a4e980677b8",
              _parent: "6621b1e0bd80eeb4de0c9ed8",
              _props: {
                filters: [
                  {
                    locked: false,
                    Plate: "656efaf54772930db4031ff5",
                    Filter: [
                      "654a4a964b446df1ad03f192",
                      "656efaf54772930db4031ff5",
                      "656efd66034e8e01c407f35c",
                    ],
                    armorColliders: [],
                    armorPlateColliders: ["Plate_6B13_back"],
                  },
                ],
              },
              _required: false,
              _mergeSlotWithChildren: true,
              _proto: "64479fdf9731c8fadc0642c1",
            },
            {
              _name: "Soft_armor_front",
              _id: "6575eb77da698a4e980677b9",
              _parent: "6621b1e0bd80eeb4de0c9ed8",
              _props: {
                filters: [
                  {
                    locked: true,
                    Plate: "6575ea3060703324250610da",
                    Filter: ["6575ea3060703324250610da"],
                    armorColliders: ["RibcageLow", "RibcageUp"],
                    armorPlateColliders: [],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: true,
              _proto: "64479fdf9731c8fadc0642c1",
            },
            {
              _name: "Soft_armor_back",
              _id: "6575eb77da698a4e980677ba",
              _parent: "6621b1e0bd80eeb4de0c9ed8",
              _props: {
                filters: [
                  {
                    locked: true,
                    Plate: "6575ea4cf6a13a7b7100adc4",
                    Filter: ["6575ea4cf6a13a7b7100adc4"],
                    armorColliders: ["SpineDown", "SpineTop"],
                    armorPlateColliders: [],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: true,
              _proto: "64479fdf9731c8fadc0642c1",
            },
            {
              _name: "Soft_armor_left",
              _id: "6575eb77da698a4e980677bb",
              _parent: "6621b1e0bd80eeb4de0c9ed8",
              _props: {
                filters: [
                  {
                    locked: true,
                    Plate: "6575ea5cf6a13a7b7100adc8",
                    Filter: ["6575ea5cf6a13a7b7100adc8"],
                    armorColliders: ["LeftSideChestDown"],
                    armorPlateColliders: [],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: true,
              _proto: "64479fdf9731c8fadc0642c1",
            },
            {
              _name: "soft_armor_right",
              _id: "6575eb77da698a4e980677bc",
              _parent: "6621b1e0bd80eeb4de0c9ed8",
              _props: {
                filters: [
                  {
                    locked: true,
                    Plate: "6575ea6760703324250610de",
                    Filter: ["6575ea6760703324250610de"],
                    armorColliders: ["RightSideChestDown"],
                    armorPlateColliders: [],
                  },
                ],
              },
              _required: true,
              _mergeSlotWithChildren: true,
              _proto: "64479fdf9731c8fadc0642c1",
            },
          ],
        },
        LocalePush: {
          en: {
            name: "Shellback Tactical Banshee plate carrier (Modified)",
            shortName: "Banshee (M)",
            description:
              "The Banshee Rifle Plate Carrier was designed to meet and exceed the needs of law enforcement, military, and tactical operators. This ultra lightweight, low profile, high-quality plate carrier has great load carrying capacity. \nIdeal for law enforcement patrol officers for use in high threat active shooter situations, multi-assault counter terrorism action capabilities (MACTAC) and counter terrorism direct actions.",
          },
        },
        HandbookParent: HandbookIDs.BodyArmor,
        HandbookPrice: 209999,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.VEST_A18,
        newID: "6621b1f22310f5ff09476360",
        parentID: BaseClasses.VEST,
        OverrideProperties: {
          Prefab: {
            path: "Rigs/rhino_rig.bundle",
            rcid: "",
          },
          Height: 3,
          Width: 4,
          Grids: [
            {
              _id: "62732cb3d803f8b5806da7c8",
              _name: "GridView (1)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 3,
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
              _id: "ae2c3e0246c5c92c689ffa03",
              _name: "GridView (2)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _id: "a9db2d442c1e9dda0075db85",
              _name: "GridView (3)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 2,
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
              _id: "72c5f5441bc18abdf47b44b9",
              _name: "GridView (4)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 2,
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
              _id: "f3449f1f170ac4dd2f8021dd",
              _name: "GridView (5)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 4,
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
              _id: "e27a0b8d0c6cf74aba601540",
              _name: "GridView (6)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 3,
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
              _id: "6510c506a3613dc59fd589a2",
              _name: "GridView (7)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _id: "b8a21d49246b601fc69d3173",
              _name: "GridView (8)",
              _parent: "rorhinobonk",
              _props: {
                cellsH: 2,
                cellsV: 2,
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
          ],
          RigLayoutName: "rorhinobonk",
        },
        LocalePush: {
          en: {
            name: "CQC Rhino plate carrier (MTP)",
            shortName: "Rhino Rig",
            description:
              "Rhino is based on the Osprey body armour system but without neck, shoulder and groin protection. Rhino has proved to be a very popular system as it has a simple but effective design.",
          },
        },
        HandbookParent: HandbookIDs.TacticalRigs,
        HandbookPrice: 239999,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.BACKPACK_ATTACK_2,
        newID: "6621b2308e3a3a8692dfc142",
        parentID: BaseClasses.BACKPACK,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/equipment/backpack_tehinkom_patrol/item_equipment_backpack_tehinkom_patrol.bundle",
            rcid: "",
          },
          Width: 5,
          Height: 7,
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b2308e3a3a8692dfc142",
              _props: {
                cellsH: 2,
                cellsV: 7,
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
              _name: "GridView (2)",
              _parent: "6621b2308e3a3a8692dfc142",
              _props: {
                cellsH: 4,
                cellsV: 7,
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Tehinkom Patrol Backpack (Modified)",
            shortName: "RBP (M)",
            description:
              "A custom 60-liter Patrol backpack for carrying personal belongings and equipment through tough field conditions.",
          },
        },
        HandbookParent: HandbookIDs.Backpacks,
        HandbookPrice: 139999,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.BACKPACK_ATTACK_2,
        newID: "6621b246182282d29d2e5cb6",
        parentID: BaseClasses.BACKPACK,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/equipment/backpack_dragon_egg_mk_ii/item_equipment_backpack_dragon_egg_mk_ii.bundle",
            rcid: "",
          },
          Width: 4,
          Height: 5,
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b246182282d29d2e5cb6",
              _props: {
                cellsH: 1,
                cellsV: 5,
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
              _name: "GridView (2)",
              _parent: "6621b246182282d29d2e5cb6",
              _props: {
                cellsH: 3,
                cellsV: 7,
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
              _name: "GridView (3)",
              _parent: "6621b246182282d29d2e5cb6",
              _props: {
                cellsH: 2,
                cellsV: 9,
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Dragon Egg MK II (Modified)",
            shortName: "MKII (M)",
            description:
              "A custom backpack designed to carry large amounts of specialized medical equipment and supplies. Manufactured by London Bridge Trading and modified by the Requisitions Office.",
          },
        },
        HandbookParent: HandbookIDs.Backpacks,
        HandbookPrice: 99999,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.BACKPACK_ATTACK_2,
        newID: "6621b259bd90c86283283b4c",
        parentID: BaseClasses.BACKPACK,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/equipment/backpack_mystery_ranch_satl/item_equipment_backpack_mystery_ranch_satl.bundle",
            rcid: "",
          },
          Width: 5,
          Height: 7,
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b259bd90c86283283b4c",
              _props: {
                cellsH: 1,
                cellsV: 7,
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
              _name: "GridView (2)",
              _parent: "6621b259bd90c86283283b4c",
              _props: {
                cellsH: 4,
                cellsV: 9,
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
              _name: "GridView (3)",
              _parent: "6621b259bd90c86283283b4c",
              _props: {
                cellsH: 1,
                cellsV: 7,
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Mystery Ranch SAT1 backpack (Modified)",
            shortName: "SAT1 (M)",
            description:
              "A custom Mystery Ranch SAT1 backpack that is part of the 2nd generation Ratnik gear kit for combat. The SAT1 tactical army backpack is a modernization of the 6B38 Permyachka model raid backpack. The 6B38 backpack is designed to carry fire support equipment, weapons, ammunition, elements of mountain equipment, as well as the personal belongings of individual soldiers. The backpack can be used during combat operations, long hikes, and raid events.",
          },
        },
        HandbookParent: HandbookIDs.Backpacks,
        HandbookPrice: 149999,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.VEST_A18,
        newID: "6621b274485df00e750df4f2",
        parentID: BaseClasses.VEST,
        OverrideProperties: {
          Prefab: {
            path: "Rigs/osprey_def_armless_rig.bundle",
            rcid: "",
          },
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _name: "GridView (2)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _name: "GridView (3)",
              _parent: "robigrig",
              _props: {
                cellsH: 2,
                cellsV: 2,
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
              _name: "GridView (4)",
              _parent: "robigrig",
              _props: {
                cellsH: 2,
                cellsV: 2,
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
              _name: "GridView (5)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 2,
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
              _name: "GridView (6)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 2,
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
              _name: "GridView (7)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _name: "GridView (8)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _name: "GridView (9)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 4,
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
              _name: "GridView (10)",
              _parent: "robigrig",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
          ],
          RigLayoutName: "robigrig",
        },
        LocalePush: {
          en: {
            name: "CQC Osprey MK4A plate carrier (Protection-Light, MTP)",
            shortName: "Osprey MK4A rig (PL)",
            description:
              "The Osprey plate carrier is actively used by the British army and specialists. The Protection preset is provided with heavy armor plates and the optimal number of pouches for ammunition, grenades and special equipment.",
          },
        },
        HandbookParent: HandbookIDs.TacticalRigs,
        HandbookPrice: 189999,
        CloneToFilters: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.BACKPACK_COMM_3,
        newID: "6621b28d9411498998d408c3",
        parentID: BaseClasses.BACKPACK,
        OverrideProperties: {
          Prefab: {
            path: "Backpacks/nice_comm_3_bvs.bundle",
            rcid: "",
          },
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b28d9411498998d408c3",
              _props: {
                cellsH: 3,
                cellsV: 10,
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
              _name: "GridView (2)",
              _parent: "6621b28d9411498998d408c3",
              _props: {
                cellsH: 3,
                cellsV: 10,
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
          ],
        },
        LocalePush: {
          en: {
            name: "Mystery Ranch NICE COMM 3 BVS frame system (tan)",
            shortName: "COMM 3",
            description:
              "The NICE Frame special system for carrying oversized or heavy loads with an installed COMM 3 backpack for carrying radio systems.\nThe COMM 3 main bay is designed for PRC117F or G, PRC119F, 152, or ASIP radios. The Hitchhiker and Daypack lid allows you to carry separate gear if needed. The modular NICE COMM 3 system is ready to adapt to changing tasks.\nAn extremely rare thing, for which a real hunt is conducted in Tarkov.",
          },
        },
        HandbookParent: HandbookIDs.Backpacks,
        HandbookPrice: 43999,
        CloneToFilters: true,
      },
    });
    //#endregion
    //
    //
    //
    //#region Clothes
    this.utils.createClothingTop({
      NewOutfitID: "ROtshirtBlack",
      BundlePath: "Clothing/top_tshirt_black.bundle",
      HandsToClone: "5d1f5aa286f7744bca3f0b9c",
      HandsBundlePath:
        "assets/content/hands/hands_tshirt_bear_black/hands_tshirt_bear_black.skin.bundle",
    });

    this.utils.createClothingBottom({
      NewBottomsID: "ROurbanresponder",
      BundlePath: "Clothing/bottom_urbanresponder_ucp.bundle",
    });
    //#endregion
  }

  public createConstItems(): void {
    //#region Requisition Slips
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.INFO_BLUE_FOLDERS,
        newID: "RequisitionSlips",
        parentID: BaseClasses.INFO,
        OverrideProperties: {
          Prefab: {
            path: "Items/ReqSlip.bundle",
            rcid: "",
          },
          Height: 1,
          Width: 2,
          StackMaxSize: 50000,
          BackgroundColor: "green",
        },
        LocalePush: {
          en: {
            name: "Requisition Slips",
            shortName: "ReqSlips",
            description:
              "A requisition slip used to trade with the Requisitions Office. You'll want to keep a stack of these handy in case you run into trouble and need some quick provisions. A larger denomination for trading apparently.",
          },
        },
        HandbookParent: HandbookIDs.InfoItems,
        HandbookPrice: 53999,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            AllItemList.LOOTCONTAINER_SAFE,
            AllItemList.LOOTCONTAINER_COMMON_FUND_STASH,
            AllItemList.LOOTCONTAINER_CASH_REGISTER,
            AllItemList.LOOTCONTAINER_CASH_REGISTER_TAR22,
          ],
          StaticLootProbability: 150,
        },
        AddToCases: true,
        CasesToPush: [
          AllItemList.CONTAINER_DOCS,
          AllItemList.CONTAINER_SICC,
          AllItemList.CONTAINER_WALLET,
          AllItemList.CONTAINER_WZ,
        ],
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.INFO_DIARY,
        newID: "66292e79a4d9da25e683ab55",
        parentID: BaseClasses.INFO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/quest/item_quest_letter/item_quest_letter.bundle",
            rcid: "",
          },
          Height: 1,
          Width: 1,
          StackMaxSize: 50000,
          BackgroundColor: "green",
        },
        LocalePush: {
          en: {
            name: "Requisition Forms",
            shortName: "ReqForms",
            description:
              "A requisition form used to trade with the Requisitions Office. You'll want to keep a stack of these handy in case you run into trouble and need some quick provisions. A smaller denomination for trading apparently.",
          },
        },
        HandbookParent: HandbookIDs.InfoItems,
        HandbookPrice: 175,
        CloneToFilters: true,
        LootPush: {
          AddToStaticLoot: true,
          LootContainersToAdd: [
            AllItemList.LOOTCONTAINER_SAFE,
            AllItemList.LOOTCONTAINER_COMMON_FUND_STASH,
            AllItemList.LOOTCONTAINER_CASH_REGISTER,
            AllItemList.LOOTCONTAINER_CASH_REGISTER_TAR22,
          ],
          StaticLootProbability: 349,
        },
        AddToCases: true,
        CasesToPush: [
          AllItemList.CONTAINER_DOCS,
          AllItemList.CONTAINER_SICC,
          AllItemList.CONTAINER_WALLET,
          AllItemList.CONTAINER_WZ,
        ],
      },
    });
    //#endregion
    //
    //
    //
    //#region Secure Containers
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SECURE_WAIST_POUCH,
        newID: "6621b12c9f46c3eb4a0c8f40",
        parentID: BaseClasses.MOB_CONTAINER,
        OverrideProperties: {
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b12c9f46c3eb4a0c8f40",
              _props: {
                cellsH: 2,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (2)",
              _parent: "6621b12c9f46c3eb4a0c8f40",
              _props: {
                cellsH: 1,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Waist Pouch",
            shortName: "CWP",
            description:
              "A modified Waist Pouch with more storage sown into it. It is a durable and convenient waist pouch for a variety of things you would want to keep close.",
          },
        },
        HandbookParent: HandbookIDs.SecureContainers,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SECURE_ALPHA,
        newID: "6621b143edb81061ceb5d7cc",
        parentID: BaseClasses.MOB_CONTAINER,
        OverrideProperties: {
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b143edb81061ceb5d7cc",
              _props: {
                cellsH: 2,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (2)",
              _parent: "6621b143edb81061ceb5d7cc",
              _props: {
                cellsH: 2,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Secure Container Alpha",
            shortName: "CSCA",
            description:
              "A modified Alpha Container with more storage compartments added. A small secure container used by PMCs formerly deployed in Tarkov.",
          },
        },
        HandbookParent: HandbookIDs.SecureContainers,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SECURE_BETA,
        newID: "6621b177ce1b117550362db5",
        parentID: BaseClasses.MOB_CONTAINER,
        OverrideProperties: {
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b177ce1b117550362db5",
              _props: {
                cellsH: 3,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (2)",
              _parent: "6621b177ce1b117550362db5",
              _props: {
                cellsH: 2,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Secure Container Beta",
            shortName: "CSCB",
            description:
              "A modified Beta Container with more storage compartments added. A medium-sized secure container used by PMCs formerly deployed in Tarkov.",
          },
        },
        HandbookParent: HandbookIDs.SecureContainers,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SECURE_GAMMA,
        newID: "6621b1895c9cd0794d536d14",
        parentID: BaseClasses.MOB_CONTAINER,
        OverrideProperties: {
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b1895c9cd0794d536d14",
              _props: {
                cellsH: 3,
                cellsV: 3,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (2)",
              _parent: "6621b1895c9cd0794d536d14",
              _props: {
                cellsH: 1,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (3)",
              _parent: "6621b1895c9cd0794d536d14",
              _props: {
                cellsH: 1,
                cellsV: 1,
                filters: [
                  {
                    ExcludedFilter: [""],
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Secure Container Gamma",
            shortName: "CSCG",
            description:
              "A modified Gamma Container with more storage compartments added. A unique secure container used only by veteran PMCs formerly deployed in Tarkov.",
          },
        },
        HandbookParent: HandbookIDs.SecureContainers,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SECURE_EPSILON,
        newID: "6621b1986f4ebd47e39eacb5",
        parentID: BaseClasses.MOB_CONTAINER,
        OverrideProperties: {
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b1986f4ebd47e39eacb5",
              _props: {
                cellsH: 3,
                cellsV: 3,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (2)",
              _parent: "6621b1986f4ebd47e39eacb5",
              _props: {
                cellsH: 2,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (3)",
              _parent: "6621b1986f4ebd47e39eacb5",
              _props: {
                cellsH: 1,
                cellsV: 2,
                filters: [
                  {
                    ExcludedFilter: [""],
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Secure Container Epsilon",
            shortName: "CSCE",
            description:
              "A modified Epsilon Container with more storage compartments added. One of TerraGroup's latest inventions in secure container technology - the Epsilon secured container.",
          },
        },
        HandbookParent: HandbookIDs.SecureContainers,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        QuestPush: {
          AddToQuests: true,
          QuestConditionType: "HandoverItem",
          QuestTargetConditionToClone: "59db794186f77448bc595262",
        },
        PushToFleaBlacklist: true,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.SECURE_KAPPA,
        newID: "6621b1b3166c301c04facfc8",
        parentID: BaseClasses.MOB_CONTAINER,
        OverrideProperties: {
          Grids: [
            {
              _id: this.ref.hashUtil.generate(),
              _name: "GridView (1)",
              _parent: "6621b1b3166c301c04facfc8",
              _props: {
                cellsH: 1,
                cellsV: 3,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (2)",
              _parent: "6621b1b3166c301c04facfc8",
              _props: {
                cellsH: 3,
                cellsV: 4,
                filters: [
                  {
                    ExcludedFilter: [""],
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
              _name: "GridView (3)",
              _parent: "6621b1b3166c301c04facfc8",
              _props: {
                cellsH: 2,
                cellsV: 3,
                filters: [
                  {
                    ExcludedFilter: [""],
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
          ],
        },
        LocalePush: {
          en: {
            name: "Custom Secure Container Kappa",
            shortName: "CSCK",
            description:
              "A modified Kappa Container with more storage compartments added. A secret TerraGroup invention - the Kappa secured container.",
          },
        },
        HandbookParent: HandbookIDs.SecureContainers,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        PushToFleaBlacklist: true,
      },
    });
    //#endregion
    //
    //
    //
    //#region Armbands
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.VEST_SCAV_VEST,
        newID: "6621b0dcbcfe66cdbbab48c7",
        parentID: BaseClasses.VEST,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/equipment/armband/item_equipment_armband_dead.bundle",
            rcid: "",
          },
          Height: 1,
          Width: 1,
          Weight: -10,
          Grids: [
            {
              _id: "7cf6637936909f0d9e3903e9",
              _name: "GridView (1)",
              _parent: "rodeadarmband",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _id: "21ac9c1e506186eeb4119de4",
              _name: "GridView (2)",
              _parent: "rodeadarmband",
              _props: {
                cellsH: 2,
                cellsV: 2,
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
              _id: "3438e04b9f8142a9aef4a34b",
              _name: "GridView (3)",
              _parent: "rodeadarmband",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
              _id: "3d510188ca90cff286882a0d",
              _name: "GridView (4)",
              _parent: "rodeadarmband",
              _props: {
                cellsH: 1,
                cellsV: 3,
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
              _id: "eb3431a9487dde2cfc88ec82",
              _name: "GridView (5)",
              _parent: "rodeadarmband",
              _props: {
                cellsH: 1,
                cellsV: 1,
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
          ],
          RigLayoutName: "rodeadarmband",
        },
        LocalePush: {
          en: {
            name: "Custom Deadskul Carrying Pouch",
            shortName: "Dead",
            description:
              "A modified Deadskul Armband with pouches sown into it. Now you can be sure to never go into the field without extra provisions. The Requisition Officers really knew what they were doing with this one. Only for real collectors.",
          },
        },
        HandbookParent: HandbookIDs.GearComponents,
        HandbookPrice: 99999999,
        CloneToFilters: true,
        PushToFleaBlacklist: true,
        SlotInfo: {
          AddToSlot: true,
          Slot: 14,
        },
      },
    });
    //#endregion
    //
    //
    //
    //#region Legion Mask
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.FACECOVER_DEATH_KNIGHT,
        newID: "6621b200cb248c192d90e324",
        parentID: BaseClasses.FACECOVER,
        OverrideProperties: {
          Prefab: {
            path: "FaceCover/knight_mask_no_wires.bundle",
            rcid: "",
          },
          BlocksEarpiece: false,
          BlocksEyewear: false,
          BlocksHeadwear: false,
          BlocksFaceCover: false,
          ConflictingItems: [],
          armorClass: 6,
        },
        LocalePush: {
          en: {
            name: "Death Knight mask (Modified)",
            shortName: "Death Knight (M)",
            description:
              "A unique mask of the commander of the Goons squad, former USEC operators who decided not to flee Tarkov, but to create their own order. Compatible with headwear.",
          },
        },
        HandbookParent: HandbookIDs.Facecovers,
        HandbookPrice: 159999,
        CloneToFilters: true,
      },
    });
    //#endregion
  }

  public createAmmo(): void {
    //#region Ammo Judge
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_12G_FLECHETTE,
        newID: "662808ec26a8e83120bb25fe",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_1143x23_rip.bundle",
            rcid: "",
          },
          Caliber: "Caliber1143x23ACP",
        },
        LocalePush: {
          en: {
            name: "Judge Flechette Round",
            shortName: "JFR",
            description:
              "A tightly packed Flechette round for the Judge Handgun. How they managed to fit all of that into a small 9x19 casing is beyond me.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 999,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_12G_AP20,
        newID: "662809f445b5ff428e21ac0a",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_1143x23_acp_ap.bundle",
            rcid: "",
          },
          Caliber: "Caliber1143x23ACP",
        },
        LocalePush: {
          en: {
            name: "Judge AP Slug Round",
            shortName: "JSR",
            description:
              "A tightly packed Armor Piercing Slug round for the Judge Handgun. How they managed to fit all of that into a small .45 casing is beyond me.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 879,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_12G_MAGNUM,
        newID: "66280a30d3b6f288cb6b9653",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_1143x23_acp_hydra_shok.bundle",
            rcid: "",
          },
          Caliber: "Caliber1143x23ACP",
        },
        LocalePush: {
          en: {
            name: "Judge Buckshot Round",
            shortName: "JBR",
            description:
              "A tightly packed Buckshot round for the Judge Handgun. How they managed to fit all of that into a small .45 casing is beyond me.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 599,
      },
    });
    //#endregion
    //
    //
    //
    //#region Ammo Jury
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_86X70_TACX,
        newID: "6628185208dd86f969db7e03",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_68x51_fmj.bundle",
            rcid: "",
          },
          Caliber: "Caliber68x51",
        },
        LocalePush: {
          en: {
            name: "Jury TacX Round",
            shortName: "JuryX",
            description:
              "A modified TacX round for the Jury Marksman Rifle. This is the last thing many scavs and PMCs around Tarkov ever saw.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 1349,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_86X70_AP,
        newID: "662818a23a552da6aef8fada",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_68x51.bundle",
            rcid: "",
          },
          Caliber: "Caliber68x51",
        },
        LocalePush: {
          en: {
            name: "Jury AP Round",
            shortName: "JuryAP",
            description:
              "An Armor Piercing round for the Jury Marksman Rifle. This is the last thing many scavs and PMCs around Tarkov ever saw.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 1949,
      },
    });
    //#endregion
    //
    //
    //
    //#region Ammo Executioner
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_127X108_B32,
        newID: "66281ab7fca966e5021f81b5",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_762x51_m61.bundle",
            rcid: "",
          },
          Caliber: "Caliber762x51",
        },
        LocalePush: {
          en: {
            name: "Executioner AP Round",
            shortName: "ExecAP",
            description:
              "An Armor Piercing round for the Executioner Sniper Rifle. If you hear the sound this round makes, it's already too late.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 1879,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_127X108_BZT44M,
        newID: "66281ac038f9aebf6f914138",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_762x51_m993.bundle",
            rcid: "",
          },
          Caliber: "Caliber762x51",
        },
        LocalePush: {
          en: {
            name: "Executioner AP Round",
            shortName: "ExecAP",
            description:
              "An Armor Piercing round for the Executioner Sniper Rifle. If you hear the sound this round makes, it's already too late.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 2399,
      },
    });
    //#endregion
  }

  public createRealismAmmo(): void {
    //#region Ammo Judge Realism
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_12G_FLECHETTE,
        newID: "662808ec26a8e83120bb25fe",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_1143x23_rip.bundle",
            rcid: "",
          },
          Caliber: "Caliber1143x23ACP",
          PenetrationPower: 5,
          ArmorDamage: 1,
          ProjectileCount: 20,
          Damage: 8,
          InitialSpeed: 300,
          BallisticCoeficient: 0.015,
          RicochetChance: 0.5,
          FragmentationChance: 0.6,
          BulletMassGram: 0.47,
          HeavyBleedingDelta: 0.8,
          LightBleedingDelta: 1,
          ammoAccr: -90,
          ammoHear: 0,
          ammoRec: -20,
        },
        LocalePush: {
          en: {
            name: "Judge Flechette Round",
            shortName: "JFR",
            description:
              "A tightly packed Flechette round for the Judge Handgun. How they managed to fit all of that into a small 9x19 casing is beyond me.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 999,
        BotLootItemToClone: AllItemList.KEYCARD_ACCESS,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_12G_AP20,
        newID: "662809f445b5ff428e21ac0a",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_1143x23_acp_ap.bundle",
            rcid: "",
          },
          Caliber: "Caliber1143x23ACP",
          PenetrationPower: 62,
          ArmorDamage: 1,
          Damage: 160,
          InitialSpeed: 510,
          RicochetChance: 0.35,
          FragmentationChance: 0,
          BulletMassGram: 28.3,
          HeavyBleedingDelta: 0.7,
          LightBleedingDelta: 0.95,
          ammoAccr: -15,
          ammoHear: 0,
          ammoRec: 40,
        },
        LocalePush: {
          en: {
            name: "Judge AP Slug Round",
            shortName: "JSR",
            description:
              "A tightly packed Armor Piercing Slug round for the Judge Handgun. How they managed to fit all of that into a small .45 casing is beyond me.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 879,
        BotLootItemToClone: AllItemList.KEYCARD_ACCESS,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_12G_MAGNUM,
        newID: "66280a30d3b6f288cb6b9653",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_1143x23_acp_hydra_shok.bundle",
            rcid: "",
          },
          Caliber: "Caliber1143x23ACP",
          PenetrationPower: 17,
          ArmorDamage: 1,
          ProjectileCount: 9,
          Damage: 25,
          InitialSpeed: 385,
          RicochetChance: 0.24,
          FragmentationChance: 0,
          BulletMassGram: 3.38,
          HeavyBleedingDelta: 0.4,
          LightBleedingDelta: 0.9,
          ammoAccr: 0,
          ammoHear: 0,
          ammoRec: 25,
        },
        LocalePush: {
          en: {
            name: "Judge Buckshot Round",
            shortName: "JBR",
            description:
              "A tightly packed Buckshot round for the Judge Handgun. How they managed to fit all of that into a small .45 casing is beyond me.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 599,
        BotLootItemToClone: AllItemList.KEYCARD_ACCESS,
      },
    });
    //#endregion
    //
    //
    //
    //#region Ammo Jury Realism
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_86X70_TACX,
        newID: "6628185208dd86f969db7e03",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_68x51_fmj.bundle",
            rcid: "",
          },
          Caliber: "Caliber68x51",
          PenetrationPower: 75,
          ArmorDamage: 1,
          Damage: 217,
          InitialSpeed: 846,
          RicochetChance: 0.1,
          FragmentationChance: 0,
          BulletMassGram: 18.5,
          HeavyBleedingDelta: 0.9,
          LightBleedingDelta: 1,
          ammoAccr: 12,
          ammoHear: 0,
          ammoRec: 10,
        },
        LocalePush: {
          en: {
            name: "Jury TacX Round",
            shortName: "JuryX",
            description:
              "A modified TacX round for the Jury Marksman Rifle. This is the last thing many scavs and PMCs around Tarkov ever saw.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 1349,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_86X70_AP,
        newID: "662818a23a552da6aef8fada",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_68x51.bundle",
            rcid: "",
          },
          Caliber: "Caliber68x51",
          PenetrationPower: 115,
          ArmorDamage: 1,
          Damage: 152,
          InitialSpeed: 900,
          RicochetChance: 0.3,
          FragmentationChance: 0,
          BulletMassGram: 15.5,
          HeavyBleedingDelta: 0.75,
          LightBleedingDelta: 1,
          ammoAccr: -20,
          ammoHear: 0,
          ammoRec: 20,
        },
        LocalePush: {
          en: {
            name: "Jury AP Round",
            shortName: "JuryAP",
            description:
              "An Armor Piercing round for the Jury Marksman Rifle. This is the last thing many scavs and PMCs around Tarkov ever saw.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 1949,
      },
    });
    //#endregion
    //
    //
    //
    //#region Ammo Executioner Realism
    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_127X108_B32,
        newID: "66281ab7fca966e5021f81b5",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_762x51_m61.bundle",
            rcid: "",
          },
          Caliber: "Caliber762x51",
          PenetrationPower: 85,
          ArmorDamage: 1,
          Damage: 250,
          InitialSpeed: 818,
          RicochetChance: 0.37,
          FragmentationChance: 0.0,
          BulletMassGram: 48.3,
          HeavyBleedingDelta: 1,
          LightBleedingDelta: 1,
          ammoAccr: 0,
          ammoHear: 0,
          ammoRec: 0,
        },
        LocalePush: {
          en: {
            name: "Executioner AP Round",
            shortName: "ExecAP",
            description:
              "An Armor Piercing round for the Executioner Sniper Rifle. If you hear the sound this round makes, it's already too late.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 1879,
      },
    });

    this.utils.createItem({
      newItem: {
        ItemToClone: AllItemList.AMMO_127X108_BZT44M,
        newID: "66281ac038f9aebf6f914138",
        parentID: BaseClasses.AMMO,
        OverrideProperties: {
          Prefab: {
            path: "assets/content/items/ammo/patrons/patron_762x51_m993.bundle",
            rcid: "",
          },
          Caliber: "Caliber762x51",
          PenetrationPower: 85,
          ArmorDamage: 1,
          Damage: 250,
          InitialSpeed: 818,
          RicochetChance: 0.37,
          FragmentationChance: 0.0,
          BulletMassGram: 48.3,
          HeavyBleedingDelta: 1,
          LightBleedingDelta: 1,
          ammoAccr: 0,
          ammoHear: 0,
          ammoRec: 0,
        },
        LocalePush: {
          en: {
            name: "Executioner AP Round",
            shortName: "ExecAP",
            description:
              "An Armor Piercing round for the Executioner Sniper Rifle. If you hear the sound this round makes, it's already too late.",
          },
        },
        HandbookParent: HandbookIDs.Ammo,
        HandbookPrice: 2399,
      },
    });
    //#endregion
  }
}
