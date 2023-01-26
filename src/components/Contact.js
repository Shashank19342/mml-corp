import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from "./Home";

const Contact = () => {
  const form = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        alert("Success", result.text);
      },
      (error) => {
        alert("Failed", error.text);
      }
    );
  };
  return (
    <div className="contactFormPage">
      <div className="contactFormHeading">
        <h2>MML Corporation Private Limited</h2>
        <h4>Drop a mail or connect with us on Social Media</h4>
      </div>
      <div className="contact-form">
        <h2>E-Mail Us</h2>
        <form ref={form} onSubmit={handleSubmit}>
          <label>Name </label>
          <input type="text" placeholder="Name" name="user_name" />
          <label>Email</label>
          <input type="email" placeholder="Email" name="user_email" />
          <label>Mobile Number</label>
          <input type="text" placeholder="Mobile NUmber" name="user_phone" />
          <label>Message</label>
          <textarea rows="4" placeholder="Enter your message" name="message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
