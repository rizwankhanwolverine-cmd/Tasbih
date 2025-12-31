// Updated CACHE_NAME to v4 to force a hard refresh on your devices
const CACHE_NAME = 'sanctuary-v4';
const ASSETS = [
  './',
  './index.html',
  './tasbih.html',
  './salah.html',
  './recite.html',
  './journey.html',
  './manifest.json',
  './icon.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting(); // Force new service worker to take over immediately
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(clients.claim()); // Take control of all open windows
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
