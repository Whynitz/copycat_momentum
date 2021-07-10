const API_KEY = "9627bcef202c084ebae7edc41434a352";

function getWeather(lat, lon) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const location = document.querySelector("#weather span:last-child");
        weather.innerText = `${data.weather[0].description}, ${data.main.temp}°C`;
        location.innerText = `@${data.name}`;
    });
}

function onGeoSuccess(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    getWeather(lat,lon);
}

function onGeoError() {
    alert("Can't find you.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError, {maximumAge: Infinity});

/*
const coords = localStorage.getItem("coords")

if (coords) {
    const parsedCoords = JSON.parse(coords);
    const lat = parsedCoords.lat;
    const lon = parsedCoords.lon;
    getWeather(lat,lon);
} else {
    navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
}
*/

