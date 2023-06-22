# Weather Web App Documentation

A frontend client using HTML, CSS, and JavaScript, interacting with the WeatherService API.

## Pages
<a href="https://ramvilsil.github.io/weather-app-web/app.html">Index</a>

## JavaScript

Uses `fetchWeatherDataFromGet` and `fetchWeatherDataFromPost` from `api.js`. The former gets weather data for the user's location on page load, and the latter is triggered by submitting the search bar form.

## UI Elements

- Search bar: User inputs a location to fetch weather data.
- Display Elements: Show weather condition (`headlineElement`), temperature (`temperatureElement`), humidity (`humidityElement`), and wind speed (`windElement`).

## Functions

- `handleBackgroundImage(weatherCondition)`: Changes the background image based on weather condition.
- `updateUi(data)`: Updates the UI with fetched weather data.