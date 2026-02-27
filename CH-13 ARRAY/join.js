// join 
let colors = ["Red", "Blue", "Green", "Yellow", "Purple", "Orange", "Black"];

console.log("colors", colors);

console.log("join :", colors.join("-"));

console.log(" ");

// slice
console.log("slicing :", colors.slice(2, 5));

console.log(" ");

// flat
let matrix = [
    [11, 22, 33],
    [44, 55, 66],
    [77, 88, 99]
];

console.log(matrix);
console.log("flat :", matrix.flat());

matrix = [
    [1, 2, [3, 4, [5, 6]]],
    [7, 8, [9, 10, [11, 12]]],
    [13, 14, [15, 16, [17, 18]]]
];

console.log("flat :", matrix.flat(Infinity));

console.log(" ");

// some
let salaries = [15000, 22000, 18000, 25000, 30000, 12000];

let someSalary = salaries.some((salary) => {
  return salary > 20000;
});
console.log("some :", someSalary);

// reverse
console.log("reverse :", salaries.reverse());

// values
const salaryValues = salaries.values();

for (let value of salaryValues) {
  console.log("value", value);
}