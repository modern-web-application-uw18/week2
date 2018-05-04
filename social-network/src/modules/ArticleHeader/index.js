import React from 'react';
import PropTypes from 'prop-types';
import './ArticleHeader.css';

const propTypes = {
  HeadingText: PropTypes.string.isRequired
};

const ArticleHeader = (props) => {

  return (
    <header className='article-header'>
      <h2 className="article-header__heading">{props.HeadingText}</h2>
    </header>
  )
}

ArticleHeader.propTypes = propTypes;

export default ArticleHeader
