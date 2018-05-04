import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './TitleMod.css';

const propTypes = {
  class: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
  
};

class TitleMod extends Component {

  render() {
    return (
      <h1 className={this.props.class}>{this.props.title}</h1>
    );
  }
}

TitleMod.propTypes = propTypes;

export default TitleMod;
