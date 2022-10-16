import "./AboutUsAndForm.css";
import React, {useRef} from "react";
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_d9pdw89';
const TEMPLATE_ID = 'template_4zlnkvl'
const PUBLIC_KEY = 'user_2zDol7bSrAHjTXt85E49r';

export default function AboutUsAndForm() {

  const form = useRef();
  const handleSubmit = (e)=>{
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
    .then((result) => {
        alert("Success",result.text);
    }, (error) => {
        alert("Failed",error.text);
    });
  }

  return (
    <div className="aboutusAndForm" id="contact-form">
      <div className="aboutus">
        <h2>About Us</h2>
        <p>
          A Noted Manufacturer, Exporter and Supplier, we deal in a wide array
          of Self Adhesive Tapes, Packing Tapes, Clear Tapes, which are
          manufactured in our in-house automatic production setup. The
          production process is conducted with extreme vigilance and focus
          towards quality which includes selection of the potential vendor for
          the supply of raw materials and the production process itself.
          Supervised by our industry experts, these process are carried off
          flawlessly reducing the human errors to bare minimum. The products we
          are offer are known for their excellent finishing, adhesiveness and
          appropriate thichness aling with exceptional packaging.
        </p>
      </div>
      <div className="form-container">
        <div className="contact-form">
          <h2>Connect with Us</h2>
          <form ref={form} onSubmit={handleSubmit}>
              <label>Name </label>
              <input type="text" placeholder="Name" name="user_name" />
              <label>Email</label>
              <input type="email" placeholder="Email" name="user_email" />
              <label>Message</label>
              <textarea rows="4" placeholder="Enter your message" name="message" />
              <button type="submit">Send</button>
          </form>
        </div>
        <div className="form-bg"></div>
      </div>
    </div>

  );
}
