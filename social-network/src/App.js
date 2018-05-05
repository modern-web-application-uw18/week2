import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// bootstrap
import { Navbar, Jumbotron, Button, Card } from 'react-bootstrap';

// get data
import CardArticle from './CardArticle';
import articles from './data/articles.json';

import MissedArticle from './MissedArticles';
import missed from './data/missed.json';

console.log(articles)


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        
        <div>
            {articles.map((article, idx) => {
              return <CardArticle key={idx} articles={article} />
            })}
         </div>
         
         <div>
          {missed.map((missed, idx) => {
              return <MissedArticle key={idx} missed={missed} />
            })}
          </div>


      </div>
    );
  }
}

export default App;
