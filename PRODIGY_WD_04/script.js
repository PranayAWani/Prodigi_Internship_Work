document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = 'd5df2f20baa7572bf71c9b1c6dc8240f'; 
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('cityName').textContent = data.name;
            document.getElementById('description').textContent = `Weather: ${data.weather[0].description}`;
            document.getElementById('temperature').textContent = `Temperature: ${data.main.temp} °C`;
            document.getElementById('humidity').textContent = `Humidity: ${data.main.humidity}%`;
            document.getElementById('windSpeed').textContent = `Wind Speed: ${data.wind.speed} m/s`;
            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            alert('Error fetching weather data: ' + error.message);
            console.error('Error fetching weather data:', error);
        });
});
