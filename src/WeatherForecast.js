import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";



export default function WeatherForecast(props) {

let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);



function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
};


if(loaded) {

return (
    <div className="WeatherForecast">
        <div className="row">
            <div className="col-2">
                <WeatherForecastDay data={forecast[0]}/>
            </div>

        </div>
        </div>
    )


} else {
    let apiKey = "314125440fob3972366037ae47190c2t";
let query = props.data.city;
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${query}&key=${apiKey}&unit=metric`;

axios.get(apiUrl).then(handleResponse);
return null;
}
}