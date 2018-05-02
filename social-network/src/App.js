import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

import yourArticles from './your-articles.json';
// import missedArticles from './missed-articles.json';
console.log(yourArticles);

class App extends Component {
  render() {
    return (
      <div className="App">
        {yourArticles.map((article, idx) => {
          return <Card key={idx} article={article} />;
        })}
      </div>
    );
  }
}

export default App;
