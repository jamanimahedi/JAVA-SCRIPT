
//example 1

function checkyear(){

    console.log("checking current year....")

   const result = setTimeout(()=>{
        console.log(Date())
    },2000)
    
    setTimeout(()=>{
        clearTimeout(result)
        console.log("clear time out")
    },1000)
}

checkyear()


//example 2

const sum = (a,b) =>{
    console.log("calculate sum...")

    const result = setTimeout(()=>{
        console.log("sum = ",a+b)
    },2000)


    setTimeout(()=>{
            clearTimeout(result)
            console.log("clear time out")
    },1000)

}

sum(10,20)
