self.addEventListener('fetch', function (event) {
  console.info('sw.js is working now.', event);
  if (/\.jpg$/.test(event.request.url)) {
    event.respondWith(fetch('icon.png'))
  }
});