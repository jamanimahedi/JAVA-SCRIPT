document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let n = Number(document.getElementById("number").value);
let text = "";
for(let i=1;i<=10;i++){
  text += n + " x " + i + " = " + (n*i) + "\n";
}
result.textContent = text;

});