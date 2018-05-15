import React, { Component } from 'react';
/*import './article.css';*/
import './flexstyle.css';
import PropTypes from 'prop-types';

class Missed_article extends Component {
    render(){
     /*   const{ //shove all data from json pull here.
            title,
            description,
            image,
            author, //Author object (Want name & image)
            link
        } = this.props.article; */
        console.log(this.props.article); //for debugging
        return (
            <div className='Missed_article-container'> 
                <div className="Article-img2">
                    <img className = 'theImage2' alt='missedCover' src={this.props.article.image}/> 
                </div>   
                <div className='nonImageStuff2'>   
                    <p className='Article-title' >{this.props.article.title}</p>
                    <h4 className='Article-descripton2'>{this.props.article.description}</h4>
                    <div className='Author2'>
                        <img className='authorImage' alt='missedCover' src={this.props.article.author.image}/>
                        <p className='authorName'>{this.props.article.author.name}</p>
                        
                    </div>
                </div>
            </div>
        );
    }
}

Missed_article.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

export default Missed_article;