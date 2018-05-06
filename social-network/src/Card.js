import React, { Component } from 'react';
import './Card.css';
import Moment from '../node_modules/moment';

class Card extends Component {
  render() {
    // console.log(this.props.article);
    const {
      title,
      description,
      image,
      link,
      author,
      postedDate,
      minutesToRead,
      hasAudioAvailable,
      memberPreview
    } = this.props.article;
    return (
      <div className="cardWrapper">
        <div className="cardImgWrapper">
          <img className="cardImg" src={image} />
        </div>
        <div className="cardInfoWrapper">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cardAuthorWrapper">
            <div className="cardAuthorImgWrapper">
              <img className="cardAuthorImg" src={author.image} />
            </div>
            <div className="cardAuthorNameWrapper">
              <p className="cardAuthorName">{author.name}</p>
              <span className="cardAuthorDate">{Moment(postedDate).format('MMM D')} · {minutesToRead} min read</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;