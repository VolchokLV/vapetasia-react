import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./tradeshowRegistrationForm.css";

export const TradeShowRegistrationForm = () => {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [received, setReceived] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setSent(true); //show disabled form state
    setErrorMessage(null); //in case it was lingering

    emailjs
      .sendForm(
        "service_lz6bg3h",
        "template_1hf9s1j",
        form.current,
        "y0SHW5CdIrH4sQyfD"
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
        <p>Please fill out the form below to submit a tradeshow contact</p>
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
          {/* <div className="form-block">
            <label>Address</label>
            <input
              type="text"
              name="address"
              disabled={sent}
              id="contact-form-address"
            />
          </div> */}
          <div className="form-block">
            <label>EIN:</label>
            <input
              type="text"
              name="ein"
              disabled={sent}
              id="contact-form-ein"
            />
          </div>
          <div className="form-block">
            <label>Sales Rep</label>
            <select name="sales_rep" disabled={sent} id="contact-form-ein">
              <option value="Danny">Danny</option>
              <option value="Tyler">Tyler</option>
              <option value="Joey">Joey</option>
              <option value="Bonn">Bonn</option>
            </select>
          </div>
          <div className="form-block">
            <label>Message: (optional)</label>
            <textarea name="message" disabled={sent} />
          </div>
          <input type="submit" value="Send" disabled={sent} />
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
