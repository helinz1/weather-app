import { fetchWeatherDataFromGet, fetchWeatherDataFromPost } from './api.js';

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
    headlineElement.innerText = `${data.Condition} now in\n${data.Geolocation}`;
    temperatureElement.innerText = `Temperature:\n${data.TemperatureC} °C / ${data.TemperatureF} °F`;
    humidityElement.innerText = `Humidity:\n${data.Humidity}%`
    windElement.innerText = `Wind:\n${data.WindKph} KPH / ${data.WindMph} MPH`
    handleBackgroundImage(data.Condition);
};

searchbarElement.addEventListener('submit', async (event) => {
    event.preventDefault();

    const weatherData = await fetchWeatherDataFromPost(searchbarInputElement.value);
    updateUi(weatherData);

    searchbarElement.reset();
});

window.onload = async () => {
    const weatherData = await fetchWeatherDataFromGet();
    updateUi(weatherData);
};