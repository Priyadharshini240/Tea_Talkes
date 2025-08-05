document.getElementById("track-btn").addEventListener("click", () => {
  const orderId = document.getElementById("order-id").value.trim().toUpperCase();
  const output = document.getElementById("tracking-result");

  if (!orderId || orderId.length < 4) {
    output.textContent = "❌ Invalid Order ID. Please try again.";
    output.style.display = "block";
    output.style.borderLeft = "5px solid #d9534f";
    return;
  }

  const statuses = [
    "🧾 Order received. Tea leaves selected.",
    "🍃 Brewing in progress... steeping with love.",
    "🛵 Out for delivery with aromatic vibes.",
    "✅ Delivered. We hope your cup is full!"
  ];

  const status = statuses[Math.floor(Math.random() * statuses.length)];

  output.textContent = `Order ID ${orderId}: ${status}`;
  output.style.display = "block";
  output.style.borderLeft = "5px solid var(--primary-red)";
  output.style.animation = "fadeIn 0.5s ease";
});
