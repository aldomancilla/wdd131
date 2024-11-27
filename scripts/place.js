document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("lastModified").textContent = "Last modified: " + document.lastModified;


function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) {
        return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(1);
    } else {
        return "N/A";
    }
}

const temperature = 17; // Temperature in °C
const windSpeed = 13;   // Wind Speed in km/h

const windChill = calculateWindChill(temperature, windSpeed);

document.addEventListener("DOMContentLoaded", function () {

    document.querySelector('.div12a').textContent = `${windChill}°C`;
});