import React, { Component } from 'react';
import './styles.css';

class YourArticles extends Component {

    render(){
        const objArticles = this.props.dataYourArticles;

        return(
        
            <ul>
            {
              objArticles.map(function(articles){
                return (
                <div className = "flex-container">
                    <div><img src={articles.image} className = "image" /></div>
                    <div>
                    <div>{articles.title}</div>
                    <br />
                    <div>{articles.description}</div>
                    <br />
                    <div>{articles.author.name}</div>
                    </div>
                </div>

                )
              })
            }
            </ul>
        );    
        
    }
}

export default YourArticles;