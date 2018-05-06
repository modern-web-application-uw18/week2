import React, { Component } from 'react';
import './CitationBox.css';

class CitationBox extends Component {

  authorPhotoHalo() {
    return (
      <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.44615311,11.6601601 C6.57294867,5.47967718 12.9131553,1.5 19.9642857,1.5 C27.0154162,1.5 33.3556228,5.47967718 36.4824183,11.6601601 L37.3747245,11.2087295 C34.0793076,4.69494641 27.3961457,0.5 19.9642857,0.5 C12.5324257,0.5 5.84926381,4.69494641 2.55384689,11.2087295 L3.44615311,11.6601601 Z">
        </path>
        <path d="M36.4824183,28.2564276 C33.3556228,34.4369105 27.0154162,38.4165876 19.9642857,38.4165876 C12.9131553,38.4165876 6.57294867,34.4369105 3.44615311,28.2564276 L2.55384689,28.7078582 C5.84926381,35.2216412 12.5324257,39.4165876 19.9642857,39.4165876 C27.3961457,39.4165876 34.0793076,35.2216412 37.3747245,28.7078582 L36.4824183,28.2564276 Z">
        </path>
      </svg>
    );
  }

  render() {
    const setAuthorPhotoHalo = this.props.citation.avatarHalo;
    return (
      <div className="citation-box">
        <div className="author-photo">
          {setAuthorPhotoHalo ? this.authorPhotoHalo() : null}
          <img src={this.props.citation.authorAvatar} className="author-photo" alt={this.props.citation.authorName} title={this.props.citation.authorName}/>
        </div>
        <div className="author-info">
          <a href={this.props.citation.authorUrl} rel="author">{this.props.citation.authorName}</a>
          <p>{this.props.citation.datePosted} · {this.props.citation.timeToRead} read</p>
        </div>
        <div className="bookmark-icon">
          <svg class="svgIcon-use" width="25" height="25" viewBox="0 0 25 25">
            <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">
            </path>
          </svg>
        </div>
      </div>
    );
  }
}

export default CitationBox;
