const button = document.getElementById("myButton");
const message = document.getElementById("message");

button.addEventListener("click", function() {
   console.log("Button was clicked!");
   message.textContent = "*Button clicked*";
});