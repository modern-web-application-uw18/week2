import React, { Component } from 'react';
import './styles.css';
import Author from './Authors/Author';

class YourArticles extends Component {

    render(){
        const objArticles = this.props.dataYourArticles;

        return(
        
            <div className = "yourSection">
            {
              objArticles.map(function(articles){
                const authorInfo = {
                    name: articles.author.name, 
                    image: articles.author.image, 
                    minutesToRead: articles.minutesToRead,
                    postdate: articles.postdate
                };  
                return (
                <div className = "yourFlex-container">
                    <div className = "yourImage" ><a href = {articles.link}><img src={articles.image} className = "yourImageSize"/></a></div>
                    <div>
                    <div className = "yourTitle" ><a href = {articles.link}>{articles.title}</a></div>
                    <div className = "yourDescription"><a href = {articles.link}>{articles.description}</a></div>
                    <div><Author authorInfo = {authorInfo}/></div>
                    </div>
                </div>
                )
              })
            }
            </div>
        );    
        
    }
}

export default YourArticles;