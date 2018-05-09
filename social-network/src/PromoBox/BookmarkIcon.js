import React, { Component } from 'react';

class bookmarkIcon extends Component {

// const bookmarkIcon = React.createClass({

//   getInitialState: function() {
//     return {
//       fill: 'transparent',
//       color: "rgba(0,0,0,.54)"
//     }

//   },

//   handleClick: function() {
//     this.setState({
//       fill: '#03a87c',
//       color: '#03a87c'
//     })
//   },

  render() {
  //render : function() {

    return (
      <div className="bookmark-icon" >
        <svg width="25" height="25" viewBox="0 0 25 25"
            id="bookmarkIcon"
            // onClick={this.handleClick}
            // style={{backgroundColor:this.state.bgColor}}
            >
          <path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fill-rule="evenodd">
          </path>
        </svg>
      </div>
    );
  }
}

export default bookmarkIcon;
