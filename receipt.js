const cart = JSON.parse(localStorage.getItem("cart")) || [];
const itemsContainer = document.getElementById("receipt-items");
const totalSpan = document.getElementById("receipt-total");

let total = 0;
cart.forEach((item) => {
  const div = document.createElement("div");
  div.className = "cart-item";
  div.innerHTML = `<span>${item.name} x${item.qty}</span><span>₹${item.price * item.qty}</span>`;
  itemsContainer.appendChild(div);
  total += item.price * item.qty;
});

totalSpan.textContent = total;

// ✅ Clear cart after generating receipt
localStorage.clear();
