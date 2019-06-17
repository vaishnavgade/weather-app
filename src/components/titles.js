import React from 'react';

const Titles = (props) => {
  return(
    <div className="title-container">
      <h1>Weather App</h1>
      <select onChange={props.getTempUnits}>
        <option value="c">°C</option>
        <option value="f">°F</option>
      </select>
    </div>
  );
};

export default Titles;