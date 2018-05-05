import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

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
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header> */}
        <section>
        <h2>For you</h2>
        <div>
            {articles.map((article, idx) => {
              return <CardArticle key={idx} articles={article} />
            })}
         </div>
         </section>
         <section>
           <h2>Incase you missed it</h2>
         <div>
          {missed.map((missed, idx) => {
              return <MissedArticle key={idx} missed={missed} />
            })}
          </div>
          </section>


      </div>
    );
  }
}

export default App;
