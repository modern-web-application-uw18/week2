import React, { Component } from 'react';
import './MissedArticle.css';
import PropTypes from 'prop-types';

class MissedArticle extends Component {
    render() {
        const missedArticle = this.props.article;

        return (
            <div className="MissedArticle" key>
                <div className="MissedArticle-image-container">
                    <img className="MissedArticle-image" src={missedArticle.image} alt={missedArticle["title"]} />
                    </div>

                    <div className="MissedArticle-body-container">
                        <a href={missedArticle.link}>
                            <header className="MissedArticle-header">{missedArticle.title}</header>
                            <div className="MissedArticle-description">
                                <p>{missedArticle.description}</p>
                            </div>
                        </a>
                        <div className="MissedAuthor-container">
                            <div className="MissedAuthor-image">
                                <img src={missedArticle.author["image"]} alt={missedArticle.author["name"]} />
                            </div>
                            <div className="MissedAuthor-name">
                                <p>{missedArticle.author["name"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

MissedArticle.propTypes = {
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

export default MissedArticle;