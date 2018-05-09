import React, { Component } from 'react';
import logo from './logo.svg';
import './Card.css';
import Card from './Card';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';

class App extends Component {	
  render() {
    return (
      <div>
        <h2>For you</h2>
				<div className="flex-container">
				  {yourArticles.map((article, idx) => {
					  return <Card key={idx} article={article} />;
          })}
				</div>
				<br></br><br></br>
				<h2>In case you missed it</h2>
				<div className="flex-container">
				  {missedArticles.map((article, idx) => {
					  return <Card key={idx} article={article} />;
          })}
				</div>
      </div>
    );
  }
}

export default App;
