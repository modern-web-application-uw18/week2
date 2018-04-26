import React, { Component } from 'react';
import MissedArticleItem from './MissedArticleItem';
import missedArticles from '../../json/missed-articles.json';

class MissedArticles extends Component {
    render() {
  
      const missedArticlesList = missedArticles.map((item,idx) => {
        return <MissedArticleItem item={item} key={idx} />
      });
 
  
      return (
        <div>
          <h3>In case you missed it</h3>
          <hr />
          {missedArticlesList}
  
        </div>
      )
    }
  }


  export default MissedArticles;