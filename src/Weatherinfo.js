import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon"
import "./Weather.css";


export default function Weatherinfo(props){
    return (
        <div className="Weatherinfo">
            <div className="row">
            <h4>{props.data.city}</h4>
                <div className="col-6 d-flex">
                    
                    <WeatherTemperature celsius={props.data.temperature}/>
                <WeatherIcon 
                code={props.data.icon} 
                size={87}
                className="weather-icon"
            
                />
                </div>
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
                        <li>Wind: {Math.round(props.data.wind)}km/h</li>
                    </ul>
                </div>
            </div>
        </div>
    );
    }