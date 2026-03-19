const currentTime = () => {
    console.log("checking current time...");
    
    setTimeout(() => {
        let time = new Date().toLocaleTimeString();
        console.log("current time is", time);
    }, 4000);
}

currentTime();