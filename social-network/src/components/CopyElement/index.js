import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './CopyElement.css'

const propTypes = {
  content: PropTypes.string.isRequired
};

class CopyElement extends Component {
  render() {
    return (
      <p className="card-copy-block">{this.props.content}</p>
    );
  }
}

CopyElement.propTypes = propTypes;

export default CopyElement;
