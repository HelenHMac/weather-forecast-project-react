import React from "react";
import "./Weather.css";

export default function Weather() {
return (
    <div className="Weather">
          <h1 className="app-header">Weather Forecast App</h1>
          <form action="" className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Enter a city"
                class="form-control"
                autocomplete="off"
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
                <li className="main-city">New York</li>
                <li className="main-description">
                  Wednesday, cloudy
                </li>
                <li className="main-description">
                  Humidity: 75%, Wind: 5km/h
                </li>
              </ul>
              </div>
              <div className="col-5">
              <span>
                <strong className="main-temperature">
                 5
                </strong>
                <span className="main-degree">°C | F </span>
              </span>
              <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png" alt="" className="main-img" />
              </div>
        </div>
    </div>
    )
}