import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authorbio from './Articles';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='critivity-body'>
          <Authorbio />
        </div>
      </div>
    );
  }
}

export default App;
