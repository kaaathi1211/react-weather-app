import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
     <div className="App">
      <div className="container">
      <Weather defaultCity="Sydney"/>
     <footer>
      This app was coded by{" "}
      <a href="https://www.uxdesignbykk.com/" target="_blank" rel="noopener noreferrer">Katharina Krotke</a>
      {" "}and is{" "}
      <a href="https://github.com/kaaathi1211/react-weather-app" target="_blank" rel="noopener noreferrer">open-sourced on GitHub.</a>
      </footer>
      </div>
      </div>
  );
}
