import React, { Component } from 'react';

class MissedArticle extends Component {

  render(){
    const {
      title,
      image,
      description,
      link
    } = this.props.missed;

    var divStyle = {
      background: 'url('+ image +')'
    }

    return (
      <div class="blog-container">
        <div class="blog-header">
          <div class="blog-cover" style={divStyle}></div>
        </div>

        <div class="blog-body">
          <div class="blog-title">
            <h1><a href="#">{title}</a></h1>
          </div>
          <div class="blog-summary">
            <p>{description}</p>
          </div>
        </div>
        
        <div class="blog-footer">
          <div class="blog-author">
            <h3>Russ Beye</h3>
            <p>sdss</p>
          </div>
        </div>
      </div>
    );
  }
}

export default MissedArticle;