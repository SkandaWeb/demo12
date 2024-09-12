'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a08b1a9443db0ad41dc6dddee81eef3e",
".git/config": "89e22fb9729a933e7d96d39181480649",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3fca3a7072e69e17d6ddc09a2b94153f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fcc11c66a68961195389e515ef0266e0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d4abbd7de46f57837da883b645954bca",
".git/logs/refs/heads/main": "d4abbd7de46f57837da883b645954bca",
".git/logs/refs/remotes/origin/HEAD": "09328b341566ad6af1783f587e568620",
".git/logs/refs/remotes/origin/main": "7145d47b4acf5b9f611fa99165464dae",
".git/objects/01/15e67525c70f59e628f7a165c313a88fda8eac": "6f9e6c41bef9b1a5cb6d6619b0708e27",
".git/objects/04/f2011dc80fee771041408b198c83fd52b1b7c7": "b4301cac552226508de01d6edc52a84d",
".git/objects/0b/59aa0e38c3bad55d53b73629a7623afbe0eea1": "13d60e09a0a1be749008c3ab476a93ef",
".git/objects/10/b8409f40262d78e3be5507643351fc48e9b47d": "76785de773b57a73d1aadff9e2479fa3",
".git/objects/22/73dff73aa0d37b88b2121a2eb660fc4c311677": "e891c85916984ad5df51246af18d3064",
".git/objects/38/eedc3cf942fd569faa939de74428b42552ff51": "f080bb480abf9490fc994340c381f352",
".git/objects/5f/e15fa85cb779265922607ed3914edbbaa97578": "18de68ef21ba5aa0a9867ca9bf9d2e63",
".git/objects/a6/3181728a42b1c251d21c1033f49596f8702dbc": "35f710489b16eb0a8957ebacf7a3abe1",
".git/objects/aa/c623db5a0c883e99cf8ac67f54542cd3bdc76f": "ea4a379e4e66201a6422bd74c91a7204",
".git/objects/b8/da6be5eac346ffebfa3a3b021d6c9480e423ee": "ce6b59c73be770739af54df124009492",
".git/objects/c4/e0b6a236ca0e1e689a1a6e5c12d8d0c11cc64d": "084307ce8f69146d857801cf0ede576e",
".git/objects/c8/24dc24de45dcae763aaaba6defa8cfd05c2b45": "1fe412c52a0d7425d1d6abb0e701b25c",
".git/objects/c9/7d06eb3566723f609c7181aeaf79a9de0c3e07": "dc9d270daffbe38e20610494f46765e3",
".git/objects/cd/14ad41310d6b43024cc9e1840b1070fa8abcf2": "4514d17b7eae6e2751065c03121b7181",
".git/objects/e4/76d2a34412f5088fef4f384e7d9c8a865bfdb1": "55a5e00ec495015f8d6e709d07b768f0",
".git/objects/e5/d3c59d2945d000cbdd46c3f64de87d83f5fd5f": "79e0e0f493fe7bce5eb9d30955790ca2",
".git/objects/e7/c7228c5dcb79bceeb0465248b01f60c419b19f": "ec32bebac628556287b5c3bb2e544eda",
".git/objects/e7/c9de2378046eb3684307c9ab62a9985189f027": "29b3ca9f5672906fab508ba95654f337",
".git/objects/eb/53a9e71dbbcfcec8cf8a936158983433edd823": "aa5ceafa36a4f9a3c4a4635917975520",
".git/objects/f2/361988876dc04bfb7127df732c97ea32331033": "e84cd2ac5e6e405ab1e90464aec5e66d",
".git/objects/f8/5a37ca89d71e86c224585aae1dcca5f40a163a": "076603657aed4a00b7c5336e20414d06",
".git/objects/fe/730cd6125574e2c3e4f80b172ae1551b3378a2": "860fe348ad5f9442d5c2d59a7c7612f5",
".git/objects/pack/pack-6ed79393a84bd6f3e4fdc2de2189c358b0e9e417.idx": "218a94e2330c589d96cc39329d105742",
".git/objects/pack/pack-6ed79393a84bd6f3e4fdc2de2189c358b0e9e417.pack": "b322581efc9803d62450976f695bd7d7",
".git/objects/pack/pack-6ed79393a84bd6f3e4fdc2de2189c358b0e9e417.rev": "bc6a6cb8835a665bf126e919b92a8ea7",
".git/packed-refs": "e261d6cd5e9b111bfc62ab243127cca2",
".git/refs/heads/main": "f76161731166378e3d16fe3060b37eed",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "f76161731166378e3d16fe3060b37eed",
"assets/AssetManifest.bin": "f33dc94f0e6a730e1ca69d4131de2b26",
"assets/AssetManifest.bin.json": "e731dc2c81c71044e1f0b85fc542aa73",
"assets/AssetManifest.json": "d52f085784d2c54c4c05f3867871b638",
"assets/assets/addbtn.png": "f92452a171c821fd716ff476b86b8612",
"assets/assets/images/2.png": "b71b1e866074a46ace69f60d83a8ae5d",
"assets/assets/images/3.png": "1657eb18c7adb431d11905ec6fb131d5",
"assets/assets/images/4.png": "3145290c35c974a53e865a441f80e186",
"assets/assets/images/5.png": "92ed69845b0c5afe60ecef976eb36a00",
"assets/assets/images/6.png": "1423fe96ef411101097f32acc4d7ecd1",
"assets/assets/images/7.png": "5d4465fffaa99f6a78024cc2d3c4759d",
"assets/assets/images/8.png": "9242bf59ae50ca21aec5aa123bea1632",
"assets/assets/images/logo.png": "5f845cbce16ab386d0e4d1b302dacddc",
"assets/assets/location.png": "ff0811e13c403f3ffd781296682ae182",
"assets/assets/phone.png": "512d593c2807579f3815247fc1aca160",
"assets/assets/satisfaction.png": "c6f9a525f24cf6373272475c082771ae",
"assets/assets/user.png": "42c665c2531c24b205652e305c1f1b08",
"assets/assets/whatsapp.png": "983e9b8bd20f9ee3a91195e705068776",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "809a12f864920ec2a060a5a0a5cd0da6",
"assets/NOTICES": "8cfe3f3d4fe850872638f694212a6270",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "416fbd43af735fe497423f57e2e76f28",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/wakelock_web/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c51d087c965a322ba82ed1d5dfeee319",
"/": "c51d087c965a322ba82ed1d5dfeee319",
"logo.png": "5f845cbce16ab386d0e4d1b302dacddc",
"main.dart.js": "3bd13d7fb9adec622e42fdba5b6311e3",
"manifest.json": "6dcceb06abed02ff259573c01290616a",
"version.json": "2b04f4dd17f41ab45ea8ed44bfea692a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
