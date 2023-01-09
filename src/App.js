
import React from "react";
import './App.css';
import Weather from "./Weather"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather city="New York"/>
      <footer>
      This Project was created by <a href="https://luminous-kelpie-26467d.netlify.app" target="_blank" rel="noreferrer"> Olena Honcharova </a> and is {" "}
      <a href="https://github.com/HelenHMac/weather-forecast-project-react" target="_blank" rel="noreferrer">
        open-sourced on GitHub
      </a>
      </footer>
      </div>
    </div>
  );
}