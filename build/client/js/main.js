var App = require("./client");

(function main() {
  var app = new App();
  
  document.getElementById("chatSend").addEventListener("click", function () {
    const input = document.getElementById("chatInput");
    const message = input.value.trim();
    if (message) {
      app.sendMessage(message);
      input.value = "";
    }
  });
  
  document.getElementById("chatInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      document.getElementById("chatSend").click();
    }
  });

  document.getElementById("toggleChat").addEventListener("click", function () {
    const chatContainer = document.getElementById("chatContainer");
    const isHidden = chatContainer.classList.toggle("hidden");
    this.textContent = isHidden ? "Show Chat" : "Hide Chat";
  });

})();
