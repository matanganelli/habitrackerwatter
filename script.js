let cups = 0;
const goal = 10;

const progress = document.getElementById("progress");
const message = document.getElementById("message");
const addBtn = document.getElementById("addWater");
const popup = document.getElementById("popup");

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

// 🌸 Função que mostra o popup e depois o fecha suavemente
function showPopup() {
  popup.classList.remove("hidden");

  // Fecha automaticamente após 3 segundos
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 3000);
}
