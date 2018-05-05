import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dateformat from 'dateformat';
import './Articles.css';

class ArticleItem extends Component {
  render() {

    // const text = this.props.authorBio;
    // return <li className={this.props.complete ? 'strikethrough' : null}>{text}</li>;
    const au = this.props.author;
    const date = new Date(au.postedDate);
    const day = date.getDate();
    const month = date.getMonth() + 1
    const mon = Dateformat(month, "mmm");

    return (
      <div className={this.props.missedIt ? 'recommend-article' : 'creativity-article'} >
        <div className={this.props.missedIt ? 'recomm-image-position' : 'image-position'}>
          <img src={au.image}
          className ={this.props.missedIt ? 'recomm-image-box' : 'image-box'}
          alt={au.image} />
        </div>

        <div className={this.props.missedIt ? 'recommend-rest-article' : 'rest-article'}>
            <p className='article-title'>{au.title}</p>
            <p className='author-description'>{au.description}</p>

          <div className={ this.props.missedIt ? 'recomm-author-indent' : 'author-ident'}>
            <div className='author-image-position'>
              <img src={au.author.image} className='author-image' alt={au.author}/>
            </div>

            <div className='author-name'>
              <p>{au.author.name}</p>
              <p>{mon} {day}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ArticleItem.propTypes = {
  // authorBio: PropTypes.string.isRequired
  au: PropTypes.class
};

ArticleItem.defaultProps = {
  text: 'No item :(',
  // authorBio: 'No Bio found :('
};

export default ArticleItem;
