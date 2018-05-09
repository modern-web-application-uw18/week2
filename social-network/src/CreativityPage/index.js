import React, { Component } from 'react';
import yourArticles from './your-articles.json';
import missedArticles from './missed-articles.json';
import ArticleItem from './ArticleItem';
import './Article.css'

class CreativityPage extends Component {

    render() {
        /* don't forget idx*/
        const yourArticleSection = yourArticles.map((articleMetaData, idx) => {
          return (
            <div className="flex-container-box-two-per-row" key={idx}>
              <ArticleItem articleMetaData={articleMetaData}/>
            </div>
          );
        })
        const missedArticleSection = missedArticles.map((articleMetaData, idx) => {
          return (
            <div className="flex-container-box-three-per-row"  key={idx}>
              <ArticleItem articleMetaData={articleMetaData}/>
            </div>
          );
        })

        return (
            <div>
              <h3>For you</h3>
              <div className="ForYouSection">
                {yourArticleSection}
              </div>
              <h3>In case you missed it</h3>
              <div className="MissedSection">
                {missedArticleSection}
              </div>
            </div>
        );
    }
}

export default CreativityPage;