document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let n = Number(document.getElementById("number").value);
if(n > 0){
  result.textContent = "Positive Number";
}else if(n < 0){
  result.textContent = "Negative Number";
}else{
  result.textContent = "Zero";
}

});