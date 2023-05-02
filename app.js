window.onload = () => {
    fetch('https://api.ipify.org/?format=json')
        .then(response => response.json())
        .then(data => console.log(`Client IP Address: ${data.ip}`))
        .catch(error => console.error('Error fetching IP address:', error));
};