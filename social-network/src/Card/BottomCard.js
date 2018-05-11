import React, {Component} from 'react';
import './Card.css';
import yourArticles from '../Articles/your-articles.json';
import missedArticles from '../Articles/missed-articles.json';
import PropTypes from 'prop-types';


const BottomCard = (props) => {
    const imagesList = missedArticles.map((f,idx) => {
        return (
            <div className="cardStyle">
            <div>
                <img key={idx} alt={`Image`} src={missedArticles[idx].image}/>
            </div>
            <div className="cardStyle">
                <h3>{missedArticles[idx].title}</h3>
                <h5>{missedArticles[idx].description}</h5>
                <img  key={idx} alt={`Image`} src={missedArticles[idx].author.image}/>
                <h5>{missedArticles[idx].author.name}</h5>
                <p>{missedArticles[idx].postedDate}</p>
            </div>
        </div>
    )
})
    return (
        <div >{imagesList}</div>
    )
}
        
export default BottomCard;