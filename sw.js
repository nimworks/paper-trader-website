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
    "revision": "81dbd17bea79eaaae543495677a07f05"
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
    "url": "404.html",
    "revision": "13c5fe9c5f133446bd601e613cd97399"
  },
  {
    "url": "404/index.html",
    "revision": "c7b7fc20ce103991b3531edd94e89480"
  },
  {
    "url": "ab10154773a422407d1c9934b60a2d9110be0d4f-d7dc506ae9ecae04ca11.js"
  },
  {
    "url": "about/index.html",
    "revision": "1dfdb29e1ce08f8de9076e048a8d2b9d"
  },
  {
    "url": "app-7f57525d754056e10e2c.js"
  },
  {
    "url": "app/5paisa/index.html",
    "revision": "1fd91115814fc9bd19822782ef6b84e2"
  },
  {
    "url": "app/5paisa/welcome/index.html",
    "revision": "72ee417fd9adea8884bd8aa2cd7faa4d"
  },
  {
    "url": "app/angelOne/index.html",
    "revision": "41fe3efc7c09ce442a7c950c82ec7dc3"
  },
  {
    "url": "app/angelOne/welcome/index.html",
    "revision": "cc07cf8137a5ed081d6c5373f0c22305"
  },
  {
    "url": "app/index.html",
    "revision": "099a26215da6ce3afefdaf0a13f511b3"
  },
  {
    "url": "app/upstox/index.html",
    "revision": "8e781e3e5029a14b557ddb4658cf2149"
  },
  {
    "url": "app/upstox/welcome/index.html",
    "revision": "de8e59feb05854fc8c5a90cfb4f1d988"
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
    "url": "component---src-pages-app-5-paisa-index-js-1d3d442b7efdc9ec6f40.js"
  },
  {
    "url": "component---src-pages-app-5-paisa-welcome-index-js-34d026185cd88eea5118.js"
  },
  {
    "url": "component---src-pages-app-angel-one-index-js-71d8a08fed409f86b72c.js"
  },
  {
    "url": "component---src-pages-app-angel-one-welcome-index-js-e4af29b365a845d0faa3.js"
  },
  {
    "url": "component---src-pages-app-index-js-a147c6c1552100985eda.js"
  },
  {
    "url": "component---src-pages-app-upstox-index-js-a0a748e5a9b5da773576.js"
  },
  {
    "url": "component---src-pages-app-upstox-welcome-index-js-0313dc469b9f4adfa1e6.js"
  },
  {
    "url": "component---src-pages-console-payment-transactions-index-js-b1174ddc50b2237c2541.js"
  },
  {
    "url": "component---src-pages-contact-index-js-755c2d7ed7632a3387de.js"
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
    "url": "component---src-pages-guide-getting-started-index-js-34cdec2e3cc2ff93fbb4.js"
  },
  {
    "url": "component---src-pages-guide-index-js-56657d8ea69bc1784327.js"
  },
  {
    "url": "component---src-pages-guide-supported-brokers-index-js-5c7e6be4152d1179a64c.js"
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
    "revision": "228e4779c7995f50ee7a75302ae634a1"
  },
  {
    "url": "contact/index.html",
    "revision": "0501f70d307f295c064257fa0aafee99"
  },
  {
    "url": "cookie-policy/index.html",
    "revision": "7b8ba789b0a2dce288f4c1a5b010f4c6"
  },
  {
    "url": "da70d03d00b4ee4e00328829ce01354ae4757e8d-0a7da5974491b1c65875.js"
  },
  {
    "url": "delete-account/index.html",
    "revision": "a8da15c4ff4618f31f9d959cc889a2e5"
  },
  {
    "url": "framework-8649e59c0818567074fb.js"
  },
  {
    "url": "frequently-asked-questions/index.html",
    "revision": "af02dac0144d83a85d327dac6bbd385a"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "b55629df9fdcab2a258a025792cffbe5"
  },
  {
    "url": "guide/index.html",
    "revision": "4b0f70eb683c38b00857b5a9fdb9ef51"
  },
  {
    "url": "guide/supported-brokers/index.html",
    "revision": "cb75d09f1766aa22c17ff35385f5eeba"
  },
  {
    "url": "guide/trade-history/index.html",
    "revision": "3fb2206ebbbb00e484665cce74954cc9"
  },
  {
    "url": "guide/trade-positions/index.html",
    "revision": "65eb8afec205bba469ab1b4f11e1e7db"
  },
  {
    "url": "guide/virtual-wallet/index.html",
    "revision": "49f07b9fb39df234111bf99269a005e0"
  },
  {
    "url": "guide/watchlist/index.html",
    "revision": "4b0be47685b27a0bfd241d10a216965d"
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
    "url": "img/logo-5paisa.webp",
    "revision": "e0ccb5e0696156e4a1971f73eedb6ed3"
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
    "revision": "8cf1cbf8e0f9e2347c8f6d33ccf516e5"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "be5a99bd80746bbdd7c918dc2f5f19af"
  },
  {
    "url": "pricing/index.html",
    "revision": "c9710714744411cb70e407b687f74531"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "1d47489a0d5ebd361706fdd6a10d4b50"
  },
  {
    "url": "refund-policy/index.html",
    "revision": "0365897dc90caf31ccb7cfd8ce361d60"
  },
  {
    "url": "styles.ad08f5d4e6ff27613a62.css"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "a8aea94378631ee9a99e107043235f11"
  },
  {
    "url": "webpack-runtime-88bb813dd73269ecd2db.js"
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
  if (!resources || !(await caches.match(`/app-7f57525d754056e10e2c.js`))) {
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
