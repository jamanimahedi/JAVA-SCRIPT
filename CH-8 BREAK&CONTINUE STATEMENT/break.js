//Example 1
console.log("\nExample 2\n")

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (let i = 0; i <= num.length; i++) {
    if (i === 5) {
        break;
    }
    console.log(i)

}
    console.log("Found 5 ! stop ")

//Example 2

console.log("\nExample 2\n")

let Fruit=["apple", "banana", "mango", "orange", "grapes"];

for(let i=0;i<=Fruit.length;i++){
    if(Fruit[i] === "mango"){
        console.log("mango found ! stop");
        break;
    }
    console.log(Fruit[i]);
}