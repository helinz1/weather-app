const apiUrl = 'https://weather-service-vbnet.azurewebsites.net/api/currentweather';

const el = id => document.getElementById(id);
const headlineElement = el('headline');
const geolocationElement = el('geolocation');
const temperatureElement = el('temperature');
const humidityElement = el('humidity');
const windElement = el('wind');
const mainElement = document.getElementsByTagName('main')[0];

const backgroundImageClasses = {
    sunny: 'weather-sunny-img',
    cloudy: 'weather-cloudy-img',
    rainy: 'weather-rainy-img',
    snowy: 'weather-snowy-img'
};

const headlines = {
    sunny: "It's sunny today",
    cloudy: "It's cloudy today",
    rainy: "It's rainy today",
    snowy: "It's snowy today"
};

const handleBackgroundImage = (weatherCondition) => {
    weatherCondition = weatherCondition.toLowerCase();
    mainElement.className = backgroundImageClasses[weatherCondition];
    headlineElement.innerText = headlines[weatherCondition];
};

const fetchWeatherData = async () => {
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error('Error fetching API Response:', error);
    }
};

const updateUI = (data) => {
    console.log(`API Response: ${JSON.stringify(data)}`);

    geolocationElement.innerText = data.Geolocation;
    temperatureElement.innerText = `${data.TemperatureC} °C / ${data.TemperatureF}  °F`;
    humidityElement.innerText = `Humidity: ${data.Humidity}`
    windElement.innerText = `Wind: ${data.WindKph} KPH / ${data.WindMph} MPH`

    handleBackgroundImage(data.Condition);
};

window.onload = async () => {
    const weatherData = await fetchWeatherData();
    updateUI(weatherData);
};