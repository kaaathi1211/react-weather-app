import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props){
    return (
    <div className="WeatherInfo">
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
          <FormattedDate date={props.data.date} />
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
  </div>);
}