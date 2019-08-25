import React, { Component } from 'react';
/*import './article.css';*/
import './flexstyle.css';
import PropTypes from 'prop-types';


 
class Article extends Component {
    render(){
        const{ //shove all data from json pull here.
            title,
            description,
            image,
            author 
        } = this.props.article;
        console.log(this.props); //for debugging
        return (
            <div className='Article-container'> 
                <div className="Article-img">
                   <img className = 'theImage' alt='Cover' src={this.props.article.image}/>
                </div>   
                <div className='nonImageStuff'>   
                    <p className='Article-title' >{this.props.article.title}</p>
                    <h4 className='Article-descripton'>{this.props.article.description}</h4>
                    <div className='Author'>
                        <img className='authorImage' alt='Author' src={this.props.article.author.image}/>
                        <p className='authorName'>{this.props.article.author.name}</p>  
                    </div>
                </div>
            </div>
        );
    }
}

Article.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
  };

export default Article;