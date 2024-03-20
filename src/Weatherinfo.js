import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function Weatherinfo(props){
    return (
        <div className="Weatherinfo">
            <div className="row">
                <div className="col-6">
                    <h4>{props.data.city}</h4>
                    <WeatherTemperature celsius={props.data.temperature}/>
                </div>
                <img
                    src={props.data.iconUrl}
                    alt={props.data.description}
                    className="weather-icon"
                />
                <div className="d-flex flex-column">
                    <ul className="date">
                        <li>
                            <FormattedDate date={props.data.date} />
                        </li>
                        <li className="text-capitalize">{props.data.description}</li>
                    </ul>
                </div>
                <div className="d-flex flex-column">
                    <ul className="conditions">
                        <li>Humidity: {props.data.humidity}%</li>
                        <li>Precipitation: {props.data.precipitation}%</li>
                        <li>Wind: {props.data.wind}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    }