import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col-2">
            <div className="forecast-day">Tue</div>
            <div className="forecast-img"><WeatherIcon code="01d" size={36}/></div>
            <div>
                <span className="forecast-max-temp">19° </span>
                <span className="forecast-min-temp">6°</span>
            </div>
            </div>

        </div>
        </div>
    )
}