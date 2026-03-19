function resultFunc(result){
    console.log("The multiplication is :-", result);
}

function calculate(a, b, resultFunc){
    let result = a * b;
    resultFunc(result);
}

calculate(5, 4, resultFunc);


function nameFunc(result){
    console.log("Full Name is :-", result);
}

function fullName(a, b, nameFunc){
    let result = a + " " + b;
    nameFunc(result);
}

fullName("jamani", "Mahedi", nameFunc);