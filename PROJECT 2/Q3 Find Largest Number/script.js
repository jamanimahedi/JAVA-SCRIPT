document.getElementById("findBtn").addEventListener("click",function(){

let numbers = [
Number(document.getElementById("n1").value),
Number(document.getElementById("n2").value),
Number(document.getElementById("n3").value),
Number(document.getElementById("n4").value),
Number(document.getElementById("n5").value)
];

let largest = numbers[0];

for(let i=1;i<numbers.length;i++){

if(numbers[i] > largest){
largest = numbers[i];
}

}

document.getElementById("largestResult").innerHTML =
"Entered Numbers: " + numbers.join(", ") +
"<br>Largest Number: " + largest;

});