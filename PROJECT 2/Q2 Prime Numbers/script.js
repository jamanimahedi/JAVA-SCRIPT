document.getElementById("primeBtn").addEventListener("click",function(){

let primes = "";

for(let i=2;i<=50;i++){

let isPrime = true;

for(let j=2;j<i;j++){

if(i % j === 0){
isPrime = false;
break;
}

}

if(isPrime){
primes += i + ", ";
}

}

document.getElementById("primeResult").innerHTML = primes;

});