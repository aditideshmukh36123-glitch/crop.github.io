/*document.addEventListener("DOMContentLoaded", () => {
    const weatherStatus = document.getElementById('weather-status');
    const weatherResult = document.getElementById('weather-result');
    const weatherForm = document.getElementById('weather-form');
    const locationInput = document.getElementById('location');
    const manualBtn = document.getElementById('manual-btn');
    const flipCard = document.getElementById('weather-card');
    const backBtn = document.getElementById('back-btn');
    const predictBtn = document.getElementById('predict-btn');
    const cropSelect = document.getElementById('crop');

    const API_KEY = '7d80b813b8bc7726ce56cba02fb68059';

    // ----------------- Display weather & disease prediction -----------------
    function displayWeather(data) {
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const city = data.name;

        weatherStatus.textContent = `Weather for ${city}`;

        weatherResult.innerHTML = `
            <p><strong>Temperature:</strong> ${temp} °C</p>
            <p><strong>Humidity:</strong> ${humidity} %</p>
            <p><strong>Condition:</strong> ${description}</p>
        `;

        // Save weather data for later (without crop yet)
        localStorage.setItem("weatherData", JSON.stringify({
            city, temp, humidity, description
        }));

        // Show Predict button (only if crop is selected)
        if (cropSelect.value) {
            predictBtn.style.display = "inline-block";
        }
    }

    // ----------------- Fetch weather by coordinates -----------------
    async function getWeatherByCoords(lat, lon) {
        weatherStatus.textContent = "Fetching weather...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                weatherStatus.textContent = "Could not detect weather. Enter city manually.";
            }
        } catch (err) {
            console.error(err);
            weatherStatus.textContent = "Error fetching weather. Enter city manually.";
        } finally {
            manualBtn.style.display = 'inline-block';
        }
    }

    // ----------------- Fetch weather by city -----------------
    async function getWeatherByCity(city) {
        weatherStatus.textContent = "Fetching weather...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod === 200) {
                displayWeather(data);
                flipCard.classList.remove('flipped');
            } else {
                weatherStatus.textContent = "City not found.";
            }
        } catch (err) {
            console.error(err);
            weatherStatus.textContent = "Error fetching weather for city.";
        }
    }

    // ----------------- Auto detect location -----------------
    function detectLocation() {
        if (navigator.geolocation) {
            weatherStatus.textContent = "Detecting your location...";
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    getWeatherByCoords(lat, lon);
                },
                error => {
                    console.warn("Geolocation failed:", error.message);
                    weatherStatus.textContent = "Could not detect location. Enter your city manually.";
                    manualBtn.style.display = 'inline-block';
                },
                { timeout: 15000 }
            );
        } else {
            weatherStatus.textContent = "Geolocation not supported. Enter your city manually.";
            manualBtn.style.display = 'inline-block';
        }
    }

    // ----------------- Flip card manual input -----------------
    manualBtn.addEventListener('click', () => {
        flipCard.classList.add('flipped');
        locationInput.focus();
    });

    backBtn.addEventListener('click', () => flipCard.classList.remove('flipped'));

    weatherForm.addEventListener('submit', e => {
        e.preventDefault();
        const city = locationInput.value.trim();
        if (city) getWeatherByCity(city);
    });

    // ----------------- Crop selection event -----------------
    cropSelect.addEventListener('change', () => {
        const crop = cropSelect.value;
        const weatherData = JSON.parse(localStorage.getItem("weatherData"));

        if (crop && weatherData) {
            // Update localStorage with crop info
            localStorage.setItem("selectedCrop", crop);
            predictBtn.style.display = "inline-block";
        } else {
            predictBtn.style.display = "none";
        }
    });

    // ----------------- Predict Disease button -----------------
    predictBtn.addEventListener('click', () => {
        const crop = cropSelect.value;
        const weatherData = JSON.parse(localStorage.getItem("weatherData"));

        if (!crop || !weatherData) {
            alert("Please select a crop and get weather data first.");
            return;
        }

        let diseaseHtml = "";
        if (typeof predictDiseases === "function") {
            diseaseHtml = predictDiseases(weatherData.temp, weatherData.humidity, weatherData.description, crop);
        }

        // Save final data
        localStorage.setItem("diseasePrediction", JSON.stringify({
            ...weatherData,
            crop,
            diseaseHtml
        }));

        // Redirect to result page
        window.location.href = "diseaseResult.html";
    });

    // ----------------- Initialize -----------------
    detectLocation();
});
*/

