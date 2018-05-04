import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NameAuthor.css'

class NameAuthor extends Component {

    render() {
        const authorName = this.props.authorName;
        return (
            <div className="NameAuthor">{authorName}</div>
        );
    }
}

NameAuthor.propTypes = {
    authorName: PropTypes.string.isRequired
};

NameAuthor.defaultProps = {
    authorName: 'Author Unknown'
};

export default NameAuthor;