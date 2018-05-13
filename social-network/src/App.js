import React, { Component } from 'react';
import './App.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import Article from './Article';
import MissedArticle from './MissedArticle';

class App extends Component {

  render() {

    return (
      <div className="App">
        <h1 className="App-title">For you</h1>
        <div className="App-container">
          {yourArticles.map(function (article, index) {
             return <Article article={article} type="article" key={index} />
            })}
        </div>

          <h1 className="Missed-header">In case you missed it</h1>
        <div className="App-container2">
          {missedArticles.map(function (article, index) {
              return <MissedArticle article={article} type="missedarticle" key={index} />
            })}
         </div>
      </div>
    );
  }
}

export default App;
