import React, { Component } from 'react';

class MissedArticle extends Component {

  render(){
    const {
      title,
      image,
      description,
      link,
      author,
      minutesToRead
    } = this.props.missed;

    var divStyle = {
      background: 'url('+ image +')'
    }

    return (


      <div className="blog-container">
      <a href={link}
      data-action="open-post"
      data-action-value={link}
      className="articleLink">
        <div className="blog-header">
          <div className="blog-cover" style={divStyle}></div>
        </div>

        <div className="blog-body media-body">
          <div className="blog-title">
            <h4>{title}</h4>
          </div>
          <div className="blog-summary">
            <p>{description}</p>

            <img src={author.image} alt={author} className="authorImage" />
          <p className="minutes">
            {author.name} <br /><span> {minutesToRead} min read</span></p>

          </div>
        </div>
        </a>
      </div>
    );
  }
}

export default MissedArticle;
