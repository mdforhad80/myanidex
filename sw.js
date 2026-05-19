self.addEventListener("install", e=>{

    e.waitUntil(

        caches.open("anime-v1")
        .then(cache=>{

            return cache.addAll([
                "/",
                "/index.html",
                "/assets/css/style.css"
            ]);

        })
    );

});
