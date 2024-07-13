import React from "react";
import me from "../../assests/Me.png";
import "./About.css";

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I am a passionate developer based in Jodhpur, India. With a strong
          foundation in web development technologies, I specialize in building
          scalable and efficient web applications using modern frameworks like
          React.js.
        </p>
        <p>
          I love to explore new technologies and contribute to open-source
          projects. My goal is to leverage technology to create meaningful
          solutions that positively impact people's lives.
        </p>
        <p>
          Feel free to connect with me on social media or check out my portfolio
          for more information about my work and projects.
        </p>
      </div>
      <div className="about-image-container">
        <img src={me} alt="Mahesh Choudhary" className="about-image" />
        <h4>
          <a
            href="maheshchaudhary.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
         Mahesh Choudhary
          </a>
        </h4>
        <p>Full Stack Developer</p>
        <p>
          <a href="mailto:maheshchoudhary0603@gmail.com" className="email-link">
            maheshchoudhary0603@gmail.com
          </a>
        </p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/maheshchaudhary63/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/MaheshChoudhary063"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
          <a
            href="https://www.instagram.com/maheshchoudharry/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <i className="fab fa-instagram"></i> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
