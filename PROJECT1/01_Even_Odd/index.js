document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let n = Number(document.getElementById("number").value);
if(n % 2 === 0){
  result.textContent = "Even Number";
}else{
  result.textContent = "Odd Number";
}

});