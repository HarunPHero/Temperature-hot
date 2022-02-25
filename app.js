
const searchBtn = document.getElementById('search').addEventListener('click', function () {
    const inputText = document.getElementById('inputText').value;
    const apiKey = 'be41a330c7cde91f3b42dd660d4a3f50';
    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    if (inputText == "") {
        alert('invalid address')
    }

    const url = `${apiBase}?q=${inputText}&units=metric&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))
        .catch(error => alert("Sorry, location not found"))



})


const displayWeather = (data) => {
    const weatherStatus = document.getElementById('weather-status');
    const inputText= document.getElementById('inputText')
    inputText.value = ""

    const imageUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    weatherStatus.innerHTML = `
    <img src="${imageUrl}">
        <h3>Location: ${data.name}</h3>
        <h3>Temperature: <span style="font-weight:700">${Math.round(data.main.temp)}°C</span></h3>
        <h3>Weather status: ${data.weather[0].description}</h3>
        <h3>Country: ${data.sys.country}</h3>
        <h3>Humidity: ${data.main.humidity}%</h3>
        <h3>Wind speed: ${data.wind.speed}km/h</h3>
    `
}


