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
                    minutesToRead: articles.minutesToRead
                };
                return (
                <div className = "missedFlex-container">
                    <div><img src={articles.image} className = "missedImage" /></div>
                    <div className = "title" >{articles.title}</div>
                    <div className = "description">{articles.description}</div>
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