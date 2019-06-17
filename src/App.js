import React from 'react';
import Titles from './components/titles';
import Form from './components/form';
import Weather from './components/weather';

class App extends React.Component{
  render(){
    return(
      <div>
        {/* Add Components here */}
        <Titles />
        <Form />
        <Weather />
      </div>
    );
  };
}

export default App;