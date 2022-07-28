import { Button, Typography } from "@mui/material";
//import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

function Contact() {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ov7uewq",
        "template_t0h0cbd",
        e.target,
        "4zHRKViWPRC6TW5Ov"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="contact">
      <div className="contactRightBar"></div>
      <div className="contactContainer">
        <form className="contactContainerForm" onSubmit={sendEmail}>
          <Typography variant="h4">Contact Us</Typography>
          <input
            type="taxt"
            placeholder="Name"
            required
            name="name"
            // value={name}
            //onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            required
            name="subject"
            //onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Message"
            required
            cols="30"
            rows="10"
            name="message"
            // value={message}
            // onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <Button variant="contained" type="submit">
            Send
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
