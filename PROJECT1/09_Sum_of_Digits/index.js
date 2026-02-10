document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let num = document.getElementById("number").value;
let sum = 0;
for(let d of num){
  sum = sum + Number(d);
}
result.textContent = "Sum = " + sum;

});