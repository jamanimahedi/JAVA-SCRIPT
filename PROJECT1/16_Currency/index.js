document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let usd = Number(document.getElementById("number").value);
let inr = usd * 83;
result.textContent = inr.toFixed(2) + " INR";

});