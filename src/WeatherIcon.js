import React from "react";
import "./Weather.css";

export default function WeatherIcon(props) {
let imgUrl = `http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${props.code}.png`;

    return (
        <img className="main-img" src={imgUrl} alt=""/>
    );
}