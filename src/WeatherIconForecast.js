import React from "react";
import "./WeatherForecast.css";

export default function WeatherIconForecast(props) {
let imgUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`;

    return (
        <img className="forecast-img" src={imgUrl} alt=""/>
    );
}