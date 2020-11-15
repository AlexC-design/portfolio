import React from "react";
import { withRouter } from "react-router";
import "./css/project-card.css";

const ProjectCard = ({ history, img, project }) => {
  const { title, type, tech, description, name } = project;

  const handleClick = () => {
    history.push(`/project#${name}`);
  };

  const formatTech = tech => {
    return tech.replace(/,/g, " •");
  };

  return (
    <div className="project-card">
      <div className="mobile-title">
        <p className="text-bold accent-color">{type}</p>
        <h1>{title}</h1>
      </div>

      <img onClick={handleClick} className="project-image" src={img} alt="" />

      <div className="project-description text-left">
        <p className="text-bold accent-color hide-mobile">{type}</p>
        <h1 className="hide-mobile">{title}</h1>
        <br className="hide-mobile" />
        <br className="hide-mobile" />
        <p className="text-bold hide-mobile">Technologies</p>
        <p className="text-thin hide-mobile">{tech}</p>
        <p className="text-bold show-mobile">{formatTech(tech)}</p>
        <br />
        <br className="hide-mobile" />
        <p className="text-bold hide-mobile">Description</p>
        <p className="text-thin">{description}</p>

        <button onClick={handleClick} className="CTA show-mobile">
          View project
        </button>
      </div>
    </div>
  );
};

export default withRouter(ProjectCard);
