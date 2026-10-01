async function getWeather() {
    try {
        const response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=63.43&longitude=10.39&current=temperature_2m,weather_code&timezone=auto");
        const data = await response.json();

        const temperature = data.current.temperature_2m;
        document.querySelector("#weatherTemp").textContent = `${temperature} °C`;

        document.querySelector("#weatherDate").textContent = new Date().toLocaleDateString("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long"
        });

        document.querySelector("#weatherDescription").textContent = "Partly cloudy";
    } catch (error) {
        document.querySelector("#weatherDescription").textContent = "Could not load weather data.";
        console.error(error);
    }
} 

getWeather();