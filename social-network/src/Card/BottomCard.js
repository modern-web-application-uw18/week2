import React, {Component} from 'react';
import './Card.css';
import yourArticles from '../Articles/your-articles.json';
import missedArticles from '../Articles/missed-articles.json';
import PropTypes from 'prop-types';


const BottomCard = (props) => {
    const imagesList = missedArticles.map((f,idx) => {
        return (
            <div className="cardStyle">
                <img key={idx} alt={`Image`} src={missedArticles[idx].image}/>
                <h3>{missedArticles[idx].title}</h3>
                <h5>{missedArticles[idx].description}</h5>
                <p></p>
            </div>
        )
    })
    return (
        <div >{imagesList}</div>
    )
}
        
export default BottomCard;