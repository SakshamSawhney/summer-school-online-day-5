document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const output = document.getElementById('weatherResult');
  output.innerHTML = 'Loading...';

  if (!navigator.geolocation) {
    output.innerHTML = 'Geolocation is not supported by your browser.';
    return;
  }

  navigator.geolocation.getCurrentPosition(success, error);

  function success(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const apiKey = 'YOUR_API_KEY'; // 🔑 Replace with your OpenWeatherMap key
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    fetch(url)
      .then(response => {
        if (!response.ok) throw new Error('API error');
        return response.json();
      })
      .then(data => {
  const city = data.name;
  const temp = data.main.temp;
  const condition = data.weather[0].main;
  const iconCode = data.weather[0].icon; // e.g. "01d", "04n", etc.
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

  output.innerHTML = `
    <strong>${city}</strong><br>
    <img src="${iconUrl}" alt="${condition}" width="60"><br>
    🌡️ Temperature:- ${temp}°C<br>
     Condition :- ${condition}
  `;
})

      .catch(() => {
        output.innerHTML = 'Failed to fetch weather data.';
      });
  }

  function error() {
    output.innerHTML = 'Location access denied.';
  }
});
