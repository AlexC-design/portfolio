import React from "react";
import github from "../../assets/svg/github.svg";
import linkedIn from "../../assets/svg/linked-in.svg";
import "./css/footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="text text-left">
        <h2 className="text-bold">Alexandru Ciobotaru</h2>
        <div>
          <span className="accent-color">(UK)</span> 07432 703 853
        </div>
        <div>alex94.design@gmail.com</div>
      </div>
      <div className="icons">
        <a
          className="link-icon"
          href="https://github.com/AlexC-design"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="" />
        </a>
        <a
          className="link-icon"
          href="https://www.linkedin.com/in/alexandru-ciobotaru-655777193/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedIn} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
