import React from 'react'
import './warning.css';
// import Typekit from 'react-typekit';

const Warning = () => {
  return (
    <div class="easy-notification-bar easy-notification-bar--align_center">
      <div class="easy-notification-bar-container enb-textcenter">
        <div class="easy-notification-bar-message"> 
          <b>WARNING: This product contains nicotine. Nicotine is an addictive chemical.</b>
        </div>
      </div>
    </div>
  )
}

export default Warning