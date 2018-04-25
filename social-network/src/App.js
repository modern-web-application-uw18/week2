import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YourArticles from './your-articles.js';
import YourMissedArticles from './missed-articles.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Week 2 React Homework</h1>
        </header>
        
        <YourArticles />
        <p className='h2'>In case you missed it...</p>
        <YourMissedArticles />
      </div>
    );
  }
}

export default App;
