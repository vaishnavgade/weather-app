import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import { async } from 'q';

const Open_Weather_Map_Key = "<sign up for api key:https://openweathermap.org/api>";

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  };

  getWeather = async(e) =>{
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Open_Weather_Map_Key}`);

    const response = await api_call.json();

    this.setState({
      temperature: response.main.temp,
      city: response.name,
      country: response.sys.country,
      humidity: response.main.humidity,
      description: response.weather[0].description,
      error: ""
    });

    console.log(response);
  };

  render(){
    return(
      <div>
        {/* Add Components here */}
        <Titles />
        <Form loadWeather={this.getWeather}/>
        <Weather 
          temperature={this.state.temperature}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}/>
      </div>
    );
  };
}

export default App;