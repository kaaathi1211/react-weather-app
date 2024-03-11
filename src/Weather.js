import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <h1>Your Weather Forecast</h1>
      <form>
        <div className="row">
          <div className="col-6">
            <input type="search" className="form-control" placeholder="Enter a city..." />
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary">SEARCH</button>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <h4>Sydney</h4>
          <h3>30°C</h3>
          <ul className="date">
            <li>Friday 8:00</li>
            <li>Mostly cloudy</li>
          </ul>
        </div>
        <div className="col-6">
          <ul>
            <li lassName="conditions">Humidity: 60%</li>
            <li lassName="conditions">Precipitation: 10%</li>
            <li lassName="conditions">Wind: 20km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
