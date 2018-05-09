import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ByElement.css';

const propTypes = {
  author: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired
};

class ByElement extends Component {
  render() {
    return (
      <div className='by-element'>
        <div className='by-element__author-avatar--container'>
          <img className='by-element__author-avatar' src={this.props.image} alt='' />
        </div>
        <div className='by-element__author-data'>
          <p>{this.props.author}</p>
          <p>{this.props.postedDate} - 2 min read</p>
        </div>
      </div>
    );
  }
}

ByElement.propTypes = propTypes;

export default ByElement;
