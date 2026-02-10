document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let c = Number(document.getElementById("number").value);
let f = (c * 9/5) + 32;
result.textContent = f + " °F";

});