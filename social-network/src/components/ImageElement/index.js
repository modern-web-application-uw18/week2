import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageElement.css';

const propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

class ImageElement extends Component {
  render() {
    return (
      <img className='image-clip' src={this.props.imageSrc} alt={this.props.imageAlt} />
    );
  }
}

ImageElement.propTypes = propTypes;

export default ImageElement;
