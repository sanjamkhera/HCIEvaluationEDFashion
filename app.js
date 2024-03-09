const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products =
[
  {
      id: 1,
      title: "Suit",
      price: 79,
      colors: [
        {
          code: "lightgray",
          img: "./img/suit.png",
        },
        {
          code: "black",
          img: "./img/suit2.png",
        },
      ],
  },
  {
      id: 2,
      title: "Saree",
      price: 79,
      colors: [
        {
          code: "black",
          img: "./img/saree.png",
        },
        {
          code: "gray",
          img: "./img/saree2.png",
        },
      ],
  },
  {
      id: 3,
      title: "Lehnga",
      price: 79,
      colors: [
        {
          code: "red",
          img: "./img/lehnga.png",
        },
        {
          code: "black",
          img: "./img/lehnga2.png",
        },
      ],
  },
  {
      id: 4,
      title: "Kurti",
      price: 79,
      colors: [
        {
          code: "white",
          img: "./img/kurti.png",
        },
        {
          code: "black",
          img: "./img/kurti2.png",
        },
      ],
  },
  {
      id: 5,
      title: "Western",
      price: 79,
      colors: [
        {
          code: "black",
          img: "./img/western.png",
        },
        {
          code: "brown",
          img: "./img/western2.png",
        },
      ],
  },
]

let chosenProduct = products [0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item,index)=>{
  item.addEventListener("click", ()=>{
      //change the current slide
      wrapper.style.transform= `translateX(${-100 * index}vw)`;

      //change the chosen product
      chosenProduct = products[index];

      //change text of currentProduct
      currentProductTitle.textContent = chosenProduct.title;
      currentProductPrice.textContent = "$" + chosenProduct.price;

      //assign new colors
      currentProductImg.src = chosenProduct.colors[0].img;
      currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = chosenProduct.colors[index].code;
      });
    });
});

currentProductColors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentProductImg.src = chosenProduct.colors[index].img
  })
});

currentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentProductSizes.forEach(size=>{
      size.style.backgroundColor="transparent";
      size.style.color="black";
    });
    size.style.backgroundColor="black"
    size.style.color="white"
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display= "flex"
});

close.addEventListener("click",()=>{
  payment.style.display="none"
});