import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Image.css';

export default class ArticleImage extends Component {
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

ArticleImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
