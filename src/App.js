import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from './components/Weather';
require('dotenv').config();
class App extends Component {
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
    const data = await api_call.json();
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
