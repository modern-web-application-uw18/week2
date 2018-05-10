import React, { Component } from 'react';

class Flag extends Component {

  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() 
  {
    this.setState(prevState => ( { isToggleOn: !prevState.isToggleOn } ));
  }

  render() {
    console.log(JSON.stringify(this.props)); 
    
    return (                        
      <button onClick={this.handleClick} style={{backgroundColor: this.state.isToggleOn ? null : "green"}} className="button button--chromeless is-touchIconFadeInPulse u-baseColor--buttonNormal button--withIcon button--withSvgIcon button--bookmark js-bookmarkButton"><span className="button-defaultState"><span className="svgIcon svgIcon--bookmark svgIcon--25px is-flushRight is-flushBottom"><svg className="svgIcon-use" width="25" height="25" viewBox="0 0 25 25"><path d="M19 6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v14.66h.012c.01.103.045.204.12.285a.5.5 0 0 0 .706.03L12.5 16.85l5.662 4.126a.508.508 0 0 0 .708-.03.5.5 0 0 0 .118-.285H19V6zm-6.838 9.97L7 19.636V6c0-.55.45-1 1-1h9c.55 0 1 .45 1 1v13.637l-5.162-3.668a.49.49 0 0 0-.676 0z" fillRule="evenodd"></path></svg></span></span></button>
    );
  }
}

export default Flag;
