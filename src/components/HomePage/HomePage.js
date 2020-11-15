import React from "react";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ToolsIcons } from "../ToolsIcons/ToolsIcons";
import { projects } from "../../services/projects";
import "./css/home-page.css";

const HomePage = () => {
  return (
    <div className="page">
      <div className="container">
        <div className="top-section">
          <div className="description text-left">
            <h1 className="my-name">Alexandru Ciobotaru</h1>
            <h3 className="accent-color">Web Developer and Designer</h3>
            <br />
            <p>
              Hi!
              <br />
              <br />
              I'm Alex, a London based Frontend Developer with a background in
              Digital Art and Design.
            </p>
            <br />
            <p className="accent-color">Have look at some of my work below!</p>
          </div>
          <div className="icons-container">
            <ToolsIcons color={"accent"} />
          </div>
        </div>

        <h1 className="title">Projects</h1>

        <div className="projects-container">
          {projects.map(project => {
            return (
              <ProjectCard
                img={`https://omperiap.sirv.com/portfolio/tmbs/${project.name}.jpg`}
                project={project}
                key={project.name}
              />
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
