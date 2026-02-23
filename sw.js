self.addEventListener("install", e=>{
e.waitUntil(
caches.open("bookfold-pro").then(cache=>{
return cache.addAll(["index.html"]);
})
);
});