import React from 'react'
import styles from './wholesaleRegistrationForm.css'

const WholesaleRegistration = () => {
  return (
   // WHOLESALE REGISTRATION FORM GOES HERE
  <>
    <iframe src={process.env.PUBLIC_URL + '/wholesale-registration.html'} height="800px" ></iframe>  
  </>
  )
}

export default WholesaleRegistration