import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header';
import Card from './Card/Card';
import ImageList from './ImageList/ImageList';
import articles from './Articles/your-articles';
import missedArticles from './Articles/missed-articles';
import PropTypes from 'prop-types';
import Footer from './Footer/Footer';

class App extends Component {


  render() {
   
    return (
      <div className="App">
        <Header />
        <Card/>

        <Footer/>
        <Card/>
      </div>
    );
  }
}

export default App;
