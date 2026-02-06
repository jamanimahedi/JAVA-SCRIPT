//odd

let num = 10;

console.log("odd number :");

for (let i = 0; i <= num; i++) {
  if (i % 2 == 0) {
    continue; ///skip Even number
  }
  console.log(i);
}

//Even

console.log("even number :");

for (let i = 0; i <= num; i++) {
  if (i % 2 !== 0) {
    continue; ///skip odd number
  }
  console.log(i);
}