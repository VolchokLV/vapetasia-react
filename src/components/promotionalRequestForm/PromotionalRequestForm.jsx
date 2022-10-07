import React from 'react'
import styles from './promotionalRequestForm.css'

const PromotionalRequestForm = () => {
  return (
    <>
    <iframe src={process.env.PUBLIC_URL + '/promotional-request.html'} height="800px" ></iframe>
    </>
  )
}

export default PromotionalRequestForm