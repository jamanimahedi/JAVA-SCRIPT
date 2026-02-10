document.getElementById("form").addEventListener("submit", function(e){
e.preventDefault();
let result = document.getElementById("result");

let ch = document.getElementById("number").value.toLowerCase();
if("aeiou".includes(ch)){
  result.textContent = "Vowel";
}else{
  result.textContent = "Consonant";
}

});