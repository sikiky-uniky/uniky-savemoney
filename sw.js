const CACHE_NAME = 'uniky-cache-v4';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/logo.png'
];

// Tahap 1: Install & Simpan ke Cache
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Tahap 2: Ambil dari Cache kalau tidak ada internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});