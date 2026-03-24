//example 1

function number(){
   let count=1;
    console.log("number...")

    const result = setInterval(()=>{
        
        console.log(count)
        count++;

         if(count==5){
        clearInterval(result)
         }

    },1000)
}

number()

//example 2

function timer(){
    let time=5;

    console.log("time start now")
    const timeup=setInterval(()=>{
        console.log(time)
        time--;

        if(time == 0){
            console.log("time up")
            clearInterval(timeup)
        }
    },1000)

}

timer()