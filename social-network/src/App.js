import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MissedArticles from './Articles/Missed';
import YourArticles from './Articles/Yours'

import PropTypes from 'prop-types';

class App extends Component {
  render() {
    return (
      <div className="App">
        <YourArticles />
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <MissedArticles />
      </div>
    );
  }
}

export default App;