import { Typography } from "@mui/material";
import React from "react";
import Photo from "../../images/om.JPG";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          “I'm a programmer In the way of a good programmer will be a great
          programmer.”
        </Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img className="aboutAvatar" src={Photo} alt="omprakash" />
          <Typography variant="h4" style={{ margin: "1vmax", color: "black" }}>
            omprakash yadav
          </Typography>
          <Typography style={{ margin: "1vmax" }}>
            MERN Stack Devloper
          </Typography>
        </div>
        <div>
          <Typography
            style={{
              wordSpacing: "2px",
              lineHeight: "30px",
              letterSpacing: "2px",
              textAlign: "right",
            }}
          >
            I am a B-Tech in Computer Science striving for an opportunity in an
            organization where I can fully contribute & enhance my skills
            towards the development of organization as whole. I am workaholic &
            ambitious.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default About;
