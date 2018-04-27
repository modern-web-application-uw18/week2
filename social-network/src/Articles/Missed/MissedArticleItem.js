import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './MissedArticles.css';

class MissedArticleItem extends Component {
    constructor(props) {
        super(props);
        this.cardMaker = this.cardMaker.bind(this);
    }



    card = (
        <div className='col-sm'>

            <div className="container">


                <div className="row my-panel-missed">
                    <div className="col-sm-12 nopadding">
                        <div className="image-box-missed" style={{ backgroundImage: `url(${this.props.item.image})` }}>
                        </div>
                    </div>
                </div>


                <div className="row my-panel-missed-text" >
                    <div className="col-sm-12">
                    <h6 className="title">{this.props.item.title}</h6>
                    <span className="body-text-missed">{this.props.item.description}</span>
                   
                    </div>
                </div>




            </div>


        </div>
    );


    cardMaker() {
        if (this.props.lnBreak % 1) {
            return [this.card, <div className="w-100" />]
        } else {
            return this.card
        }
    }


    render() {
        return this.cardMaker();
    }
}

MissedArticleItem.propTypes = {
    item: PropTypes.object.isRequired
}



export default MissedArticleItem;