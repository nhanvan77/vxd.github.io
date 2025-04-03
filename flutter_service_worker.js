'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".firebase/hosting..cache": "1c63046692b84a0a617db4a53a7f655b",
".git/COMMIT_EDITMSG": "f4d5d0c0671be202bc241807c243e80b",
".git/config": "2bf024ec7c128908abe7c017f37c6f63",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "02d9b3dc992db939c93f0143a8e2e43e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "bab736ee1506c4bb865150c21ff43f42",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c955055f704cbbd36a0a7f47458b0c73",
".git/logs/refs/heads/main": "3eaf569784fd441e8d2ae6b3ceed3456",
".git/logs/refs/remotes/origin/main": "85c9b3e733a3238ee55ca726a6ba7b7d",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/12/3799d7995678e65b94676352d45291aac75804": "29aa2c221335b17fbe550e21961e69e6",
".git/objects/14/f52974da3438eb5c5cf818fc622c27168fc63a": "2fb6adb84ca30c910db3a8ae0e77d050",
".git/objects/17/d8036c5bc918f2ecd52508d9d30ef57e793684": "60e6190ed855ee3575bc74df993600cc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/fe1ae772da023a65c9b135b14946cb21c771c0": "2713462d6ef505cb2a8286dc5e358b48",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/92c35c6a02c65745599f8c8fb8eda23976536a": "fc0f84ff0e39908b083af6c5218b2f1b",
".git/objects/2c/a33083bdebdd9bf3fb8b0b587d3eb5ce68a1f1": "2597c460ec56f4b299107d5d6ecfdc8a",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/bb16137eb8372db7f451e91de39d59e2b525ac": "03754733d4fbe87af7afc4722987f3a9",
".git/objects/35/bfb54ab27e00cfdd342164530879cfec244f15": "101d7b3dc968ce0f9df3824b37c0ce75",
".git/objects/37/48e2197729940a6cf2ccf1b75a8117c16e9f2e": "200a42dae4dc23599867ff24adfb5eb6",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3f/27b17a3878600b3b871cfe5b7610c8e0d2ddc7": "549577c43edbad4baf4622ba8b1c4984",
".git/objects/3f/cf74f7add58bcc740421b66df687f3ca2fdf04": "23024b7c878033a110cdde7aaef1c461",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/316e7924b5116809ed0251ab118493d8633393": "77fe82bfb2b6a572522980e117a42b67",
".git/objects/43/ef74c1e25b674a10ef280a9674460dec1b5549": "bb898766d3133db8b3fc17a24305f11e",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/79897d10d300a16fd4fecfbab5e4ab4f783799": "524f63d5fe93da91ae02ec7a0cf9b291",
".git/objects/56/54dda16d81cf9d09954babef57da8df99e7e9c": "7fb1e9527cbde0fe6eec9fa360cb1e03",
".git/objects/57/6a767ea9368e31b4aaee18fe7d8cbeb849645c": "9f18a383b19f07943e175b10294565bb",
".git/objects/67/bef86b62b7e524f0262933e811ce4281cfae6e": "20081672a06deee4af457d3d31946880",
".git/objects/6a/cc2f5872abd10b163f403af0b359bcbf215dee": "22f9521c4cdcd161dd546de063e4b0d7",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6f/c90ebb6b342be39a9241e9affedd38a70167ec": "3c8ffb8c88c62b9ae8beff953d1c89c6",
".git/objects/77/ee02cb3b92c267866a4ed315a44ad83ab83b3c": "6a4e59bff9b61ce0d48d482904c5e633",
".git/objects/78/70a358ca7285d602415429d89b77cd55d4c044": "a9c67e1f514e589eeefa799d8ab95549",
".git/objects/78/cd539208aaed5663462c089233b3462df326c2": "52ffb62bf0715657260202f61ce7e7d7",
".git/objects/7b/86a8af2d31f2071e4c325d5d9743cee0596334": "eae08688ec611f1836db763f17752883",
".git/objects/7d/0444e9ce739d9f51c682be5b1e190eb2c45f1d": "02802f2871da84bbdbcc076f32e95cd1",
".git/objects/7e/450a90ff38e766b26e3eda710ee8131eabf2b2": "86224567d3f079ee390a63e296bc5a81",
".git/objects/81/039ba93b965abb9b849662a619d60f7259bdfb": "d807d94c6a7c7d35a8c37e237422883f",
".git/objects/81/f7862278ba333cad4ad3e477d827c4a11ea8a0": "15868827efee0adfa7346ff73198c64f",
".git/objects/82/9eda8fdcf133ab2083dbc880b6362b11d0c8ea": "72fd972bf7f0020b924435fc702e5219",
".git/objects/83/4894e9a05c1a79ed4a8322123bdc6c5f21eff8": "34b1d4a009ecd3121a4d6d3983ea5ae4",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/86ebede3d2f042ac0de65700fde6cb42cc6b8d": "75900c28979b600866af5f10f00eb3d7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75942179753fc6b249be141191a1d56e13bdcc": "36fbcb47d1dd042b516773b36bf011b2",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/cdac4fc3b1524f3b623de328e6ceea9e34ea86": "8b53908f75a953be67aaf096e3078c68",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/27e30f82e22271e2116c05e9f732918cc4a6d5": "b8570d1836b83f8af5554d467b5da975",
".git/objects/9b/75dc5282a3c771b688b688ed41cd3f1c41beef": "d7092befbd69271e8edebc09481ce57c",
".git/objects/a0/d2f6f77e3f1f2f86667b1edc6f8b50a83eb73f": "ca8b177c681ec8ea508bbdb92013b82d",
".git/objects/a4/e80951c844ff537801a9fcd4ed3a51bb29f327": "5d1c9ef9d85d5af0a07d15fce9998dfc",
".git/objects/a6/b8d55c0a8e56474c60581df756d7737d6dc174": "2aff3a68f39405013b164b624557f084",
".git/objects/a9/c25de1237a056102cbbfec40cfea7f1ae536df": "e7946c831c04376661b9216a12202b7b",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/7f6310755422d220e2c975ca4387ab465c95a0": "bfade2f38068d533f45c1eda0e60dd92",
".git/objects/b2/18019e679856a8137b6bfc2983170db8305a29": "b435f6f192ba555f5702f4543de6853b",
".git/objects/b2/924f55cd3ce25f0cc6664ef89295b4b02c1522": "d4fff3fd55ae8608242e1cdd22421e48",
".git/objects/b3/a5ba87699cba65ceac1cd5ee5bf9d56e34acf8": "14358cd9e1f6e5fe9cbed91b6bd56b21",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4f85ae65ce396579dfaa7253eebc6b8e5ee8ca": "bf298ef2fa52b652a9a7381613115228",
".git/objects/b9/da805ed795b186753100f05d8294f55203b845": "a932d5b583a4c1150597d308912555ae",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/c3/6d4841424ed092d893eb23abf415c74df76d13": "e190254cf764953aeeddd0ef8640dc0b",
".git/objects/c5/0cb371535975a160dcaefc147ae9d1f2832d28": "8feada5cc1a49e2631037cc3697e1871",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/5a9412ddf167f7f8127a136acc6c4e640d10bb": "9f0733ee7206170665b030d1fe1d2916",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7d80563d510c1588b449b65b86415990c3e6f9": "6a42c1e8b5883fd77e6044a0ca68d675",
".git/objects/d9/a9d26d7427f46792030b8b49b9ac4daecd8361": "45cf81ec3148cabea51be952c4c1abb1",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e5/4bcb71dbf9f487798a4ac804e9391136f54df5": "58eb67b16101343c3cd45f8eaf0e55c4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/420bb60a4cc0806856f29cb0ad4d9e9d6ea69a": "992d3d8cee0db94cdb36bda64b358c2e",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/40fc13c8ee084c0cd957bb4db1b8751b8d4848": "217c75edd2eef5614749f37c7383f14f",
".git/objects/fb/1bd67d813878e73bf8d970abe5cb1ae7d315cf": "3b5be4376d799e8ac3cc844ccf372bb5",
".git/objects/fd/12fcada29507ed57272add44ef3627018a65ab": "06a712d709d756e49491ad4cc8dca90f",
".git/objects/fd/9e920eeac4bde528a425673b9639713fb063bd": "00c02db49e3ba3b10ffa35ddc644a4d7",
".git/ORIG_HEAD": "dee767486416f619278aa9905d4b19e2",
".git/refs/heads/main": "b41e1bc313c6f6a50485663390f67f5b",
".git/refs/remotes/origin/main": "b41e1bc313c6f6a50485663390f67f5b",
"assets/AssetManifest.bin": "533711996e01641828487b4024a1cd91",
"assets/AssetManifest.bin.json": "2461896f1e10a4c79b666506ea091dfa",
"assets/AssetManifest.json": "a8d19aa0763ca91338582f40ad6a2400",
"assets/assets/images/book_placeholder.jpg": "4e3e4556db9d29bb9a40c098ebe4cc8e",
"assets/assets/images/xoi.jpg": "5a64e99d873516d3a2192cd7e91534a3",
"assets/assets/questions.csv": "114819e06a3042ab47e2e4d8b09b55b6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2648a01134d70709f9842db20abedc0f",
"assets/NOTICES": "749851f57197a35cd6caa5543b8ac217",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"firebase.json": "6bcf42ed79fb26c537250453f0bdd183",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "5872ea8faeb8e4b7711375f643468954",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e9e81c38875809a79422223b00eae90a",
"/": "e9e81c38875809a79422223b00eae90a",
"main.dart.js": "fac17fcf27734ba12d811e697042ca72",
"manifest.json": "9334be9782cd73f9fd015a262ffc8a9d",
"public/404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"public/index.html": "2c34cc96de5ead0961b25ef9a7823f8f",
"version.json": "68c64e6755784b6354d29f6094f16df4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
