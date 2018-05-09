import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PostDate extends Component {
    formatDateStrToMonthDay (dateStr) {
        let date = new Date(dateStr);
        const months = ([
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ]);
        return `${months[date.getMonth()]} ${date.getDate()}`
    }

    render() {
        const postedDate = this.props.postedDate;
        return (
            <div>{this.formatDateStrToMonthDay(postedDate)}</div>
        );
    }
}

PostDate.propTypes = {
    postedDate: PropTypes.string.isRequired
};

PostDate.defaultProps = {
    postedDate: '9999-12-31'
};

export default PostDate;