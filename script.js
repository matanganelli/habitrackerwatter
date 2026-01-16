// 🧊 Estado inicial
let cups = 0;
const goal = 10; // Meta alterada para 10 copos

// 🔗 Conectando aos elementos
const progress = document.getElementById("progress");
const message = document.getElementById("message");
const addBtn = document.getElementById("addWater");
const popup = document.getElementById("popup");
const closePopup = document.getElementById("closePopup");

// 💧 Lógica principal
addBtn.addEventListener("click", () => {
  if (cups < goal) {
    cups++;
    progress.textContent = `${cups} / ${goal}`;

    if (cups === goal) {
      message.textContent = "Você atingiu sua meta! 🌊";
      showPopup();
      document.body.classList.add("wave-mode");
      setTimeout(() => document.body.classList.remove("wave-mode"), 4000);
    } else {
      message.textContent = "Continue fluindo 💧";
    }
  } else {
    message.textContent = "Você já completou sua meta hoje! ☀️";
  }
});

// 🎉 Mostra o popup
function showPopup() {
  popup.classList.add("show");
}

// ✨ Fecha o popup
closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});
