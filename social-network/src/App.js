import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import yourArticles from './your-articles.json';
import Article from './Article';
import missedArticles from './missed-articles.json';
import MissedArticle from './MissedArticle';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* h1 For your
        div container
        map from yourArticles and return 
        article and index
        H1 in case you missed it
        div container
        map over missed articles */}

        <h1 className="App-h1">For you</h1>
        <hr/>
        <div className="yourArticles-container">
        {yourArticles.map(function (article, index) {
          return <Article article={article} type="article" key={index} />})}
          </div> {/*End yourArticles*/}

        <h1 className="App-h1">In case you missed it</h1>
        <div className="missedArticles-container">
        {missedArticles.map(function (article, index){
          return <MissedArticle article={article} type="missedarticle" key={index} />
        })}
        </div> {/* end missedArticles-container */}


       {/* end container */} 
       </div> 


    );
  }
}

export default App;
