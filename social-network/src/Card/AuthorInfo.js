import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Image from './Image';

export default class AuthorInfo extends Component {
  constructor(props){
    super(props);
    this.state = {};
  }

    render() {
        return (
          <div className="articleInfo">
            <Image className="profilePic" src={this.props.user.image} alt={this.props.user.name}/>
            <a className="authorProfile" href="#">{this.props.user.name}</a>
            <div className="postDate">{this.props.postedDate}</div>
            <div className="readDuration">{this.props.minutesToRead}</div>
          </div>
        );
    }
}

AuthorInfo.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  postedDate: PropTypes.string.isRequired,
  minutesToRead: PropTypes.number.isRequired,
}
