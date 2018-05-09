import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageAuthor.css'

class ImageAuthor extends Component {

    render() {
        const authorImage = this.props.image;
        return (
            <img className={"ImageAuthor"} src={authorImage} />
        );
    }
}

ImageAuthor.propTypes = {
    image: PropTypes.string
};

ImageAuthor.defaultProps = {
    image: ''
};

export default ImageAuthor;