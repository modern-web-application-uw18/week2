import React, {Component} from 'react';
import './Card.css';
import ImageList from '../ImageList/ImageList';


class Card extends Component {
    render () {        
        return (
            <div>
                <ImageList/>
            </div>
        )
    }
}

export default Card;