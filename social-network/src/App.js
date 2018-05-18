import React, { Component } from 'react';
import './App.css';
import Creativityarticle from './creatify';
import Missedarticle from './creatify/missed-article.js';

class App extends Component {
  render() {
    return (
      <div>
        <h3>For you</h3>
        <Creativityarticle />
        <h3>In case you missed it</h3>
        <Missedarticle />
      </div>
    );
  }
}

export default App;