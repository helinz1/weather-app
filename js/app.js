import * as WeatherServiceApi from './weather-service-api.js';

// ------ Select elements ------
const bodyElement = document.getElementsByTagName('body')[0];

const el = id => document.getElementById(id);
const headlineElement = el('headline');
const humidityElement = el('humidity');
const temperatureElement = el('temperature');
const windElement = el('wind');

const searchbarElement = document.getElementById('searchbar');
const searchbarInputElement = document.getElementById('searchbar-input');

// ------ Select style classes ------
const backgroundImageClasses = {
    default: 'weather-default-img',
    sunny: 'weather-sunny-img',
    cloudy: 'weather-cloudy-img',
    rainy: 'weather-rainy-img',
    snowy: 'weather-snowy-img'
};

const handleBackgroundImage = (weatherCondition) => {
    weatherCondition = weatherCondition.toLowerCase();

    if (backgroundImageClasses.hasOwnProperty(weatherCondition)) {
        bodyElement.className = backgroundImageClasses[weatherCondition];
    } else {
        bodyElement.className = backgroundImageClasses['default'];
    }
};

const updateUi = (data) => {
    let geolocationArray = [];

    if (data.Geolocation.City != null) {
        geolocationArray.push(data.Geolocation.City);
    }
    if (data.Geolocation.Region != null) {
        geolocationArray.push(data.Geolocation.Region);
    }
    if (data.Geolocation.Country != null) {
        geolocationArray.push(data.Geolocation.Country);
    }

    let geolocation = geolocationArray.join(", ");

    if (geolocation === "") {
        geolocation = "Unknown location";
    }

    headlineElement.innerText = `${data.Condition || 'Unknown condition'} now in\n${geolocation}`;

    temperatureElement.innerText = `Temperature:\n${data.TemperatureC || 'N/A'} °C / ${data.TemperatureF || 'N/A'} °F`;

    humidityElement.innerText = `Humidity:\n${data.Humidity != null ? data.Humidity : 'N/A'}%`;

    windElement.innerText = `Wind:\n${data.WindKph || 'N/A'} KPH / ${data.WindMph || 'N/A'} MPH`;

    handleBackgroundImage(data.Condition);
};

searchbarElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const weatherData = await WeatherServiceApi.fetchWeatherDataByGeolocation(searchbarInputElement.value);
    updateUi(weatherData);

    searchbarElement.reset();
});

window.onload = async () => {
    const weatherData = await WeatherServiceApi.fetchWeatherData();
    updateUi(weatherData);
};