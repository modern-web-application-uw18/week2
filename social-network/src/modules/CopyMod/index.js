import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CopyMod.css'

const propTypes = {
  content: PropTypes.string.isRequired
};

class CopyMod extends Component {
  render() {
    return (
      <p className="card-copy-block">{this.props.content}</p>
    );
  }
}

CopyMod.propTypes = propTypes;

export default CopyMod;
