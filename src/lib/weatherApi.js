export async function getWeather(city) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return response.json();
}


// export async function getForecast(city) {
//   const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;
//   console.log(apiKey);
//   const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error("Failed to fetch forecast data");
//   }
//   return response.json();
// }


// lib/weatherApi.js
export async function getForecast(location) {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY;

  // 1️⃣ Get coordinates from location
  const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=1&appid=${apiKey}`;
  const geoResponse = await fetch(geoUrl);
  if (!geoResponse.ok) throw new Error("Failed to fetch location coordinates");
  const geoData = await geoResponse.json();
  if (!geoData.length) throw new Error("Location not found");

  const { lat, lon, name, state, country } = geoData[0];

  // 2️⃣ Get forecast using coordinates
  const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  const weatherResponse = await fetch(weatherUrl);
  if (!weatherResponse.ok) throw new Error("Failed to fetch forecast data");
  const weatherData = await weatherResponse.json();

  return {
    location: { name, state, country },
    weather: weatherData,
  };
}
