
function weather() {
    const inputText = document.getElementById('inputText').value;
    const apiKey = 'be41a330c7cde91f3b42dd660d4a3f50';
    const apiBase = 'https://api.openweathermap.org/data/2.5/weather';
    if (inputText == "") {
        alert('invalid address')
    }
    
    const url = `${apiBase}?q=${inputText}&units=metric&appid=${apiKey}`
    fetch(url)
        .then(res => res.json())
        .then(data => {

            const cityname = data.name;
            const cityWeather = data.weather[0].main;
            const temp = data.coord.lat

            document.getElementById('weather').innerText = cityWeather;
            document.getElementById('city').innerText = cityname;
            document.getElementById('temp').innerText = temp;
            if (cityWeather === "Haze") {
                document.getElementById('image').src = "https://openweathermap.org/img/wn/50d@2x.png";
            }
            if (cityWeather === "Rain") {
                document.getElementById('image').src = "https://openweathermap.org/img/wn/10d@2x.png";

            }

            if (cityWeather === "Clouds") {
                document.getElementById('image').src = "https://openweathermap.org/img/wn/04n@2x.png";

            }
            if (cityWeather === "Storm") {
                document.getElementById('image').src = "https://assets.msn.com/bundles/v1/weather/latest/MostlyCloudyDayV2.svg";


            }
            if(cityWeather ==="Clear"){
                document.getElementById('image').src ="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/apple/285/sun-behind-cloud_26c5.png"
            }


        })
}
const search = document.getElementById('search').addEventListener('click', function () {
    // const inputText = document.getElementById('inputText').value;
    // console.log(inputText)
    
    
    weather();

})

