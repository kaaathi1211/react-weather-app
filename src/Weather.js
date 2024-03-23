import React, { useState } from "react";
import WeatherInfo from "./Weatherinfo";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";
import WeatherIcon from "./WeatherIcon"
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      precipitation: 20,
      humidity: response.data.main.humidity,
    });
  }

function handleSubmit(event){
  event.preventDefault();
  search();
}

function search(){
  const apiKey = "515c9ddbeb3cda9061acfab71031839e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
}

function handleCityChange(event){
setCity(event.target.value);
  }

if (weatherData.ready) {
  return (
    <div className="Weather">
      <h1>Your Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city.."
              className="form-control"
              autoFocus="on"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-6">
          <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates}/>
    </div>
  );
} else {
  search();
  return "Loading...";
}
}