import React,{Component} from 'react';

export default class CardHeader extends Component {
    render() {
      const style1 = {
        backgroundImage: `${this.props.src}`
      };
      
        return (
          <header style={style1}>
          </header>
        );
    }
}
