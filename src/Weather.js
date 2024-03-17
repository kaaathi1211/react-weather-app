import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./Weatherinfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  function handleResponse(response){
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date (response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://www.google.com/imgres?imgurl=https%3A%2F%2Fstatic.vecteezy.com%2Fsystem%2Fresources%2Fpreviews%2F015%2F876%2F346%2Foriginal%2Fweather-icon-in-flat-style-sun-cloud-and-rain-illustration-on-white-isolated-background-meteorology-sign-business-concept-vector.jpg&tbnid=2bicBLEGUsCneM&vet=12ahUKEwiZzci80PqEAxV-g2MGHQxfCkMQMygAegQIARBx..i&imgrefurl=https%3A%2F%2Fwww.vecteezy.com%2Fvector-art%2F15876346-weather-icon-in-flat-style-sun-cloud-and-rain-vector-illustration-on-white-isolated-background-meteorology-sign-business-concept&docid=y_R5a4iX323kZM&w=1920&h=1920&q=weather%20icon&ved=2ahUKEwiZzci80PqEAxV-g2MGHQxfCkMQMygAegQIARBx",
      wind: response.data.wind.speed,
      precipitation: 20,
      humidity: response.data.main.humidity,
    });
  }  
  
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <h1>Your Weather Forecast</h1>
        <form>
          <div className="row">
            <div className="col-6">
              <input type="search" className="form-control" placeholder="Enter a city..." autoFocus="on" />
            </div>
            <div className="col-6">
              <button type="submit" className="btn btn-primary">SEARCH</button>
            </div>
          </div>
        </form>
        <WeatherInfo />
        <div className="row">
          <div className="col-6">
            <h4>{weatherData.city}</h4>
            
            <span className="temperature">{Math.round(weatherData.temperature)}</span>
            <span className="unit">°C</span>
            </div>
            
           <img
           src={weatherData.iconUrl}
           alt={weatherData.description}
           className="float-left"
           />

            <div className="d-flex flex-column">
            <ul className="date">
              <li>
                <FormattedDate date={weatherData.date} />
              </li>
              <li className="text-capitalize">{weatherData.description}</li>
            </ul>
            </div>
          
          <div className="d-flex flex-column">
            <ul className="conditions">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Precipitation: {weatherData.precipitation}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  else {
    const apiKey = "515c9ddbeb3cda9061acfab71031839e";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity},uk&APPID=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }

}
