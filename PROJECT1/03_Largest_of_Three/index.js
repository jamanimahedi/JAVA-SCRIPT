document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let a = Number(document.getElementById("n1").value);
let b = Number(document.getElementById("n2").value);
let c = Number(document.getElementById("n3").value);
let largest = a;
if(b > largest) largest = b;
if(c > largest) largest = c;
result.textContent = "Largest Number = " + largest;

});