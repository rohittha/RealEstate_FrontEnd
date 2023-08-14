import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from "./styles.module.css";
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Link, useNavigate } from "react-router-dom";

function ContactUs() {
  const form = useRef();
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5g0ovla', 'template_qcmsto4', form.current, 'fv6P9rcl7SDWR6649')
      .then((result) => {
        console.log("Message Sent!");
        console.log(result.text);
        alert("Your Message is sent!");
        navigate("/admindashboard");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <Navbar></Navbar>,
      <section className={styles.searchFields}>
        <form className={styles.form_container} ref={form} onSubmit={sendEmail}>
          <h3>Please provide your precise information so that we can reach out to you as soon as possible.</h3>
          <label className={styles.label}>Name</label>
          <input type="text" name="user_name" className={styles.input} required />
          <label className={styles.label}>Phone</label>
          <input type="phone" name="phone" className={styles.input} required />
          <label className={styles.label}>Your Email</label>
          <input type="email" name="user_email" className={styles.input} required />
          <label className={styles.label}>Message</label>
          <textarea className={styles.input} name="message" />
          <input type="submit" value="Send" className={styles.green_btn} required />
        </form>
      </section>,
      <Footer></Footer>

    </div>

  );
};

export default ContactUs;