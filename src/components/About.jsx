import React from "react";
import { FaCloudDownload } from "react-icons/lib/fa";

import profilePic from "../assets/images/profilepic.jpg";

const About = () => (
  <section id="about">
    <div className="row">
      <div className="three columns">
        <img className="profile-pic" src={profilePic} alt="" />
      </div>
      <div className="nine columns main-col">
        <h2>About Me</h2>
        <p>
          Hi! I'm a senior High School student from South Texas. Fluent in both Spanish and English, and I've worked with other students to teach Computer Science.
        </p>
        <div className="row">
          <div className="columns contact-details">
            <h2>Contact Details</h2>
            <p className="address">
              <span>Ramiro Cantu</span>
              <br />
              <span>(956) 271-9723</span>
              <br />
              <span>ramiro.cantu.ramirez@gmail.com</span>
            </p>
          </div>
          <div className="columns download">
            <p>
              <a href="https://firebasestorage.googleapis.com/v0/b/portfolio-ramiro.appspot.com/o/Resume.pdf?alt=media&token=e4cec942-c89c-4f53-a70a-508ef5536d2b" className="button">
                <FaCloudDownload /> Download Resume
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
