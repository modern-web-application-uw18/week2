import React, { Component } from 'react';

class CardArticle extends Component {

  render(){
    const {
      title,
      image,
      author,
      description,
      postedDate,
      link
    } = this.props.articles;

    var divStyle = {
      background: 'url('+ image +')'
    }

    var authorPhoto = {
      background: 'url('+ author.image +') no-repeat'
    }

    return (  
      <div className="col-md-5 no-padding lib-item" data-category="view">
          <div className="lib-panel">
              <div className="row box-shadow">
                  <div className="col-md-6">
                      <img className="lib-img-show" src={image} />
                  </div>
                  <div className="col-md-6">
                      <div className="lib-row lib-header">
                          <h2>{title}</h2>
                          <div className="lib-header-seperator"></div>
                      </div>
                      <div className="lib-row lib-desc">
                          <p>{description}</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
  }
}

export default CardArticle;