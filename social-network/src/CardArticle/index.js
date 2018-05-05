import React, { Component } from 'react';

class CardArticle extends Component {

  render(){
    const {
      title,
      image,
      author,
      description,
      link
    } = this.props.articles;

    // CSS props
    // var cardStyle = {
    //     width: '218px'
    // }


    // function getParsedDate(date){
    //   date = String(date).split(' ');
    //   var days = String(date[0]).split('-');
    //   var hours = String(date[1]).split(':');
    //   return [parseInt(days[0]), parseInt(days[1])-1, parseInt(days[2]), parseInt(hours[0]), parseInt(hours[1]), parseInt(hours[2])];
    // }
    // var date = new Date(...getParsedDate({postedDate}));
    // console.log(date);

    return (  
    <div className="media cardStyle">
        <a href={link}><img className="media-left" width="200" alt={description} src={image} /></a>
        <div className="media-body text-left">
          <h4><a href={link}>{title}</a></h4>
          <p className="card-text">{description}</p>
          <img src={author.image} alt={author} className="authorImage" />
          
        </div>
    </div>
    );
  }
}

export default CardArticle;