import React,{Component} from 'react';
import PropTypes from 'prop-types';

export default class Summary extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

    render() {
        return (
          <div className="summary">
            <h3>{this.props.title}</h3>
            <p>{this.props.summary}</p>
          </div>
        );
    }
}

Summary.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
}

Summary.defaultProps = {
  title: 'No Title',
  summary: '',
}
