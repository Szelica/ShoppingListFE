const itemsList = [
  {
    id: "9c13e1a3b51b4d2bb32d8afc56c83b77",
    itemName: "Chlebíky",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "61a1e5d3785c4d48b3abfb6d8cf52d2b",
    itemName: "Kofola",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "a2f2d1b5cfbd4e1f91862cba83f8c6cb",
    itemName: "Čipsy",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "4b83e50c8c4a4f18b9ea5c51f942d7a2",
    itemName: "Bryndza",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "ab7e9b1cc63e42d2b51fe56dcde1c342",
    itemName: "Zmrzlina",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "d3b9c5b39e9e4f8880b3f2ddc8fcf8d6",
    itemName: "Sójové mlieko",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "2fae7d205d6c4b4ca4b0defcef65bfb9",
    itemName: "Hrušky",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "686ecf8cb838409faf6a0a2376a40c99",
    itemName: "Šunka",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "ef321c8420484bbabeef8499bc62d296",
    itemName: "Slané tyčinky",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "0a6c09072d364b2abb9efed705a75028",
    itemName: "Maslo",
    state: "completed",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "93bf288460bc4961b2559ab34046e225",
    itemName: "Tuniak",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "ac0c168e2bcc459a8cdeb39b511941a6",
    itemName: "Víno",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "24898596660d45f89a65220f3346c086",
    itemName: "Nátierka",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "1459f462e718493e88faefb9865c7888",
    itemName: "Čaj",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "ddfba99253234a78a5815285567c821b",
    itemName: "Maslo",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "cf71d9d6f51e4ae6b66cfcf83c586f4c",
    itemName: "Chlieb",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "202e6bc501a54c78b0dce357e55ea30e",
    itemName: "Paradajky",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "7243cf767d29440ba56b645a97d41363",
    itemName: "Tortilla",
    state: "active",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "f9ab6f2a98b44fd8a3f0b1b3663acacb",
    itemName: "Keksíky",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "1bec7b22b64340a299290ea5e3c053bf",
    itemName: "Klobásy",
    state: "active",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "35272b03a6014ce7aa580740e18bf25c",
    itemName: "Káva",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "60f63c87b4954401a4c37a2685de3b78",
    itemName: "Tatarka",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "983bf405afeb4f1bb6a619da6ccad9c2",
    itemName: "Slané tyčinky",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "72866534800744ab9efb9ff006d20b7c",
    itemName: "Paprika",
    state: "active",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "916f2603fb3944d7bf329d6dee49110e",
    itemName: "Maslo",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "86fb083032f04a6cbf0bddeb6bd27a8b",
    itemName: "Mlieko",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "ecfb1877eef5463185a01620bd25023f",
    itemName: "Pivo",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "3a67458fe04a49028a29fda8ce9966ab",
    itemName: "Tofu",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "935c8997e770426ba9b3a71fc7e4819b",
    itemName: "Coca-Cola",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "6c30445756014664b23cc4f9e6d5ab45",
    itemName: "Šunka",
    state: "active",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "fd99581fcf8a48ca950b79835e74a126",
    itemName: "Cesnak",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "c27b3a46caf44117907d5e3a1d479faf",
    itemName: "Cesnak",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "3cb114476dab4cc4a48ead0e844d7907",
    itemName: "Syr",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "d301125b7c5241eda865662471816dc6",
    itemName: "Víno",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "5067e114390b4e518de8a1d15b9a3d35",
    itemName: "Avokádo",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "13bc27460c074c6b87cab72894013a82",
    itemName: "Cestoviny",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "2c365e3d9a254bd8ae8d6ae72891cd6b",
    itemName: "Chlieb",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "7bd38ebaf483408696abd374e7acea68",
    itemName: "Klobásy",
    state: "active",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "7b1381cebb00477e8cebae03a696d798",
    itemName: "Keksíky",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "1896bdea702740f7bafb283d49808038",
    itemName: "Klobásy",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "c15a4d48a3b34924a2534c6ee22eee86",
    itemName: "Cestoviny",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "35e2abb6661a496c9bcccf5e0fc760b7",
    itemName: "Avokádo",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "8465c0e4c8d849758787889e192fd397",
    itemName: "Tatarka",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "9b11c35b9b93453cadbe2cf4419ac0ff",
    itemName: "Rohliky",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "d35a83a5066e4313803836f19fae8402",
    itemName: "Mlieko",
    state: "active",
    shoppingListId: "284dda39a7e9067389876da14827f79d"
  },
  {
    id: "cdbda02d03ec4176a4f6aa38a6cbde95",
    itemName: "Chlieb",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "69292cf9fbb04c1da2e539be6d662d26",
    itemName: "Keksíky",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "6de4a780150b4d1da576f543c1a2ae52",
    itemName: "Kečup",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "45fb996838dd4a0d9897abc18ed0e7f7",
    itemName: "Kečup",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "658b0767cd1747a49465ef555b92782e",
    itemName: "Jablká",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "3f62648485684853b31d3ed1ed4c1b8c",
    itemName: "Maslo",
    state: "completed",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "0f79eef5a4ad4225bd057fdb693beac7",
    itemName: "Mlieko",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "e30626172e6d49c0a72faa2adc5c9ee1",
    itemName: "Chlieb",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "1d1fe504b5324dd8b375ca0137525304",
    itemName: "Hrušky",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "3ea891efe61b430e865e43c468aabb27",
    itemName: "Tortilla",
    state: "active",
    shoppingListId: "284dda39a7e9067389876da14827f79d"
  },
  {
    id: "e7b2c6cb15e048e5994b5fd4e0567bba",
    itemName: "Uhorky",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "bd4381f99a264e75a8756c0b647eb77f",
    itemName: "Paprika",
    state: "active",
    shoppingListId: "284dda39a7e9067389876da14827f79d"
  },
  {
    id: "4a041206b5a047bdacc695bbc159b556",
    itemName: "Cestoviny",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "2f8ebddbdfc648e281c757af2c40dec8",
    itemName: "Rohliky",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "503d9bb62f4f4289957963f10f226dca",
    itemName: "Klobásy",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "1c94c5888fd64fc082570e247b065c4f",
    itemName: "Uhorky",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "56d88045a5974688959a87e30ced3bf8",
    itemName: "Syr",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "b3168ec543824a329340f6897f0554e0",
    itemName: "Ryža",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "edf4b832bf2440fd9d00f5a85d0efacc",
    itemName: "Nátierka",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "a3eb6734ccf94a66a720774b35e1b81d",
    itemName: "Ryža",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "0990e4d832cf490ead16c7e0f1afe2ff",
    itemName: "Kečup",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "82307dfd981e40e99bc1767c3463f1b8",
    itemName: "Kečup",
    state: "active",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "d022999066fc49569afd981550eed640",
    itemName: "Kečup",
    state: "completed",
    shoppingListId: "284dda39a7e9067389876da14827f79d"
  },
  {
    id: "dc15a5722312480a90841f7fb94852b4",
    itemName: "Mlieko",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "88321ef897084466ba5ac6c860793972",
    itemName: "Cestoviny",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "c81c7cbb1a3c40afa1c1acf810803e54",
    itemName: "Klobásy",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "f67128f8932b41258cd890add41a9379",
    itemName: "Jablká",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "c5c6dec6a3f4440e821647f878fae8fe",
    itemName: "Káva",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "a853abf775144e8aa1a4232c558d1744",
    itemName: "Nátierka",
    state: "active",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "1728c1df2ee84298bad80a3daaf390e6",
    itemName: "Keksíky",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "ed5ec078b6364f49aaa4bb9bc7868a2b",
    itemName: "Horčica",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "f692718ef1774a419be254d6ca782d5c",
    itemName: "Jablká",
    state: "completed",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "c2335d30d969448c9fc300c5db71b648",
    itemName: "Víno",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "12344344e24b4293a1874081cae113e4",
    itemName: "Hrianky",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "b22d6ef2d72946428696de52873f6be0",
    itemName: "Coca-Cola",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "3951e0a30d09455585282ea034160608",
    itemName: "Tuniak",
    state: "completed",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  },
  {
    id: "e73f5e701d9c495e8ed9b61429735c00",
    itemName: "Slané tyčinky",
    state: "completed",
    shoppingListId: "284dda39a7e9067389876da14827f79d"
  },
  {
    id: "8e5cf71b9ebe40ff9198b587fa21b517",
    itemName: "Víno",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "77b777dd4c70483cbf38a7321ac2c5d7",
    itemName: "Avokádo",
    state: "completed",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "28d2d90dcf574f548c384d34f0efacc9",
    itemName: "Uhorky",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "c48cdd539c724faab5f4062a93ba9287",
    itemName: "Cibuľa",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "5d4c23cb2c564f668fa23ac3d1a8f67b",
    itemName: "Šunka",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "31ec116a1c084cf7b084d89d4aac5685",
    itemName: "Tofu",
    state: "active",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "16871c61f34c4a55a681eff109189a2f",
    itemName: "Chlieb",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "788a134abaa0482883b1d5d1b954ea05",
    itemName: "Paprika",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "70ddb12d438741d98b5321ed9b297078",
    itemName: "Paprika",
    state: "completed",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "644761e0f2564c928fd6713fd64edd0f",
    itemName: "Čokoláda",
    state: "active",
    shoppingListId: "c94babed23c685af69c3849641df008b"
  },
  {
    id: "2c948733fc7a40de855f326e7cada6e6",
    itemName: "Syr",
    state: "active",
    shoppingListId: "284dda39a7e9067389876da14827f79d"
  },
  {
    id: "274cdf9a9a3c43b8bac032a43ed57911",
    itemName: "Limonáda",
    state: "active",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "1fd58fdf0ddc4767a27f7349aafe6bcc",
    itemName: "Slané tyčinky",
    state: "completed",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "2cac0622e40f489582385280a7f3217e",
    itemName: "Paprika",
    state: "completed",
    shoppingListId: "afa55b1c3537c060666133a3e7337994"
  },
  {
    id: "9b15614cc3134bb6839f9f501e8054b3",
    itemName: "Rohliky",
    state: "completed",
    shoppingListId: "e59befd586e23b9332ada388b5c1d7da"
  },
  {
    id: "83696424e84b4fb9945344561852b32e",
    itemName: "Kečup",
    state: "active",
    shoppingListId: "0dab81ff68de9dcd292146f078f9249f"
  },
  {
    id: "d6a627aab11a463485f569c5409bafd4",
    itemName: "Tuniak",
    state: "active",
    shoppingListId: "21d5dbc0725a315dcfcc7f4152a9a32d"
  },
  {
    id: "e9cc7cb76e7348b4a33a1639fc116412",
    itemName: "Horčica",
    state: "active",
    shoppingListId: "e3779d1512ede29f49569f4d46d80c15"
  }
  ];
  
  export default itemsList;