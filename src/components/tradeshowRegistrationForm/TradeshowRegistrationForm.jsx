import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./tradeshowRegistrationForm.css";
import ReCAPTCHA from "react-google-recaptcha";

export const TradeShowRegistrationForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [received, setReceived] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true); //show disabled form state
    setErrorMessage(null); //in case it was lingering

    //Validate reCAPTCHA
    const recaptchaValue = form.current["g-recaptcha-response"].value;
    if (!recaptchaValue) {
      setSent(false);
      setErrorMessage("Please verify that you are not a robot.");
      return;
    }

    emailjs
      .sendForm(
        "service_lz6bg3h",
        "template_1hf9s1j",
        form.current,
        "y0SHW5CdIrH4sQyfD",
        { "g-recaptcha-response": recaptchaValue }
      )
      .then(
        (result) => {
          console.log(result.text);
          setReceived(true);
        },
        (error) => {
          console.log(error.text);
          setSent(false);
          setErrorMessage("Unable to submit. Please try again.");
        }
      );
  };

  return (
    <section className="tradeshowRegistration">
      <div id="tradeshow-registration">
        <h1>Tradeshow Registration Form</h1>
        <p>Please fill out the form below to submit a tradeshow contact.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-block">
            <label>Contact Name:</label>
            <input
              type="text"
              name="contact_name"
              disabled={sent}
              id="tradeshow-form-name"
            />
          </div>
          <div className="form-block">
            <label>Contact Title:</label>
            <input
              type="text"
              name="contact_title"
              disabled={sent}
              id="tradeshow-form-title"
            />
          </div>
          <div className="form-block">
            <label>Company Name:</label>
            <input
              type="text"
              name="company_name"
              disabled={sent}
              id="tradeshow-form-name"
            />
          </div>
          <div className="form-block">
            <label>Phone Number:</label>
            <input type="phone" name="user_phone" disabled={sent} />
          </div>
          <div className="form-block">
            <label>Email:</label>
            <input type="email" name="user_email" disabled={sent} />
          </div>
          <div className="form-block">
            <label>EIN or Tax ID:</label>
            <input
              type="text"
              name="ein"
              disabled={sent}
              id="contact-form-ein"
            />
          </div>
          <div className="form-block">
            <label>Sales Rep:</label>
            <input
              type="text"
              name="sales_rep"
              disabled={sent}
              id="contact-form-ein"
            />
          </div>
          <div className="form-block">
            <ReCAPTCHA
              sitekey="6Ldq1KYkAAAAAOCIW7QQtMGMWvyXtYw_6CuXh3nJ"
              onChange={(value) => console.log("reCAPTCHA value: ", value)}
            />
          </div>

          <div className="form-block">
            <label>Message: (optional)</label>
            <textarea name="message" disabled={sent} />
          </div>
          <input type="submit" value="Submit" disabled={sent} />
        </form>
        {received ? (
          <p className="success-message">Received! We'll reach out soon.</p>
        ) : (
          <></>
        )}
        {errorMessage ? <p className="error-message">{errorMessage}</p> : <></>}
      </div>
    </section>
  );
};

export default TradeShowRegistrationForm;
