// FILE NAME: sw.js
const CACHE_NAME = 'sanctuary-v1';
const ASSETS = [
  './',
  './index.html',
  './tasbih.html',
  './salah.html',
  './recite.html',
  './journey.html'
];

// Install Event: Caches the App Shell and Modules
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Fetch Event: Serves content from Cache first (Instant Load)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});