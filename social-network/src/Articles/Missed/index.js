import React, { Component } from 'react';
import MissedArticleItem from './MissedArticleItem';
import missedArticles from '../../json/missed-articles.json';

const missedArticlesList = missedArticles.map((item, idx) => {
  return <MissedArticleItem item={item} key={idx} lnBreak={idx}  />
});


class MissedArticles extends Component {

render() {
  return (
    <div>
      <h5>In case you missed it</h5>
      <hr />
      <div className="container">
        <div className="row">
          {missedArticlesList}
        </div> {/*row*/}
      </div> {/*container*/}
    </div>
  )
}
}




export default MissedArticles;