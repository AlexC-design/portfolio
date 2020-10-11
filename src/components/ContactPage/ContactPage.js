import React from "react";
import github from "../../assets/svg/github.svg";
import linkedIn from "../../assets/svg/linked-in.svg";

import "./css/contact-page.css";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="text">
        <h2 className="text-bold">Alexandru Ciobotaru</h2>
        <div className="text-left">
          <span className="text-bold text-medium accent-color">Phone </span>
          07432 703 853
        </div>
        <div className="text-left">
          <span className="text-bold text-medium accent-color">Email</span>{" "}
          alex94.design@gmail.com
        </div>
      </div>
      <div className="icons">
        <a
          className="link-icon"
          href="https://github.com/AlexC-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="pop-in-delayed" src={github} alt="" />
        </a>
        <a
          className="link-icon"
          href="https://www.linkedin.com/in/alexandru-ciobotaru-655777193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="pop-in-delayed" src={linkedIn} alt="" />
        </a>
      </div>
    </div>
  );
};

export default ContactPage;
