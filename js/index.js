let bannerArr = [
  {
    url: "img/banners/air_pods_max_banner.jpg",
    title: "Air Pods Max",
    color: "black",
  },
  {
    url: "img/banners/airpods_pro_banner.png",
    title: "Air Pods Pro",
    color: "white",
  },
  {
    url: "img/banners/apple_tv_banner.png",
    title: "Apple TV",
    color: "black",
    position: { left: "30%", top: "38%" },
  },
  { url: "img/banners/ipad_air_banner.jpg", title: "Ipad Air", color: "white" },
  { url: "img/banners/iphone_12_banner.jpg", title: "", color: "white" },
  {
    url: "img/banners/mac_book_banner.jpg",
    title: "Mac Book Pro 16",
    color: "white",
  },
  {
    url: "img/banners/watch_banner.jpg",
    title: "Apple Watch 4",
    color: "white",
  },
];

// create product cards
items.forEach((element) => {
  let reviewText = "";
  let buttonState = "";
  if (element.orderInfo.reviews < 50) {
    reviewText = "Below average";
  } else{
    reviewText = "Above average";
  }
  if (element.orderInfo.inStock === 0) {
    buttonState = "disabled-button";
  }
  let card = document.createElement("div");
  card.setAttribute("class", "product-card");
  card.setAttribute("id", `${element.id}`)
  card.innerHTML = `<i class="icon-like_empty"></i>
        <img src="img/${element.imgUrl}" alt="product image">
        <h2 class="product-title">${element.name}</h2>
        <p class="stock">${element.orderInfo.inStock} left in stock</p>
        <p class="price">Price: $${element.price}</p>
        <p class="cart-button ${buttonState}">Add to cart</p>
        <div class = "stats">
        <i class="icon-like_filled"></i>
          <div class="review-text">
              <p class="reviews"><span>${element.orderInfo.reviews}%</span> Positive reviews</p>
              <p class="reviews">${reviewText}</p></div>
              <div class="orders"><p class="reviews">0</p>
                  <p class="reviews">orders</p>
              </div>
        </div>`;
  document.getElementsByClassName("card-container")[0].appendChild(card);

});

// banner
let i = 0;
setInterval(() => {
  document.getElementsByClassName(
    "banner"
  )[0].style.backgroundImage = `url(${bannerArr[i].url})`;
  document.getElementsByClassName("big-title")[0].innerHTML =
    bannerArr[i].title;
  document.getElementsByClassName("big-title")[0].style.color =
    bannerArr[i].color;
  if (bannerArr[i].position) {
    document.getElementsByClassName("big-title")[0].style.left =
      bannerArr[i].position.left;
    document.getElementsByClassName("cart-button")[0].style.left =
      bannerArr[i].position.left;
    document.getElementsByClassName("cart-button")[0].style.top =
      bannerArr[i].position.top;
  } else {
    document.getElementsByClassName("big-title")[0].style.left = "50%";
    document.getElementsByClassName("cart-button")[0].style.left = "50%";
    document.getElementsByClassName("cart-button")[0].style.top = "50%";
  }
  i++;
  if (i >= bannerArr.length) {
    i = 0;
  }
}, 5000);


let filters = Array.from(document.getElementsByClassName("filter"));
let filterButtons = Array.from(document.getElementsByClassName("icon-arrow_left"));

//filter open
filters.forEach((filter) => {
    let filterOpen = false;
    filter.addEventListener("click", (event) => {
      let currentPanelOpen = filter.id + 'Content';
    if (filterOpen === true) {
          filter.classList.toggle("open");
          filter.style.backgroundColor = "#edf3ff";
          document.getElementById(currentPanelOpen).classList.toggle("hidden");
          if (filter.id === "display") {
            document.getElementById("display").style.borderBottom = "none";
          }
        filterOpen = !filterOpen;
    } else {
      filter.style.backgroundColor = "white";
      filter.classList.toggle("open");
      if (filter.id === "display") {
        document.getElementById("display").style.borderBottom = "1px #dddada solid";
      }
      document.getElementById(currentPanelOpen).classList.toggle("hidden")
      filterOpen = !filterOpen;
      }
    }
  );
});

//modal
let cards = Array.from(document.getElementsByClassName("product-card"));

