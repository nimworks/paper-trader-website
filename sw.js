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
    "revision": "5c3e5fa17ef798329ca55b7b6a930485"
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
    "revision": "47c048efdd2e6fbb3a169975e2a6c767"
  },
  {
    "url": "404/index.html",
    "revision": "e33844722f9038f2f257845795c9dbec"
  },
  {
    "url": "ab10154773a422407d1c9934b60a2d9110be0d4f-d7dc506ae9ecae04ca11.js"
  },
  {
    "url": "about/index.html",
    "revision": "325e4f067e0615e5fb8c31159b62cf8e"
  },
  {
    "url": "app-16772c6c3a40a2094b3c.js"
  },
  {
    "url": "app/_upstox/index.html",
    "revision": "af9a57aa31cddc2c14666a6925f8921b"
  },
  {
    "url": "app/_upstox/welcome/index.html",
    "revision": "c2599a1509fb5ffcecabfbaa10080d6f"
  },
  {
    "url": "app/5paisa/index.html",
    "revision": "04acda1aa03801ce277eccb4b274341a"
  },
  {
    "url": "app/5paisa/welcome/index.html",
    "revision": "279bab0ca9fee375262ad6870ee5b771"
  },
  {
    "url": "app/angelOne/index.html",
    "revision": "c22bbfe16ccaf4e76ddf54e0b8278cfb"
  },
  {
    "url": "app/angelOne/welcome/index.html",
    "revision": "cb5ab88a91116dfe8c6ba38611f3ed13"
  },
  {
    "url": "app/index.html",
    "revision": "e30634c35571cbcf534eb6659828f225"
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
    "url": "component---src-pages-app-index-js-22a9ff752c110eb3d5d2.js"
  },
  {
    "url": "component---src-pages-app-upstox-index-js-afb8a157c195de7ae504.js"
  },
  {
    "url": "component---src-pages-app-upstox-welcome-index-js-690bab4a8e8c54aa450b.js"
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
    "url": "component---src-pages-frequently-asked-questions-index-js-663981aa1d104a127b76.js"
  },
  {
    "url": "component---src-pages-guide-getting-started-index-js-ca4f10807a5726841ab6.js"
  },
  {
    "url": "component---src-pages-guide-index-js-56657d8ea69bc1784327.js"
  },
  {
    "url": "component---src-pages-guide-supported-brokers-index-js-7bcf6c5dd07163c6d1b5.js"
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
    "revision": "e083087db6fffcfd8a797b3a569fc260"
  },
  {
    "url": "contact/index.html",
    "revision": "0ba2dcec192bb3c8c385d9f1d8349601"
  },
  {
    "url": "cookie-policy/index.html",
    "revision": "7748a4684918dbb7b2a7dea03d93a442"
  },
  {
    "url": "da70d03d00b4ee4e00328829ce01354ae4757e8d-0a7da5974491b1c65875.js"
  },
  {
    "url": "delete-account/index.html",
    "revision": "82c5466739ac3fb7a49d11f35cb2e1f1"
  },
  {
    "url": "framework-8649e59c0818567074fb.js"
  },
  {
    "url": "frequently-asked-questions/index.html",
    "revision": "6cba2f8c10cdf00d51ff331dc2e945b0"
  },
  {
    "url": "guide/getting-started/index.html",
    "revision": "aa413d87f02ac40374b6c710530e92e9"
  },
  {
    "url": "guide/index.html",
    "revision": "f1543e08c2f83fe7dc1cf148bb5a2aaa"
  },
  {
    "url": "guide/supported-brokers/index.html",
    "revision": "bf26ca604de38fe9835732d8048cbc8f"
  },
  {
    "url": "guide/trade-history/index.html",
    "revision": "111ba560da6be52b04975b48946ea393"
  },
  {
    "url": "guide/trade-positions/index.html",
    "revision": "a4acf1a888e1557768c77ca8ebd8bd75"
  },
  {
    "url": "guide/virtual-wallet/index.html",
    "revision": "39dc505c92953578c31a482c892e1978"
  },
  {
    "url": "guide/watchlist/index.html",
    "revision": "6c7dd2eeae6ed26c0e9565f772c5b28a"
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
    "revision": "e13789c25488dd1f7996dfbfcc7f2b93"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "2bb11b5ed5c50c453dab51ebd8c3d1b9"
  },
  {
    "url": "pricing/index.html",
    "revision": "428d24b5d61a738940a664aa3154d298"
  },
  {
    "url": "privacy-policy/index.html",
    "revision": "141f032c87ba096bf23251874860fad5"
  },
  {
    "url": "refund-policy/index.html",
    "revision": "befb6ca861ac05dc7781d84fab9332b3"
  },
  {
    "url": "styles.0ac33b4893c9814e740d.css"
  },
  {
    "url": "terms-of-use/index.html",
    "revision": "49c93124b24c2b48bba8ac44136a1c01"
  },
  {
    "url": "webpack-runtime-9904c7810aa792c1415b.js"
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
  if (!resources || !(await caches.match(`/app-16772c6c3a40a2094b3c.js`))) {
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
