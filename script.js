fetch("https://cults3d.com/fr/blog.rss")
.then(async resp => {
    let body = await resp.text();
    body = new DOMParser().parseFromString(body, 'text/xml')
    console.log(body)
    let items = body.querySelectorAll("item")
    let str = "";
    for (const item of items) {
        const title = item.querySelector("title")
        const image = item.querySelector("image");
        const description = item.querySelector("description");
        str += `
<article>
<h3>${title.innerHTML}</h3>
<figure>
<img src="${image.innerHTML}" alt="">
<figcaption>${description.innerHTML}</figcaption>
</figure>
</article>`
    }
        document.querySelector("#container > section").innerHTML = str;
    console.log(items);
})