/*
document.addEventListener("DOMContentLoaded", () => {
    const weatherStatus = document.getElementById('weather-status');
    const weatherResult = document.getElementById('weather-result');
    const weatherForm = document.getElementById('weather-form');
    const locationInput = document.getElementById('location');
    const manualBtn = document.getElementById('manual-btn');
    const flipCard = document.getElementById('weather-card');
    const backBtn = document.getElementById('back-btn');
    const predictBtn = document.getElementById('predict-btn');
    const cropSelect = document.getElementById('crop');

    const API_KEY = '7d80b813b8bc7726ce56cba02fb68059';

    // ----------------- Display weather -----------------
    function displayWeather(data) {
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const city = data.name;

        weatherStatus.textContent = `Weather for ${city}`;

        weatherResult.innerHTML = `
            <p><strong>Temperature:</strong> ${temp} °C</p>
            <p><strong>Humidity:</strong> ${humidity} %</p>
            <p><strong>Condition:</strong> ${description}</p>
        `;

        // Save weather data for later
        localStorage.setItem("weatherData", JSON.stringify({
            city, temp, humidity, description
        }));

        // Show Predict button if crop already selected
        if (cropSelect.value) {
            predictBtn.style.display = "inline-block";
        }
    }

    // ----------------- Fetch weather by coordinates -----------------
    async function getWeatherByCoords(lat, lon) {
        weatherStatus.textContent = "Fetching weather...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                weatherStatus.textContent = "Could not detect weather. Enter city manually.";
            }
        } catch (err) {
            console.error(err);
            weatherStatus.textContent = "Error fetching weather. Enter city manually.";
        } finally {
            manualBtn.style.display = 'inline-block';
        }
    }

    // ----------------- Fetch weather by city -----------------
    async function getWeatherByCity(city) {
        weatherStatus.textContent = "Fetching weather...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod === 200) {
                displayWeather(data);
                flipCard.classList.remove('flipped');
            } else {
                weatherStatus.textContent = "City not found.";
            }
        } catch (err) {
            console.error(err);
            weatherStatus.textContent = "Error fetching weather for city.";
        }
    }

    // ----------------- Auto detect location -----------------
    function detectLocation() {
        if (navigator.geolocation) {
            weatherStatus.textContent = "Detecting your location...";
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    getWeatherByCoords(lat, lon);
                },
                error => {
                    console.warn("Geolocation failed:", error.message);
                    weatherStatus.textContent = "Could not detect location. Enter your city manually.";
                    manualBtn.style.display = 'inline-block';
                },
                { timeout: 15000 }
            );
        } else {
            weatherStatus.textContent = "Geolocation not supported. Enter your city manually.";
            manualBtn.style.display = 'inline-block';
        }
    }

    // ----------------- Flip card manual input -----------------
    manualBtn.addEventListener('click', () => {
        flipCard.classList.add('flipped');
        locationInput.focus();
    });

    backBtn.addEventListener('click', () => flipCard.classList.remove('flipped'));

    weatherForm.addEventListener('submit', e => {
        e.preventDefault();
        const city = locationInput.value.trim();
        if (city) getWeatherByCity(city);
    });

    // ----------------- Crop selection event -----------------
    cropSelect.addEventListener('change', () => {
        const crop = cropSelect.value;
        const weatherData = JSON.parse(localStorage.getItem("weatherData"));

        if (crop && weatherData) {
            localStorage.setItem("selectedCrop", crop);
            predictBtn.style.display = "inline-block";
        } else {
            predictBtn.style.display = "none";
        }
    });

    // ----------------- Predict Disease button -----------------
    predictBtn.addEventListener('click', () => {
        const crop = cropSelect.value;
        const weatherData = JSON.parse(localStorage.getItem("weatherData"));

        if (!crop || !weatherData) {
            alert("Please select a crop and get weather data first.");
            return;
        }

        // ✅ Predict diseases using weather + crop
        let diseaseHtml = "";
        if (typeof predictDiseases === "function") {
            diseaseHtml = predictDiseases(
                weatherData.temp,
                weatherData.humidity,
                weatherData.description,
                crop
            );
        } else {
            diseaseHtml = `<p>No prediction function found.</p>`;
        }

        // Save final data
        localStorage.setItem("diseasePrediction", JSON.stringify({
            ...weatherData,
            crop,
            diseaseHtml
        }));

        // Redirect to result page
        window.location.href = "diseaseResult.html";
    });

    // ----------------- Initialize -----------------
    detectLocation();
});
*/


