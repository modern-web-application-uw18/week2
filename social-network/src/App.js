import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import missedArticles from './data/missed-articles.json';
import Cardlist from './Cardlist/Cardlist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Cardlist />
      </div>
    );
  }
}

export default App;
