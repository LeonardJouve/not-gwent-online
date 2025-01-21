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

})();
