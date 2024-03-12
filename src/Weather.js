import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <div className="row">
        <div className="col-6">
          <h4>Sydney</h4>
          
          <span className="temperature">30</span>
          <span className="units">°C</span>
          </div>
          

          <div className="d-flex flex-column">
          <ul className="date">
            <li>Friday 8:00</li>
            <li>Mostly cloudy</li>
          </ul>
          </div>
        
        <div className="d-flex flex-column">
          <ul className="conditions">
            <li>Humidity: 60%</li>
            <li>Precipitation: 10%</li>
            <li>Wind: 20km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
