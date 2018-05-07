import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from '../Image/Image';
import './ArticleAuthor.css';

export default class ArticleAuthor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmark: false,
    };
  }

  /**
  * Returns the month and day
  * @param {string} postedDate - the date that the article was posted
  */
  dateToString(postedDate) {
    const myDate = new Date(postedDate);
    const myMonth = myDate.toLocaleString('en-us', { month: 'short' });
    return `${myMonth} ${myDate.getDate()}`;
  }

  /**
  * toggles the bookmark icon and saves the current state
  * @param {object} e - the click event
  * @param {boolean} bookmark - the current saved state of bookmark
  */
  bookmarkArticle(e, bookmark) {
    const prevState = bookmark;
    if (bookmark) {
      e.target.classList.replace('fas', 'far');
    } else {
      e.target.classList.replace('far', 'fas');
    }

    /**
    * Set the state to the opposite of what it was previously
    */
    this.setState(() => {
      return {
        bookmark: !prevState,
      };
    });
  }

    render() {
        return (
          <div className="footer">
            <Image className="profilePic" src={this.props.user.image} alt={this.props.user.name}/>
            <div className="articleInfo">
              <div className="author">
                <a href={this.props.link}>{this.props.user.name}</a>
              </div>
              <div className="articleNotes">
                <span className="postDate">
                  {this.dateToString(this.props.postedDate)}
                </span> - <span className="readDuration">
                  {this.props.minutesToRead} min read
                </span>
              </div>
            </div>
            <div className="bookmark">
              <i className="far fa-bookmark fa-lg" onClick={(e) => { this.bookmarkArticle(e, this.state.bookmark); }}></i>
            </div>
          </div>
        );
    }
}

ArticleAuthor.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string,
  }),
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
}
