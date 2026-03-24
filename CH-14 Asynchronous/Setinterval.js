
//example 1

// const time = ()=>{
//     console.log("current time : ")

//     setInterval(()=>{
//         console.log(Date())
//     },1000)

// }

// time()


function number(){
    let count =1;

    console.log("number print...")

    setInterval(() => {
        console.log(count)
        count++;
    }, 1000);

}

number()