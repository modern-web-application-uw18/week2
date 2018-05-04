import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Description.css'

class Description extends Component {

    render() {
        const articleDescription = this.props.description;
        return (
            <div className="ArticleDescription">{articleDescription}</div>
        );
    }
}

Description.propTypes = {
    description: PropTypes.string
};

Description.defaultProps = {
    description: ''
};

export default Description;