import React, { Component } from 'react';
import './Card.css';
import CardTitle from '../CardTitle';
import ImageElement from '../ImageElement';
import CopyElement from '../CopyElement';
import ByElement from '../ByElement';


class Card extends Component {
  render() {

    // destructure title var from article object
    const {
      image,
      title,
      description,
      postedDate
    } = this.props.article;

    const {name} = this.props.article.author;

    const standardOptions = {
      month: "short",
      day: "numeric"
    };

    return (
      <section className='card__wrapper'>
        <ImageElement imageSrc={image} imageAlt='' />

        <div className='card__content'>
          <CardTitle title={title} class='heading-2'/>
          <CopyElement content={description} />
          <ByElement author={name}
            image={this.props.article.author.image}
            postedDate={new Date(postedDate).toLocaleString(
              'en-us', standardOptions
            )} />
        </div>
      </section>
    );
  }
}

export default Card;
