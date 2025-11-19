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
    "revision": "3658c14f7226e12adab4d203a948b859"
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
    "url": "3278cf4ac3fd0838091f73aaaaabb10de8f8e04a-90123a616ea0a5d183b5.js"
  },
  {
    "url": "404.html",
    "revision": "90a489f7d29384205dff2e3fd6611fe3"
  },
  {
    "url": "404/index.html",
    "revision": "137731eb8c1807305fa57777f2d33a61"
  },
  {
    "url": "6405dc29b3f3e6afa947f5c18311e0cf305f21a8-9689e0fe6c008efbc67d.js"
  },
  {
    "url": "about/index.html",
    "revision": "92c277d7c98bf29af7aeab7e6c8095f7"
  },
  {
    "url": "app-b18b367cbc80dd7d07b6.js"
  },
  {
    "url": "app/angelOne/index.html",
    "revision": "3f1978761462dbc9ee50e3cb19af3e2c"
  },
  {
    "url": "app/angelOne/welcome/index.html",
    "revision": "7a40a7641cae1594c61a024ece060ee7"
  },
  {
    "url": "app/index.html",
    "revision": "1e6352ce688b3f14d34709c8b956710a"
  },
  {
    "url": "app/upstox/index.html",
    "revision": "76f846fede9f75f5c694c54fcd24df5e"
  },
  {
    "url": "app/upstox/welcome/index.html",
    "revision": "3f06a8396ebdec537b8fabd5f997cc91"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-35595b23777053358e5b.js"
  },
  {
    "url": "component---src-pages-404-index-js-caaf1f7430ef84ea53bf.js"
  },
  {
    "url": "component---src-pages-about-index-js-624ae5de3b8e67b8ec2b.js"
  },
  {
    "url": "component---src-pages-app-angel-one-index-js-8c799bda32bf12dbe24f.js"
  },
  {
    "url": "component---src-pages-app-angel-one-welcome-index-js-e4af29b365a845d0faa3.js"
  },
  {
    "url": "component---src-pages-app-index-js-e5351609c5951fc89ba5.js"
  },
  {
    "url": "component---src-pages-app-upstox-index-js-88f02b10ba0921798ba2.js"
  },
  {
    "url": "component---src-pages-app-upstox-welcome-index-js-0313dc469b9f4adfa1e6.js"
  },
  {
    "url": "component---src-pages-console-payment-transactions-index-js-b1174ddc50b2237c2541.js"
  },
  {
    "url": "component---src-pages-contact-index-js-5cba9740ba54fa2f7019.js"
  },
  {
    "url": "component---src-pages-cookie-policy-index-js-7b77fa0b424e821ef4eb.js"
  },
  {
    "url": "component---src-pages-delete-account-index-js-2c1719e37e9078de5176.js"
  },
  {
    "url": "component---src-pages-frequently-asked-questions-index-js-8094bf6bb53442f08104.js"
  },
  {
    "url": "component---src-pages-guide-getting-started-index-js-c8edee99bfd5241cfed0.js"
  },
  {
    "url": "component---src-pages-guide-index-js-56657d8ea69bc1784327.js"
  },
  {
    "url": "component---src-pages-guide-supported-brokers-index-js-75a9d90a6d36c3d2b923.js"
  },
  {
    "url": "component---src-pages-guide-trade-history-index-js-02cb52ce7ed2694a29d5.js"
  },
  {
    "url": "component---src-pages-guide-trade-positions-index-js-59568448f373de466daa.js"
  },
  {
    "url": "component---src-pages-guide-virtual-wallet-index-js-7b2f3a022172a103403d.js"
  },
  {
    "url": "component---src-pages-guide-watchlist-index-js-5334b677e0e36754d721.js"
  },
  {
    "url": "component---src-pages-index-js-8e7e43f5d848feba7b91.js"
  },
  {
    "url": "component---src-pages-pricing-index-js-91a4755eb922c8105037.js"
  },
  {
    "url": "component---src-pages-privacy-policy-index-js-695bd349b83eae206c8c.js"
  },
  {
    "url": "component---src-pages-refund-policy-index-js-8bc43462bff348467af9.js"
  },
  {
    "url": "component---src-pages-terms-of-use-index-js-c7ac3ea621913382701c.js"
  },
  {
    "url": "console/payment-transactions/index.html",
    "revision": "0a02ae0b0a47b9121eae932d647f2b21"
  },
  {
    "url": "contact/index.html",
    "revision": "d1d2d2c6c119bee407827f5e64818d04"
  },
  {
    "url": "cookie-policy/index.html",
    "revision": "ac23e0e8ddeeae5278e1589aa55a4630"
  },
  {
    "url": "delete-account/index.html",
    "revision": "a100e06a946f41e9f1f9b79293a6376f"
  },
  {
    "url": "framework-8649e59c0818567074fb.js"
  },
  {
    "url": "frequently-asked-questions/index.html",
    "revision": "029b5eb650b29d3409eac0f6d9eb0257"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "4a01ceddc37bcf7a282521489051951a"
  },
  {
    "url": "guide/index.html",
    "revision": "8ce90b1262a0e489187c4c9250910e0a"
  },
  {
    "url": "guide/supported-brokers/index.html",
    "revision": "681075da88c37b52edff99341a56c241"
  },
  {
    "url": "guide/trade-history/index.html",
    "revision": "f6f4646195aa4dc669b95c45bffea4e7"
  },
  {
    "url": "guide/trade-positions/index.html",
    "revision": "6219942c684dac63d9c5e8fb032bcccb"
  },
  {
    "url": "guide/virtual-wallet/index.html",
    "revision": "1c4b5c73229404d2c3597a0aa8716935"
  },
  {
    "url": "guide/watchlist/index.html",
    "revision": "d0ba0df38e779b757723fb6adda0e838"
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
    "revision": "1301f47f2911b56f63726200988f6a09"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "f193bce3ad065a395a14cbb80047da02"
  },
  {
    "url": "pricing/index.html",
    "revision": "b16bc7d9cb89f773a461a88796d2ab72"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "ada5267b05b4beac4e49e8e8d6227527"
  },
  {
    "url": "refund-policy/index.html",
    "revision": "feceafe4244af9bbc7a120a0db250b7c"
  },
  {
    "url": "styles.f1158217d7a179ab8869.css"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "d4854759d23ed55bc0b3efa622cac0f4"
  },
  {
    "url": "webpack-runtime-00fc641481da8a0bd320.js"
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
  if (!resources || !(await caches.match(`/app-b18b367cbc80dd7d07b6.js`))) {
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
