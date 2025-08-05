// ✅ Contact Form Submission with Smooth Success Popup
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const success = document.getElementById("contact-success");
  success.style.display = "block";

  setTimeout(() => {
    success.style.display = "none";
    this.reset();
  }, 2000);
});

// ✅ Update Cart Count in Nav
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");
if (cartCount) {
  cartCount.textContent = cart.reduce((a, i) => a + i.qty, 0);
}

// ✅ Newsletter Popup (Home Page Only)
window.onload = () => {
  const popup = document.getElementById("newsletter-popup");
  if (popup) {
    setTimeout(() => {
      popup.style.display = "block";
    }, 3000);
  }
};

function closePopup() {
  const popup = document.getElementById("newsletter-popup");
  if (popup) popup.style.display = "none";
}
