import React, { Component } from 'react';
import YourArticleItem from './YourArticleItem';
import yourArticles from '../../json/your-articles.json';

const yourArticlesList = yourArticles.map((item, idx) => {
    return <YourArticleItem item={item} key={idx} lnBreak={idx}/>

});


class YourArticles extends Component {



  render() {



    return (
      <div>
        <h5>For You</h5>
        <hr />
        <div className="row">
          {yourArticlesList}
        </div>
      </div>
    )
  }
}


export default YourArticles;