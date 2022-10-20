import React from 'react'
import './mediaRequestForm.css'

const MediaRequestForm = () => {
  return (
    <iframe title="MediaRequestForm" src={process.env.PUBLIC_URL + '/media-request.html'} height="675px" ></iframe>
  )
}

export default MediaRequestForm