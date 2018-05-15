import React, { Component } from 'react';
import logo from './logo.svg';
import yourArticles from './yourArticles.json';
import missedArticles from './missedArticles.json'; 
import Article from './article'; 
import './flexstyle.css';
import Missed_article from './missedArticle';

console.log(yourArticles);

class App extends Component {
  render() {
    //console.log(this.props.article)
    return (
      <div className="App">
      <p className='foryou' >For you</p>
      <div className='yourArticles'> 
      
        {yourArticles.map((article, idx) => {
          return <Article key={idx} article = {article}/>;
        })} 
       </div> 

       <div className='yourMissed'> 
          <p>In case you missed it</p>
          {missedArticles.map((missedArticle, idx) => {
          return <Missed_article key={idx} article = {missedArticle}/>; 
      })}
        </div> 

      </div>
    ); 
  }
}

export default App;
