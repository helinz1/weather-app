window.onload = () => {
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => console.log(`Client IP Address: ${data.ip}`))
        .catch(error => console.error('Error fetching IP address:', error));
};


let currentBackgroundImage = document.getElementsByTagName('main')[0].classList[0];

const backgroundImageClasses = {
    sunny: 'weather-sunny-img', 
    cloudy: 'weather-cloudy-img', 
    rainy: 'weather-rainy-img',
    snowy: 'weather-snowy-img'
};



// Example logging 
// let weatherConditions = 'snowy';


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