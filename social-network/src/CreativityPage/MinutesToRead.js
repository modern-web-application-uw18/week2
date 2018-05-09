import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MinutesToRead extends Component {

    render() {
        const minutesToRead = this.props.minutesToRead;
        return (
            <div>{minutesToRead} min read </div>
        );
    }
}

MinutesToRead.propTypes = {
    minutesToRead: PropTypes.number
};

MinutesToRead.defaultProps = {
    minutesToRead: 0
};

export default MinutesToRead;