import React, { Component } from 'react';

class AudioElement extends Component {

  render() {
    return (
      <div className="audio">
        <span className="audio-icon">
          <svg class="svgIcon-use" width="21" height="21" viewBox="0 0 21 21">
            <g stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.4 7s2.64 3.562 0 6.876"></path>
              <path d="M15 8.556s1.6 2.38 0 4.402"></path>
            </g>
            <path d="M11.896 3.01a.186.186 0 0 0-.184.037L6.467 7.701H3.213c-.092 0-.213.062-.213.143v5.28c0 .08.115.303.213.303h3.139L11.717 18h.185a.168.168 0 0 0 .098-.155V3.147a.14.14 0 0 0-.104-.137z">
            </path>
          </svg>
        </span>
        <span>Audio available</span>
      </div>
    );
  }
}

export default AudioElement;

