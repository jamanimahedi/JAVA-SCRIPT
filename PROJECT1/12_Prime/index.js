document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let n = Number(document.getElementById("number").value);
if(n <= 1){
  result.textContent = "Not Prime";
  return;
}
let prime = true;
for(let i=2;i<n;i++){
  if(n % i === 0){
    prime = false;
    break;
  }
}
result.textContent = prime ? "Prime Number" : "Not Prime";

});