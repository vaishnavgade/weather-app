import React from 'react';

const Weather = (props) =>{
  return(
    <div>
      {/* Weather conditions to display */}
      {/* Display table only when there is a city and country in the props */}
      {
        props.city && props.country && <h1>{props.city}, {props.country} Forecast</h1> &&
        <table>
          <tr className="table-headers">
            <th>TIME</th>
            <th>CONDITION</th>
            <th>TEMP</th>
            <th>HUMIDITY</th>
            <th>WIND</th>
          </tr>
          {/* TODO: Add a unique key to each row rendered */}
          {props.weatherData.list.map(item => (
            <tr className="table-rows">
              <td>{item.dt_txt}</td>
              <td>{item.weather[0].description}</td>
              <td>{item.main.temp}</td>
              <td>{item.main.humidity}</td>
              <td>{item.wind.speed}</td>
            </tr>
          ))}
        </table>
      }
      {props.error && <p className="weather_error">{props.error}</p>}
    </div>
  );
};

export default Weather;