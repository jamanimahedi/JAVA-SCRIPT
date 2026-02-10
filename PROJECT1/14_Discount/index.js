document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let amt = Number(document.getElementById("number").value);
if(amt >= 1000){
  result.textContent = "10% Discount Applied";
}else{
  result.textContent = "No Discount";
}

});