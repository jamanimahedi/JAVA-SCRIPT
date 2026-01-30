//deep copy

let student1 = { NAME: "MahediRaza", AGE: "21" };

console.log("Student 1 ",student1);

let student2 = student1;

console.log("Student 2",student2);

student2.NAME="MahediRaza Jamani"

console.log("After Change Student 2",student2);
console.log("After Change Student 1",student1);


console.log("    ")

//Shallow copy

let a = 20;
let b = a;   

b = 30;

console.log("a =", a); 
console.log("b =", b); 

