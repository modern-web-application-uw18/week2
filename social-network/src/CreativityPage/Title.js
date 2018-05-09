import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Title.css'

class Title extends Component {

    render() {
        const articleTitle = this.props.title;
        return (
            <div className="ArticleTitle">{articleTitle}</div>
        );
    }
}

Title.propTypes = {
    title: PropTypes.string.isRequired
};

Title.defaultProps = {
    title: 'Title Unknown'
};

export default Title;