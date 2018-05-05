import React, { Component } from 'react';
import missedArticles from './missed-articles.json';
import recommendedArticles from './your-articles.json';
import ArticleItem from './ArticleItem.js';

class Authorbio extends Component {
  render() {
    const authorList = missedArticles.map((a, indx) => {
      return <ArticleItem key={indx} author={a} missedIt={false} />;
    });

    const forYou = recommendedArticles.map((a, indx) => {
      return <ArticleItem key={indx} author={a}  missedIt={true} />;
    });

    return (
      <div>
        <div className='articles-subtitle'>
          <h3>For you</h3>
        </div>

        <hr className='separator' />
        <div className='critivity-body'>
          {forYou}
        </div>

        <div className='articles-subtitle'>
          <h2>In case you missed it</h2>
        </div>

        <hr className='separator' />
        <div className='critivity-body'>
          {authorList}
        </div>
      </div>
    );
  }
}

export default Authorbio;
