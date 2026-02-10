document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let balance = 5000;
let amt = Number(document.getElementById("number").value);
if(amt <= balance){
  result.textContent = "Withdraw Successful";
}else{
  result.textContent = "Insufficient Balance";
}

});