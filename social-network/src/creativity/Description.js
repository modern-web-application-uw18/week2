import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Description.css';

class Description extends Component {

    render() {

        return (
            <div className="Description">
                <div className="Article-header">{this.props.title}</div>
                <div className="Article-description">{this.props.description}</div>
            </div>
        );
    }
}


Description.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};


Description.defaultProps = {
    title: 'No title :(',
    description: 'No description :('
};

export default Description;