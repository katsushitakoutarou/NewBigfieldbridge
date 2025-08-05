const CACHE_NAME = 'flowchart-cache-v2'; // キャッシュのバージョンを更新
const urlsToCache = [
  './',
  './index.html',
  './script.js',
  './style.css',
  './manifest.json',
  './service-worker.js',
  './icon-192x192.png',
  './icon-512x512.png',
  // 言語ファイルを追加
  './locales/ja.json',
  './locales/en.json',
  './locales/zh.json',
  './locales/vi.json',
  // UIで使われる画像を追加
  './良い時.jpg',
  './きつい時.jpg',
  './どうして.jpg',
  './マーク+ロゴタイプ（英+和）.jpg'
];


self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // キャッシュがあればそれを返す
        }
        return fetch(event.request); // なければネットワークから取得
      })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});