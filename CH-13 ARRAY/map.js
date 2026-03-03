// map() method
// map() runs a function on every array element and returns a new array.

let prices = [100, 250, 400, 150, 300];

console.log("prices :-", prices);

let discountedPrices = prices.map((price) => price - 20);

console.log("discounted prices :-", discountedPrices);


// 2nd Example (Array of Objects)

let products = [
    { id: 1, name: "Laptop", category: "Electronics", stock: 15 },
    { id: 2, name: "Shoes", category: "Fashion", stock: 30 },
    { id: 3, name: "Watch", category: "Accessories", stock: 20 },
    { id: 4, name: "Phone", category: "Electronics", stock: 10 },
];

console.log("products :-", products);

let productNames = products.map((product) => {
    return product["name"];
});

console.log("new array :-", productNames);