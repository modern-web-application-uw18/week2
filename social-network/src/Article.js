import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './article-style.css';

class Article extends Component {
    render(){
        const article = this.props.article;
        return(
            <div className="Article" key>
                <div className="Article-img">
                    <img src={article.image} alt={article["title"]} />
                </div> {/*End Article-img*/}
                    <div className="Article-container">
                        <a href={article.link}>
                        <header className="Article-title">{article.title}</header></a>
                        <div className="Article-description">
                            <p>{article.description}</p>
                        </div>{/*End Article Description*/}
                        <div className="Author-container">
                            <div className="Author-img">
                            <img src={article.author["image"]} alt={article.author["name"]} />
                            </div>
                            <div className="Author-name">
                            <p>{article.author["name"]}</p>
                            </div>
                        </div>{/*End Author Container*/}
                    </div>{/*End Article Container*/}
            </div>
        );
    }
}
Article.PropTypes = {
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