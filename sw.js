/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_gatsby/slices/_gatsby-scripts-1.html",
    "revision": "ba95b9afa68fc75067039134b3fc0ce8"
  },
  {
    "url": "~partytown/debug/partytown-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-media.js"
  },
  {
    "url": "~partytown/debug/partytown-sandbox-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-sw.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-atomics.js"
  },
  {
    "url": "~partytown/debug/partytown-ww-sw.js"
  },
  {
    "url": "~partytown/debug/partytown.js"
  },
  {
    "url": "~partytown/partytown-atomics.js"
  },
  {
    "url": "~partytown/partytown-media.js"
  },
  {
    "url": "~partytown/partytown-sw.js"
  },
  {
    "url": "~partytown/partytown.js"
  },
  {
    "url": "3278cf4ac3fd0838091f73aaaaabb10de8f8e04a-9e8223259dba73c5a9e8.js"
  },
  {
    "url": "404.html",
    "revision": "fb0a3556550e2b9a9f6ec556f9cc3b39"
  },
  {
    "url": "404/index.html",
    "revision": "fdd1fe244d3fb6723ed933655c401721"
  },
  {
    "url": "6405dc29b3f3e6afa947f5c18311e0cf305f21a8-d685ef1cfa0685e1b410.js"
  },
  {
    "url": "about/index.html",
    "revision": "3bed703c48b91ec6798608343c9495b8"
  },
  {
    "url": "app-30a9c031da5665fd570c.js"
  },
  {
    "url": "app/angelOne/index.html",
    "revision": "0c7fa85e45835ec14d49c2397e2897e8"
  },
  {
    "url": "app/angelOne/welcome/index.html",
    "revision": "bad82fa611324f4c31796738cb722b8a"
  },
  {
    "url": "app/index.html",
    "revision": "801104e1ec52fa37914ad6bf9f5b049d"
  },
  {
    "url": "app/upstox/index.html",
    "revision": "7e773ff8e59c2ebfca79d3703257fefa"
  },
  {
    "url": "app/upstox/welcome/index.html",
    "revision": "1344020842756d1a4d6634aa0c466536"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-35595b23777053358e5b.js"
  },
  {
    "url": "component---src-pages-404-index-js-fd6bc6657e2a33607591.js"
  },
  {
    "url": "component---src-pages-about-index-js-11394b242c177bee34da.js"
  },
  {
    "url": "component---src-pages-app-angel-one-index-js-590d2eb5c826a8c9c011.js"
  },
  {
    "url": "component---src-pages-app-angel-one-welcome-index-js-e4af29b365a845d0faa3.js"
  },
  {
    "url": "component---src-pages-app-index-js-d0cbb7a176117bd35bca.js"
  },
  {
    "url": "component---src-pages-app-upstox-index-js-a045b8a1e1d046de4140.js"
  },
  {
    "url": "component---src-pages-app-upstox-welcome-index-js-0313dc469b9f4adfa1e6.js"
  },
  {
    "url": "component---src-pages-console-payment-transactions-index-js-d44a87eb55a1f41ab1db.js"
  },
  {
    "url": "component---src-pages-contact-index-js-99e65d3f71641a38f7a3.js"
  },
  {
    "url": "component---src-pages-cookie-policy-index-js-3659d0b52a84f598c21e.js"
  },
  {
    "url": "component---src-pages-delete-account-index-js-bb421add66456ce1aa76.js"
  },
  {
    "url": "component---src-pages-frequently-asked-questions-index-js-053d6e144297829fca83.js"
  },
  {
    "url": "component---src-pages-guide-getting-started-index-js-83c86884e1b5e8a68c90.js"
  },
  {
    "url": "component---src-pages-guide-index-js-45295fda395b2f23edeb.js"
  },
  {
    "url": "component---src-pages-guide-supported-brokers-index-js-a5d85349752b286288b6.js"
  },
  {
    "url": "component---src-pages-guide-trade-history-index-js-c4d2a86f35fab2c1010a.js"
  },
  {
    "url": "component---src-pages-guide-trade-positions-index-js-c1140e9e3d5d3003aef0.js"
  },
  {
    "url": "component---src-pages-guide-virtual-wallet-index-js-90939690e7583bc3a77a.js"
  },
  {
    "url": "component---src-pages-guide-watchlist-index-js-7d501b4a33cf42d277f9.js"
  },
  {
    "url": "component---src-pages-index-js-4cbc53cea241aae01404.js"
  },
  {
    "url": "component---src-pages-pricing-index-js-476287f5e59d8bde898a.js"
  },
  {
    "url": "component---src-pages-privacy-policy-index-js-13e98125d8969389f51d.js"
  },
  {
    "url": "component---src-pages-refund-policy-index-js-c71d203a4f9c0da1728b.js"
  },
  {
    "url": "component---src-pages-terms-of-use-index-js-3d330c852d4c10cf3a43.js"
  },
  {
    "url": "console/payment-transactions/index.html",
    "revision": "220a54fdb04cca9873f850b464aeb3ed"
  },
  {
    "url": "contact/index.html",
    "revision": "6ed215703ca08be5fe165e821e7fd194"
  },
  {
    "url": "cookie-policy/index.html",
    "revision": "d7b90d39f881afcfa1360ad457bfe5db"
  },
  {
    "url": "delete-account/index.html",
    "revision": "0e7324a5b2513c16b7a2dc15338d4bc9"
  },
  {
    "url": "framework-8649e59c0818567074fb.js"
  },
  {
    "url": "frequently-asked-questions/index.html",
    "revision": "9b21fcd812ad9d23abb7b47463ffbc51"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "73c0247e4ddbafb6b90d38da3daa5efa"
  },
  {
    "url": "guide/index.html",
    "revision": "bb3f664fb2f4970cb4074a57e0c79c62"
  },
  {
    "url": "guide/supported-brokers/index.html",
    "revision": "5d4fc537ed034bbd358e4fa1331ea922"
  },
  {
    "url": "guide/trade-history/index.html",
    "revision": "2eb50db8504630701cb5b7e8642851cd"
  },
  {
    "url": "guide/trade-positions/index.html",
    "revision": "3899e9ffc3ef3c77a976bec667c7d67e"
  },
  {
    "url": "guide/virtual-wallet/index.html",
    "revision": "f9864da7206efc5a3d30ba40a41689cd"
  },
  {
    "url": "guide/watchlist/index.html",
    "revision": "db3a40ef9bcaf5e680b2a34e48e06e60"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "img/chromeWebStoreBtn.png",
    "revision": "532cd53e793496222dcdcd6a9047a6fb"
  },
  {
    "url": "img/guide/trade-history.webp",
    "revision": "e93cbfbcb46be5b218e2d8fea7ea1758"
  },
  {
    "url": "img/guide/trade-positions.webp",
    "revision": "b7a13694bd70ab33f30c7df16ffc6571"
  },
  {
    "url": "img/guide/wallet-setup.webp",
    "revision": "57108bf823f26d472b984bcd4484c1b6"
  },
  {
    "url": "img/guide/wallet-transactions.webp",
    "revision": "3e21bfba116e6083f0196f15beb8ddd0"
  },
  {
    "url": "img/guide/wallet.webp",
    "revision": "9d73cf48e8a00c1f1c3858c77f101331"
  },
  {
    "url": "img/guide/watchlist.webp",
    "revision": "d5a96a4d40576e312538f9ed81ea91c1"
  },
  {
    "url": "img/icons/icons-192.png",
    "revision": "3b33a9c4c1eeafd23ea2607608e0f6da"
  },
  {
    "url": "img/icons/icons-512.png",
    "revision": "5ffe01107f7babca566fc7f3a4ad8a3d"
  },
  {
    "url": "img/icons/icons-vector.svg",
    "revision": "6fe5067d9faaf7d3942368e09b757c82"
  },
  {
    "url": "img/kaagzi-logo.webp",
    "revision": "0e4f55570f36c1277ac4f8d8b2cc54ab"
  },
  {
    "url": "img/kaagzi.webp",
    "revision": "4804d8001de1c604f2346b6afee37e0c"
  },
  {
    "url": "img/logo-angelOne.webp",
    "revision": "e8f0faac50b3f9d28c0e2488c3cd1893"
  },
  {
    "url": "img/logo-kite.png",
    "revision": "4a49db4ca619900f8912c2f78d586857"
  },
  {
    "url": "img/logo-kite.svg",
    "revision": "dae1add128943782e740cabe2a76ad07"
  },
  {
    "url": "img/logo-upstox.webp",
    "revision": "e7a3e156326d32a0c4280ecf4dd25e49"
  },
  {
    "url": "img/logo.svg",
    "revision": "624c4531c211464f2f042a55e3d8a09e"
  },
  {
    "url": "index.html",
    "revision": "3a8a8014dbf72ee5a472ec572a1549b0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "d34e4e1e44ece2ef37808d2f9e841d40"
  },
  {
    "url": "pricing/index.html",
    "revision": "bbcc676108c0486ac7f177ab1a9233b3"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "812b74f3b6005880ce0cd8f1a430638d"
  },
  {
    "url": "refund-policy/index.html",
    "revision": "c73b462b04bf54f836f88b02c8cb80d8"
  },
  {
    "url": "styles.7b7393899c1b8caa0092.css"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "a57b7a0ae2edad639f125e8485d5ea29"
  },
  {
    "url": "webpack-runtime-0851630e094b9e0944a1.js"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "96328f9b28289fb27fd8e3d12756d9d0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())

    // We detected compilation hash mismatch
    // we should clear runtime cache as data
    // files might be out of sync and we should
    // do fresh fetches for them
    event.waitUntil(
      caches.keys().then(function (keyList) {
        return Promise.all(
          keyList.map(function (key) {
            if (key && key.includes(`runtime`)) {
              return caches.delete(key)
            }

            return Promise.resolve()
          })
        )
      })
    )
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-30a9c031da5665fd570c.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)