cards.forEach(card=>{card.addEventListener("click", evt => {
    
    let cardFromArray = items.find(element => element.id == card.id);
    let modal = document.createElement('div');
    modal.setAttribute("class", "modal");
    modal.setAttribute("id", "modal");
    modal.innerHTML = ` <div class="modal-container">
    <div class="side-col">
        <img class="modal-img" src="img/${cardFromArray.imgUrl}" alt="">
    </div>
    <div class="mid-col">
        <h1 class="product-title">${cardFromArray.name}</h1>
        <div class="stats">
            <i class="icon-like_filled"></i>
            <div class="review-text">
                <p class="reviews"><span>${cardFromArray.orderInfo.reviews}% </span> Positive reviews</p>
                <p class="reviews">Above average</p></div>
                <div class="orders"><p class="reviews">0</p>
                    <p class="reviews">orders</p>
                </div>
        </div>
        <div class="specs">
            <p>Color: <b>${cardFromArray.color}</b></p>
            <p>Operating System: <b>${cardFromArray.os}</b></p>
            <p>Chip: <b>${cardFromArray.chip.name}</b></p>
            <p>Height: <b>${cardFromArray.size.height} cm</b></p>
            <p>Width: <b>${cardFromArray.size.width} cm</b></p>
            <p>Depth: <b>${cardFromArray.size.depth} cm</b></p>
            <p>Weight: <b>${cardFromArray.size.weight} kg</b></p>
        </div>
    </div>
    <div class="side-col right-col" id=${cardFromArray.id}>
        <h1 class="price">$ ${cardFromArray.price}</h1>
        <p>Stock: <b>${cardFromArray.orderInfo.inStock}</b> pcs</p>
        <p class="cart-button modal-button">Add to cart</p>
    </div>
    
</div>`;
document.getElementsByClassName("wrapper")[0].appendChild(modal);
console.log(document.getElementsByClassName("modal-button")[0])
document.getElementsByClassName("modal-button")[0].addEventListener("click", addToCart);
});
});

//close modal
document.addEventListener("click", evt => {
    if (evt.target.id === "modal") {
        modal.remove();
    }
})

//filter arrays
let colorFilter = [];
let memoryFilter = [];
let osFilter = [];
let displayFilter = [];
let priceFilter = [];

//color filter
let checkboxArrColor = Array.from(document.getElementsByClassName("color-filter"));
checkboxArrColor.forEach(checkbox => {
  checkbox.addEventListener("click", event =>{
    let formatedColor = checkbox.id[0].toUpperCase() + checkbox.id.slice(1,).toLowerCase();
    if (checkbox.checked === true){
      if (formatedColor === "Silver") {
        colorFilter.push("Space Grey");
      }
      colorFilter.push(formatedColor);
    }else{
      colorFilter.splice(colorFilter.indexOf(formatedColor),1);
    }
  });
});

//memory filter
let checkboxArrMemory = Array.from(document.getElementsByClassName("memory-filter"));

checkboxArrMemory.forEach(checkbox => {
  checkbox.addEventListener("click", event =>{
    let storage = checkbox.id;
    let formatedStorage = storage.substring(0, storage.length-2);
    console.log(formatedStorage);
    if (checkbox.checked === true){
      memoryFilter.push(formatedStorage);
    }else{
      memoryFilter.splice(memoryFilter.indexOf(formatedStorage),1);
    }

});
});

//os filter

let checkboxArrOS = Array.from(document.getElementsByClassName("os-filter"));

checkboxArrOS.forEach(checkbox => {
  checkbox.addEventListener("click", event =>{
    let os = checkbox.id.split("-").join(" ");
    if (checkbox.checked === true){
      osFilter.push(os);
    }else{
      osFilter.splice(osFilter.indexOf(os),1);
    }

});
});

//display  filter

let checkboxArrDisplay = Array.from(document.getElementsByClassName("display-filter"));

checkboxArrDisplay.forEach(checkbox => {
  checkbox.addEventListener("click", event=>{
    let displayParams = checkbox.id;

    if (checkbox.checked === true){
      displayFilter.push(displayParams);
    }else{
      displayFilter.splice(displayFilter.indexOf(os),1);
    }
  })
})

