import React from "react";
import Carousel from "./Carousel/Carousel";
import "./css/project-page.css";
import arrowRight from "../../assets/svg/arrow-right.svg";
import Dropdown from "./Dropdown/Dropdown";

const ProjectPage = () => {
  const dropdowns = ["Personal project", "Description", "Process"];

  return (
    <div className="project-page">
      <Carousel />

      <div className="dropdowns">
        {dropdowns.map((dropdown, index) => (
          <Dropdown index={index} title={dropdown} key={dropdown} />
        ))}
      </div>

      <div className="project-buttons">
        <div className="prev button">
          <img src={arrowRight} className="arrow left" alt="" />
          <div className="text">
            Prev <span className="hide-mobile">project</span>{" "}
          </div>
        </div>
        <div className="next button">
          <div className="text">
            Next <span className="hide-mobile">project</span>{" "}
          </div>
          <img src={arrowRight} className="arrow right" alt="" />
        </div>
        <div className="project-name">UI components</div>
      </div>
    </div>
  );
};

export default ProjectPage;
