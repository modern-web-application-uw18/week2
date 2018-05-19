import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Authorbio from './Articles';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Week2 Assignment</h1>
        </header>

        <div className='critivity-body'>
          <Authorbio />
        </div>
      </div>
    );
  }
}

export default App;
