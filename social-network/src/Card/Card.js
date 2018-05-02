import React from 'react';
import './Card.css';

class Card extends Component {
    constructor(props) {
        super(props)
    }

    render (){
        <div className={cardStyle}>
            <img src={props.list}/>
        </div>
    }
}

export default Card;