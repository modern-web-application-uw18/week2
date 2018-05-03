import React, { Component } from 'react';
import './Card.css';

class Card extends React.Component {
    
    render() {
        const {
            title, 
            image, 
            description,
            author,
            postedDate,
            minutesToRead
        } = this.props.article;

        const d = new Date(postedDate);
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const date = months[d.getMonth()] + " " + d.getDate();

        return (
                <div className="col s12 m6">
                    <div className="card horizontal small">
                        <div className="card-image">
                            <img src={image} />
                        </div>

                        <div className="card-stacked">
                            <h5>{title}</h5>
                            <p>{description}</p>

                            <div className="card-author left-align">
                                <img className="circle responsive-img" src={author.image} />
                                <div className="center">
                                    <span>{author.name}</span>
                                    <br/>
                                    <span>{date} * {minutesToRead} min read</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default Card;