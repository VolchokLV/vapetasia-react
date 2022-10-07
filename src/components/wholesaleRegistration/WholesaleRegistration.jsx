import React from 'react'
import styles from './wholesaleRegistration.css'

const WholesaleRegistration = () => {
  return (
   // WHOLESALE REGISTRATION FORM GOES HERE
   <>
   

{/* <iframe width='610px' height='840px' src='https://crm.zoho.com/crm/WebFormServeServlet?rid=098768d23b55f35c975dfc75c7bb6de298c4148d4adcc96111ba53d38056574cgidb86e36298673cf220aba57ce4dda9dd4a05e06a500473b2f4862c9daf1a9e6f2'></iframe> */}
{/* <iframe width='610px' height='840px' src=''></iframe>  */}
<iframe src={process.env.PUBLIC_URL + '/wholesale-registration.html'} height="800px" ></iframe>
  
   </>
  )
}

export default WholesaleRegistration