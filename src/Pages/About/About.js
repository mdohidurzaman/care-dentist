import React from "react";
import img from "../../images/icon/img.jpg";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <div className="profile-img">
        <img src={img} alt="" />
      </div>
      <div className="about-me">
        <h3>
          <strong>About Me</strong>
        </h3>
        <p>
          I am Wahidurzaman and I have completed merter in Economics from
          National University. I am working a germents factory as a
          merchandiser. I want to change the present job if I can complete the
          course successfully. I always feel comfortable to work in IT sector
          and I am hardly trying to complete the course as your instructions.
          Hopfully I will reach to my dream goal if I get your support as
          present.
        </p>
      </div>
    </div>
  );
};

export default About;
