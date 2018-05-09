import React, { Component } from 'react';
import Title from './Title';
import Description from './Description';
import ImageArticle from './ImageArticle';
import Favorites from './Favorites';
import ImageAuthor from './ImageAuthor';
import PostDate from './PostDate';
import NameAuthor from './NameAuthor';
import MinutesToRead from './MinutesToRead';
import './Article.css'

class ArticleItem extends Component {
    render() {
        const articleMetaData = this.props.articleMetaData;

        return (
          <div className="flex-container-box-generic">
            <ImageArticle image={articleMetaData.image} />
            <div className="flex-container-contents">
              <Title title={articleMetaData.title} />
              <Description description={articleMetaData.description} />
              <div className="flex-container-space-filler"></div>
              <div className="flex-container-metadata">
                <ImageAuthor image={articleMetaData.author.image} />
                <div className = "flex-container-md-column">
                  <div className="flex-container-space-filler"></div>
                  <div className="flex-container-md-row">
                    <NameAuthor authorName={articleMetaData.author.name} />
                    <div className="flex-container-space-filler"></div>
                    <Favorites />
                  </div>
                  <div className="flex-container-space-filler"></div>
                  <div className="flex-container-md-row">
                    <PostDate postDate={articleMetaData.postedDate} />
                    <div className="Circle" />
                    <MinutesToRead minutesToRead={articleMetaData.minutesToRead} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default ArticleItem;