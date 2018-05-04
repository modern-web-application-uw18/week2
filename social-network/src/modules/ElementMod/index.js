import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ElementMod.css';

const propTypes = {
  image: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired
};

class ElementMod extends Component {
  render() {
    return (
      <div className='element-mod'>
        <div className='element-mod__author-avatar--container'>
          <img className='element-mod__author-avatar' src={this.props.image} alt='' />
        </div>
        <div className='element-mod__author-data'>
          <p>{this.props.author}</p>
          <p>{this.props.postedDate} - 2 min read</p>
        </div>
      </div>
    );
  }
}

ElementMod.propTypes = propTypes;

export default ElementMod;
