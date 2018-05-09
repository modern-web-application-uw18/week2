import React, { Component } from 'react';
import MdBookmarkOutline from 'react-icons/lib/md/bookmark-outline';
import PropTypes from 'prop-types';
import moment from 'moment';
import './UserBadge.css';


class UserBadge extends Component {
    constructor(props) {
        super(props);
        this.changeColor = this.changeColor.bind(this);
        this.goToAddress = this.goToAddress.bind(this);
        this.state={
            colorToChange : false
        }
        
    }

    goToAddress(link) {
        return () => window.open(link);
    }

    changeColor() {
        this.state.colorToChange ? this.setState({colorToChange:false}): this.setState({colorToChange:true});
    }

    render() {
       return(
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
                        <MdBookmarkOutline 
                        size={22}    
                        className={this.state.colorToChange ? 'bookmark-green' : 'bookmark-normal'}
                        onClick={this.changeColor}/>
                    </div>
                </div>
            </div>
        </div>
        )
    }


}



UserBadge.propTypes = {
    item: PropTypes.object.isRequired
}

export default UserBadge;