import React, {Component} from 'react';
import './Card.css';
import yourArticles from '../Articles/your-articles.json';
import missedArticles from '../Articles/missed-articles.json';
import PropTypes from 'prop-types';


const TopCard = (props) => {
    const imagesList = yourArticles.map((f,idx) => {
        return (
            <div className="cardStyle">
                <div>
                    <img key={idx} alt={`Image`} src={yourArticles[idx].image}/>
                </div>
                <div className="cardStyle">
                    <h3>{yourArticles[idx].title}</h3>
                    <h5>{yourArticles[idx].description}</h5>
                    <img  key={idx} alt={`Image`} src={yourArticles[idx].author.image}/>
                    <h5>{yourArticles[idx].author.name}</h5>
                    <p>{yourArticles[idx].postedDate}</p>
                </div>
            </div>
        )
    })
    return (
        <div>{imagesList}</div>
    )
}
        
export default TopCard;