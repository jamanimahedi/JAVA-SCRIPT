//the promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value

// A promise may have one of three states.

// Pending
// Fulfilled
// Rejected



//example 1 


let orderAmount = 300;
let walletBalance = 500;

let foodOrder = new Promise((resolve, reject) => {
    console.log("Checking wallet balance...");

    setTimeout(() => {
        if (orderAmount > walletBalance) {
            reject("Not enough balance to place order");
        } else if (orderAmount === 0) {
            reject("Please select food items");
        } else {
            resolve(`Order placed successfully. Amount: ${orderAmount}`);
        }
    }, 1000);
});

foodOrder.then((msg) => {
    console.log(msg);
})
.catch((err) => {
    console.log(err);
});



//example 2 


let age = 16;

let ageCheck = new Promise((resolve, reject) => {
    console.log("Checking age for voting...");

    setTimeout(() => {
        if (age >= 18) {
            resolve(`Age ${age} is eligible for voting`);
        } else {
            reject(`Age ${age} is not eligible for voting`);
        }
    }, 1000);
});

ageCheck.then((eligible) => {
    console.log(eligible);
})
.catch((notEligible) => {
    console.log(notEligible);
});