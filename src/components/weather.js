import React from 'react';

/**
 * Takes a date string and returns a <div> containing the Time and Day of the week
 * @param {String<TYPE>} dateString 
 */
const renderTimeAndDay = (dateString) =>{
  return(
    <div>
      <label>{new Intl.DateTimeFormat('en-US', {hour: 'numeric', minute: 'numeric'}).format(new Date(dateString))}</label>
      <br />
      <label>{new Intl.DateTimeFormat('en-US', {weekday: 'short'}).format(new Date(dateString))}</label>
    </div>
  );
};

/**
 * Takes an array and returns an <img> with weather icon with description for tooltip
 * @param {Array<TYPE>} weather 
 */
const renderConditionIcon = (weather) => {
    const imgSrc = `http://openweathermap.org/img/w/${weather.icon}.png`;
    return(
      <img src={imgSrc} alt="Weather icon" title={weather.description} />
    );
};

const Weather = (props) =>{
  return(
    <div>
      {/* Weather conditions to display */}
      {/* Display table only when there is a city and country in the props */}
      {
        props.city && props.country && <h1>{props.city}, {props.country} Forecast</h1> &&
        <table>
          <thead>
            <tr className="table-headers">
              <th>TIME</th>
              <th>CONDITION</th>
              <th>TEMP</th>
              <th>HUMIDITY</th>
              <th>WIND</th>
            </tr>
          </thead>
          <tbody>
            {props.weatherData.list.map((item, index) => (
              <tr className="table-rows" key={index}>
                {/* Converting the DateTime string into a weekday */}
                <td>{renderTimeAndDay(item.dt_txt)}</td>
                <td>{renderConditionIcon(item.weather[0])}</td>
                <td>{item.main.temp}<sup>o</sup></td>
                <td>{item.main.humidity}</td>
                <td>{item.wind.speed}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      {props.error && <p className="weather_error">{props.error}</p>}
    </div>
  );
};

export default Weather;