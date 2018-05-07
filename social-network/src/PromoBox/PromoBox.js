import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PromoBox.css';
import CitationBox from './CitationBox';
import MemberPreviewIcon from './MemberPreviewIcon';
import AudioElement from './AudioElement';

class PromoBox extends Component {

  getMemberPreview() {
    return (
      <div className="member-preview">
        <MemberPreviewIcon />
        <span>Member preview</span>
      </div>
    );
  }

  getAudioElement() {
    return (
      <AudioElement />
    );
  }

  getAudioMemberElement() {
    return (
      <div className="audio-and-member">
        <MemberPreviewIcon />
        <AudioElement />
      </div>
    );
  }


  render() {
    const {
      title, description, image, link, author, postedDate, minutesToRead, hasAudioAvailable, memberPreview
    } = this.props.promoInfo;
    const audioIcon = this.props.promoInfo.hasAudioAvailable;
    const memberPreviewElem = this.props.promoInfo.memberPreview;
    const backgroundMediaStyles = {
        backgroundImage: 'url(' + image + ')',
        position: "relative",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        alignItems: "stretch",
        flexGrow: 1
    };

    return (
      <section className="promo-box">
        <div className="media">
          <a href={this.props.promoInfo.link}>
            <div className="background-media" style={backgroundMediaStyles}></div>
          </a>
        </div>
        <div className="content">
          <div className="content-container">
            <a href={this.props.promoInfo.link}>
              <div className="articleInfo">
                {audioIcon && !memberPreviewElem ? this.getAudioElement() : null}
                {memberPreviewElem && !audioIcon ? this.getMemberPreview() : null}
                {memberPreviewElem && audioIcon ? this.getAudioMemberElement() : null}
                <h1>{this.props.promoInfo.title}</h1>
                <p>{this.props.promoInfo.description}</p>
              </div>
            </a>
          </div>
          <CitationBox citation={this.props.promoInfo} />
        </div>
      </section>
    );
  }
}

PromoBox.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  hasAudioAvailable: PropTypes.bool.isRequired,
  memberPreview: PropTypes.bool.isRequired,
  image: PropTypes.string.isRequired,
  postedDate: PropTypes.string.isRequired,
  author: PropTypes.object.isRequired
};

export default PromoBox;

