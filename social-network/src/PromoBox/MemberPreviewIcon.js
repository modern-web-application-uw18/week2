import React, { Component } from 'react';

class MemberPreviewIcon extends Component {

  render() {
    return (
      <span className="member-preview-icon">
        <svg class="svgIcon-use" width="15" height="15" viewBox="0 0 15 15">
          <path d="M7.438 2.324c.034-.099.09-.099.123 0l1.2 3.53a.29.29 0 0 0 .26.19h3.884c.11 0 .127.049.038.111L9.8 8.327a.271.271 0 0 0-.099.291l1.2 3.53c.034.1-.011.131-.098.069l-3.142-2.18a.303.303 0 0 0-.32 0l-3.145 2.182c-.087.06-.132.03-.099-.068l1.2-3.53a.271.271 0 0 0-.098-.292L2.056 6.146c-.087-.06-.071-.112.038-.112h3.884a.29.29 0 0 0 .26-.19l1.2-3.52z">
          </path>
        </svg>
      </span>
    );
  }
}

export default MemberPreviewIcon;
