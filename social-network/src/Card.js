import React, { Component } from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const propTypes = {
	title: PropTypes.string.isRequired, 
	description: PropTypes.string, 
	image: PropTypes.string, 
	link: PropTypes.string.isRequired, 
	author: PropTypes.object, 
	postedDate: PropTypes.instanceOf(Date), 
	minutesToRead: PropTypes.number, 
	hasAudioAvailable: PropTypes.bool, 
	memberPreview: PropTypes.bool
};

class Card extends Component {
	render() {
		let audioText = "";
		if (this.props.article.hasAudioAvailable) {
			audioText = "Audio available";
		}
		
		let previewText = "";
		if (this.props.article.memberPreview) {
			previewText = "Member preview";
		}
		
		const d = new Date(this.props.article.postedDate);
		const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		const dateMonth = months[d.getMonth()];
		const dateDay = d.getDay();
		const dateHR = dateMonth + " " + dateDay;
		
		return (
		  <div className="flex-container">
				<div className="grid-card" >
					<div className="grid-card-left">
						<img className="Card-img" src={this.props.article.image} />
					</div>
					<div className="grid-card-right">
						<p>{previewText}</p>
					  <p>{audioText}</p>
						<p className="Card-title">{this.props.article.title}</p>
						<p>{this.props.article.description}</p>
						<div className="grid-card-right-bottom">
							<img className="Card-Author-img" src={this.props.article.author.image} />
							<div>
								<p>{this.props.article.author.name}</p>
								<span>{dateHR} • </span>
								<span>{this.props.article.minutesToRead} min read</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		);	
	}
}

Card.propTypes = propTypes;

export default Card;
