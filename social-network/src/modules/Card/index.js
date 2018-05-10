import React, { Component } from 'react';
import './Card.css';
import TitleMod from '../TitleMod';
import ElementMod from '../ElementMod';
import CopyMod from '../CopyMod';

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
        <ElementMod imageSrc={image} imageAlt='' />

        <div className='card__content'>
          <TitleMod title={title} class='heading-2'/>
          <CopyMod content={description} />
          <ElementMod author={name}
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
