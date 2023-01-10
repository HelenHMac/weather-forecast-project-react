import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.city);

function handleResponse(response) {
    console.log(response.data)
   
    setWeatherData({
        ready: true,
        temperature: Math.round(response.data.temperature.current),
        city: response.data.city,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.temperature.humidity,
        description: response.data.condition.description,
        icon: response.data.condition.icon, 
        date: new Date(response.data.time * 1000)
    });
}

function search() {
    const apiKey= "314125440fob3972366037ae47190c2t";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
    event.preventDefault();
search();
}

function handleCityChange(event) {
    setCity(event.target.value);

}

if (weatherData.ready) {
    return (
        <div className="Weather">
              <h1 className="app-header">Weather Forecast App</h1>
              <form onSubmit={handleSubmit} className="mb-3">
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoComplete="off"
                    autoFocus="on"
                    onChange={handleCityChange}
                  />
                </div>
                <div className="col-4">
                  <input type="submit" value="Search" className="main-button" />
                </div>
              </div>
            </form>

            <WeatherInfo data={weatherData}/>
            <WeatherForecast data={weatherData}/> 
        </div>
        )
} else {
    search();
    return "Loading...";   
}

}