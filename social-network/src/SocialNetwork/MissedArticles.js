import React, { Component } from 'react';


class MissedArticles extends Component {

    render(){
        const objArticles = this.props.dataMissedArticles;

        return(
        
            <ul>
            {
              objArticles.map(function(articles){
                return <li>{articles.title} - {articles.description}</li>;
              })
            }
            </ul>
        );    
        
    }
}

export default MissedArticles;