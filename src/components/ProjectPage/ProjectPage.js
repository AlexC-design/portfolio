import React from "react";
import Carousel from "./Carousel/Carousel";
import "./css/project-page.css";
import arrowRight from "../../assets/svg/arrow-right.svg";
import Dropdown from "./Dropdown/Dropdown";
import { projects } from "../../services/projects";
import { useSelector } from "react-redux";

const ProjectPage = ({ history, location }) => {
  const dropdowns = ["Personal project", "Description", "Process"];
  const projectList = projects.map(project => project.name);
  const currentProject = projects.find(
    project => project.name === location.hash.replace(/#/g, "")
  );

  const { fullScreen } = useSelector(state => ({
    fullScreen: state.carousel.fullScreen
  }));

  const currentIndex = () => {
    return projectList.findIndex(project => project === currentProject.name);
  };
  const nextIndex = () => {
    if (currentIndex() === projectList.length - 1) {
      return 0;
    } else {
      return currentIndex() + 1;
    }
  };
  const prevIndex = () => {
    if (currentIndex() === 0) {
      return projectList.length - 1;
    } else {
      return currentIndex() - 1;
    }
  };

  const nextProject = () => {
    history.push(`/project#${projectList[nextIndex()]}`);
  };
  const prevProject = () => {
    history.push(`/project#${projectList[prevIndex()]}`);
  };

  const imageSrcs = currentProject.images.map(
    image =>
      `https://omperiap.sirv.com/portfolio/${currentProject.name}/${image}.png`
  );

  return (
    <div className={`project-page ${fullScreen ? "full-screen" : ""}`}>
      <Carousel imageSrcs={imageSrcs} />

      <div className="dropdowns">
        {dropdowns.map((dropdown, index) => (
          <Dropdown
            index={index}
            title={dropdown}
            key={dropdown}
            project={currentProject}
          />
        ))}
      </div>

      <div className="project-buttons">
        <div className="prev button" onClick={prevProject}>
          <img src={arrowRight} className="arrow left" alt="" />
          <div className="text">
            Prev <span className="hide-mobile">project</span>{" "}
          </div>
        </div>
        <div className="next button" onClick={nextProject}>
          <div className="text">
            Next <span className="hide-mobile">project</span>{" "}
          </div>
          <img src={arrowRight} className="arrow right" alt="" />
        </div>
        <div className="project-name">{currentProject.title}</div>
      </div>
    </div>
  );
};

export default ProjectPage;