// self.addEventListener('fetch', (event) => {
// 	if (event.request.mode === 'navigate') {
// 		event.respondWith(
// 			fetch(event.request).catch(() => {
// 				return caches.match('/app'); // Your offline fallback page
// 			}),
// 		);
// 	}
// });

//This forces those routes into the cache as soon as the service worker installs — no need for the user to visit them first
self.addEventListener('install', (event) => {
	event.waitUntil(
		caches.open('offline-cache').then((cache) => {
			return cache.addAll(['/app', '/app/upstox', '/app/angelOne']);
		}),
	);
});

self.addEventListener('fetch', (event) => {
	// We’re only interested in navigation requests (i.e. page loads)
	if (event.request.mode === 'navigate') {
		event.respondWith(
			fetch(event.request).catch(async () => {
				const url = new URL(event.request.url);

				// Try matching exact cached routes first
				// const response = await caches.match(url.pathname);
				// const response = await caches.match(event.request.url);
				const response = (await caches.match(event.request)) || (await caches.match(url.pathname));
				if (response) return response;

				// Route-specific fallback
				if (url.pathname.endsWith('/app/upstox')) {
					return caches.match('/app/upstox');
				}
				if (url.pathname.endsWith('/app/angelOne')) {
					return caches.match('/app/angelOne');
				}
				// Default offline fallback
				// return caches.match('/app') || caches.match('/index.html');

				//if (url.pathname.startsWith('/app')) {
				if (url.pathname.endsWith('/app')) {
					return caches.match('/app');
				}

				// Default offline fallback
				return caches.match('/');
			}),
		);
	}
});
