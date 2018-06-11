import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  render() {
    const {
      title,
      image,
      description,
      author
    } = this.props.article;
    return (
      <div className="page-box">
        <div className="flex-container">
          <div className="Card-box">
            <img className="Card-img" alt='Article Thumbnail' src={this.props.article.image} />
            <h2 className="Card-title">{this.props.article.title}</h2>
            <p className="Card-description">{this.props.article.description}</p>
            <div className='Card-author'>
              <img className='authorImage' alt='Author' src={this.props.article.author.image}/>
              <p className='authorName'>{this.props.article.author.name}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.protoTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
};

export default Card;
