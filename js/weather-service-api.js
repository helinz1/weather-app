const baseApiUrl = 'https://weather-service-vbnet.azurewebsites.net/api/';

export const fetchWeatherData = async () => {
    try {
        console.log('Attempting data fetch');
        const response = await fetch(`${baseApiUrl}/currentweather`);

        if (response.ok) {
            const data = await response.json();
            console.log(`Successful response:\n${JSON.stringify(data)}`);
            return data;
        } else {
            console.error(`Response returned an error.\nStatus: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error fetching data:\n${error}`);
    }
};

export const fetchWeatherDataByGeolocation = async (geolocation) => {
    try {
        console.log(`Attempting data fetch with:\n${geolocation}`);

        const response = await fetch(`${baseApiUrl}/currentweather/${geolocation}`);

        if (response.ok) {
            const data = await response.json();
            console.log(`Successful response:\n${JSON.stringify(data)}`);
            return data;
        } else {
            console.error(`Response returned an error.\nStatus: ${response.status}`);
        }
    } catch (error) {
        console.error(`Error fetching data:\n${error}`);
    }
};