//price filter
let priceFrom = document.getElementById("from");
let priceTo = document.getElementById("to");
let minPrice = Math.min(...items.map(el=>+el.price));
let maxPrice = Math.max(...items.map(el=>el.price));
priceFrom.addEventListener("blur", evt=>{
  let priceLower = priceFrom.value;
  if (priceLower < minPrice){
    priceFrom.value = minPrice;
}});
priceTo.addEventListener("blur", evt=>{
  let priceHigher = priceTo.value;
  if (priceHigher > maxPrice){
    priceTo.value = maxPrice;
}});

priceFrom.addEventListener("keyup", event=>{
  let priceLower = priceFrom.value;
    if (priceLower < minPrice){
      priceFilter[0] = minPrice;
 
    }else{
      priceFilter[0] = priceLower;
    }
    console.log(priceLower);
});

priceTo.addEventListener("keyup", event=>{
  let priceHigher = priceTo.value;
  if (priceHigher > maxPrice){
    priceFilter[1] = maxPrice;

  }else{
    priceFilter[1] = priceHigher;
  }
  console.log(priceHigher);
});

// filter event listeners

let checkboxArr = Array.from(document.querySelectorAll("input[type = 'checkbox']"));
checkboxArr.forEach(checkbox =>{
  checkbox.addEventListener("click", filterFunction);  
});

priceFrom.addEventListener("blur", filterFunction);
priceTo.addEventListener("keyup", filterFunction);

//search

let searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keyup", event=>{
  cards.forEach(card=> {
    let cardFromArray = items.find(element => element.id == card.id);
    if (cardFromArray.name.toLowerCase().indexOf(searchBar.value.toLowerCase())!=-1) {
      document.getElementById(card.id).style.display = "";
    }else{
      document.getElementById(card.id).style.display = "none";
    }
  });
});

//open cart

let cartButton = document.getElementsByClassName("icon-cart")[0];
cartButton.addEventListener("click", evt=>{
  document.getElementsByClassName("cart")[0].classList.toggle("hidden");
})

//add to cart

let cartItemsNumber = document.getElementsByClassName("cart-items-num")[0];

let addToCartButtons = Array.from(document.querySelectorAll(" .cart-button"));

let productsInCart = [];

let cartTotal = document.getElementsByClassName("cart-total")[0];
let totalItems = document.getElementById("total-items");
let totalPrice = document.getElementById("total-price");

if (JSON.parse(localStorage.getItem("cartArray"))) {
  productsInCart = JSON.parse(localStorage.getItem("cartArray"));
  productsInCart.forEach(element => {
    let productInCart = document.createElement('div');
    productInCart.setAttribute("class", "cart-product");
    productInCart.setAttribute("data-id", element.id)
    productInCart.innerHTML = ` 
    <img src="img/${element.imgUrl}" alt="">
    <div class="product-cart-container">
      <b>${element.name}</b>
      <p class="price-cart">$${element.price}</p>
    </div>
    <i class="icon-arrow_left arrow-right"></i>
    <p class="quantity">${element['quantity']}</p>
    <i class="icon-arrow_left arrow-left"></i>
    <i class="icon-close"></i>
    </div>`
    cartTotal.before(productInCart);
    totalItems.innerText = +totalItems.innerText + 1;
    totalPrice.innerText = productsInCart.map(el => el.price*el.quantity).reduce((a,b)=> a+b)+"$";
    
    if (+totalItems.innerText>0) {
      cartItemsNumber.innerText = totalItems.innerText;
      cartItemsNumber.classList.remove("hidden");
    }else{
      cartItemsNumber.classList.add("hidden");
    }
  });
  let deleteButtons = Array.from(document.getElementsByClassName("icon-close"));

    deleteButtons.forEach(button=>{
        if (productsInCart.length == 1) {
          button.addEventListener("click", deleteFunction);
          button.setAttribute("data-listener", "true");
        }else{
          if (!button.dataset.listener) {
            button.addEventListener("click", deleteFunction);
            button.setAttribute("data-listener", "true");
          }
          
        }
    });

    let arrowsRight = Array.from(document.getElementsByClassName("arrow-right"));
    let arrowsLeft = Array.from(document.getElementsByClassName("arrow-left"));
    arrowsRight.forEach(arrow =>{
      if (!arrow.dataset.listener) {
        arrow.setAttribute("data-listener", "true");
      arrow.addEventListener("click", changeNumberOfItems)
      }
      
    });
    arrowsLeft.forEach(arrow =>{
      if (!arrow.dataset.listener) {
        arrow.setAttribute("data-listener", "true");
        arrow.addEventListener("click", changeNumberOfItems);
      }
      
    });
}else{
  productsInCart = [];
}

