import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PromoBox.css';
import CitationBox from './CitationBox';


class PromoBox extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: []
  //   };
  // }

  // addItem(item) {
  //   this.setState((prevState, props) => {
  //     return {

  //     };
  //   });
  // }

  render() {
    const {
      title, summary, url, featureImage, audioAvailable, authorName, authorAvatar, authorUrl, avatarHalo, datePosted, timeToRead, memberPreview
    } = this.props.promoInfo;

    const backgroundMediaStyles = {
        backgroundImage: 'url(' + featureImage + ')',
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        alignItems: "stretch",
        flexGrow: 1
    };
    return (
      <section className="promo-box">
        <div className="media">
          <a href={this.props.promoInfo.url}>
            <div className="background-media" style={backgroundMediaStyles}></div>
          </a>
        </div>
        <div className="content">
          <div className="content-container">
            <a href={this.props.promoInfo.url}>
              <div className="articleInfo">
                <h1>{this.props.promoInfo.title}</h1>
                <p>{this.props.promoInfo.summary}</p>
              </div>
            </a>
          </div>
          <CitationBox citation={this.props.promoInfo} />
        </div>
      </section>
    );
  }
}

export default PromoBox;

