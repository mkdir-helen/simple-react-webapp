import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from './components/Weather';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const API_KEY = `${process.env.REACT_APP_API_KEY}`;
    console.log(API_KEY);
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=imperial`);
    const data = await api_call.json();
    console.log(data);
    // this.setState({
    //   temperature: data.main.temp,
    //   city: data.name,
    //   country: data.sys.country,
    //   humidity: data.main.humidity,
    //   description: data.weather[0].description,
    //   error: ""
    // });
  }
  render() {
    return (
      <div className="App">
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </div>
    );
  }
}

export default App;
