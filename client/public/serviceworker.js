if ('serviceWorker' in navigator) {
    // wait until page is rendered before running background SW thread
    window.addEventListener('load', function() {
      // navigator object
      // https://www.w3schools.com/jsref/obj_navigator.asp
      navigator.serviceWorker.register('/serviceworker.js').then(function(registration) {
        // Registration was successful
        // note return of registration object which contains infor about
        // service worker, scope and API interface
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      }, function(err) {
        // registration failed :(
        console.log('ServiceWorker registration failed: ', err);
      });
    });
  }
  
  // SERVICE WORKER FILE SNIPPET
  const cacheName = "static-cache-v1";
  const filesToCache = ["/index.html",
                        "/manifest.webmanifest",
                        "/" ];
  
  // Triggers immediately
  self.addEventListener("install", function(event) {
    // Perform install steps - stores all static files
    // Common Pattern
    console.log("[Serviceworker] Install");
    event.waitUntil(
      caches.open(cacheName).then(function(cache) {
        console.log("[ServiceWorker] Caching app shell");
        return cache.addAll(filesToCache);
      })
    );
  });
  
  // Lifecycle event triggers when 'install complete'
  // Removes any file from cache not part of this web app
  self.addEventListener("activate", function(event) {
    console.log("[Servicework] Activate");
    event.waitUntil(
      caches.keys().then(function(keyList) {
        return Promise.all(keyList.map(function(key) {
          if (key !== cacheName) {
            console.log("[ServiceWorker] Removing old cache shell", key);
            return caches.delete(key);
          }
        }));
      })
    );
  });
  
  // Dynamic lifecycle event - triggers on every network fetch event
  self.addEventListener("fetch", (event) => {
    console.log("[ServiceWorker] Fetch");
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  
  });
  
  