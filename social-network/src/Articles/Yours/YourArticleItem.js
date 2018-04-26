import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YourArticles.css';




class YouArticleItem extends Component {
    render() {

        return (
            [
                <div className='col'>{this.props.item.title}</div>
                // ,<div className="w-100">ok wt</div>
            ]
        )


    }
}

YouArticleItem.propTypes = {
    item: PropTypes.object.isRequired,
    lnBreak: PropTypes.number.isRequired
}


export default YouArticleItem;

