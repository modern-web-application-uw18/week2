import React, { Component } from 'react';
import './styles/app.css';

// pass in external data JSON
import yourArticles from './components/data/your-articles.json';
import missedArticles from './components/data/missed-articles.json';
import Card from './components/Card';
import SectionHeader from './components/SectionHeader';


class App extends Component {
  render() {

    console.log(yourArticles);

    return (
      <main className="content-container">
        <SectionHeader headerText="For you" />

        {/* loop through objects in JSON and pass all article data into the Card component */}
        {yourArticles.map((article, keyIndex) =>
          <Card key={keyIndex} article={article}/>
        )}

        <SectionHeader headerText="In case you missed it" />
        {missedArticles.map((article, keyIndex) =>
          <Card key={keyIndex} article={article}/>
        )}
      </main>
    );
  }
}

export default App;
