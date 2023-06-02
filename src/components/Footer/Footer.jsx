import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

function Footer() {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is omprakash yadav I am a MERN Stack Devloper
        </Typography>
        <Link to="contact " className="footerContactBtn">
          <Typography>Contact Us</Typography>
        </Link>
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/omprakash-yadav" target="black">
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/omprakash-yadav-768857192/"
          target="black"
        >
          <BsLinkedin />
        </a>
        {/* <a href="https://www.instagram.com/omprakash9572/" target="black">
          <BsInstagram />
        </a> */}
      </div>
    </div>
  );
}

export default Footer;
