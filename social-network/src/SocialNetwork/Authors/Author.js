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
                        <div>{authorInfo.name}</div>
                        <div>AuthorLink</div>
                        <div>ReadTime</div>
                    </div>
                    
                </div>
                //)
              //})
            
            
        );    
        
    }
}

export default Author;