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
      <div>
        <img className="Card-img" src={image} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <img className="Card-author-img" src={author.image} />
          <p>{author.name}</p>
          <span>{Moment(postedDate).format('MMM D')} · {minutesToRead} min read</span>
        </div>
      </div>
    );
  }
}

export default Card;