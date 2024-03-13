const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products =
  [
    {
      id: 1,
      title: "Featured Clothes",
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
        {
          code: "navy",
          img: "./img/kurti.png",
        },
        {
          code: "maroon",
          img: "./img/kurti2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Featured Accessories",
      price: 79,
      colors: [
        {
          code: "black",
          img: "./img/Ring-1-A.jpg",
        },
        {
          code: "gray",
          img: "./img/Ring-2-A.jpg",
        },
        {
          code: "g",
          img: "./img/Ring-3-A.jpg",
        },
        {
          code: "gray",
          img: "./img/Ring-5-A.jpg",
        },
      ],
    },
    {
      id: 3,
      title: "Featured Handbags",
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
        {
          code: "gray",
          img: "./img/saree2.png",
        },
        {
          code: "gray",
          img: "./img/saree2.png",
        },
      ],
    },
  ]

let chosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the chosen product
    chosenProduct = products[index];

    //change text of currentProduct
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "$" + chosenProduct.price;

    //assign new colors
    currentProductImg.src = chosenProduct.colors[0].img;
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img
  })
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach(size => {
      size.style.backgroundColor = "transparent";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black"
    size.style.color = "white"
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex"
});

close.addEventListener("click", () => {
  payment.style.display = "none"
});

function toggleMenu() {
  var menu = document.querySelector('.menuItems');
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}

function redirectToAccountHome() {
  window.location.href = "accountHome.html";
  return false;
}

// Assuming each slide is 100% of the viewport width (vw)
const totalSlides = document.querySelectorAll('.sliderItem').length;
let currentSlide = 0; // Start with the first slide

// Select the arrow buttons
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
  // Move to the previous slide, if not at the first slide
  if (currentSlide > 0) {
    currentSlide--;
    wrapper.style.transform = `translateX(${-100 * currentSlide}vw)`;
  } else {
    // Optional: go to the last slide if at the first slide
    currentSlide = totalSlides - 1;
    wrapper.style.transform = `translateX(${-100 * currentSlide}vw)`;
  }
});

rightArrow.addEventListener('click', () => {
  // Move to the next slide, if not at the last slide
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    wrapper.style.transform = `translateX(${-100 * currentSlide}vw)`;
  } else {
    // Optional: go to the first slide if at the last slide
    currentSlide = 0;
    wrapper.style.transform = `translateX(0vw)`;
  }
});

document.querySelector('.productButton').addEventListener('click', function() {
  document.getElementById('overlay').style.display = 'block';
  setTimeout(function() {
    document.getElementById('overlay').style.display = 'none';
  }, 2000); // The overlay will disappear after 2 seconds
});