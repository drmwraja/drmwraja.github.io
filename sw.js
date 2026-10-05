const CACHE='wasim-raja-portfolio-v13';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon.svg','./assets/facilities/paperator-fabrication.png','./assets/facilities/proton-membrane-casting.jpg','./assets/facilities/cellulosic-iem-zcoat.png','./assets/facilities/research-scaleup-facilities.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
