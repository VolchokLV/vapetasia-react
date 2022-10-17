import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const NewsletterForm = () => {

  const [userEmail, setUserEmail] = useState('');
  const [submitState, setSubmitState] = useState('initial');
  const [formError, setFormError] = useState('');

  const emailForm = useRef();

  const updateEmail = (e) => {
    setFormError(''); //reset when email updated
    setUserEmail(e.target.value);
  };

  const sendEmail = (e) => {
  
    e.preventDefault();

    setSubmitState('pending');
    setFormError(''); //reset when email updated

    try {
      emailjs.sendForm('service_lz6bg3h', 'template_r9qt37s', emailForm.current, 'y0SHW5CdIrH4sQyfD')
        .then((result) => {
            console.log(result.text);
            setSubmitState('complete');
        }, (error) => {
            console.log(error.text);
            setSubmitState('initial');
            setFormError(error.text);
        });
      } catch (e) {
        console.log(e);
        setSubmitState('initial');
        if (JSON.stringify(e).includes('is not a valid selector.')) {
          setFormError('Invalid email submitted. Please try again.');
        } else {
          setFormError(JSON.stringify(e));
        }
      }
  };

  return (
    <form className="vapetasia-form" ref={emailForm} onSubmit={sendEmail} method="get" name="Newsletter Signup">
      <div className="vapetasia-form-fields-wrapper vapetasia-labels-">
        <div className="vapetasia-field-type-email vapetasia-field-group vapetasia-column vapetasia-field-group-email vapetasia-col-100 vapetasia-field-required"> 
          <input size="1" type="email" name="user_email" value={userEmail} onChange={updateEmail} className="vapetasia-field vapetasia-size-sm  vapetasia-field-textual" placeholder="Email" required="required" aria-required="true" disabled={submitState !== 'initial'} />
        </div>
        <div className="vapetasia-field-group vapetasia-column vapetasia-field-type-submit vapetasia-col-100 e-form__buttons"> 
          <button type="submit" className="vapetasia-button-newsletter vapetasia-button vapetasia-size-sm" disabled={submitState !== 'initial'}> 
            <span> 
              <span className=" vapetasia-button-icon"> </span> 
              <span className="vapetasia-button-text">
                { submitState === 'complete' ? 'Thanks! Email added.' : 'Sign up now' }</span> 
            </span> 
          </button>
        </div>
      </div>
      {
        formError !== '' ?
          <div>
            {formError}
          </div>
          :
          <div></div>
      }
    </form>
  );
};