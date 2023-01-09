import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div>
        <div className="row">
                <div className="col-7">
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
                  <div className="col-5">
                  <span>
                    <strong className="main-temperature">
                     {props.data.temperature}
                    </strong>
                    <span className="main-degree">°C | F </span>
                  </span>
                  <span className="main-img"><WeatherIcon code={props.data.icon}/></span>
                  </div>
            </div>
            </div>
    );
}