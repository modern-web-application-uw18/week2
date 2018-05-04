import React, { Component } from 'react';
import Image from './Image';
import AuthorInfo from './AuthorInfo';
import Summary from './Summary';
import PropTypes from 'prop-types';
import CardHeader from './CardHeader';
import './Card.css';

export default class Card extends Component {
  constructor(props){
  	super(props);
  	this.state = {};
  }

  render() {
    return (
      <div className="cardContainer" onClick={() => window.location = this.props.link}>
        <div className="imageHeader" style={{background: `url('${this.props.image}') center / cover no-repeat `}}>
        </div>
        <Summary title={this.props.title} summary={this.props.description}/>
        <footer>
          <AuthorInfo user={this.props.author} postedDate={this.props.postedDate} minutesToRead={this.props.minutesToRead}/>
        </footer>
      </div>
    );
  }
}

Card.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
};
