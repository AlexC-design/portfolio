import React from "react";
import { withRouter } from "react-router";
import "./css/project-card.css";

const ProjectCard = ({ history }) => {
  const handleClick = () => {
    history.push("/project#movie-cluster");
  };

  return (
    <div className="project-card">
      <img
        onClick={handleClick}
        className="project-image"
        src=""
        alt=""
      />

      <div className="project-description text-left">
        <p className="text-bold accent-color">WEB APP</p>
        <h1>Movie Cluster</h1>
        <br />
        <br />
        <p className="text-bold">Technologies</p>
        <p className="text-thin">
          React, Redux, Redux-thunk, React-router, Axios, TMDB API
        </p>
        <br />
        <br />
        <p className="text-bold">Description</p>
        <p className="text-thin">
          Designed and built a responsive SPA built using react and redux, that
          allows you to browse movies by categories, genres, search for specific
          movies, view details about movies or save them to your list.
        </p>
      </div>
    </div>
  );
};

export default withRouter(ProjectCard);
