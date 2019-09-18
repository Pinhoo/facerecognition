import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation.js';
import Logo from './components/Logo/Logo.js';
import Form from './components/Form/Form.js';
import Rank from './components/Rank/Rank.js';

/*
function App(){
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;               
*/


const particleOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 800
        }
      }
    }
  }

class App extends Component {
  render()
  {
  return (
    <div className="App">
      <Particles className='particles' params={particleOptions} />
      <Navigation />
      <Logo />
      <Rank/>
      <Form />
    </div>
  );
}
}

export default App;