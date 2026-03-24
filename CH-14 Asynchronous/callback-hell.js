
function selectProduct(callback){
    setTimeout(()=>{
        console.log("product selected")
         callback();
    },1000)
   
}

function addToCart(callback){
    setTimeout(()=>{
        console.log("Added To cart")
         callback();
    },1000)
   
}

function PaymentDone(callback){
    setTimeout(()=>{
        console.log("Payment Done")
         callback();
       },1000)
}

function Delivery(callback){
    setTimeout(()=>{
        console.log("order delivery")
         callback();
    },1000)
}

selectProduct(()=>{
    addToCart(()=>{
        PaymentDone(()=>{
            Delivery(()=>{
               setTimeout(()=>{
                 console.log("order complete")
               },2000)
            })
        })
    })
})