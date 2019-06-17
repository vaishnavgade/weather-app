import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import { async } from 'q';

const Open_Weather_Map_Key = "<sign up for api key:https://openweathermap.org/api>";

const units = {
  'c': 'metric',
  'f': 'imperial'
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: undefined,
      longitude: undefined,
      unit: "metric",
      city: undefined,
      country: undefined,
      weatherData: {},
      error: undefined
    };

    this.getTempUnits = this.getTempUnits.bind(this);
  };

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    else {
      this.setState({
        error: "Couldn't retrieve your location. Please enter both city and country"
      });
    }
  }

  showPosition = async (position) => {
    if (position) {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });

      const response = await this.retrieveWeatherWithPosition();

      this.setState({
        city: response.city.name,
        country: response.city.country,
        weatherData: response,
        error: ""
      });
    }
  };

  getTempUnits = (e) => {
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    this.setState({
      unit: units[e.target.value],
      error: ""
    });

  };

  retrieveWeather = async (city, country) => {
    // api call to get 5 day/ 3 hour forecast data
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${this.state.unit}&appid=${Open_Weather_Map_Key}`);
    const response = await api_call.json();

    return response;
  };

  retrieveWeatherWithPosition = async () => {
    // api call to get 5 day/ 3 hour forecast data
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${this.state.latitude}&lon=${this.state.longitude}&units=${this.state.unit}&appid=${Open_Weather_Map_Key}`);
    const response = await api_call.json();

    return response;
  };

  getWeather = async (e) => {
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const response = await this.retrieveWeather(city, country);

    // Don't set the state unless user enters both city and country
    if (city && country) {
      this.setState({
        city: response.city.name,
        country: response.city.country,
        weatherData: response,
        error: ""
      });
    }
    else {
      this.setState({
        error: "Please enter both city and country"
      });
    }
  };

  render() {
    return (
      <div>
        {/* Add Components here */}
        <Titles getTempUnits={this.getTempUnits} />
        <Form loadWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          weatherData={this.state.weatherData}
          error={this.state.error} />
      </div>
    );
  };
}

export default App;