document.addEventListener('DOMContentLoaded', () => {
  // Check if the current page is cart.html
  if (window.location.pathname.endsWith('cart.html')) {
    const checkoutButton = document.querySelector(".checkoutButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    // Show payment popup when checkout button is clicked
    checkoutButton.addEventListener("click", () => {
      payment.style.display = "flex"; // Use 'flex' or 'block' depending on your styling
    });

    // Hide payment popup when close button is clicked
    close.addEventListener("click", () => {
      payment.style.display = "none";
    });
  }
});