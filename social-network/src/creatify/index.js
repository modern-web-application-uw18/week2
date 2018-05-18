import React, { Component } from 'react';
import yourArticles from './your-articles.json';
import '../App.css';

class Creativityarticle extends Component {
  constructor(props){
    super(props)
    this.state = {
      articles: yourArticles
  }
  }
    render() {
      let articles = this.state.articles.map((article, idx) => {
        return(
          <div className="flex-item" key={idx}>
          <div>
            <img src={article.image} height="258" width="200" alt=""></img>
            </div>
            <div>
            <p>{article.title}</p>
            <p>{article.description}</p>
            <p>{article.author.name}</p>
            </div>
            </div>
        )
  })
  return (
    <div className="flex-container">
      {articles}
    </div>
  )
}
}



export default Creativityarticle;

 