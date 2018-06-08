import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Description from './Description';
import AudioPreview from './AudioPreview';
import Author from './Author';
import './Article.css';

class Article extends Component {

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
        } = this.props.article;

        return (
            <a href={link} target='_blank'>
                <div className="Article-container" >
                    <div className="Article-image-container" >
                        <img src={image} alt="" />
                    </div>
                    <div className="Article-main-column">
                        <div className="Article-main-column-top">
                            <AudioPreview hasAudioAvailable={hasAudioAvailable} memberPreview={memberPreview} />
                            <Description title={title} description={description} />
                        </div>
                        <Author author={author} postdate={postedDate} minutes={minutesToRead} />
                    </div>
                </div >
            </a>
        );
    }
}

Article.propTypes = {
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

Article.defaultProps = {
    title: 'No title :(',
    description: 'No description :(',
    hasAudioAvailable: false,
    memberPreview: false
};

export default Article;
