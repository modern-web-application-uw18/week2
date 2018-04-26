import React, { Component } from 'react';
import YourArticleItem from './YourArticleItem';
import yourArticles from '../../json/your-articles.json';


class YourArticles extends Component {
    render() {
  
      const yourArticlesList = yourArticles.map(item => {
        return <YourArticleItem item={item} />
      });
  
      return (
        <div>
          <h3>For You</h3>
          <hr />
          {yourArticlesList}
        </div>
      )
    }
  }


export default YourArticles;