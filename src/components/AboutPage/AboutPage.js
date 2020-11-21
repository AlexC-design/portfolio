import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { ToolsIcons } from "../ToolsIcons/ToolsIcons";
import "./css/about-page.css";

const AboutPage = () => {
  const codeTools = [
    "Redux-Thunk",
    "Redux-Sagas",
    "React-Router",
    "Vue",
    "Vuex",
    "Boostrap",
    "SASS",
    "LESS",
    "Axios",
    "OAuth 2.0",
    "VSCode",
    "Git"
  ];

  const designTools = [
    "Adobe InDesign",
    "Blender 3D",
    "Spine 2D",
    "ZBrush",
    "Unity 3D",
    "Unreal Engine 4"
  ];

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <div className="page about-page">
      <div className="container">
        <div className="top-side">
          <img
            className="profile-picture"
            src={
              "https://omperiap.sirv.com/portfolio/profile-picture/profile-picture.jpg"
            }
            alt=""
          />
          <div className="about-text">
            <h1 className="my-name text-bold">Alexandru Ciobotaru</h1>
            <p className="subtitle">Web Developer and Designer</p>
            <br />
            <p>
              I'm Alex, a Web Developer with a background in Digital Art and
              Design.
            </p>
            <br />
            <p>
              I have been working as a concept artist and illustrator in the
              video game industry for 4 years before moving into web
              development.
            </p>
            <br />
            <p>
              I've studied Computer Science at the University of Bucharest, and
              I have been focusing mainly on Web Technologies and Frameworks for the
              last two years.
            </p>
            <br />
            <p>
              If you want to check out some of my previous work as a digital
              artist, please visit:{" "}
              <a
                href="https://allexc.crevado.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                allexc.crevado.com
              </a>
            </p>
            <br />
          </div>
        </div>

        <br />
        <br />
        <br />
        <h2 className="title">Tools and Technologies</h2>

        <div className="tools-container">
          <div className="main column">
            <h2 className="text-bold accent-color">Main</h2>
            <br />
            <br />
            <ToolsIcons color={"white"} />
          </div>
          <div className="code column">
            <h2 className="text-bold accent-color">Code</h2>
            <br />
            <br />
            <div className="cols">
              <div className="col-1">
                {codeTools.slice(0, codeTools.length / 2).map(tool => (
                  <p key={`${tool}`}>{tool}</p>
                ))}
              </div>
              <div className="col-2">
                {codeTools
                  .slice(codeTools.length / 2, codeTools.length)
                  .map(tool => (
                    <p key={`${tool}`}>{tool}</p>
                  ))}
              </div>
            </div>
          </div>
          <div className="design column">
            <h2 className="text-bold accent-color">Design</h2>
            <br />
            <br />
            {designTools.map(tool => (
              <p key={`${tool}`}>{tool}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
