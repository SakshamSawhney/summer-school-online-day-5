==========================
🌦️ WEATHER CHROME EXTENSION
==========================

This Chrome Extension fetches and displays the current weather based on your real-time location using the OpenWeatherMap API.

--------------------------
📦 FEATURES
--------------------------
- Uses your current geolocation
- Fetches real-time weather data
- Shows city name, temperature, and condition
- Displays a weather icon
- Shows error messages if location or weather data can't be fetched

--------------------------
📁 FOLDER STRUCTURE
--------------------------
weather-extension/
├── manifest.json         - Extension configuration
├── popup.html            - User interface
├── popup.js              - JavaScript logic
├── styles.css            - CSS styling
└── icons/
    └── icon.png          - Extension icon (16x16, 48x48, 128x128)

--------------------------
🔧 SETUP INSTRUCTIONS
--------------------------
1. Get a free API key from OpenWeatherMap:
   - https://openweathermap.org/api
   - Create an account and get your API key
   - Open 'popup.js' and replace 'YOUR_API_KEY' with your key:
     const apiKey = 'YOUR_API_KEY';

2. Load the Extension in Chrome:
   - Open Chrome and go to chrome://extensions/
   - Enable 'Developer Mode' (top right)
   - Click 'Load Unpacked'
   - Select the 'weather-extension' folder

3. Click the extension icon in the Chrome toolbar to test it.

--------------------------
🛠️ PERMISSIONS USED
--------------------------
- "geolocation": To detect your current location
- "host_permissions": ["https://api.openweathermap.org/"]

--------------------------
🌐 API EXAMPLE
--------------------------
https://api.openweathermap.org/data/2.5/weather?lat={LAT}&lon={LON}&units=metric&appid={API_KEY}

--------------------------
🧪 BONUS IDEAS
--------------------------
- Add °C / °F toggle switch
- Save previous weather using localStorage
- Show a loading spinner while fetching
- Use custom icons based on weather conditions

--------------------------
👤 AUTHOR
--------------------------
Bhargav Gupta

