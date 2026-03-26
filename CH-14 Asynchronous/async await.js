// async await

// example (Online Shopping)

let productAvailable = true;
let orderPlaced = true;
let paymentSuccess = true;
let shipped = true;

async function shoppingRun() {

    try {
        const product = await new Promise((resolve, reject) => {

            console.log("checking product availability...")

            setTimeout(() => {
                if (productAvailable) {
                    resolve("product is available")
                } else {
                    reject("product out of stock")
                }
            }, 1000)
        })
        console.log(product)


        const order = await new Promise((resolve, reject) => {

            console.log("placing order...")

            setTimeout(() => {
                if (orderPlaced) {
                    resolve("order placed successfully")
                } else {
                    reject("order failed")
                }
            }, 1000)
        })
        console.log(order)


        const payment = await new Promise((resolve, reject) => {

            console.log("processing payment...")

            setTimeout(() => {
                if (paymentSuccess) {
                    resolve("payment successful")
                } else {
                    reject("payment failed")
                }
            }, 1000)
        })
        console.log(payment)


        const delivery = await new Promise((resolve, reject) => {

            console.log("shipping product...")

            setTimeout(() => {
                if (shipped) {
                    resolve("product delivered")
                } else {
                    reject("delivery failed")
                }
            }, 1000)
        })
        console.log(delivery)

    } catch (error) {
        console.log(error)
    } finally {
        console.log("thank you for shopping ")
    }

}

shoppingRun()