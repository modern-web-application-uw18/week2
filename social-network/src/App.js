import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import MissedCard from './Card/MissedCard';
import yourArticles from './Card/yourArticles.json';
import missedArticles from './Card/missedArticles.json';
console.log(yourArticles);

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2 className="section-title">For You</h2>
          {yourArticles.map((article, idx) => {
            return <Card key={idx} article={article} />;
          })}

        <h2 className="section-title">In case you missed it</h2>
          {missedArticles.map((missedArticle, idx) => {
            return <MissedCard key={idx} article={missedArticle} />;
          })}
      </div>
    );
  }
}

export default App;
