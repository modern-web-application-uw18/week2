import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YourArticles.css';
import moment from 'moment';
import MdBookmarkOutline from 'react-icons/lib/md/bookmark-outline';


class YouArticleItem extends Component {
    constructor(props) {
        super(props);
        this.cardMaker = this.cardMaker.bind(this);
        this.goToAddress = this.goToAddress.bind(this);
        this.changeColor = this.changeColor.bind(this);
        
    }

    
    changeColor() {
        alert(this);

    }
   

    goToAddress(link) {
        return function(){ window.open(link)};
    }

   

    card = (
        <div className='col-sm'>
            <div className="container" onClick={this.changeColor}>
                <div className="row my-panel">
                    <div className="col-sm-6 nopadding"  onClick={this.goToAddress(this.props.item.link)}>
                        <div className="imageBox" style={{ backgroundImage: `url(${this.props.item.image})` }}>
                        </div>
                    </div>
                    <div className="col-sm-6 nopadding">
                        <h6 className="title">{this.props.item.title}</h6>
                        <span className="body-text"  onClick={this.goToAddress(this.props.item.link)}>{this.props.item.description}</span>


                        <div className="user-badge">


                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-3 nopadding"  onClick={this.goToAddress(this.props.item.link)}>
                                        <img src={this.props.item.author.image} className="rounded-circle" width="40" height="40" alt={this.props.item.author.image} />
                                    </div>
                                    <div className="col-sm-7 nopadding"  onClick={this.goToAddress(this.props.item.link)}>
                                        <div className="name-badge-name">{this.props.item.author.name}</div><br/>
                                       { moment(this.props.item.postedDate).format("MMM D")}  &middot;   {this.props.item.minutesToRead} min read
                                     
                                    </div>
                                    <div className="col-sm-2 nopadding">
                                       <MdBookmarkOutline size={22} id="bookmarkIcon" onClick={this.changeColor}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );



    cardMaker() {
 
        if (this.props.lnBreak % 2) {
            return [this.card, <div className="w-100" />]
        } else {
            return this.card
        }
    }

    render() {
        return this.cardMaker();
    }
}

YouArticleItem.propTypes = {
    item: PropTypes.object.isRequired,
    lnBreak: PropTypes.number.isRequired
}


export default YouArticleItem;

