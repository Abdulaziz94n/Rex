'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d07071708df4e261f5414a919be14377",
"assets/AssetManifest.bin.json": "89b2c299cc483db864b7273c6f024398",
"assets/AssetManifest.json": "901b2b6f68f2eb75ecbc7a2f5fdc3559",
"assets/assets/app_icon.png": "59c1b2bd7e5b10b4e3f4dc77d3186bbf",
"assets/assets/canli-destek.svg": "8b84a5c1c11a603e12415b7c54163126",
"assets/assets/icons/confirmed.svg": "c445059fbd031708ef11e0478c83f65d",
"assets/assets/icons/delivered.svg": "c39e03e752771fa7c00403dc0b726a43",
"assets/assets/icons/hide_drawer.svg": "e12cdee7c71da8091c20715e5659abe3",
"assets/assets/icons/live_support.svg": "01fe332cb6e86a3629e22eb568e99a71",
"assets/assets/icons/logout.svg": "0855a0a1be12f198e6d3e1a4ed2162a0",
"assets/assets/icons/onway.svg": "473dbf4f9098218abdd2442f45bd24a9",
"assets/assets/icons/order_status_cutting.svg": "194523649cbefba6f6b8fc91ebcdb84a",
"assets/assets/icons/order_status_delivered.svg": "5a8068747c242a5da76da3641d1bc996",
"assets/assets/icons/order_status_onway.svg": "1043c174d3936d84144b7d3fb4fe7974",
"assets/assets/icons/order_status_preparing.svg": "1e5dc5cae0bc5f20e454b03216d0444f",
"assets/assets/icons/order_status_prep_cursor.svg": "1b66634382e888b6a69455d2b9eaa675",
"assets/assets/icons/order_status_prep_depo.svg": "c23d54a37fba370874697e050ed49250",
"assets/assets/icons/order_status_prep_prod.svg": "8d41c5f0f9d1a0742c8217e717b54245",
"assets/assets/icons/order_status_quality_control.svg": "2a25f1a42f5f7356d288fa86de8b8b49",
"assets/assets/icons/order_status_quality_control2.svg": "0be551133aafb57bd994c7fce5186127",
"assets/assets/icons/planlama.svg": "3ea4d19e4b45d9e79950899336671869",
"assets/assets/icons/production_status.svg": "bdd16a4e7bd7265c3055758dde299e52",
"assets/assets/icons/repeat.svg": "98cb6c6a3cd32ce7a1cd0bced01750c6",
"assets/assets/icons/step_color_length_count.svg": "5f4871e9d4843d2375fdb7e95c468c69",
"assets/assets/icons/step_cursor.svg": "095c219c63dae1af9c7eb778402219fc",
"assets/assets/icons/step_details.svg": "6eebb1378b8a86d9527ce65fa978d871",
"assets/assets/icons/step_done.svg": "a801db3dd5a3683ce52ae8a6b979a532",
"assets/assets/icons/step_handgrip.svg": "e389b849a2cc426da25be22cf1b50f6f",
"assets/assets/icons/step_in_progress.svg": "50147e81b78388c382932cfe870d4390",
"assets/assets/icons/step_outtertype.svg": "0fc2427f1af3fb729f12ae19a18d9004",
"assets/assets/icons/step_separator.svg": "789de58473d4f55e15e9ab34a61200e4",
"assets/assets/icons/step_topstop.svg": "72595296e36f60fa35cdb2161ecde18d",
"assets/assets/icons/step_zipper.svg": "7c6cbd7c7cc48f65a3b3bf7e41316d04",
"assets/assets/images/background.jpg": "7f33bc55cd0b14417f65ae7e70c3046d",
"assets/assets/images/background1.jpg": "603fcf50d74e89708a64a6c3c3e9fe1e",
"assets/assets/images/background2.jpg": "ab3c6dfcb3addc2721f36ed9bba5f1f9",
"assets/assets/images/background3.jpg": "d436f7b282e6fed0a810d0184c68a14c",
"assets/assets/images/background4.jpg": "d511edb5a6550d716f38875afc16e5ff",
"assets/assets/images/zip-rex-logo.jpeg": "0a082c4fff5050a9a53cf2d899676620",
"assets/assets/splash_screen.png": "9dd7ae275662748f46394eb80ed2bb5f",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "c46817a892d1bd5ddbc884ab4ec35030",
"assets/NOTICES": "369232d482413e74655aaea3bf41b163",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "071481bb3ad22440319a258e86114dbc",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/icon-192.png": "640eadf3733a7c7e1b4e8a69a2513a4e",
"icons/icon-512.png": "0036f8cd6c31af50d927e351fa42c0b6",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "59c1b2bd7e5b10b4e3f4dc77d3186bbf",
"index.html": "5f4c0a4feca37647dbe00957908855a2",
"/": "5f4c0a4feca37647dbe00957908855a2",
"main.dart.js": "a5b39728f315f28ac372e1adbd492c54",
"manifest.json": "322801a25ac8bb9a9d77d8aa1159f978",
"splash/img/dark-1x.png": "a84b13824b886641dc8b98d468bfbc96",
"splash/img/dark-2x.png": "444c69d99857950958f99bebde975fb2",
"splash/img/dark-3x.png": "4096ca028643fb771bb1182618d3a9a8",
"splash/img/dark-4x.png": "f4faef7bc43df626c5fd476398c1b028",
"splash/img/light-1x.png": "a84b13824b886641dc8b98d468bfbc96",
"splash/img/light-2x.png": "444c69d99857950958f99bebde975fb2",
"splash/img/light-3x.png": "4096ca028643fb771bb1182618d3a9a8",
"splash/img/light-4x.png": "f4faef7bc43df626c5fd476398c1b028",
"version.json": "9616419760c08bc254ed5db70f424b05"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
