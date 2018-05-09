import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageArticle.css'

class ImageArticle extends Component {

    render() {
        const articleImage = this.props.image;
        return (
            <img className={"ImageArticle"} src={articleImage} />
        );
    }
}

ImageArticle.propTypes = {
    image: PropTypes.string
};

ImageArticle.defaultProps = {
    image: ''
};

export default ImageArticle;