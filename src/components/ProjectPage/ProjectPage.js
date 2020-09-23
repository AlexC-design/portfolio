import React from "react";
import Carousel from "./Carousel/Carousel";
import "./css/project-page.css";
import Dropdown from "./Dropdown/Dropdown";

const ProjectPage = () => {

  const dropdowns = ["Personal project", "Description", "Process"];

  return (
    <div className="project-page">
      <Carousel />

      <div className="dropdowns">
        {dropdowns.map((dropdown, index) => (
          <Dropdown index={index} title={dropdown} key={dropdown}/>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
