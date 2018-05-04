import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ArticleImage extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

    render() {
        return (
            <img src={this.props.src} alt={this.props.alt} />
        );
    }
}

ArticleImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
}
