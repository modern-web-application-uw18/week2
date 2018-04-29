import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YourArticles.css';
import UserBadge from '../Common/UserBadge';
import Title from '../Common/Title';
import BodyText from '../Common/BodyText';
import ImageBox from '../Common/ImageBox';

class YouArticleItem extends Component {
    constructor(props) {
        super(props);
        this.goToAddress = this.goToAddress.bind(this);
        this.renderCard = this.renderCard.bind(this);
    }


    goToAddress(link) {
        return () => window.open(link);
    }

    renderCard(breakLine){
        let card = (
            <div className='col-sm'>
                <div className="container">
                    <div className="row my-panel">
                        
                        <ImageBox item={this.props.item} colClass="col-sm-6 nopadding"/>

                        <div className="col-sm-6">
                            <Title item={this.props.item}/>
                            <BodyText item={this.props.item}/>
                            <UserBadge item={this.props.item}/>                     
                        </div>
                        
                    </div>
                </div>
            </div>
        )

        if(breakLine) {
        return <span>{card} <div className="w-100" /></span>;
        } else {
            return <span>{card}</span>;      
        }

    }


    render() {    
        if (this.props.lnBreak % 2) {
            return this.renderCard(1); //render card and break on odd nr
        } else {
            return this.renderCard();//render card only otherwise
        }
    }
}

YouArticleItem.propTypes = {
    item: PropTypes.object.isRequired,
    lnBreak: PropTypes.number.isRequired
}


export default YouArticleItem;

