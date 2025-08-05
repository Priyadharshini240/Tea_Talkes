// ✅ Tea Talks Script.js - Dynamic Menu & Cart

// 🌿 Sample Menu Items (Menu Page Only)
const teaItems = [
  { name: "Rose Milk", category: "milk", price: 79 },
  { name: "Masala Chai", category: "hot", price: 49 },
  { name: "Herbal Green", category: "herbal", price: 99 },
  { name: "Iced Lemon Brew", category: "cold", price: 89 },
  { name: "Tulsi Herbal", category: "herbal", price: 109 },
  { name: "Classic Milk Tea", category: "milk", price: 69 },
  { name: "Ginger Chai", category: "hot", price: 59 },
  { name: "Mint Iced Tea", category: "cold", price: 99 },
  { name: "Cardamom Chai", category: "hot", price: 69 },
  { name: "Cinnamon Spice Brew", category: "herbal", price: 89 },
  { name: "Lemon Iced Tea", category: "cold", price: 79 },
  { name: "Saffron Milk Tea", category: "milk", price: 129 },
  { name: "Tulsi Ginger Brew", category: "herbal", price: 119 },
  { name: "Vanilla Iced Latte", category: "cold", price: 109 },
  { name: "Choco Mint Chai", category: "hot", price: 99 },
  { name: "Honey Lemon Brew", category: "herbal", price: 89 },
  { name: "Almond Milk Tea", category: "milk", price: 139 },
  { name: "Spiced Chai Latte", category: "hot", price: 79 },
  { name: "Peach Iced Tea", category: "cold", price: 109 },
  { name: "Coconut Milk Brew", category: "milk", price: 119 },
  { name: "Lemongrass Herbal", category: "herbal", price: 99 },
  { name: "Chai Latte", category: "hot", price: 89 },
  { name: "Iced Hibiscus Tea", category: "cold", price: 129 },
  { name: "Spiced Almond Milk", category: "milk", price: 149 },
  { name: "Cardamom Mint Chai", category: "hot", price: 109 },
  { name: "Citrus Iced Brew", category: "cold", price: 119 },
  { name: "Ginger Lemongrass Tea", category: "herbal", price: 109 },
  { name: "Vanilla Chai", category: "hot", price: 99 },
  { name: "Iced Berry Brew", category: "cold", price: 139 },
  { name: "Saffron Almond Milk", category: "milk", price: 159 },
  { name: "Mint Chai Latte", category: "hot", price: 119 },
  { name: "Coconut Iced Tea", category: "cold", price: 129 },

];

// ✅ Load existing cart or create new
let cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartCount = document.getElementById("cart-count");

// ✅ Update Cart Count in Nav
function updateCartCount() {
  if (cartCount) {
    cartCount.textContent = cart.reduce((a, i) => a + i.qty, 0);
  }
}
updateCartCount();

// ✅ Add to Cart Function
function addToCart(name, price) {
  const existing = cart.find((item) => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ name, price: parseFloat(price), qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
  alert(`${name} added to cart!`);
}

// ✅ MENU PAGE: Render Tea Items Dynamically
const menuList = document.getElementById("menu-list");

function renderMenu(category = "all") {
  if (!menuList) return; // 🚨 Stop if not on menu.html

  menuList.innerHTML = "";
  teaItems
    .filter((tea) => category === "all" || tea.category === category)
    .forEach((tea) => {
      const card = document.createElement("div");
      card.className = "menu-card";
      card.innerHTML = `
        <h3>${tea.name}</h3>
        <p class="price">₹${tea.price}</p>
        <button class="add-to-cart">Add to Cart</button>
      `;
      card.querySelector(".add-to-cart").addEventListener("click", () => {
        addToCart(tea.name, tea.price);
      });
      menuList.appendChild(card);
    });
}

// ✅ If on Menu Page, Load Items & Handle Category Filters
if (menuList) {
  renderMenu();
  document.querySelectorAll(".sidebar li").forEach((li) => {
    li.addEventListener("click", () => {
      document.querySelectorAll(".sidebar li").forEach((x) => x.classList.remove("active"));
      li.classList.add("active");
      renderMenu(li.dataset.category);
    });
  });
}

// ✅ COMBOS PAGE: Attach Add to Cart to Combo Buttons
document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.dataset.item && btn.dataset.price) {
      addToCart(btn.dataset.item, btn.dataset.price);
    }
  });
});
