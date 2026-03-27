document.getElementById("btn").addEventListener("click", async () => {

    const city = document.getElementById("city").value;

    if(city === ""){
        alert("Enter city name");
        return;
    }

    try {
        const res = await fetch(`https://wttr.in/${city}?format=j1`);
        const data = await res.json();

        const temp = data.current_condition[0].temp_C;
        const desc = data.current_condition[0].weatherDesc[0].value;

        document.getElementById("temp").textContent = `🌡 Temperature: ${temp}°C`;
        document.getElementById("desc").textContent = `☁️ Condition: ${desc}`;

    } catch (error) {
        document.getElementById("temp").textContent = "Error loading weather";
    }

});