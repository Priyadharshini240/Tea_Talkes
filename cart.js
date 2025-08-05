const cart = JSON.parse(localStorage.getItem("cart")) || [];
const cartContainer = document.getElementById("cart-items");
const totalDisplay = document.getElementById("total-amount");
const cartCount = document.getElementById("cart-count");

cartCount.textContent = cart.reduce((a, i) => a + i.qty, 0);

let total = 0;
cart.forEach((item) => {
  const entry = document.createElement("div");
  entry.className = "cart-item";
  entry.innerHTML = `<span>${item.name} x${item.qty}</span><span>₹${item.qty * item.price}</span>`;
  cartContainer.appendChild(entry);
  total += item.qty * item.price;
});
totalDisplay.textContent = total;

// ✅ Checkout Success & Redirect to Receipt
document.getElementById("checkout").addEventListener("click", () => {
  document.getElementById("success-popup").style.display = "block";
  setTimeout(() => {
    window.location.href = "receipt.html";
  }, 2000);
});

// ✅ PDF Download - Styled Invoice
document.getElementById("download-pdf").addEventListener("click", () => {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // ✅ Tea Talks Branding
  doc.setFontSize(22);
  doc.setTextColor(194, 81, 81); // Tea Talks Red
  doc.text("🍵 Tea Talks Invoice", 20, 20);

  doc.setFontSize(12);
  doc.setTextColor(100, 100, 100);
  doc.text("Thank you for sipping with us!", 20, 28);

  // ✅ Table Header
  doc.setFontSize(14);
  doc.setTextColor(0, 0, 0);
  doc.text("Item", 20, 45);
  doc.text("Qty", 120, 45);
  doc.text("Price", 160, 45);

  // ✅ Divider Line
  doc.setDrawColor(194, 81, 81);
  doc.line(20, 48, 190, 48);

  // ✅ Items Listing
  let y = 60;
  cart.forEach((item) => {
    doc.text(item.name, 20, y);
    doc.text(String(item.qty), 125, y);
    doc.text(`₹${item.qty * item.price}`, 165, y);
    y += 10;
  });

  // ✅ Total Price Highlight
  y += 5;
  doc.setDrawColor(194, 81, 81);
  doc.line(20, y, 190, y);
  y += 10;

  doc.setFontSize(16);
  doc.setTextColor(194, 81, 81);
  doc.text(`Total: ₹${total}`, 140, y);

  // ✅ Footer Note
  y += 15;
  doc.setFontSize(11);
  doc.setTextColor(100, 100, 100);
  doc.text("For feedback, visit teatalks.com | Enjoy your brew ☕", 20, y);

  // ✅ Save the File
  doc.save("TeaTalks_Invoice.pdf");
});
