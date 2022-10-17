import React from 'react'
import './mediaRequestForm.css'

const MediaRequestForm = () => {
  return (
    <iframe title="MediaRequestForm" src={process.env.REACT_BASE_URL + '/media-request.html'} height="800px" ></iframe>
  )
}

export default MediaRequestForm