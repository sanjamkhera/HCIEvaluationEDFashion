
// Selecting all the menu items
const menuItems = document.querySelectorAll(".menuItem")

// Hamburger menu toggle
function toggleMenu() {
  var menu = document.querySelector('.menuItems');
  // Toggle the 'active' class
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
  } else {
    menu.classList.add('active');
  }
}

// Redirect to account home
function redirectToAccountHome() {
  // Redirect to account home page
  window.location.href = "accountHome.html";
  return false;
}

// Selecting the slider wrapper
const wrapper = document.querySelector(".sliderWrapper");

// Array of featured products
const featuredProducts = [
  {
    id: 1,
    title: "Featured Clothes",
    price: 79,
    colors: [
      { code: "lightgray", img: "./img/suit.png" },
      { code: "black", img: "./img/suit2.png" },
      { code: "navy", img: "./img/kurti.png" },
      { code: "maroon", img: "./img/kurti2.png" },
    ],
  },
  {
    id: 2,
    title: "Featured Accessories",
    price: 79,
    colors: [
      { code: "black", img: "./img/Ring-1-A.jpg" },
      { code: "gray", img: "./img/Ring-2-A.jpg" },
      { code: "gold", img: "./img/Ring-3-A.jpg" },
      { code: "silver", img: "./img/Ring-5-A.jpg.png" },
    ],
  },
  {
    id: 3,
    title: "Featured Handbags",
    price: 79,
    colors: [
      { code: "red", img: "./img/lehnga.png" },
      { code: "black", img: "./img/lehnga2.png" },
      { code: "gray", img: "./img/saree2.png" },
    ],
  },
];

// Selecting the product details
const productImg = document.querySelector(".productImg");
const productTitle = document.querySelector(".productTitle");
const productPrice = document.querySelector(".productPrice");
const productColors = document.querySelectorAll(".color");
const productSizes = document.querySelectorAll(".size");

// Selecting cart and notification elements
const productButton = document.querySelector(".productButton");
const cartNotify = document.querySelector(".cartNotify");
const close = document.querySelector(".close");
const checkoutButton = document.querySelector(".checkoutButton");
const payment = document.querySelector(".payment");

let currentSlide = 0;
let chosenProduct = featuredProducts[currentSlide];

// Function to update the product details
function updateProductDetails(product) {
  productImg.src = product.colors[0].img; // Default to first color image
  productTitle.textContent = product.title;
  productPrice.textContent = `$${product.price}`;

  productColors.forEach((color, idx) => {
    if (product.colors[idx]) {
      color.style.backgroundColor = product.colors[idx].code;
      color.style.display = 'block';
      color.onclick = () => {
        productImg.src = product.colors[idx].img;
      };
    } else {
      color.style.display = 'none';
    }
  });
}

// Slider functionality
const totalSlides = featuredProducts.length;

// Change slide and update details
function changeSlide(newSlide) {
  currentSlide = newSlide;
  wrapper.style.transform = `translateX(${-100 * currentSlide}vw)`;
  chosenProduct = featuredProducts[currentSlide];
  updateProductDetails(chosenProduct);
}

// Event listeners for slider arrows
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

leftArrow.addEventListener('click', () => {
  changeSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1);
});

rightArrow.addEventListener('click', () => {
  changeSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0);
});

// Event listeners for size selection
productSizes.forEach((size) => {
  size.addEventListener("click", () => {
    productSizes.forEach(size => {
      size.style.backgroundColor = "transparent";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

// Cart functionality
document.addEventListener('DOMContentLoaded', () => {
  let cartCount = 0;
  const cartCountElement = document.getElementById('cartCount');

  const updateCartCount = () => {
    cartCount++;
    cartCountElement.textContent = cartCount;
  };

  productButton.addEventListener("click", () => {
    updateCartCount();
    cartNotify.style.display = "flex";
  });

  close.addEventListener("click", () => {
    cartNotify.style.display = "none";
  });
});

// Initial update
updateProductDetails(chosenProduct);


