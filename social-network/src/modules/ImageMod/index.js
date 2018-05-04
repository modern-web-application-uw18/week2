import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ImageMod.css';

const propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired
};

class ImageMod extends Component {
  render() {
    return (
      <img className='image-pic' src={this.props.imageSrc} alt={this.props.imageAlt} />
    );
  }
}

ImageMod.propTypes = propTypes;

export default ImageMod;
