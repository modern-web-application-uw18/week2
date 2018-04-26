import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissedArticles.css';

class MissedArticleItem extends Component {
    render() {
        return <h4>{this.props.item.title}</h4>
    }
}

MissedArticleItem.propTypes = {
    item: PropTypes.object.isRequired
}


export default MissedArticleItem;