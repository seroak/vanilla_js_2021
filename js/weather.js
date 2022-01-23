const API_KEY = "592426c83b6ad925aebe26dc58e08a95";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    console.log(url);
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:last-child");
        const city = document.querySelector("#weather span:first-child");
        city.innerText = data.name
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("sorry do not take your location")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);