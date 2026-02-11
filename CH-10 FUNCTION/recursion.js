function factorial(number) {
    console.log("num", number);

    if(number === 0){
        return console.log(" factorial is not define for negative number");
    }else if (number === 1){
        return 1;
    }else{
        return number * factorial(number -1);
    }
}

let result = factorial(6);
console.log("factorial of 6 is", result);