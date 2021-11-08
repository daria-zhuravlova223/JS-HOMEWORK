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
let itemNum = 0;
items.forEach((element) => {
  let card = document.createElement("div");
  card.setAttribute("class", "product-card");
  card.setAttribute("id", `${element.id}`)
  card.innerHTML = `<img src="img/${element.imgUrl}" alt="product image">
        <h2 class="product-title">${element.name}</h2>
        <p class="stock">${element.orderInfo.inStock} left in stock</p>
        <p class="price">Price: ${element.price}</p>
        <a href="" class="cart-button">Add to cart</a>`;
  let stats = document.createElement("div");
  stats.setAttribute("class", "stats");
  stats.innerHTML = `<i class="icon-like_empty"></i>
        <div class="review-text">
            <p class="reviews"><span>${element.orderInfo.reviews}%</span> Positive reviews</p>
            <p class="reviews">Above average</p></div>
            <div class="orders"><p class="reviews">0</p>
                <p class="reviews">orders</p>
            </div>`;
  document.getElementsByClassName("card-container")[0].appendChild(card);
  document.getElementsByClassName("product-card")[itemNum].appendChild(stats);
  itemNum++;
});

let i = 0;

setInterval(() => {
  document.getElementsByClassName(
    "carousel"
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
let filterButtons = Array.from(
  document.getElementsByClassName("icon-arrow_left")
);

filterButtons.forEach((filterButton) => {
    let filterOpen = false;
    let openFilterPanel = document.createElement('div');
    openFilterPanel.setAttribute("id", "open-filter")
    let currentPanel = filters[filterButtons.indexOf(filterButton)];
    
    filterButton.addEventListener("click", (event) => {
    if (filterOpen === true) {
          currentPanel.style.backgroundColor = "#edf3ff";
        switch (currentPanel.id) {
            case "price":
            priceContent.remove();
            break;
            case "color":
            colorContent.remove();
            break;
            case "memory":
            memoryContent.remove();
            break;
            case "os":
                osContent.remove();
                break;
            case "display":
                displayContent.remove();
            default:
            break;
        }
        openFilterPanel.remove()
      filterOpen = !filterOpen;
    } else {
    currentPanel.insertAdjacentElement('afterend', openFilterPanel);
      currentPanel.style.backgroundColor = "white";
      switch (currentPanel.id) {
        case "price":
          let price = document.createElement("div");
          price.setAttribute("id", "priceContent");
          price.innerHTML =
            `<div class="from">
                <p>From</p>
                <input type="text" name="from" id="from">
            </div>
            <div class="to">
                <p>To</p>
                <input type="text" name="to" id="to">
            </div>`;
          openFilterPanel.append(price);
          break;
        case "color":
          let color = document.createElement("div");
          color.setAttribute("id", "colorContent");
          color.innerHTML = `<div class = "filter-col">
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Red</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Black</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Blue</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Gold</p></div>
                    </div>
                    <div class = "filter-col">
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Green</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>White</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Grey</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Yellow</p></div>
                    </div>`;
          openFilterPanel.appendChild(color);
          break;
        case "memory":
            let memory = document.createElement("div");
          memory.setAttribute("id", "memoryContent");
          memory.innerHTML = `<div class = "filter-col">
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>32 Gb</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>64 Gb</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>128 Gb</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>256 Gb</p></div>
                    </div>
                    <div class = "filter-col">
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>512 Gb</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>1 Tb</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>2 Tb</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>4 Tb</p></div>
                    </div>`;
            openFilterPanel.appendChild(memory);
            break;
        case "os":
            let os = document.createElement("div");
          os.setAttribute("id", "osContent");
          os.innerHTML = `<div class = "filter-col">
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>IOS</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Mac OS</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>tvOS</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>Watch OS</p></div>
                    </div>`;
            openFilterPanel.appendChild(os);
            break;
        case "display":
            let display = document.createElement("div");
            display.setAttribute("id", "displayContent");
            display.innerHTML = `<div class = "filter-col">
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>2 - 5 inch</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>5 - 7 inch</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>7 - 12 inch</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>12 - 16 inch</p></div>
                    <div class="filter-row"><input type="checkbox" name="" id=""><p>16 + inch</p></div>
                    </div>`;
            openFilterPanel.appendChild(display);
        break;
          default:
          break;
      }
      filterOpen = !filterOpen;
    }
  });
});

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
            <i class="icon-like_empty"></i>
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
    <div class="side-col right-col">
        <h1 class="price">$ ${cardFromArray.price}</h1>
        <p>Stock: <b>${cardFromArray.orderInfo.inStock}</b> pcs</p>
        <a href="#" class="cart-button">Add to cart</a>
    </div>
    
</div>`;
document.getElementsByClassName("wrapper")[0].appendChild(modal);
// modal.style.visibility = "visible";
});
})



document.addEventListener("click", evt => {
    if (evt.target.id === "modal") {
        modal.remove();

    }
})




