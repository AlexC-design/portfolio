import React from "react";
import { withRouter } from "react-router";
import "./css/project-card.css";

const ProjectCard = ({ history, img }) => {
  const handleClick = () => {
    history.push("/project#movie-cluster");
  };

  return (
    <div className="project-card">
      <div className="mobile-title">
        <p className="text-bold accent-color">WEB APP</p>
        <h1>Movie Cluster</h1>
      </div>

      <img onClick={handleClick} className="project-image" src={img} alt="" />

      <div className="project-description text-left">
        <p className="text-bold accent-color hide-mobile">WEB APP</p>
        <h1 className="hide-mobile">Movie Cluster</h1>
        <br className="hide-mobile" />
        <br className="hide-mobile" />
        <p className="text-bold hide-mobile">Technologies</p>
        <p className="text-thin hide-mobile">
          React, Redux, Redux-thunk, React-router, Axios, TMDB API
        </p>
        <p className="text-bold show-mobile ">
          React ○ Redux ○ Redux-thunk ○ React-router ○ Axios ○ TMDB API
        </p>
        <br />
        <br />
        <p className="text-bold hide-mobile">Description</p>
        <p className="text-thin">
          Designed and built a responsive SPA built using react and redux, that
          allows you to browse movies by categories, genres, search for specific
          movies, view details about movies or save them to your list.
        </p>

        <button onClick={handleClick} className="CTA">
          View project
        </button>
      </div>
    </div>
  );
};

export default withRouter(ProjectCard);
