document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let n = document.getElementById("number").value;
let rev = n.split("").reverse().join("");
if(n === rev){
  result.textContent = "Palindrome";
}else{
  result.textContent = "Not Palindrome";
}

});