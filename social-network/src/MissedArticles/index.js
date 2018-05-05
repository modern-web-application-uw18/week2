import React, { Component } from 'react';

class MissedArticle extends Component {

  render(){
    const {
      title,
      image,
      description,
      link,
      author
    } = this.props.missed;

    var divStyle = {
      background: 'url('+ image +')'
    }

    return (
      <div class="blog-container" onClick={link}>
        <div class="blog-header">
          <div class="blog-cover" style={divStyle}></div>
        </div>

        <div class="blog-body media-body">
          <div class="blog-title">
            <h4><a href={link}>{title}</a></h4>
          </div>
          <div class="blog-summary">
            <p>{description}</p>
            <img src={author.image}  alt={author} className="authorImage" />
            <p>{author.name} </p>
          </div>
        </div>
      </div>
    );
  }
}

export default MissedArticle;