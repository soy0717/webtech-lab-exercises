// API key for OpenWeatherMap
const apiKey = 'api_key';

// Trigger weather fetch on enter
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    getWeather();
  }
}

function showMoreInfo(type) {
  const messages = {
    feels: 'This is how the temperature actually feels on your skin!',
    humidity: 'Humidity affects how comfortable you feel in the weather.',
    wind: 'Wind speed can make temperatures feel cooler or warmer.'
  };
  alert(messages[type]);
}

// Main function to fetch and display weather and forecast data
async function getWeather() {
  // Get city input value and relevant DOM elements
  const city = document.getElementById('cityInput').value.trim();
  const weatherWrapper = document.getElementById('weatherWrapper');
  const forecastWrapper = document.getElementById('forecastWrapper');
  const error = document.getElementById('error');

  if (!city) return;

  // Encode city name for URL usage
  const query = encodeURIComponent(city);

  // URLs for current weather and forecast API calls
  const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${apiKey}`;
  const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apiKey}`;

  try {
    // Fetch current weather data from API
    const currentResponse = await fetch(currentWeatherUrl);
    const currentData = await currentResponse.json();

    if (currentData.cod === '404') {
      throw new Error('City not found');
    }
    if (currentData.cod === 401) {
      throw new Error('Invalid API key');
    }

    // Update UI with current weather info
    document.getElementById('cityName').textContent = `${currentData.name}, ${currentData.sys.country}`;
    document.getElementById('temp').textContent = `${Math.round(currentData.main.temp)}°C`;
    document.getElementById('description').textContent = currentData.weather[0].description;
    document.getElementById('feelsLike').textContent = `${Math.round(currentData.main.feels_like)}°C`;
    document.getElementById('humidity').textContent = `${currentData.main.humidity}%`;
    document.getElementById('wind').textContent = `${Math.round(currentData.wind.speed)} km/h`;

    const icon = currentData.weather[0].icon;
    const weatherMain = currentData.weather[0].main.toLowerCase();

    document.getElementById('weatherIcon').src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    document.getElementById('weatherIcon').classList.add('animate-icon');

    weatherWrapper.className = 'weather-wrapper';
    const weatherCard = weatherWrapper.querySelector('.weather-card');
    weatherCard.className = 'weather-card';

    // Apply weather condition's background class
    if (weatherMain.includes('clear')) weatherCard.classList.add('clear');
    else if (weatherMain.includes('rain')) weatherCard.classList.add('rain');
    else if (weatherMain.includes('drizzle')) weatherCard.classList.add('drizzle');
    else if (weatherMain.includes('thunderstorm')) weatherCard.classList.add('thunderstorm');
    else if (weatherMain.includes('snow')) weatherCard.classList.add('snow');
    else if (weatherMain.includes('mist')) weatherCard.classList.add('mist');
    else if (weatherMain.includes('fog')) weatherCard.classList.add('fog');
    else if (weatherMain.includes('haze')) weatherCard.classList.add('haze');
    else if (weatherMain.includes('cloud')) weatherCard.classList.add('clouds');
    else weatherCard.classList.add('clear');

    // Fetch 5-day forecast data from API
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    // Display the forecast on the page
    displayForecast(forecastData);

    weatherWrapper.classList.remove('hidden');
    forecastWrapper.classList.remove('hidden');
    error.classList.add('hidden');

  } catch (err) {
    weatherWrapper.classList.add('hidden');
    forecastWrapper.classList.add('hidden');
    error.classList.remove('hidden');
    error.textContent = `${err.message}`;
    console.error(err);
  }
}

// Function to display 7 day forecast data 
function displayForecast(data) {
  const forecastContainer = document.getElementById('forecastContainer');
  forecastContainer.innerHTML = ''; // Clear previous forecast

  const dailyForecasts = {};
  data.list.forEach(item => {
    const date = new Date(item.dt * 1000);
    const day = date.toDateString();

    if (!dailyForecasts[day]) {
      dailyForecasts[day] = {
        date: date,
        temps: [],
        weather: item.weather[0],
        icon: item.weather[0].icon
      };
    }

    dailyForecasts[day].temps.push(item.main.temp);
  });

  // Display 7 days of forecast
  const days = Object.keys(dailyForecasts).slice(0, 7);

  days.forEach(day => {
    const forecast = dailyForecasts[day];
    const maxTemp = Math.round(Math.max(...forecast.temps));
    const minTemp = Math.round(Math.min(...forecast.temps));

    const dayName = forecast.date.toLocaleDateString('en-US', { weekday: 'short' });
    const monthDay = forecast.date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    // Fforecast card element with weather info and icon
    const forecastItem = document.createElement('div');
    forecastItem.className = 'forecast-item';
    forecastItem.innerHTML = `
      <div class="forecast-day">${dayName}<br>${monthDay}</div>
      <img class="forecast-icon" src="https://openweathermap.org/img/wn/${forecast.icon}@2x.png" alt="Weather">
      <div class="forecast-temps">
        <span class="forecast-high">${maxTemp}°</span> / <span class="forecast-low">${minTemp}°</span>
      </div>
      <div class="forecast-desc">${forecast.weather.description}</div>
    `;
    forecastContainer.appendChild(forecastItem);
  });
}