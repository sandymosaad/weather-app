# 🌦️ Weather App - Angular Project

## 👩‍💻 Developed by:
  **Sandy Mosaad**

## 📄 Project Description

Weather App is a simple and clean Angular application that allows users to search for the current weather in any city worldwide using the OpenWeatherMap API.  
It’s built with Angular, Bootstrap, and Font Awesome for a responsive and modern user experience.

---

## ⚙️ Technologies Used

- Angular 17+
- Bootstrap 5
- Font Awesome
- TypeScript / HTML / CSS
- OpenWeatherMap API
- Git & GitHub

---

## 📁 Project Structure & Pages

### `/home` – Home Page
- Welcome message for users.
- Brief description of the app.
- Button to navigate to the Search page.

### `/search` – Search Page
- Input field to enter the city name.
- "Search" button to fetch weather data from the API.
- Weather information displayed:
  - City name
  - Temperature (°C)
  - Weather description
  - Weather icon
  - Humidity and wind speed
- Option to navigate to detailed weather view.

### `/weather/:city` – Weather Details Page
- Detailed view of weather for the selected city.
- Additional data:
  - Humidity, pressure, wind speed
  - (Optionally) forecast for upcoming days
- Button to go back or add to favorites.

### `/favorites` – Favorites Page *(Optional)*
- List of saved favorite cities.
- Option to view or remove cities.

### `**` – Not Found Page
- Error message for undefined routes.
- Button to return to the homepage.

---

## 🔌 OpenWeatherMap API

### Example API Call:
[https://api.openweathermap.org/data/2.5/weather?q=London\&appid=YOUR\_API\_KEY\&units=metric](https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric)

### Used Data:
- `main.temp` → Temperature
- `weather[0].description` → Weather description
- `weather[0].icon` → Weather icon
- `main.humidity` → Humidity
- `wind.speed` → Wind speed

---

## 🧠 Features

- Clean and responsive UI with Bootstrap
- Angular routing for page navigation
- API integration with service handling
- Component-based structure
- Ready for future extensions

---

## 🚀 How to Run the Project

1. Clone the repository:

git clone https://github.com/USERNAME/weather-app.git
cd weather-app

2. Install dependencies:
npm install

3. Run the development server:
ng serve

4. Open in your browser:
http://localhost:4200

## 📌 Future Enhancements (Optional)

* Weekly forecast charts
* User authentication
* Arabic/English language support
* City search auto-suggestions
* Dark mode UI

## ✅ License

This project is licensed under the [MIT License](LICENSE).
