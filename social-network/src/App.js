import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import TopCard from './Card/TopCard';
import BottomCard from './Card/BottomCard';
import yourArticles from './Articles/your-articles.json';
import missedArticles from './Articles/missed-articles.json';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <TopCard/>
        <Footer/>
        <BottomCard/>
      </div>
    );
  }
}

export default App;
