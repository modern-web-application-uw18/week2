import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissedArticles.css';
import UserBadge from '../UserBadge';

class MissedArticleItem extends Component {
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
                <div className="container my-panel-missed-width">
                    <div className="row my-panel-missed">
                        <div className="col-sm-12 nopadding" onClick={this.goToAddress(this.props.item.link)}>
                            <div className="image-box-missed" style={{ backgroundImage: `url(${this.props.item.image})` }}>
                            </div>
                        </div>
                    </div>
                    <div className="row my-panel-missed-text" >
                        <div className="col-sm-12">
                            <h6 className="title" onClick={this.goToAddress(this.props.item.link)}>{this.props.item.title}</h6>
                            <span className="body-text-missed"onClick={this.goToAddress(this.props.item.link)}>{this.props.item.description}</span>            
                            <UserBadge item={this.props.item}/>                     
                        </div>
                    </div>
                </div>
            </div>
        );

        
        if(breakLine) {
                return <span>{card} <div className="w-100" /></span>;
            } else {
                return <span>{card}</span>;      
            }
    }

    render() {    
        if (this.props.lnBreak % 3 === 2) {
            return this.renderCard(1); //render card and break on odd nr
        } else {
            return this.renderCard();//render card only otherwise
        }
    }
}

MissedArticleItem.propTypes = {
    item: PropTypes.object.isRequired
}



export default MissedArticleItem;