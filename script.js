function sendMessage() {
  const input = document.getElementById("userInput");
  const userText = input.value.trim();
  if (!userText) return;

  appendMessage("Tú", userText);
  input.value = "";

  const botResponse = getBotResponse(userText);
  setTimeout(() => {
    appendMessage("Bot", botResponse);
  }, 500);
}

function appendMessage(sender, text) {
  const chatlog = document.getElementById("chatlog");
  chatlog.innerHTML += `<p><strong>${sender}:</strong> ${text}</p>`;
  chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotResponse(input) {
  input = input.toLowerCase();

  if (input.includes("hola")) return "¡Hola! ¿Cómo estás?";
  if (input.includes("adiós")) return "¡Hasta luego!";
  if (input.includes("nombre")) return "Me llamo ChatBot JS.";
  if (input.includes("gracias")) return "¡De nada!";
  
  return "No entiendo lo que dices.";
}
