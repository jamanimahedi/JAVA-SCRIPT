// promise chain - online order

let order = new Promise((resolve, reject) => {
    let orderPlaced = true;

    setTimeout(() => {
        if (orderPlaced) {
            resolve("Order placed successfully 🛒");
        } else {
            reject("Order not placed");
        }
    }, 1000);
});

order.then((msg) => {
    console.log(msg);
    return new Promise((resolve, reject) => {
        let paymentDone = true;

        setTimeout(() => {
            if (paymentDone) {
                resolve("Payment successful 💳");
            } else {
                reject("Payment failed");
            }
        }, 1000);
    });
})

.then((msg) => {
    console.log(msg);
    return new Promise((resolve, reject) => {
        let packed = true;

        setTimeout(() => {
            if (packed) {
                resolve("Order packed 📦");
            } else {
                reject("Packing failed");
            }
        }, 1000);
    });
})

.then((msg) => {
    console.log(msg);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Order shipped 🚚");
            console.log("Delivery will arrive soon 📍");
        }, 2000);
    });
})

.then((msg) => {
    console.log(msg);
})

.catch((err) => {
    console.log(err);
    console.log("Order process failed ❌");
})

.finally(() => {
    setTimeout(() => {
        console.log("Thank you for shopping 😊");
    }, 2000);
});