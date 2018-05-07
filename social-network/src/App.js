import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PromoBox from './PromoBox/PromoBox';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>For you</h1>
          <section className="promos promos-top">
           {yourArticles.map((yourArticles, idx) => {
              return <PromoBox key={idx} promoInfo={yourArticles} />;
           })}
          </section>
          <h1>In case you missed it</h1>
          <section className="promos">
            {missedArticles.map((missedArticles, dex) => {
              return <PromoBox key={dex} promoInfo={missedArticles} />;
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
