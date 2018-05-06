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
      <div className="cardWrapper cardWrapper2">
        <div className="cardImgWrapper cardImgWrapper2">
          <img className="cardImg cardImg2" src={image} />
        </div>
        <div className="cardInfoWrapper cardInfoWrapper2">
          <h2>{title}</h2>
          <p>{description}</p>
          <div className="cardAuthorWrapper cardAuthorWrapper2">
            <div className="cardAuthorImgWrapper cardAuthorImgWrapper2">
              <img className="cardAuthorImg cardAuthorImg2" src={author.image} />
            </div>
            <div className="cardAuthorNameWrapper cardAuthorNameWrapper2">
              <p className="cardAuthorName cardAuthorName2">{author.name}</p>
              <span className="cardAuthorDate cardAuthorDate2">{Moment(postedDate).format('MMM D')} · {minutesToRead} min read</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;