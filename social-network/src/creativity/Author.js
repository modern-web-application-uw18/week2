import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Author.css';
import bookmark from '../img/icon-bookmark.svg';

class Author extends Component {

    render() {

        const {
            name,
            image,
            isMediumMember
        } = this.props.author;

        const showMember = (member) => {
            if (member) {
                return (
                    <div className="Author-image-member-container">
                        <img src={image} alt="" />
                    </div>
                )
            } else {
                return (
                    <div className="Author-image-container">
                        <img src={image} alt="" />
                    </div>
                )
            }
        }
        
        const formatDate = (date) => {
            const monthNames = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            let dateTime = date.split('T');
            let dateFields = dateTime[0].split('-');
            return monthNames[parseInt(dateFields[1], 10)] + ' ' + dateFields[2];
        }

        return (
            <div className="Author">
		        {showMember(isMediumMember)}
                <div className="Author-text-container">
                    <div className="Author-name">{name}</div>
                    <div className="Author-post">{formatDate(this.props.postdate)} &middot; {this.props.minutes} min read</div>
                </div>
                <div className="Article-bookmark-container">
                    <img src={bookmark} alt="Bookmark" />
                </div>
            </div>
        );
    }
}

Author.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string,
    ismember: PropTypes.bool.isRequired,
    postdate: PropTypes.string.isRequired,
    minutes: PropTypes.number.isRequired
};

Author.defaultProps = {
    name: 'Anonymous',
    ismember: false
};

export default Author;