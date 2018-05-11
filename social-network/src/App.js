import React, { Component } from 'react';
import './App.css';
import Card from './Card/Card';
import MissedArticles from './data/missed-articles.json';
import YourArticles from './data/your-articles.json';

class App extends Component {
  render() {
    /**
    * Loop through YourArticles data and build out cards
    * @param {object} item - The article object in the array
    */
    const listItems = YourArticles.map((item, ind) => {
      const { link, image, description, title, author, postedDate, minutesToRead } = item;
      return <Card key={ind} link={link} image={image} description={description} title={title} author={author} postedDate={postedDate} minutesToRead={minutesToRead} />;
    });

    /**
    * Loop through MissedArticles data and build out cards
    * @param {object} item - The article object in the array
    */
    const yourListItems = MissedArticles.map((item, ind) => {
      const { link, image, description, title, author, postedDate, minutesToRead } = item;
      return <Card key={ind} link={link} image={image} description={description} title={title} author={author} postedDate={postedDate} minutesToRead={minutesToRead} />;
    });
    return (
      <div className="App">
        <section className="forYou">
          <h2>For You</h2>
          <div className="content">
            {listItems}
          </div>
        </section>
        <section className="youMissedIt">
          <h2>In case you missed it.</h2>
            <div className="content">
              {yourListItems}
            </div>
        </section>
      </div>
    );
  }
}

export default App;
