import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import ProjectCard from "../ProjectCard/ProjectCard";
import { ToolsIcons } from "../ToolsIcons/ToolsIcons";
import { projects } from "../../services/projects";
import importAll from "../../services/importAll";
import "./css/home-page.css";

const HomePage = () => {
  const [tmbs, setTmbs] = useState({});

  const importImages = async () => {
    const importedImages = importAll(
      require.context("../../assets/images/tmbs", false, /\.(png|jpe?g)$/)
    );

    console.log(importedImages);
    setTmbs(importedImages);
  };

  useEffect(() => {
    importImages();
  }, []);

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
                img={tmbs[`${project.name}.jpg`]}
                name={project.name}
                title={project.title}
                type={project.type}
                tech={project.tech}
                description={project.description}
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
