import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './YourArticles.css';


class YouArticleItem extends Component {
    constructor(props){
        super(props);
        this.lineBreaker = this.lineBreaker.bind(this);
    }


card = (
    <div className='col'>
    
        {/* <div className='card'>
    
            <h6><a href={this.props.item.link}>{this.props.item.title}</a></h6>
    
        </div> */}

        
        <div className="card">
  <img className="card-img-top" src={this.props.item.image} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{this.props.item.title}</h5>
    <p className="card-text">{this.props.item.description}</p>
    <a href={this.props.item.link} className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    
    
    </div>
);
    

    lineBreaker(){
        if(this.props.lnBreak % 2) {
            return [this.card,<div className="w-100"/>]
        } else {
            return this.card
        }
        
    }

    render() {

        return this.lineBreaker();


    }
}

YouArticleItem.propTypes = {
    item: PropTypes.object.isRequired,
    lnBreak: PropTypes.number.isRequired
}


export default YouArticleItem;

