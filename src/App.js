import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import { async } from 'q';

const Open_Weather_Map_Key = "<sign up for api key:https://openweathermap.org/api>";

class App extends React.Component{

  getWeather = async(e) =>{
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Open_Weather_Map_Key}`);

    const response = await api_call.json();

    console.log(response);
  };

  render(){
    return(
      <div>
        {/* Add Components here */}
        <Titles />
        <Form loadWeather={this.getWeather}/>
        <Weather />
      </div>
    );
  };
}

export default App;