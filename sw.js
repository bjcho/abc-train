// ABC 기차 service worker: keeps the game playable offline.
// When you update index.html, bump VERSION so iPads pick up the new files.
const VERSION = 'abc-train-v7';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './audio/voice.json',
  './audio/k000.mp3', './audio/k001.mp3', './audio/k002.mp3', './audio/k003.mp3', './audio/k004.mp3', './audio/k005.mp3', './audio/k006.mp3', './audio/k007.mp3', './audio/k008.mp3', './audio/k009.mp3', './audio/k010.mp3', './audio/k011.mp3', './audio/k012.mp3', './audio/k013.mp3', './audio/k014.mp3', './audio/k015.mp3', './audio/k016.mp3', './audio/k017.mp3', './audio/k018.mp3', './audio/k019.mp3', './audio/k020.mp3', './audio/k021.mp3', './audio/k022.mp3', './audio/k023.mp3', './audio/k024.mp3', './audio/k025.mp3', './audio/k026.mp3', './audio/k027.mp3', './audio/k028.mp3', './audio/k029.mp3', './audio/k030.mp3', './audio/k031.mp3', './audio/k032.mp3', './audio/k033.mp3', './audio/k034.mp3', './audio/k035.mp3', './audio/k036.mp3', './audio/k037.mp3', './audio/k038.mp3', './audio/k039.mp3', './audio/k040.mp3', './audio/k041.mp3', './audio/k042.mp3', './audio/k043.mp3', './audio/k044.mp3', './audio/k045.mp3', './audio/k046.mp3', './audio/k047.mp3', './audio/k048.mp3', './audio/k049.mp3', './audio/k050.mp3', './audio/k051.mp3', './audio/k052.mp3', './audio/k053.mp3', './audio/k054.mp3', './audio/k055.mp3', './audio/k056.mp3', './audio/k057.mp3', './audio/k058.mp3', './audio/k059.mp3', './audio/k060.mp3', './audio/k061.mp3', './audio/k062.mp3', './audio/k063.mp3', './audio/k064.mp3', './audio/k065.mp3', './audio/k066.mp3', './audio/k067.mp3', './audio/k068.mp3', './audio/k069.mp3', './audio/k070.mp3', './audio/k071.mp3', './audio/k072.mp3', './audio/k073.mp3', './audio/k074.mp3', './audio/k075.mp3', './audio/k076.mp3', './audio/k077.mp3', './audio/k078.mp3', './audio/k079.mp3', './audio/k080.mp3', './audio/k081.mp3', './audio/k082.mp3', './audio/k083.mp3', './audio/k084.mp3', './audio/k085.mp3', './audio/k086.mp3', './audio/k087.mp3', './audio/k088.mp3', './audio/k089.mp3', './audio/k090.mp3', './audio/k091.mp3', './audio/k092.mp3', './audio/k093.mp3', './audio/k094.mp3', './audio/k095.mp3', './audio/k096.mp3', './audio/k097.mp3', './audio/k098.mp3', './audio/k099.mp3', './audio/k100.mp3', './audio/k101.mp3', './audio/k102.mp3', './audio/k103.mp3', './audio/k104.mp3', './audio/k105.mp3', './audio/k106.mp3', './audio/k107.mp3', './audio/k108.mp3', './audio/k109.mp3', './audio/k110.mp3', './audio/k111.mp3', './audio/k112.mp3', './audio/k113.mp3', './audio/k114.mp3', './audio/k115.mp3', './audio/k116.mp3', './audio/k117.mp3', './audio/k118.mp3', './audio/k119.mp3', './audio/k120.mp3', './audio/k121.mp3', './audio/k122.mp3', './audio/k123.mp3', './audio/k124.mp3', './audio/k125.mp3', './audio/k126.mp3', './audio/k127.mp3', './audio/k128.mp3', './audio/k129.mp3', './audio/k130.mp3', './audio/k131.mp3', './audio/k132.mp3', './audio/k133.mp3', './audio/k134.mp3', './audio/k135.mp3', './audio/k136.mp3', './audio/k137.mp3', './audio/k138.mp3', './audio/k139.mp3', './audio/k140.mp3', './audio/k141.mp3', './audio/k142.mp3', './audio/k143.mp3', './audio/k144.mp3', './audio/k145.mp3', './audio/k146.mp3', './audio/k147.mp3', './audio/k148.mp3', './audio/k149.mp3', './audio/k150.mp3', './audio/k151.mp3', './audio/k152.mp3', './audio/k153.mp3', './audio/k154.mp3', './audio/k155.mp3', './audio/k156.mp3', './audio/k157.mp3', './audio/k158.mp3', './audio/k159.mp3', './audio/k160.mp3', './audio/k161.mp3', './audio/k162.mp3', './audio/k163.mp3', './audio/k164.mp3', './audio/k165.mp3', './audio/k166.mp3', './audio/k167.mp3', './audio/k168.mp3', './audio/k169.mp3', './audio/k170.mp3', './audio/k171.mp3', './audio/k172.mp3', './audio/k173.mp3', './audio/k174.mp3', './audio/k175.mp3', './audio/k176.mp3', './audio/k177.mp3', './audio/k178.mp3', './audio/k179.mp3', './audio/k180.mp3', './audio/k181.mp3', './audio/k182.mp3', './audio/k183.mp3', './audio/k184.mp3', './audio/k185.mp3', './audio/k186.mp3', './audio/k187.mp3', './audio/k188.mp3', './audio/k189.mp3', './audio/k190.mp3', './audio/k191.mp3', './audio/k192.mp3', './audio/k193.mp3', './audio/k194.mp3', './audio/k195.mp3', './audio/k196.mp3', './audio/k197.mp3', './audio/k198.mp3', './audio/k199.mp3', './audio/k200.mp3'];

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
