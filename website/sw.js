self.addEventListener('install', e =>{
    e.waitUntil(
         caches.open('static').then(cache =>{
            return cache.addAll(['./', './css/main.css', './images/128px.png']);
                             //here you have to change the path and image url what do you want to use!
         })
    );
});  

self.addEventListener('fetch', e =>{
    e.respondWith(
        caches.match(e.request).then(response =>{
            return response || fetch(e.request);
        })
    )
})




