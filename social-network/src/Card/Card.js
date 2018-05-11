import React, { Component } from 'react';
import AuthorInfo from '../AuthorInfo/AuthorInfo';
import Summary from '../Summary/Summary';
import PropTypes from 'prop-types';
import './Card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="cardContainer">
        <div className="imageHeader" title={this.props.title} style={{ background: `url('${this.props.image}') center / cover no-repeat ` }} onClick={() => window.location = this.props.link}>
        </div>
        <div className="articleSummary">
          <Summary title={this.props.title} summary={this.props.description}/>
          <AuthorInfo user={this.props.author} postedDate={this.props.postedDate} minutesToRead={this.props.minutesToRead}/>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  link: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  author: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
  }),
  postedDate: PropTypes.string,
  minutesToRead: PropTypes.number,
};

Card.defaultProps = {
  link: '#',
  image: '#',
  title: 'No Title',
  description: 'No Description',
  author: {
    name: 'Random User',
    image: '#',
  },
  postedDate: '99/99/9999',
  minutesToRead: 3,
};
