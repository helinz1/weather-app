const apiUrl = 'https://weather-service-vbnet.azurewebsites.net/api/currentweather';

const fetchWeatherDataFromGet = async () => {
    try {
        const response = await fetch(apiUrl);
        return await response.json();
    } catch (error) {
        console.error('Error fetching API Response:', error);
    }

    try {
        console.log('Attempting data fetch');
        const response = await fetch(apiUrl);

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

const fetchWeatherDataFromPost = async (geolocation) => {
    try {
        console.log(`Attempting data fetch with:\n${geolocation}`);
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ Geolocation: geolocation }),
        });

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

export { fetchWeatherDataFromGet, fetchWeatherDataFromPost };