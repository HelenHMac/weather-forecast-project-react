import React, { useState } from "react";

export default function WeatherTemperature(props) {

    const [unit, setUnit] = useState("celsius");

function convertToFarenheit(event) {
event.preventDefault();
setUnit("farenheit");
}

function farenheit () {
    return (Math.round((props.celsius * 9) / 5 +32));
}

function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
    }

    if (unit === "celsius") {
    return (
        <span>
            <strong className="main-temperature">
            {props.celsius}
            </strong>

            <span className="main-degree">°C | <a href="/" onClick={convertToFarenheit} className="units">°F </a>
            </span>
            </span>
            );
        } else {
            
            return (
                <span>
                    <strong className="main-temperature">
                    {farenheit()}
                    </strong>
        
                    <span className="main-degree">°<a href="/" onClick={convertToCelsius} className="units">C</a> | °F
                    </span>
                    </span>
                    )
        }
            }