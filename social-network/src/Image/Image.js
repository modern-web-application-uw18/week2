import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Image.css';

export default class Image extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

    render() {
        return (
            <div className="imageContainer"><img src={this.props.src} alt={this.props.alt} /></div>
        );
    }
}

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
}

Image.defaultProps = {
  src: '#',
  alt: '#',
}
