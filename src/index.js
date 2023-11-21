function formateDate(date){
    let hours = date.getHourse();
    let minutes = date.getMinutes();
    let day = days[date.getDay()];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    return `${day} ${hours} ${minutes}`;
}

function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#weather-app-city");
    cityElement.innerHTML = searchInput.value;
    searchCity(searchInput.value);
}

function searchCity(city){
    let apiKey = "dc0f5o3ab47902302a4t6c2308650943";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(updateWeatherInfo);
}

function updateWeatherInfo(response) {
    let refreshTemperature = document.querySelector("#city-temperature");
    let refreshHumidity = document.querySelector("#city-humidity");
    let refreshWind = document.querySelector("#city-wind");
    let updateDescription = document.querySelector("#description");
    let updateTime = document.querySelector("#time");
    let date = new Date (response.data.time * 1000);
    refreshTemperature.innerHTML = response.data.temperature.current;
    refreshHumidity.innerHTML = `${response.data.temperature.humidity}%`;
    refreshWind.innerHTML = `${response.data.wind.speed} km/h`;
    updateDescription.innerHTML = response.data.condition.description;
    updateTime.innerHTML = formateDate(date);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

