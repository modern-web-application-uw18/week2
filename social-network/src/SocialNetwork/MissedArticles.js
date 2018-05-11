import React, { Component } from 'react';
import Author from './Authors/Author.js';

class MissedArticles extends Component {

    render(){
        const objArticles = this.props.dataMissedArticles;

        return(
        
            <div className = "missedSection">
            {
              objArticles.map(function(articles){
                const authorInfo = {
                    name: articles.author.name, 
                    image: articles.author.image, 
                    minutesToRead: articles.minutesToRead,
                    postdate: articles.postdate
                };
                return (
                <div className = "missedFlex-container">
                    <div className = "missedImage"><a href = {articles.link}><img src={articles.image} /></a></div>
                    <div className = "title" ><a href = {articles.link}>{articles.title}</a></div>
                    <div className = "description"><a href = {articles.link}>{articles.description}</a></div>
                    <br />
                    <div><Author authorInfo = {authorInfo}/></div>
                </div>
                )
              })
            }
            </div>
        );    
        
    }
}

export default MissedArticles;