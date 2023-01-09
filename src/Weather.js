import React, {useState} from "react";
import "./Weather.css";
import axios from "axios";
import FormattedDate from "./FormattedDate"

export default function Weather(props) {
const [weatherData, setWeatherData] = useState({ ready: false });


function handleResponse(response) {
    console.log(response.data)
   
    setWeatherData({
        ready: true,
        temperature: Math.round(response.data.main.temp),
        city: response.data.name,
        wind: Math.round(response.data.wind.speed),
        humidity: response.data.main.humidity,
        description: response.data.weather[0].description,
        icon: "https://ssl.gstatic.com/onebox/weather/64/sunny.png", 
        date: new Date(response.data.dt * 1000)
    });
}

if (weatherData.ready) {
    return (
        <div className="Weather">
              <h1 className="app-header">Weather Forecast App</h1>
              <form action="" className="mb-3">
              <div className="row">
                <div className="col-8">
                  <input
                    type="search"
                    placeholder="Enter a city"
                    className="form-control"
                    autoComplete="off"
                    autoFocus="on"
                  />
                </div>
                <div className="col-4">
                  <input type="submit" value="Search" className="btn main-button" />
                </div>
              </div>
            </form>
    
            <div className="row">
                <div className="col-7">
                 <ul className="listnone">
                    <li className="main-city">{weatherData.city}</li>
                    <li className="main-description">
                    <FormattedDate date={weatherData.date} />, {weatherData.description}
                    </li>
                    <li className="main-description">
                      Humidity: {weatherData.humidity}%, Wind: {weatherData.wind} km/h
                    </li>
                  </ul>
                  </div>
                  <div className="col-5">
                  <span>
                    <strong className="main-temperature">
                     {weatherData.temperature}
                    </strong>
                    <span className="main-degree">°C | F </span>
                  </span>
                  <img src={weatherData.icon} alt={weatherData.description} className="main-img" />
                  </div>
            </div>
        </div>
        )
} else {
    const apiKey= "1cd867032850bf64004956a8b5f6023a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading...";   
}

}