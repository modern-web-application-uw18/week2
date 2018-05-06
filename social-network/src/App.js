import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PromoBox from './PromoBox/PromoBox';
import forYou from './forYou.json';
import inCase from './inCaseYouMissedIt.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <h1>For you</h1>
          <section className="promos promos-top">
           {forYou.map((forYou, idx) => {
              return <PromoBox key={idx} promoInfo={forYou} />;
           })}
          </section>
          <h1>In case you missed it</h1>
          <section className="promos">
            {inCase.map((inCase, dex) => {
              return <PromoBox key={dex} promoInfo={inCase} />;
            })}
          </section>
        </main>
      </div>
    );
  }
}

export default App;
