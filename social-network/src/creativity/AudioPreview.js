import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AudioPreview.css';
import speaker from '../img/icon-speaker.png';
import star from '../img/icon-star.svg';

class AudioPreview extends Component {

    render() {

        if (this.props.hasAudioAvailable) {
            return (
                <div className="AudioPreview">
                    <div className="Article-audio-image">
                        <img src={speaker} alt="Play Audio" />
                    </div>
                    <div className="Article-audio-text">Audio Available</div>
                    {this.props.memberPreview ? (
                        <div className="Article-star-container">
                            <img src={star} alt="" />
                        </div>
                    ) : null}
                </div>
            )
        } else if (this.props.memberPreview) {
            return (
                <div className="AudioPreview">
                    <div className="Article-star-container">
                        <img src={star} alt="" />
                    </div>
                    <div className="Article-audio-text">Member preview</div>
                </div>
            )
        } else {
            return null;
        }
    }
}


AudioPreview.propTypes = {
    hasAudioAvailable: PropTypes.bool.isRequired,
    memberPreview: PropTypes.bool.isRequired
};


AudioPreview.defaultProps = {
    hasAudioAvailable: false,
    memberPreview: false
};

export default AudioPreview;