document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let n = Number(document.getElementById("number").value);
let fact = 1;
for(let i=1;i<=n;i++){
  fact = fact * i;
}
result.textContent = "Factorial = " + fact;

});