import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setNavbarSmallOn,
  setNavbarSmallOff
} from "../../store/state/navbarState";
import triangle from "../../assets/svg/triangle.svg";
import "./css/navbar.css";

const Navbar = ({ location, history }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [onProjects, setOnProjects] = useState(false);

  const dispatch = useDispatch();
  const { navbarSmaller, navbarSmall } = useSelector(state => ({
    navbarSmaller: state.navbarState.navbarSmaller,
    navbarSmall: state.navbarState.navbarSmall
  }));

  const handleScroll = e => {
    if (location.pathname !== "/project" && window.scrollY > 100) {
      dispatch(setNavbarSmallOn());
    } else if (window.scrollY <= 100) {
      dispatch(setNavbarSmallOff());
    }
  };

  const handleProjectScroll = e => {
    if (location.pathname === "/") {
      if (window.scrollY > 265) {
        setOnProjects(true);
      } else if (window.scrollY < 265) {
        setOnProjects(false);
      }
    }
  };

  useEffect(() => {});

  const handleProjectsClick = () => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      history.push("/");
    }
    setTimeout(() => {
      document.querySelector(".title").scrollIntoView({ behavior: "smooth" });
    }, 0);
  };

  const handleHomeClick = () => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      history.push("/");
    }
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", e => handleScroll(e));

    window.scrollTo({ top: 0 });

    return () => {
      window.removeEventListener("scroll", e => handleScroll(e));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", e => handleProjectScroll(e));
    if (location.pathname === "/") {
      if (window.scrollY >= 265 && !onProjects) {
        setOnProjects(true);
      } else if (window.scrollY < 265 && onProjects) {
        setOnProjects(false);
      }
    }

    return () => {
      window.removeEventListener("scroll", e => handleProjectScroll(e));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div
        className={`navbar-container ${navbarSmaller ? "smaller" : ""} ${
          navbarSmall ? "small" : ""
        } ${mobileOpen ? "open" : ""}`}
      >
        <div
          onClick={handleHomeClick}
          className={`nav-link ${
            location.pathname === "/" && !onProjects ? "active" : ""
          }`}
        >
          <div className="text">Home</div>
          {location.pathname === "/" && !onProjects && (
            <div className="triangle pop-in">
              <img src={triangle} alt="" className="spin-slow" />
            </div>
          )}
        </div>
        <div
          onClick={handleProjectsClick}
          className={`nav-link ${
            location.pathname === "/" && onProjects ? "active" : ""
          }`}
        >
          <div className="text">Projects</div>
          {location.pathname === "/" && onProjects && (
            <div className="triangle pop-in">
              <img src={triangle} alt="" className="spin-slow" />
            </div>
          )}
        </div>
        <Link
          to="/about"
          className={`nav-link ${
            location.pathname === "/about" ? "active" : ""
          }`}
        >
          <div className="text">About</div>
          {location.pathname === "/about" && (
            <div className="triangle pop-in">
              <img src={triangle} alt="" className="spin-slow" />
            </div>
          )}
        </Link>
        <Link
          to="/contact"
          className={`nav-link ${
            location.pathname === "/contact" ? "active" : ""
          }`}
        >
          <div className="text">Contact</div>
          {location.pathname === "/contact" && (
            <div className="triangle pop-in">
              <img src={triangle} alt="" className="spin-slow" />
            </div>
          )}
        </Link>

        <div
          className={`burger-menu ${mobileOpen ? "open" : ""}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>
      </div>
      <div
        className={`mobile-cover ${mobileOpen ? "show" : ""}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
};

export default withRouter(Navbar);
