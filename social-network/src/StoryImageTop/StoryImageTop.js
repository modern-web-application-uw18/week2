import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MemberPreview from '../MemberPreview/MemberPreview';
import Flag from '../Flag/Flag';

class StoryImageTop extends Component {

  render() {
    console.log(JSON.stringify(this.props));  

    return (
<div className="u-borderBox u-size4of12  u-paddingLeft10 u-paddingRight10 u-xs-paddingLeft0 u-xs-paddingRight0 u-xs-size12of12 js-trackedPost js-sectionItem">
  <div className="u-sizeFullWidth u-height260 u-xs-heightAuto u-borderBox u-marginBottom20 u-backgroundColorWhite u-overflowHidden u-relative u-borderRadius2 u-borderBlackLightest">
    <div className="u-block u-backgroundSizeCover u-backgroundOriginBorderBox u-backgroundColorGrayLight u-height100 u-xs-height170" style={{backgroundPosition: "50% 50%", backgroundImage: `url(${this.props.image})`}}></div>
  
    <div className="u-borderBox u-flexColumn uiScale uiScale-ui--small uiScale-caption--small u-padding16 u-height160 u-xs-heightAuto">
      
      <div className="u-flex1 u-relative u-marginBottom4 u-xs-marginBottom10">
        <div className="u-flexColumnTop u-flexWrap u-overflowHidden u-absolute0 u-xs-relative">
          <div className="u-flex0 u-sizeFullWidth">
            {
              this.props.memberPreview ? <MemberPreview /> : null                        
            }
            <h3 className="ui-h3 ui-xs-clamp2 u-paddingTop4 ui-clamp2"><a href={this.props.link}>{this.props.title}</a></h3>          
          </div>
          <h4 className="ui-summary ui-clamp3 u-marginTop4">{this.props.description}</h4>        
        </div>      
      </div>
  
  <div className="u-flexCenter  u-flex0">
    
    <div className="u-flex0 u-paddingRight10">
      <div className="u-relative u-inlineBlock u-flex0">
        <img className="avatar-image avatar-image--smaller" src={this.props.authorImageUrl} alt="" />
      </div>      
    </div>
    
    <div className="u-flexTop u-noWrapWithEllipsis u-flex1">
      
      <div className="u-noWrapWithEllipsis u-flex1">
        <div className="ui-captionStrong u-noWrapWithEllipsis">
          <div className="postMetaInline postMetaInline-authorLockup u-padding0 u-noWrapWithEllipsis">
            {this.props.authorName}        
          </div>          
        </div>        
        <div className="ui-caption u-noWrapWithEllipsis">
          <span>{this.props.postedDate.toLocaleString('en-US', {month: 'short', day: 'numeric' })}</span>
          <span className="middotDivider u-fontSize12"></span>
          <span className="readingTime">{this.props.minutesToRead} min read</span>          
        </div>        
      </div>
      
      <div className="u-flex0 u-flexCenter u-textColorNormal u-paddingLeft5">
        <div className="u-flex0 u-flexCenter u-textColorNormal">
          <Flag />         
        </div>        
      </div>
      
    </div>    
  </div>      
</div>
</div>  
</div>
    );
  }
}

StoryImageTop.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,  
  link: PropTypes.string,
  description: PropTypes.string,
  authorImageUrl: PropTypes.string,
  authorName: PropTypes.string,
  postedDate: PropTypes.instanceOf(Date),
  minutesToRead: PropTypes.number,
  memberPreview: PropTypes.bool
};

export default StoryImageTop;
