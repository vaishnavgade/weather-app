import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import { async } from 'q';

const Open_Weather_Map_Key = "<sign up for api key:https://openweathermap.org/api>";

const units = {
  'c':'metric',
  'f':'imperial'
};

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      unit: "metric",
      city: undefined,
      country: undefined,
      weatherData : {},
      error: undefined
    };

    this.getTempUnits = this.getTempUnits.bind(this);
  };

  getTempUnits = (e) =>{
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    this.setState({
      unit: units[e.target.value],
      error: ""
    });

  };

  getWeather = async(e) =>{
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // api call to get only a single point of weather data
    // const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Open_Weather_Map_Key}`);

    // api call to get 5 day/ 3 hour forecast data
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&units=${this.state.unit}&appid=${Open_Weather_Map_Key}`);

    const response = await api_call.json();    

    // Don't set the state unless user enters both city and country
    if(city && country){
      this.setState({
        city: response.city.name,
        country: response.city.country,
        weatherData: response,
        error: ""
      });
    }
    else{
      this.setState({
        error: "Please enter both city and country"
      });
    }
  };

  render(){
    return(
      <div>
        {/* Add Components here */}
        <Titles getTempUnits={this.getTempUnits}/>
        <Form loadWeather={this.getWeather}/>
        <Weather 
          city={this.state.city}
          country={this.state.country}
          weatherData={this.state.weatherData}
          error={this.state.error}/>
      </div>
    );
  };
}

export default App;