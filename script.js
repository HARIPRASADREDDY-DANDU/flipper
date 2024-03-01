const colors = ["#3498db", "#e74c3c", "#9b59b6", "#2ecc71", "#f1c40f", "#e67e22", "#1abc9c", "#34495e", "#7f8c8d"];

const colorDiv = document.getElementById("color");
const btn = document.getElementById("btn");

function generateRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

btn.addEventListener("click", function() {
  const randomColor = generateRandomColor();
  colorDiv.style.backgroundColor = randomColor;
  colorDiv.textContent = randomColor;
});
