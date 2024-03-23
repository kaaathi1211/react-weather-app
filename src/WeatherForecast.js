import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

function handleResponse(response){
console.log(response.data);
}

export default function WeatherForecast(props) {
    let apiKey = "515c9ddbeb3cda9061acfab71031839e";    
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;
    
    axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <WeatherIcon code="01d" size={36}/>
          <div className="ForecastTemp">
<span className="ForecastMaxTemp">19° |</span>
<span className="ForecastMinTemp">10°</span>
          </div>
          </div>
      </div>
    </div>
  );
}