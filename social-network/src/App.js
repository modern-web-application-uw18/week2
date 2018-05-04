import React, { Component } from 'react';
import './app.css';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import Card from './modules/Card';
import ArticleHeader from './modules/ArticleHeader';


class App extends Component {
  render() {
    console.log(yourArticles);
    return (
    <div className="section group">
        <ArticleHeader HeadingText="For you" />
          <article className="your">
            {}
              {yourArticles.map((article, keyIndex) =>
               <Card key={keyIndex} article={article}/>
              )}
          </article>
        <ArticleHeader HeadingText="In case you missed it" />
          <article className="missed">
            {missedArticles.map((article, keyIndex) =>
             <Card key={keyIndex} article={article}/>
             )}
          </article>
     </div>
    );
  }
}

export default App;
