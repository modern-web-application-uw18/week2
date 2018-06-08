import React, { Component } from 'react';
import './App.css';
import Article from './creativity/Article.js';
import MissedArticle from './creativity/MissedArticle.js';
import yourArticles from './json/your-articles.json';
import missedArticles from './json/missed-articles.json';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <div className="App-header">For you</div >
        <div className="App-article-flex-container" >
          {yourArticles.map((article, index) => {
            return <Article key={index} article={article} />;
          })}
        </div >
        <br></br>
        <div className="App-header">In case you missed it</div >
        <div className="App-missed-article-flex-container" >
          {missedArticles.map((article, index) => {
            return <MissedArticle key={index} missedarticle={article} />;
          })}
        </div >
      </div>
    );
  }
}

export default App;
