import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';
import { async } from 'q';


class App extends React.Component{

  getWeather = async(e) =>{
    // Prevents the full page refresh that occurs by default
    e.preventDefault();

    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=london,uk&appid=${Open_Weather_Map_Key}`);

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