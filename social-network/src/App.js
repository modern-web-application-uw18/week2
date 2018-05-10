import React, { Component } from 'react';
import './App.css';
import Story from './Story/Story';
import articles from './your-articles.json';
import StoryImageTop from './StoryImageTop/StoryImageTop';
import missedArticles from './missed-articles.json';


class App extends Component {

  render() {

    return (
      <div className="App">

        <section className="u-borderBox u-maxWidth1000 u-marginAuto u-marginTop30 u-marginBottom40 u-clearfix u-sm-paddingLeft20 u-sm-paddingRight20 u-xs-marginTop15">
          <header className="u-flex u-marginBottom25 u-borderBottomLighter">
            <span className="heading-title heading-title--lineHeightTight u-flex0 u-block u-paddingBottom20 u-borderBottomNormal u-marginBottomNegative1 u-uiDisplayBold u-fontSize20 u-textColorDarker u-xs-fontSize18">For you</span>
          </header>
          {articles.map((article, index) => 
            <Story key={index} title={article.title} description={article.description} image={article.image} authorImageUrl={article.author.image} authorName={article.author.name} postedDate={new Date(article.postedDate)} minutesToRead={article.minutesToRead} memberPreview={article.memberPreview} link={article.link} />
          )}          
      </section>

      <section className="u-borderBox u-maxWidth1000 u-marginAuto u-marginTop30 u-marginBottom40 u-clearfix u-sm-paddingLeft20 u-sm-paddingRight20 u-xs-marginTop15">          
        <header className="u-flex u-marginBottom25 u-borderBottomLighter">
          <span className="heading-title heading-title--lineHeightTight u-flex0 u-block u-paddingBottom20 u-borderBottomNormal u-marginBottomNegative1 u-uiDisplayBold u-fontSize20 u-textColorDarker u-xs-fontSize18">In case you missed it</span>
        </header>
        {missedArticles.map((missedArticle, index) => 
          <StoryImageTop key={index} memberPreview={missedArticle.memberPreview} title={missedArticle.title} description={missedArticle.description} image={missedArticle.image} authorImageUrl={missedArticle.author.image} authorName={missedArticle.author.name} postedDate={new Date(missedArticle.postedDate)} minutesToRead={missedArticle.minutesToRead} link={missedArticle.link} />
        )} 
      </section>
    </div>
    );
  }
}

export default App;
