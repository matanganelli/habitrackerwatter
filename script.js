// ---------------------------
// 🌊 Fluir - Rastreador de Água
// ---------------------------

// 1️⃣ Criamos uma variável para armazenar o número de copos bebidos.
let cups = 0;

// 2️⃣ Definimos a meta diária (quantos copos o usuário deve beber).
const goal = 10;

// 3️⃣ Pegamos referências aos elementos HTML que vamos atualizar.
const progress = document.getElementById("progress");
const message = document.getElementById("message");
const addBtn = document.getElementById("addWater");

// 4️⃣ Adicionamos um "ouvinte" de evento ao botão.
// Quando o usuário clicar, executa a função.
addBtn.addEventListener("click", () => {

  // 5️⃣ Se o número de copos ainda for menor que a meta...
  if (cups < goal) {
    // Aumentamos a contagem de copos.
    cups++;

    // Atualizamos o texto do progresso, ex: "3 / 8"
    progress.textContent = `${cups} / ${goal}`;

    // Exibimos uma mensagem de incentivo ou de conquista.
    // Se atingiu a meta, mostra uma mensagem especial.
    if (cups === goal) {
      message.textContent = "Você atingiu sua meta! 🌊";
      
      // 6️⃣ Adicionamos uma classe ao corpo da página para ativar uma animação de "onda".
      // Isso dá a sensação de fluidez e celebração sem exagero.
      document.body.classList.add("wave-mode");

      // 7️⃣ Removemos a animação após alguns segundos para que ela não fique infinita.
      setTimeout(() => document.body.classList.remove("wave-mode"), 4000);
    } else {
      // Caso ainda não tenha atingido a meta, mostramos um lembrete gentil.
      message.textContent = "Continue fluindo 💧";
    }

  } else {
    // 8️⃣ Se já atingiu a meta, apenas lembramos o usuário disso.
    message.textContent = "Você já completou sua meta hoje! ☀️";
  }
});
