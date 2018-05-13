import React, { Component } from 'react';
import './Article.css';
import PropTypes from 'prop-types';

class Article extends Component {
    render() {
        const article = this.props.article;
        return (
            <div className="Article" key>
                <div className="Article-image">
                    <img src={article.image} alt={article["title"]} />
                </div>
                <div className="Article-body-container">
                    <a href={article.link}>
                        <header className="Article-header">{article.title}</header>
                    </a>
                    <div className="Article-description">
                        <p>{article.description}</p>
                    </div>
                    <div className="Author-container">
                        <div className="Author-image">
                            <img src={article.author["image"]} alt={article.author["name"]} />
                        </div>
                        <div className="Author-name">
                            <p>{article.author["name"]}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    article: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        link: PropTypes.string,
        description: PropTypes.string,
        author: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string
        })
      })
};

export default Article;
