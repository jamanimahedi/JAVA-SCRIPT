// reduce() method

let prices = [100, 250, 300, 150, 200];

console.log("prices :- " + prices);

let totalPrice = prices.reduce((accumulator, current) => {
    return accumulator + current;
});

console.log("totalPrice: " + totalPrice);


// using loop

let total = 0;

for (let i = 0; i < prices.length; i++) {
    total += prices[i];
}

console.log("total using loop", total);