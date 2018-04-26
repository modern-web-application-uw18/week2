import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YourArticles.css';


class YouArticleItem extends Component {
    render() {
        return (
            <h4>{this.props.item.title}</h4>
        )
    }
}

YouArticleItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default YouArticleItem;

