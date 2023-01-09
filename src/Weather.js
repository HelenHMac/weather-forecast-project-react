import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });
const [city, setCity] = useState(props.city);

function handleResponse(response) {
    console.log(response.data)
   
    setWeatherData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon, 
        date: new Date(response.data.dt * 1000)
    });
}

function search() {
    const apiKey= "1cd867032850bf64004956a8b5f6023a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

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
        </div>
        )
} else {
    search();
    return "Loading...";   
}

}