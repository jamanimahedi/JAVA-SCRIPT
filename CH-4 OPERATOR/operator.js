//operator

//1.Arithmetic operator

console.log("1.Arithmetic Operator ")

let a = 40
let b = 30

console.log("Addition =", a + b)
console.log("Substraction =", a - b)
console.log("Multiplication =", a * b)
console.log("Division =", a / b)
console.log("Modulo =", a % b)
console.log("Exponentiation =", a ** b)

console.log(" ")//for space


//2.Assignment Operator

console.log("2.Assignment Operator ")


a = 10;
b = 5;

a += b;
console.log("Add and assign A =", a);

a -= b;
console.log("Subtract and assign A =", a);

a *= b;
console.log("Multiply and assign A =", a);

a /= b;
console.log("Divide and assign A =", a);

a %= b;
console.log("Modulo and assign A =", a);

console.log(" ")//for space


//3.Comparison operator

console.log("3.Comparison operator")


let A=20
let B="30"

console.log("Equal to =",A==B)

console.log("Strict Equal to =",A===B)

console.log("Not Equal to =", A != B);

console.log("Less Than =",A<B)

console.log("Greator Than =",A>B)

console.log("Greator or Equal =",A>=B)

console.log("Less or Equal =",A<=B)

console.log(" ")//for space




//4.Logical operator

console.log("4.logical operator ")

//AND (&&)

let marks1=97
let marks2=80

if(marks1 >=97 &&  marks2 >=80){
    console.log("you have achieve grade A")
}

//OR (||)

let student1=90
let student2=20

if(student1>=40 || student2 >= 40){
    console.log("You crack this exam")
}


//NOT (!)

let Age=18;

if(!(Age>=18)){
    console.log("You cannot give vote")
}else{
    console.log("you can vote")
}


console.log(" ") //for space




//5.Ternary Operator

console.log("Ternary Operator")

const Marks=40;
const result=(Marks>=33)?"You Pass This Exam":"You Fail This Exam";

console.log(result)

console.log(" ") //for space


//6.Type Operator

console.log("Type Operator")

let num=123
let str="MahediRaza"
let object={NAME:"MahediRaza",Age:"21"}

console.log(typeof num)
console.log(typeof str)
console.log(typeof object)
console.log(" ") //for space



//7.Increment / Decrement

console.log("7.Increment And Decrement")

//Pre Increment / Decrement

let y = 10;
console.log(++y); 

//Post Increment / Decrement

let x = 10;
console.log(x++); 
console.log(x);   







