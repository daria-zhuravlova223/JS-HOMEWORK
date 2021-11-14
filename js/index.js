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
  document.getElementById(`${element.id}`).appendChild(stats);
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
filterButtons.forEach((filterButton) => {
    let filterOpen = false;
    let openFilterPanel = document.createElement('div');
    openFilterPanel.setAttribute("id", "open-filter")
    let currentPanel = filters[filterButtons.indexOf(filterButton)];
    
    filterButton.addEventListener("click", (event) => {
      let currentPanelOpen = currentPanel.id + 'Content';
    if (filterOpen === true) {
          currentPanel.style.backgroundColor = "#edf3ff";
          document.getElementById(currentPanelOpen).classList.toggle("hidden");
          if (currentPanel.id === "display") {
            document.getElementById("display").style.borderBottom = "none";
          }
        filterOpen = !filterOpen;
    } else {
      currentPanel.style.backgroundColor = "white";
      if (currentPanel.id === "display") {
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
});
})
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

      if (!colorFilter.length) {
        return;
      }else{
        cards.forEach(card => {
          let cardFromArray = items.find(element => element.id == card.id);
          if (colorFilter.find(element => cardFromArray.color.includes(element))) {
            document.getElementById(card.id).style.display = "";
          }else{
            document.getElementById(card.id).style.display = "none";
          }
        });
 
      }
    
      }
    
    )
  
  
      }
    
    );

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
      colorFilter.splice(memoryFilter.indexOf(formatedStorage),1);
    }
      if (!memoryFilter.length) {
        return;
      }else{
        cards.forEach(card => {
          let cardFromArray = items.find(element => element.id == card.id);
          if (memoryFilter.find(element => cardFromArray.storage == element)) {
            document.getElementById(card.id).style.display = "";
          }else{
            document.getElementById(card.id).style.display = "none";
          }
        });
        
  
      }

});
});

//os filter

let checkboxArrOS = Array.from(document.getElementsByClassName("os-filter"));

checkboxArrOS.forEach(checkbox => {
  checkbox.addEventListener("click", event =>{
    let os = checkbox.id.split("-").join(" ");
    console.log(os);
    if (checkbox.checked === true){
      osFilter.push(os);
    }else{
      osFilter.splice(osFilter.indexOf(os),1);
    }
      if (!osFilter.length) {
        return;
      }else{
        cards.forEach(card => {
          let cardFromArray = items.find(element => element.id == card.id);
          if (osFilter.find(element => cardFromArray.os == element)) {
            document.getElementById(card.id).style.display = "";
          }else{
            document.getElementById(card.id).style.display = "none";
          }
        });
        
  
      }
      if (!osFilter.length) {
        cards.forEach(card =>{
          document.getElementById(card.id).style.display = "";
        })
      }
});
});

