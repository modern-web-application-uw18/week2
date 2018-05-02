import React, {Component} from 'react';
import './Card.css';
import ImageList from '../ImageList/ImageList';


class Card extends Component {
    render () {        
        return (
            <div className={this.props.cardStyle}>
                <ImageList/>
            </div>
        )
    }
}

export default Card;