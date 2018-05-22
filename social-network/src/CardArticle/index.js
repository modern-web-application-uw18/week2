import React, { Component } from 'react';

class CardArticle extends Component {

  render(){
    const {
      title,
      image,
      author,
      description,
      link,
      minutesToRead,
      postedDate
    } = this.props.articles;

    function getParsedDate(date){
      date = String(date).split(' ');
      var days = String(date[0]).split('-');
      var hours = String(date[1]).split(':');
      // return [parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];

      return [parseInt(days[1])-1];
    }

    var date = new Date(...getParsedDate({postedDate}));
    // console.log(date);

    return (
    <div className="media cardStyle">
    <a href={link}
      data-action="open-post"
      data-action-value={link}
      className="articleLink">
        <img className="media-left" width="200" alt={description} src={image} />
        <div className="media-body blog-title">
          <h4>{title}</h4>
          <p className="card-text">{description}</p>
          <img src={author.image} alt={author} className="authorImage" />
          <p className="minutes">
            {author.name} <br /><span>
            {getParsedDate(postedDate)} - {minutesToRead} min read</span></p>

        </div>
        </a>
    </div>
    );
  }
}

export default CardArticle;
