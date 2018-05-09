import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YourArticle.css';

const propTypes = {
    yourArticle: PropTypes.object
}

class YourArticle extends Component {
    renderYourArticle() {
        return (
            <div className="YourArticle">
                <a href={this.props.yourArticle.link}>
                    <img className="YourArticle-image" src={this.props.yourArticle.image} alt={this.props.yourArticle["title"]} />
                </a>
                <div className="YourArticle-body">
                    <a href={this.props.yourArticle.link}>
                        <header className="YourArticle-header">{this.props.yourArticle.title}</header>
                        <div className="YourArticle-description">
                            <p>{this.props.yourArticle.description}</p>
                        </div>
                    </a>
                    <div className="YourArticle-author">
                        <div className="YourArticle-author-image">
                            <img src={this.props.yourArticle.author.image} alt={this.props.yourArticle.author.title} />
                        </div>
                        <div className="YourArticle-author-name">
                            <div>
                                <span>{this.props.yourArticle.author.name}</span>
                            </div>
                            <div>
                                <span>{this.props.yourArticle.postedDate}-{this.props.yourArticle.minutesToRead} min read</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return this.renderYourArticle();
    }
}

YourArticle.propTypes = propTypes;

export default YourArticle;    
