import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CardTitle.css';

const propTypes = {
  title: PropTypes.string.isRequired,
  class: PropTypes.string.isRequired
};

class CardTitle extends Component {

  render() {
    return (
      <h1 className={this.props.class}>{this.props.title}</h1>
    );
  }
}

CardTitle.propTypes = propTypes;

export default CardTitle;
