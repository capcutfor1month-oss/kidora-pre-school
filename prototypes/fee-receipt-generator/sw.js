// Kidora Fee Receipt Generator — Service Worker
// Caches only the app shell (HTML + manifest + icons).
// NEVER caches, persists, or transmits user-entered data.
// All receipt, parent, student, logo, and signature data lives in
// page memory only and is cleared automatically on page refresh.

var CACHE_NAME = "kidora-fee-receipt-v1";

// Static app-shell assets only — no user data.
// The HTML shell is cached from the actual navigation URL at runtime so the
// app works whether it is served as "/", "/index.html", or another owned path.
var SHELL_ASSETS = [
  "./manifest.json",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/icon.svg",
];

// ── Install: pre-cache app shell ─────────────────────────────────
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      return cache.addAll(SHELL_ASSETS);
    })
  );
  self.skipWaiting();
});

// ── Activate: remove stale caches ────────────────────────────────
self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(
        keys
          .filter(function (k) { return k !== CACHE_NAME; })
          .map(function (k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

// ── Fetch: network-first for shell, pass-through for everything else ─
// Data URIs and blob: URLs (uploaded logos / signatures) never reach
// the SW — they are not http/https requests — so they cannot be cached.
self.addEventListener("fetch", function (event) {
  if (event.request.method !== "GET") return;
  if (!event.request.url.startsWith(self.location.origin)) return;

  var reqPath = new URL(event.request.url).pathname;
  var isShellAsset = SHELL_ASSETS.some(function (path) {
    return reqPath === new URL(path, self.location.href).pathname;
  });
  var isHtmlNavigation = event.request.mode === "navigate" ||
    (event.request.headers.get("accept") || "").indexOf("text/html") !== -1;

  if (!isShellAsset && !isHtmlNavigation) return; // let browser handle non-shell requests normally

  // Network-first: serve fresh copy when online, cached copy when offline.
  event.respondWith(
    fetch(event.request)
      .then(function (response) {
        if (response.ok) {
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function (cache) {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(function () {
        return caches.match(event.request)
          .then(function (cached) {
            if (cached) return cached;
            if (!isHtmlNavigation) return undefined;
            return caches.match("./").then(function (rootCached) {
              return rootCached || caches.match("./index.html");
            });
          });
      })
  );
});