function changeNumberOfItems(event) {
  let currentIndex = productsInCart.indexOf(productsInCart.find(element=>element.id ==event.target.parentElement.dataset.id));

  if (event.target.classList.contains("arrow-left")) {
    let currentNumber = Number.parseInt(productsInCart[currentIndex].quantity);
    productsInCart[currentIndex].quantity = currentNumber + 1;
    totalItems.innerText = +totalItems.innerText + 1;
  }else{
    let currentNumber = Number.parseInt(productsInCart[currentIndex].quantity);
    if (currentNumber) {
      productsInCart[currentIndex].quantity = currentNumber - 1;
    totalItems.innerText = +totalItems.innerText - 1;
    }
  }
  
  document.getElementsByClassName("quantity")[currentIndex].innerText = productsInCart[currentIndex]["quantity"];
  
  totalPrice.innerText = productsInCart.map(el => el.price*el.quantity).reduce((a,b)=> a+b)+"$";

  if (+totalItems.innerText>0) {
    cartItemsNumber.innerText = totalItems.innerText;
    cartItemsNumber.classList.remove("hidden");
  }else{
    cartItemsNumber.classList.add("hidden");
  }
}

function deleteFunction(event) {
  let currentIndex = productsInCart.indexOf(productsInCart.find(element=>element.id ==event.target.parentElement.dataset.id));
  let cartProduct = event.target.parentElement;
  totalItems.innerText = (+totalItems.innerText) - (productsInCart[currentIndex].quantity);
  totalPrice.innerText = (totalPrice.innerText.substr(0, totalPrice.innerText.length-1)) - (+productsInCart[currentIndex].price * (+productsInCart[currentIndex].quantity)) + "$";
  productsInCart.splice(productsInCart.indexOf(productsInCart[currentIndex]), 1);
  cartProduct.remove();
  let cartItemsNumber = document.getElementsByClassName("cart-items-num")[0];
if (+totalItems.innerText>0) {
  cartItemsNumber.innerText = totalItems.innerText;
  cartItemsNumber.classList.remove("hidden");
}else{
  cartItemsNumber.classList.add("hidden");
}
localStorage.setItem("cartArray", JSON.stringify(productsInCart));
}


function addToCart(event) {
  let cardFromArray = items.find(element => element.id == event.target.parentElement.id);
  let currentIndex = productsInCart.indexOf(productsInCart.find(element=>element.id ==event.target.parentElement.id));
  if (productsInCart.length === 0 || (productsInCart.map(el=>+el.id).indexOf(+event.target.parentElement.id) === -1)) {
  let productInCart = document.createElement('div');
  productInCart.setAttribute("class", "cart-product");
  productInCart.setAttribute("data-id", cardFromArray.id)
  cardFromArray["quantity"] = 1;
  productInCart.innerHTML = ` 
  <img src="img/${cardFromArray.imgUrl}" alt="">
  <div class="product-cart-container">
      <b>${cardFromArray.name}</b>
      <p class="price-cart">$${cardFromArray.price}</p>
  </div>
  <i class="icon-arrow_left arrow-right"></i>
  <p class="quantity">${cardFromArray['quantity']}</p>
  <i class="icon-arrow_left arrow-left"></i>
  <i class="icon-close"></i>
  </div>`
  cartTotal.before(productInCart);
  productsInCart.push(cardFromArray);
  localStorage.setItem("cartArray", JSON.stringify(productsInCart));
  totalItems.innerText = +totalItems.innerText + 1;
  }else{
      cardFromArray["quantity"] += 1;
      totalItems.innerText = +totalItems.innerText + 1;
      document.getElementsByClassName("quantity")[currentIndex].innerText = cardFromArray["quantity"];
  }
    
    //arrow buttons
    
   

    let arrowsRight = Array.from(document.getElementsByClassName("arrow-right"));
    let arrowsLeft = Array.from(document.getElementsByClassName("arrow-left"));
    arrowsRight.forEach(arrow =>{
      if (!arrow.dataset.listener) {
        arrow.setAttribute("data-listener", "true");
      arrow.addEventListener("click", changeNumberOfItems)
      }
      
    });
    arrowsLeft.forEach(arrow =>{
      if (!arrow.dataset.listener) {
        arrow.setAttribute("data-listener", "true");
        arrow.addEventListener("click", changeNumberOfItems);
      }
      
    });

    //delete buttons

    

    
    let deleteButtons = Array.from(document.getElementsByClassName("icon-close"));

    deleteButtons.forEach(button=>{
        if (productsInCart.length == 1) {
          button.addEventListener("click", deleteFunction);
          button.setAttribute("data-listener", "true");
        }else{
          if (!button.dataset.listener) {
            button.addEventListener("click", deleteFunction);
            button.setAttribute("data-listener", "true");
          }else{
          }
          
        }
    });
    totalPrice.innerText = productsInCart.map(el => el.price*el.quantity).reduce((a,b)=> a+b)+"$";
    let cartItemsNumber = document.getElementsByClassName("cart-items-num")[0];
    if (+totalItems.innerText>0) {
      cartItemsNumber.innerText = totalItems.innerText;
      cartItemsNumber.classList.remove("hidden");
    }else{
      cartItemsNumber.classList.add("hidden");
    }
    
  event.stopPropagation()
}

