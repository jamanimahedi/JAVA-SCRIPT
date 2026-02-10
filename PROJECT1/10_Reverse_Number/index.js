document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let rev = document.getElementById("number").value.split("").reverse().join("");
result.textContent = "Reverse = " + rev;

});