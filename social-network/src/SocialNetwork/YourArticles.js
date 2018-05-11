import React, { Component } from 'react';
import './styles.css';

class YourArticles extends Component {

    render(){
        const objArticles = this.props.dataYourArticles;

        return(
        
            <div className = "yourSection">
            {
              objArticles.map(function(articles){
                return (
                <div className = "yourFlex-container">
                    <div><img src={articles.image} className = "yourImage" /></div>
                    <div>
                    <div className = "title" >{articles.title}</div>
                    <div className = "description">{articles.description}</div>
                    <div>{articles.author.name}</div>
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