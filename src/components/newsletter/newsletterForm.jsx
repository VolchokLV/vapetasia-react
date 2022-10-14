import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lz6bg3h', 'template_r9qt37s', form.current, 'y0SHW5CdIrH4sQyfD')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      {/* <label>Name</label>
      <input type="text" name="user_name" /> */}
      <label>Email</label>
      <input type="email" name="user_email" />
      {/* <label>Message</label>
      <textarea name="message" /> */}
      <input type="submit" value="Send" />
    </form>
  );
};