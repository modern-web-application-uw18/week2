import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from './Description';
import AudioPreview from './AudioPreview';
import Author from './Author';
import './MissedArticle.css';
import './Article.css';

class MissedArticle extends Component {

    render() {

        const {
            title,
            description,
            image,
            link,
            author,
            postedDate,
            minutesToRead,
            hasAudioAvailable,
            memberPreview
        } = this.props.missedarticle;

        return (
            <a href={link} target='_blank'>
                <div className="MissedArticle-box" >
                    <div className="MissedArticle-image-container" >
                        <img src={image} alt="" />
                    </div>
                    <div className="MissedArticle-main-column-top">
                        <AudioPreview hasAudioAvailable={hasAudioAvailable} memberPreview={memberPreview} />
                        <Description title={title} description={description} />
                    </div>
                    <div className="MissedArticle-main-column-bottom">
                        <Author author={author} postdate={postedDate} minutes={minutesToRead} />
                    </div>
                </div >
            </a>
        );
    }
}

MissedArticle.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
    author: PropTypes.instanceOf(Author),
    postedDate: PropTypes.string,
    minutesToRead: PropTypes.number,
    hasAudioAvailable: PropTypes.bool,
    memberPreview: PropTypes.bool
};

MissedArticle.defaultProps = {
    title: 'No title :(',
    description: 'No description :(',
    hasAudioAvailable: false,
    memberPreview: false
};

export default MissedArticle;