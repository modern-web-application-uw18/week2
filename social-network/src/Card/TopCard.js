import React, {Component} from 'react';
import './Card.css';
import yourArticles from '../Articles/your-articles.json';
import missedArticles from '../Articles/missed-articles.json';
import PropTypes from 'prop-types';


const TopCard = (props) => {
    const imagesList = yourArticles.map((f,idx) => {
        return (
            <div className="cardStyle">
                <img key={idx} alt={`Image`} src={yourArticles[idx].image}/>
                <h3>{yourArticles[idx].title}</h3>
                <h5>{yourArticles[idx].description}</h5>
                <p></p>
            </div>
        )
    })
    return (
        <div >{imagesList}</div>
    )
}
        
export default TopCard;