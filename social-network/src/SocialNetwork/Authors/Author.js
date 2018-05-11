import React, { Component } from 'react';


class Author extends Component {

    render(){
        const authorInfo = this.props.authorInfo;
        console.log(authorInfo);
        return(
        
            
            
              //authorInfo.map(function(author){
                //return (
                <div className = "authorSection">
                    <div><img src={authorInfo.image} className = "authorImage" /></div>
                    <div>
                        <div><a href = {authorInfo.link}>{authorInfo.name}</a></div>
                        <div>{authorInfo.minutesToRead} min read</div>
                    </div>
                    
                </div>
                //)
              //})
            
            
        );    
        
    }
}

export default Author;