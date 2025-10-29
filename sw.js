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
    "revision": "8c43332f8c13521683d17f28ff7a00c5"
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
    "revision": "e45f95c37bdefe66194c1d282e0e1475"
  },
  {
    "url": "404/index.html",
    "revision": "8582f326738924ce4265758594a6a768"
  },
  {
    "url": "6405dc29b3f3e6afa947f5c18311e0cf305f21a8-9689e0fe6c008efbc67d.js"
  },
  {
    "url": "about/index.html",
    "revision": "276a1bf69f0b2929e43097f227526733"
  },
  {
    "url": "app-c339f226b1ba63d1d46d.js"
  },
  {
    "url": "app/angelOne/index.html",
    "revision": "e97f5d78091da96f75d2986559be4281"
  },
  {
    "url": "app/angelOne/welcome/index.html",
    "revision": "1f99fc7b1454f82dc88e4247ac7b50f7"
  },
  {
    "url": "app/index.html",
    "revision": "8a6689309850f6b384ead036d5715a6c"
  },
  {
    "url": "app/upstox/index.html",
    "revision": "9ae6b12a8e191287ede7a95e46704ed4"
  },
  {
    "url": "app/upstox/welcome/index.html",
    "revision": "72db376f0f4854f5f774bb8fba1d6587"
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
    "revision": "6b644521e5cbf75ec49ee13ff4d82054"
  },
  {
    "url": "contact/index.html",
    "revision": "9327196c1a46c194b61e5437743254ac"
  },
  {
    "url": "cookie-policy/index.html",
    "revision": "4a48ee27dd24446d25267cf8d4cb7e74"
  },
  {
    "url": "delete-account/index.html",
    "revision": "71e3557b775c6b8ff76afaef55e4f996"
  },
  {
    "url": "framework-8649e59c0818567074fb.js"
  },
  {
    "url": "frequently-asked-questions/index.html",
    "revision": "cf03a2bc61cad9c4a5e4aba344553c73"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "ec74b178268d801842cd90b98338adcc"
  },
  {
    "url": "guide/index.html",
    "revision": "34f92f5f8d66135b0cf43d14f512700d"
  },
  {
    "url": "guide/supported-brokers/index.html",
    "revision": "1df477bfbe56fd511d3dbf6c835cd4db"
  },
  {
    "url": "guide/trade-history/index.html",
    "revision": "632b3d463cd06eea069fdbd2b7fef296"
  },
  {
    "url": "guide/trade-positions/index.html",
    "revision": "4d8aa5f7dac5e2e4f1319daa3451d340"
  },
  {
    "url": "guide/virtual-wallet/index.html",
    "revision": "939501d27bcc904ee97f116b9de24430"
  },
  {
    "url": "guide/watchlist/index.html",
    "revision": "f221dabb02b175eb536803b737a46a5a"
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
    "revision": "7bd868720ce67efaede7298f5f9fae23"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b5eda9d8cc15739e43b3c066837cd9ad"
  },
  {
    "url": "pricing/index.html",
    "revision": "d93d5e97abf3b9f905a57a0450feb9d9"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "20aeafe3828754216462cee2f3ff865e"
  },
  {
    "url": "refund-policy/index.html",
    "revision": "23da373e5d49ab3aee71839b6893cb80"
  },
  {
    "url": "styles.b4fcdc34f6549dba98ef.css"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "09dec89a83bd0b76f8c11a11c8b8d60c"
  },
  {
    "url": "webpack-runtime-64c5f3418ae75fa8442c.js"
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
  if (!resources || !(await caches.match(`/app-c339f226b1ba63d1d46d.js`))) {
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
