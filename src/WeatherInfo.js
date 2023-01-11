import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div>
        <div className="row mb-4">
                <div className="col-8">
                 <ul className="listnone">
                    <li className="main-city">{props.data.city}</li>
                    <li className="main-description">
                    <FormattedDate date={props.data.date} />, {props.data.description}
                    </li>
                    <li className="main-description">
                      Humidity: {props.data.humidity}%, Wind: {props.data.wind} km/h
                    </li>
                  </ul>
                  </div>
                  <div className="col-4 d-md-inline-flex justify-content-between">
                  <span className="main-temperature">
                    {Math.round(props.data.temperature)}<span className="main-degree">°C</span>
                  </span>
                  <span><WeatherIcon code={props.data.icon}/></span>
                  </div>
            </div>
            </div>
    );
}