addToCartButtons.forEach(button =>{
  button.addEventListener("click", addToCart);
  
});

//sort

let sortButton = document.getElementsByClassName("icon-filter")[0];

sortButton.addEventListener("click", event=>{
  document.getElementsByClassName("sort-window")[0].classList.toggle("hidden");
})


//settings
let settingsButton = document.getElementsByClassName("icon-settings");


//filter function
function filterFunction(event) {
  cards.forEach(card=>{
    document.getElementById(card.id).classList.remove("hiddenFilter");
  })
  let allFiltersArr = [colorFilter, memoryFilter, osFilter, displayFilter, priceFilter];
  console.log(allFiltersArr);
if (allFiltersArr.filter(el => el.length === 0).length === allFiltersArr.length){
  cards.forEach(el => {
    document.getElementById(el.id).style.display = "";
  })
}else{
  allFiltersArr.forEach(arr => {
    if (!arr.length) {
      console.log("array empty")
    }else{
      cards.forEach(card => {
        let cardFromArray = items.find(element => element.id == card.id);
        switch (allFiltersArr.indexOf(arr)) {
          case 0:
            if (arr.find(element => cardFromArray.color.includes(element))
            && !card.classList.contains("hiddenFilter")) {
              document.getElementById(card.id).style.display = "";
            }else{
          
              document.getElementById(card.id).style.display = "none";
              document.getElementById(card.id).classList.add("hiddenFilter");
            }
            break;
          case 1:
            if ((arr.find(element => cardFromArray.storage == element)
            && !card.classList.contains("hiddenFilter"))) {
              document.getElementById(card.id).style.display = "";
            }else{
              document.getElementById(card.id).style.display = "none";
              document.getElementById(card.id).classList.add("hiddenFilter");
            }
              break;
          case 2:
            if ((arr.find(element => cardFromArray.os == element)
          && !card.classList.contains("hiddenFilter"))) {
            document.getElementById(card.id).style.display = "";
          }else{
            document.getElementById(card.id).style.display = "none";
            document.getElementById(card.id).classList.add("hiddenFilter");
          }
            break;
          case 3:
            if (arr.find(element => (cardFromArray.display < element.split("-")[1] && cardFromArray.display > element.split("-")[0]))
            && !card.classList.contains("hiddenFilter")) {
              document.getElementById(card.id).style.display = "";
            }else{
              document.getElementById(card.id).style.display = "none";
              document.getElementById(card.id).classList.add("hiddenFilter");
            }
            break;
          case 4:
            if ((cardFromArray.price < arr[1] && !card.classList.contains("hiddenFilter") && cardFromArray.price > arr[0])
            || (cardFromArray.price < arr[1] && !card.classList.contains("hiddenFilter") && !arr[0]) ||
            (!arr[1] && !card.classList.contains("hiddenFilter") && cardFromArray.price > arr[0])) {
              document.getElementById(card.id).style.display = "";
            }else{
              document.getElementById(card.id).style.display = "none";
              card.classList.add("hiddenFilter");
            }
            break;
        }
        });
}
});
}}