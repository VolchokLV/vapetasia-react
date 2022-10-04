import React from 'react'
import './warning.css';
// import Typekit from 'react-typekit';

const Warning = () => {
  return (
    <div className="easy-notification-bar easy-notification-bar--align_center">
      <div className="easy-notification-bar-container enb-textcenter">
        <div className="easy-notification-bar-message"> 
          <b>WARNING: This product contains nicotine. Nicotine is an addictive chemical.</b>
        </div>
      </div>
    </div>
  )
}

export default Warning