// Geolocation elements
const cityElement = document.getElementById('city');
const regionElement = document.getElementById('region');
const countryElement = document.getElementById('country');

let clientIpAddress;
let geolocation;

let currentBackgroundImage = document.getElementsByTagName('main')[0].classList[0];
const backgroundImageClasses = {
    sunny: 'weather-sunny-img',
    cloudy: 'weather-cloudy-img',
    rainy: 'weather-rainy-img',
    snowy: 'weather-snowy-img'
};

// Weather elements
const temperatureElement = document.getElementById('temperature');

// Get client IP address
window.onload = () => {
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => {
            console.log(`Client IP Address: ${data.ip}`);
            clientIpAddress = data.ip;

            try {
                getGeolocation(clientIpAddress)
                    .then(data => {
                        console.log(`Geolocation: ${data.data.city}, ${data.data.region}, ${data.data.country}`);
                        setGeolocation(data.data);

                        // TESTING
                        setWeatherDetails();

                    })
                    .catch(error => console.error('Error getting geolocation:', error));
            }
            catch (error) {
                console.error('Error getting geolocation:', error);
            }
        })
        .catch(error => console.error('Error fetching IP address:', error));
};

// API Post request to get geolocation
const getGeolocation = async (clientIpAddress) => {
    const response = await fetch('http://127.0.0.1:8000/api/geolocation', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ip_address: clientIpAddress
        })
    });

    if (!response.ok) {
        throw new Error(`Error getting geolocation: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
};

// Set geolocation on page
const setGeolocation = (geolocation) => {
    cityElement.innerText = geolocation.city;
    regionElement.innerText = geolocation.region;
    countryElement.innerText = geolocation.country;
};


// TESTING
// Set weather details on page
const setWeatherDetails = () => {
    temperatureElement.innerText = '20 °C / 68 °F';
};


const handleBackgroundImage = (weatherConditions) => {
    if (weatherConditions === 'sunny') {
        currentBackgroundImage = backgroundImageClasses.sunny;
    };

    if (weatherConditions === 'cloudy') {
        currentBackgroundImage = backgroundImageClasses.cloudy;
    };

    if (weatherConditions === 'rainy') {
        currentBackgroundImage = backgroundImageClasses.rainy;
    };

    if (weatherConditions === 'snowy') {
        currentBackgroundImage = backgroundImageClasses.snowy;
    };
    document.getElementsByTagName('main')[0].className = currentBackgroundImage;
};