
import React from 'react';
import PropTypes from 'prop-types';
import './SectionHeader.css';

const propTypes = {
  headerText: PropTypes.string.isRequired
};

const SectionHeader = (props) => {

  return (
    <header className='section-header'>
      <h2 className="section-header__heading">{props.headerText}</h2>
    </header>
  )
}

SectionHeader.propTypes = propTypes;

export default SectionHeader
