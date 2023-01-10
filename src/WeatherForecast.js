import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";


export default function WeatherForecast(props) {

function handleResponse(response) {
    console.log(response.data);
}

let apiKey = "314125440fob3972366037ae47190c2t";
let query = props.data.city;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&unit=metric`;

axios.get(apiUrl).then(handleResponse);

    return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col-2">
            <div className="forecast-day">Tue</div>
            <div className="forecast-img"><WeatherIcon code={props.code}/></div>
            <div>
                <span className="forecast-max-temp">19° </span>
                <span className="forecast-min-temp">6°</span>
            </div>
            </div>

        </div>
        </div>
    )
}