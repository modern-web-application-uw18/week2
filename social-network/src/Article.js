import React, { Component } from 'react';
import './Article.css';

class Article extends Component {
    render() {

        if (this.props.type === "article") {
            return (
                <div className="Article" key>
                    <a href={this.props.article.link}>
                        <img className="Article-image" src={this.props.article.image} alt={this.props.article["title"]} />
                    </a>
                    <div className="Article-body-container">
                        <a href={this.props.article.link}>
                            <header className="Article-header">{this.props.article.title}</header>
                            <div className="Article-description">
                                <p>{this.props.article.description}</p>
                            </div>
                        </a>
                        <div className="Author-container">
                            <div className="Author-image">
                                <img src={this.props.article.author["image"]} alt={this.props.article.author["name"]} />
                            </div>
                            <div className="Author-name">
                                <p>{this.props.article.author["name"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="MissedArticle" key>
                    <a href={this.props.article.link}>
                        <img className="Article-image" src={this.props.article.image} alt={this.props.article["title"]} />
                    </a>
                    <div className="Article-body-container">
                        <a href={this.props.article.link}>
                            <header className="Article-header">{this.props.article.title}</header>
                            <div className="Article-description">
                                <p>{this.props.article.description}</p>
                            </div>
                        </a>
                        <div className="Author-container">
                            <div className="Author-image">
                                <img src={this.props.article.author["image"]} alt={this.props.article.author["name"]} />
                            </div>
                            <div className="Author-name">
                                <p>{this.props.article.author["name"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Article;
