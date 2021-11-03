let namesArr = [];
items.forEach(element => {
    if (namesArr.indexOf(element.name) == -1) {
        document.getElementsByClassName("card-container")[0].innerHTML += `<div class="product-card"><img src="img/${element.imgUrl}" alt="product image"><h2 class="product-title">${element.name}</h2><p class="stock">${element.orderInfo.inStock} left in stock</p><p class="price">Price: ${element.price}</p><a href="" class="cart-button">Add to cart</a><div class="stats"><i class="icon-like_empty"></i><div class="review-text"><p class="reviews"><span>${element.orderInfo.reviews}%</span> Positive reviews</p><p class="reviews">Above average</p></div><div class="orders"><p class="reviews">0</p><p class="reviews">orders</p></div></div></div>`;  
    namesArr.push(element.name);
    }
});

