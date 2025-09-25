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
    "revision": "f3870a8c8ed36421964eb4fbccd60b1d"
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
    "url": "3278cf4ac3fd0838091f73aaaaabb10de8f8e04a-6ce07fae093fc700dcac.js"
  },
  {
    "url": "404.html",
    "revision": "154f508df29157e6ca6fe861fb0653d7"
  },
  {
    "url": "404/index.html",
    "revision": "a96cec169806307a696d7dd3718697fc"
  },
  {
    "url": "6405dc29b3f3e6afa947f5c18311e0cf305f21a8-e10cb88613e98669fdd7.js"
  },
  {
    "url": "about/index.html",
    "revision": "7e70e6df3f83cb61cab4d14564906323"
  },
  {
    "url": "app-30a9c031da5665fd570c.js"
  },
  {
    "url": "app/angelOne/index.html",
    "revision": "a4e7a4dca395d0d1153259383b9b2956"
  },
  {
    "url": "app/angelOne/welcome/index.html",
    "revision": "6a4632f58cf76b4ea7362a5f8fe14f1d"
  },
  {
    "url": "app/index.html",
    "revision": "74a396bc87483cc949ca4b209d74c8ef"
  },
  {
    "url": "app/upstox/index.html",
    "revision": "7a211d3966ababd94b4d5ce8088bb025"
  },
  {
    "url": "app/upstox/welcome/index.html",
    "revision": "7fcb44f80f5cecf49efd1259f9d7eccf"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-35595b23777053358e5b.js"
  },
  {
    "url": "component---src-pages-404-index-js-ba2112cc3c38b87a76af.js"
  },
  {
    "url": "component---src-pages-about-index-js-888b13f316dc1ee5ba54.js"
  },
  {
    "url": "component---src-pages-app-angel-one-index-js-2185084652dafb9b8cca.js"
  },
  {
    "url": "component---src-pages-app-angel-one-welcome-index-js-e4af29b365a845d0faa3.js"
  },
  {
    "url": "component---src-pages-app-index-js-d806dd443011b3cd31e7.js"
  },
  {
    "url": "component---src-pages-app-upstox-index-js-5803caa856041df7784b.js"
  },
  {
    "url": "component---src-pages-app-upstox-welcome-index-js-0313dc469b9f4adfa1e6.js"
  },
  {
    "url": "component---src-pages-console-payment-transactions-index-js-6eecb458cf3f03019bce.js"
  },
  {
    "url": "component---src-pages-contact-index-js-3bc039a156cbaf883fc1.js"
  },
  {
    "url": "component---src-pages-cookie-policy-index-js-e136ff26cbdedf643a6a.js"
  },
  {
    "url": "component---src-pages-delete-account-index-js-7d2981f64e92ea724df5.js"
  },
  {
    "url": "component---src-pages-frequently-asked-questions-index-js-8eeb3223c12ca80bef0d.js"
  },
  {
    "url": "component---src-pages-guide-getting-started-index-js-809f5382876c70f4ba3e.js"
  },
  {
    "url": "component---src-pages-guide-index-js-7fda4eb6b3a998ee5125.js"
  },
  {
    "url": "component---src-pages-guide-supported-brokers-index-js-9ec6d6e1b6883253809d.js"
  },
  {
    "url": "component---src-pages-guide-trade-history-index-js-6d90c7a34f49af9e71b8.js"
  },
  {
    "url": "component---src-pages-guide-trade-positions-index-js-b7d494bc77298430c4d8.js"
  },
  {
    "url": "component---src-pages-guide-virtual-wallet-index-js-9152c71d70f4a76994ff.js"
  },
  {
    "url": "component---src-pages-guide-watchlist-index-js-4d2f4f94a65d6278254f.js"
  },
  {
    "url": "component---src-pages-index-js-ec4a9f186e9a30ff280b.js"
  },
  {
    "url": "component---src-pages-pricing-index-js-ba69dfbef59f5af74d20.js"
  },
  {
    "url": "component---src-pages-privacy-policy-index-js-ad9bb9372dfa4d35cbc2.js"
  },
  {
    "url": "component---src-pages-refund-policy-index-js-c20abd55a5c1d077b959.js"
  },
  {
    "url": "component---src-pages-terms-of-use-index-js-a4cb780a36cf29020bcf.js"
  },
  {
    "url": "console/payment-transactions/index.html",
    "revision": "26cc24729169d6c66948d84015dd6e94"
  },
  {
    "url": "contact/index.html",
    "revision": "4d0c5e786372e81b61458dc16bf8c161"
  },
  {
    "url": "cookie-policy/index.html",
    "revision": "8be038613016d24d1dc9b4288d3a6074"
  },
  {
    "url": "delete-account/index.html",
    "revision": "0c8b014a2063020aca88f5ea03172b62"
  },
  {
    "url": "framework-8649e59c0818567074fb.js"
  },
  {
    "url": "frequently-asked-questions/index.html",
    "revision": "05dad0227d88b813a36f5f1404ed09e7"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "41316043946b3ace942fc1049a0292dd"
  },
  {
    "url": "guide/index.html",
    "revision": "f657c54d12ff8e47c46a3b73953986b1"
  },
  {
    "url": "guide/supported-brokers/index.html",
    "revision": "af65867f156adb39790e8af4b50a8430"
  },
  {
    "url": "guide/trade-history/index.html",
    "revision": "ead90165a18c01db92d0e66848f7798f"
  },
  {
    "url": "guide/trade-positions/index.html",
    "revision": "62abf614c6771452aaebe42721c5c24c"
  },
  {
    "url": "guide/virtual-wallet/index.html",
    "revision": "af013e9af1325c422660d3356c281a51"
  },
  {
    "url": "guide/watchlist/index.html",
    "revision": "7f0276363c261b4d0ff9056945ed3675"
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
    "revision": "55b1044c2e6e3bd17f42f93b884506a0"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "43a8e58974cbbf3c96e1ae772113c857"
  },
  {
    "url": "pricing/index.html",
    "revision": "28795e0f54dc74ac25a8d63681b7210e"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "7a0fbfcbfd7cf0104f0e4d59ff6921a7"
  },
  {
    "url": "refund-policy/index.html",
    "revision": "1a1e27f4d6e962a25cb5b3272114ad2a"
  },
  {
    "url": "styles.15c055ff05bbc3fa9abd.css"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "1aa38b601cc5f3991f49ec2d06180d87"
  },
  {
    "url": "webpack-runtime-ade928cc7767bd339516.js"
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
