// ABC 기차 service worker: keeps the game playable offline.
// When you update index.html, bump VERSION so iPads pick up the new files.
const VERSION = 'abc-train-v5';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png', './audio/voice.json',
  './audio/v000.mp3', './audio/v001.mp3', './audio/v002.mp3', './audio/v003.mp3', './audio/v004.mp3', './audio/v005.mp3', './audio/v006.mp3', './audio/v007.mp3', './audio/v008.mp3', './audio/v009.mp3', './audio/v010.mp3', './audio/v011.mp3', './audio/v012.mp3', './audio/v013.mp3', './audio/v014.mp3', './audio/v015.mp3', './audio/v016.mp3', './audio/v017.mp3', './audio/v018.mp3', './audio/v019.mp3', './audio/v020.mp3', './audio/v021.mp3', './audio/v022.mp3', './audio/v023.mp3', './audio/v024.mp3', './audio/v025.mp3', './audio/v026.mp3', './audio/v027.mp3', './audio/v028.mp3', './audio/v029.mp3', './audio/v030.mp3', './audio/v031.mp3', './audio/v032.mp3', './audio/v033.mp3', './audio/v034.mp3', './audio/v035.mp3', './audio/v036.mp3', './audio/v037.mp3', './audio/v038.mp3', './audio/v039.mp3', './audio/v040.mp3', './audio/v041.mp3', './audio/v042.mp3', './audio/v043.mp3', './audio/v044.mp3', './audio/v045.mp3', './audio/v046.mp3', './audio/v047.mp3', './audio/v048.mp3', './audio/v049.mp3', './audio/v050.mp3', './audio/v051.mp3', './audio/v052.mp3', './audio/v053.mp3', './audio/v054.mp3', './audio/v055.mp3', './audio/v056.mp3', './audio/v057.mp3', './audio/v058.mp3', './audio/v059.mp3', './audio/v060.mp3', './audio/v061.mp3', './audio/v062.mp3', './audio/v063.mp3', './audio/v064.mp3', './audio/v065.mp3', './audio/v066.mp3', './audio/v067.mp3', './audio/v068.mp3', './audio/v069.mp3', './audio/v070.mp3', './audio/v071.mp3', './audio/v072.mp3', './audio/v073.mp3', './audio/v074.mp3', './audio/v075.mp3', './audio/v076.mp3', './audio/v077.mp3', './audio/v078.mp3', './audio/v079.mp3', './audio/v080.mp3', './audio/v081.mp3', './audio/v082.mp3', './audio/v083.mp3', './audio/v084.mp3', './audio/v085.mp3', './audio/v086.mp3', './audio/v087.mp3', './audio/v088.mp3', './audio/v089.mp3', './audio/v090.mp3', './audio/v091.mp3', './audio/v092.mp3', './audio/v093.mp3', './audio/v094.mp3', './audio/v095.mp3', './audio/v096.mp3', './audio/v097.mp3', './audio/v098.mp3', './audio/v099.mp3', './audio/v100.mp3', './audio/v101.mp3', './audio/v102.mp3', './audio/v103.mp3', './audio/v104.mp3', './audio/v105.mp3', './audio/v106.mp3', './audio/v107.mp3', './audio/v108.mp3', './audio/v109.mp3', './audio/v110.mp3', './audio/v111.mp3', './audio/v112.mp3', './audio/v113.mp3', './audio/v114.mp3', './audio/v115.mp3', './audio/v116.mp3', './audio/v117.mp3', './audio/v118.mp3', './audio/v119.mp3', './audio/v120.mp3', './audio/v121.mp3', './audio/v122.mp3', './audio/v123.mp3', './audio/v124.mp3', './audio/v125.mp3', './audio/v126.mp3', './audio/v127.mp3', './audio/v128.mp3', './audio/v129.mp3', './audio/v130.mp3', './audio/v131.mp3', './audio/v132.mp3', './audio/v133.mp3', './audio/v134.mp3', './audio/v135.mp3', './audio/v136.mp3', './audio/v137.mp3', './audio/v138.mp3', './audio/v139.mp3', './audio/v140.mp3', './audio/v141.mp3', './audio/v142.mp3', './audio/v143.mp3', './audio/v144.mp3', './audio/v145.mp3', './audio/v146.mp3', './audio/v147.mp3', './audio/v148.mp3', './audio/v149.mp3', './audio/v150.mp3', './audio/v151.mp3', './audio/v152.mp3', './audio/v153.mp3', './audio/v154.mp3', './audio/v155.mp3', './audio/v156.mp3', './audio/v157.mp3', './audio/v158.mp3', './audio/v159.mp3', './audio/v160.mp3', './audio/v161.mp3', './audio/v162.mp3', './audio/v163.mp3', './audio/v164.mp3', './audio/v165.mp3', './audio/v166.mp3', './audio/v167.mp3', './audio/v168.mp3', './audio/v169.mp3', './audio/v170.mp3', './audio/v171.mp3', './audio/v172.mp3', './audio/v173.mp3', './audio/v174.mp3', './audio/v175.mp3', './audio/v176.mp3', './audio/v177.mp3', './audio/v178.mp3', './audio/v179.mp3', './audio/v180.mp3', './audio/v181.mp3', './audio/v182.mp3', './audio/v183.mp3', './audio/v184.mp3', './audio/v185.mp3', './audio/v186.mp3', './audio/v187.mp3', './audio/v188.mp3', './audio/v189.mp3', './audio/v190.mp3', './audio/v191.mp3', './audio/v192.mp3', './audio/v193.mp3', './audio/v194.mp3', './audio/v195.mp3', './audio/v196.mp3', './audio/v197.mp3', './audio/v198.mp3', './audio/v199.mp3', './audio/v200.mp3'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
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
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); } return res; }).catch(() => hit);
    return hit || net;
  }));
});
