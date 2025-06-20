window.onload = async function getWeather() {
  const city = "Hyderabad";
  const apiKey = "85f331d4601d4cef829e6b0f098011e2";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const weatherResult = document.getElementById("weatherResult");
  weatherResult.innerHTML = "Fetching Hyderabad weather...";

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod !== 200) {
      weatherResult.innerHTML = `<p>❌ Error: ${data.message}</p>`;
      return;
    }

    const html = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p><strong>🌡 Temperature:</strong> ${data.main.temp} °C</p>
      <p><strong>⛅ Condition:</strong> ${data.weather[0].description}</p>
      <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
      <p><strong>💨 Wind Speed:</strong> ${data.wind.speed} m/s</p>
    `;

    weatherResult.innerHTML = html;

  } catch (error) {
    weatherResult.innerHTML = `<p>⚠️ Error fetching weather data</p>`;
    console.error(error);
  }
}
