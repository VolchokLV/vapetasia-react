import React from "react";
import styles from "./wholesaleRegistrationForm.css";

const WholesaleRegistration = () => {
  return (
    // WHOLESALE REGISTRATION FORM GOES HERE
    <>
      <iframe
        title="Wholesale Registration "
        src={process.env.PUBLIC_URL + "/wholesale-registration.html"}
        height="1300px"
      ></iframe>
    </>
  );
};

export default WholesaleRegistration;
