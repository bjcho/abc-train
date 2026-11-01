// ABC 기차 service worker: keeps the game playable offline.
// When you update index.html, bump VERSION so iPads pick up the new files.
const VERSION = 'abc-train-v8';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './audio/voice.json',
  './audio/a000.mp3', './audio/a001.mp3', './audio/a002.mp3', './audio/a003.mp3', './audio/a004.mp3', './audio/a005.mp3', './audio/a006.mp3', './audio/a007.mp3', './audio/a008.mp3', './audio/a009.mp3', './audio/a010.mp3', './audio/a011.mp3', './audio/a012.mp3', './audio/a013.mp3', './audio/a014.mp3', './audio/a015.mp3', './audio/a016.mp3', './audio/a017.mp3', './audio/a018.mp3', './audio/a019.mp3', './audio/a020.mp3', './audio/a021.mp3', './audio/a022.mp3', './audio/a023.mp3', './audio/a024.mp3', './audio/a025.mp3', './audio/a026.mp3', './audio/a027.mp3', './audio/a028.mp3', './audio/a029.mp3', './audio/a030.mp3', './audio/a031.mp3', './audio/a032.mp3', './audio/a033.mp3', './audio/a034.mp3', './audio/a035.mp3', './audio/a036.mp3', './audio/a037.mp3', './audio/a038.mp3', './audio/a039.mp3', './audio/a040.mp3', './audio/a041.mp3', './audio/a042.mp3', './audio/a043.mp3', './audio/a044.mp3', './audio/a045.mp3', './audio/a046.mp3', './audio/a047.mp3', './audio/a048.mp3', './audio/a049.mp3', './audio/a050.mp3', './audio/a051.mp3', './audio/a052.mp3', './audio/a053.mp3', './audio/a054.mp3', './audio/a055.mp3', './audio/a056.mp3', './audio/a057.mp3', './audio/a058.mp3', './audio/a059.mp3', './audio/a060.mp3', './audio/a061.mp3', './audio/a062.mp3', './audio/a063.mp3', './audio/a064.mp3', './audio/a065.mp3', './audio/a066.mp3', './audio/a067.mp3', './audio/a068.mp3', './audio/a069.mp3', './audio/a070.mp3', './audio/a071.mp3', './audio/a072.mp3', './audio/a073.mp3', './audio/a074.mp3', './audio/a075.mp3', './audio/a076.mp3', './audio/a077.mp3', './audio/a078.mp3', './audio/a079.mp3', './audio/a080.mp3', './audio/a081.mp3', './audio/a082.mp3', './audio/a083.mp3', './audio/a084.mp3', './audio/a085.mp3', './audio/a086.mp3', './audio/a087.mp3', './audio/a088.mp3', './audio/a089.mp3', './audio/a090.mp3', './audio/a091.mp3', './audio/a092.mp3', './audio/a093.mp3', './audio/a094.mp3', './audio/a095.mp3', './audio/a096.mp3', './audio/a097.mp3', './audio/a098.mp3', './audio/a099.mp3', './audio/a100.mp3', './audio/a101.mp3', './audio/a102.mp3', './audio/a103.mp3', './audio/a104.mp3', './audio/a105.mp3', './audio/a106.mp3', './audio/a107.mp3', './audio/a108.mp3', './audio/a109.mp3', './audio/a110.mp3', './audio/a111.mp3', './audio/a112.mp3', './audio/a113.mp3', './audio/a114.mp3', './audio/a115.mp3', './audio/a116.mp3', './audio/a117.mp3', './audio/a118.mp3', './audio/a119.mp3', './audio/a120.mp3', './audio/a121.mp3', './audio/a122.mp3', './audio/a123.mp3', './audio/a124.mp3', './audio/a125.mp3', './audio/a126.mp3', './audio/a127.mp3', './audio/a128.mp3', './audio/a129.mp3', './audio/a130.mp3', './audio/a131.mp3', './audio/a132.mp3', './audio/a133.mp3', './audio/a134.mp3', './audio/a135.mp3', './audio/a136.mp3', './audio/a137.mp3', './audio/a138.mp3', './audio/a139.mp3', './audio/a140.mp3', './audio/a141.mp3', './audio/a142.mp3', './audio/a143.mp3', './audio/a144.mp3', './audio/a145.mp3', './audio/a146.mp3', './audio/a147.mp3', './audio/a148.mp3', './audio/a149.mp3', './audio/a150.mp3', './audio/a151.mp3', './audio/a152.mp3', './audio/a153.mp3', './audio/a154.mp3', './audio/a155.mp3', './audio/a156.mp3', './audio/a157.mp3', './audio/a158.mp3', './audio/a159.mp3', './audio/a160.mp3', './audio/a161.mp3', './audio/a162.mp3', './audio/a163.mp3', './audio/a164.mp3', './audio/a165.mp3', './audio/a166.mp3', './audio/a167.mp3', './audio/a168.mp3', './audio/a169.mp3', './audio/a170.mp3', './audio/a171.mp3', './audio/a172.mp3', './audio/a173.mp3', './audio/a174.mp3', './audio/a175.mp3', './audio/a176.mp3', './audio/a177.mp3', './audio/a178.mp3', './audio/a179.mp3', './audio/a180.mp3', './audio/a181.mp3', './audio/a182.mp3', './audio/a183.mp3', './audio/a184.mp3', './audio/a185.mp3', './audio/a186.mp3', './audio/a187.mp3', './audio/a188.mp3', './audio/a189.mp3', './audio/a190.mp3', './audio/a191.mp3', './audio/a192.mp3', './audio/a193.mp3', './audio/a194.mp3', './audio/a195.mp3', './audio/a196.mp3', './audio/a197.mp3', './audio/a198.mp3', './audio/a199.mp3', './audio/a200.mp3'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL.map(u => new Request(u, { cache: 'reload' })))).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // The game page: try the network first so updates show up, fall back to the cache offline.
  if (req.mode === 'navigate') {
    e.respondWith(fetch(req).then(res => { const copy = res.clone(); caches.open(VERSION).then(c => c.put('./index.html', copy)); return res; }).catch(() => caches.match('./index.html')));
    return;
  }
  // Everything else (icons, Google Fonts): cache first, refresh in the background.
  e.respondWith(caches.match(req, { ignoreSearch: true }).then(hit => {
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