document.addEventListener("DOMContentLoaded", () => {
    const weatherStatus = document.getElementById('weather-status');
    const weatherResult = document.getElementById('weather-result');
    const weatherForm = document.getElementById('weather-form');
    const locationInput = document.getElementById('location');
    const manualBtn = document.getElementById('manual-btn');
    const flipCard = document.getElementById('weather-card');
    const backBtn = document.getElementById('back-btn');
    const predictBtn = document.getElementById('predict-btn');
    const cropSelect = document.getElementById('crop');

    const API_KEY = '7d80b813b8bc7726ce56cba02fb68059';

    // ----------------- Display weather -----------------
    function displayWeather(data) {
        const temp = data.main.temp;
        const humidity = data.main.humidity;
        const description = data.weather[0].description;
        const city = data.name;

        weatherStatus.textContent = `Weather for ${city}`;

        weatherResult.innerHTML = `
            <p><strong>Temperature:</strong> ${temp} °C</p>
            <p><strong>Humidity:</strong> ${humidity} %</p>
            <p><strong>Condition:</strong> ${description}</p>
        `;

        // Save weather data
        localStorage.setItem("weatherData", JSON.stringify({ city, temp, humidity, description }));

        // Show Predict button if crop already selected
        if (cropSelect.value) {
            predictBtn.style.display = "inline-block";
        }
    }

    // ----------------- Fetch weather by coordinates -----------------
    async function getWeatherByCoords(lat, lon) {
        weatherStatus.textContent = "Fetching weather...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod === 200) {
                displayWeather(data);
            } else {
                weatherStatus.textContent = "Could not detect weather. Enter city manually.";
            }
        } catch (err) {
            console.error(err);
            weatherStatus.textContent = "Error fetching weather. Enter city manually.";
        } finally {
            manualBtn.style.display = 'inline-block';
        }
    }

    // ----------------- Fetch weather by city -----------------
    async function getWeatherByCity(city) {
        weatherStatus.textContent = "Fetching weather...";
        try {
            const res = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
            );
            const data = await res.json();
            if (data.cod === 200) {
                displayWeather(data);
                flipCard.classList.remove('flipped');
            } else {
                weatherStatus.textContent = "City not found.";
            }
        } catch (err) {
            console.error(err);
            weatherStatus.textContent = "Error fetching weather for city.";
        }
    }

    // ----------------- Auto detect location -----------------
    function detectLocation() {
        if (navigator.geolocation) {
            weatherStatus.textContent = "Detecting your location...";
            navigator.geolocation.getCurrentPosition(
                position => {
                    const lat = position.coords.latitude;
                    const lon = position.coords.longitude;
                    getWeatherByCoords(lat, lon);
                },
                error => {
                    console.warn("Geolocation failed:", error.message);
                    weatherStatus.textContent = "Could not detect location. Enter your city manually.";
                    manualBtn.style.display = 'inline-block';
                },
                { timeout: 15000 }
            );
        } else {
            weatherStatus.textContent = "Geolocation not supported. Enter your city manually.";
            manualBtn.style.display = 'inline-block';
        }
    }

    // ----------------- Flip card manual input -----------------
    manualBtn.addEventListener('click', () => {
        flipCard.classList.add('flipped');
        locationInput.focus();
    });

    backBtn.addEventListener('click', () => flipCard.classList.remove('flipped'));

    weatherForm.addEventListener('submit', e => {
        e.preventDefault();
        const city = locationInput.value.trim();
        if (city) getWeatherByCity(city);
    });

    // ----------------- Crop selection event -----------------
    cropSelect.addEventListener('change', () => {
        const crop = cropSelect.value;
        const weatherData = JSON.parse(localStorage.getItem("weatherData"));
        if (crop && weatherData) {
            localStorage.setItem("selectedCrop", crop);
            predictBtn.style.display = "inline-block";
        } else {
            predictBtn.style.display = "none";
        }
    });

    // ----------------- Predict Disease button -----------------
    predictBtn.addEventListener('click', () => {
        const crop = cropSelect.value;
        const weatherData = JSON.parse(localStorage.getItem("weatherData"));

        if (!crop || !weatherData) {
            alert("Please select a crop and get weather data first.");
            return;
        }

        // ✅ Predict diseases using weather + crop
        let diseaseHtml = "";
        if (typeof predictDiseases === "function") {
            diseaseHtml = predictDiseases(
                weatherData.temp,
                weatherData.humidity,
                weatherData.description,
                crop // <-- Pass selected crop
            );
        } else {
            diseaseHtml = `<p>No prediction function found.</p>`;
        }

        // Save final data
        localStorage.setItem("diseasePrediction", JSON.stringify({
            ...weatherData,
            crop,
            diseaseHtml
        }));

        // Redirect to result page
        window.location.href = "diseaseResult.html";
    });

    // ----------------- Initialize -----------------
    detectLocation();
});
