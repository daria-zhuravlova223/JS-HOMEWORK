let namesArr = [];
let bannerArr = [{"url":"img/banners/air_pods_max_banner.jpg",
"title": "Air Pods Max",
"color": "black"},
{"url":"img/banners/airpods_pro_banner.png",
"title": "Air Pods Pro",
"color": "white"},
{"url":  "img/banners/apple_tv_banner.png",
"title": "Apple TV",
"color": "black",
"position": {"left": "30%","top":"38%"}},
{"url": "img/banners/ipad_air_banner.jpg",
"title": "Ipad Air",
"color": "white"},
{"url": "img/banners/iphone_12_banner.jpg",
"title": "",
"color": "white"},
{"url":"img/banners/mac_book_banner.jpg",
"title": "Mac Book Pro 16",
"color": "white"}, 
{"url":"img/banners/watch_banner.jpg",
"title": "Apple Watch 4",
"color": "white"}];
let itemNum = 0;
items.forEach(element => {
    if (namesArr.indexOf(element.name) == -1) {
        let card = document.createElement('div');
        card.setAttribute("class", "product-card")
        card.innerHTML = `<img src="img/${element.imgUrl}" alt="product image">
        <h2 class="product-title">${element.name}</h2>
        <p class="stock">${element.orderInfo.inStock} left in stock</p>
        <p class="price">Price: ${element.price}</p>
        <a href="" class="cart-button">Add to cart</a>`;
        let stats = document.createElement('div');
        stats.setAttribute("class", "stats");
        stats.innerHTML =`<i class="icon-like_empty"></i>
        <div class="review-text">
            <p class="reviews"><span>${element.orderInfo.reviews}%</span> Positive reviews</p>
            <p class="reviews">Above average</p></div>
            <div class="orders"><p class="reviews">0</p>
                <p class="reviews">orders</p>
            </div>`
        document.getElementsByClassName("card-container")[0].appendChild(card);
        document.getElementsByClassName("product-card")[itemNum].appendChild(stats);
    namesArr.push(element.name);
    itemNum++;
    }
});
 
        let i = 0;

setInterval(() => {
    document.getElementsByClassName("carousel")[0].style.backgroundImage = `url(${bannerArr[i].url})`;
    document.getElementsByClassName("big-title")[0].innerHTML = bannerArr[i].title;
    document.getElementsByClassName("big-title")[0].style.color = bannerArr[i].color;
        if (bannerArr[i].position) {
            document.getElementsByClassName("big-title")[0].style.left = bannerArr[i].position.left;
            document.getElementsByClassName("cart-button")[0].style.left = bannerArr[i].position.left;
            document.getElementsByClassName("cart-button")[0].style.top = bannerArr[i].position.top;
        }else{
            document.getElementsByClassName("big-title")[0].style.left = "50%";
            document.getElementsByClassName("cart-button")[0].style.left = "50%"
            document.getElementsByClassName("cart-button")[0].style.top = "50%";
        }
                
    i++;
    if (i>=bannerArr.length) {
        i = 0;
    }
}, 5000);



