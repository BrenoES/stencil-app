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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "index.html",
    "revision": "b1e7c8db65ce3ccf4c544e97d42c3e7c"
  },
  {
    "url": "build/index.esm.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "build/p-06ff7bc5.entry.js"
  },
  {
    "url": "build/p-1d157f70.entry.js"
  },
  {
    "url": "build/p-243851ef.entry.js"
  },
  {
    "url": "build/p-2d72d652.js"
  },
  {
    "url": "build/p-2fea1890.entry.js"
  },
  {
    "url": "build/p-326be59c.js"
  },
  {
    "url": "build/p-34505a02.entry.js"
  },
  {
    "url": "build/p-538adabf.entry.js"
  },
  {
    "url": "build/p-5deb7750.entry.js"
  },
  {
    "url": "build/p-71eff04a.entry.js"
  },
  {
    "url": "build/p-969c1682.entry.js"
  },
  {
    "url": "build/p-9b6a9315.js"
  },
  {
    "url": "build/p-d43d9714.entry.js"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
