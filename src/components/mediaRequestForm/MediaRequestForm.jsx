import React from 'react'
import styles from './mediaRequestForm.css'

const MediaRequestForm = () => {
  return (
    <iframe src={process.env.PUBLIC_URL + '/media-request.html'} height="800px" ></iframe>
  )
}

export default MediaRequestForm