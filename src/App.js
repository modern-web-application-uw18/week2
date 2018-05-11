import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Card from './Card.js';
import MissedCard from './MissedCard.js';
import articles from './articles.json';
import missedArticles from './missed-articles.json';

class App extends Component {

  render() {

    return (
      <div className="App">
        <header>
          <h2>For you</h2>
        </header>
        <div className='cardContainer'>
          {articles.map((article, index) => {
            return <Card key={index} article={article} />;
          })}
        </div>
        <div className = 'missedContainer'>
          <header>
            <h2>In case you missed it</h2>
          </header>
          <div className='missedArticleContainer'>
            {missedArticles.map((Marticle, index) => {
              return <MissedCard key={index} article={Marticle} />;
            })}
          </div>
        </div>
      </div>
    );

  }
}

export default App;

// default code no longer used
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Welcome to React</h1>
// </header>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
