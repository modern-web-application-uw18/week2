import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissedArticle.css';

const propTypes = {
    missedArticle: PropTypes.object
}

class MissedArticle extends Component {
    renderYourArticle() {
        return (
            <div className="MissedArticle">
                <a href={this.props.missedArticle.link}>
                    <img className="MissedArticle-image" src={this.props.missedArticle.image} alt={this.props.missedArticle["title"]} />
                </a>
                <div className="MissedArticle-body">
                    <a href={this.props.missedArticle.link}>
                        <header className="MissedArticle-header">{this.props.missedArticle.title}</header>
                        <div className="MissedArticle-description">
                            <p>{this.props.missedArticle.description}</p>
                        </div>
                    </a>
                    <div className="MissedArticle-author">
                        <div className="MissedArticle-author-image">
                            <img src={this.props.missedArticle.author.image} alt={this.props.missedArticle.author.title} />
                        </div>
                        <div className="MissedArticle-author-name">
                            <div>
                                <span>{this.props.missedArticle.author.name}</span>
                            </div>
                            <div>
                                <span>{this.props.missedArticle.postedDate}-{this.props.missedArticle.minutesToRead} min read</span>
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

MissedArticle.propTypes = propTypes;

export default MissedArticle;    
