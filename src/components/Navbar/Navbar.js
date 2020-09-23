import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  setNavbarSmallOn,
  setNavbarSmallOff
} from "../../store/state/navbarState";
import triangle from "../../assets/svg/triangle.svg";
import "./css/navbar.css";

const Navbar = ({ location }) => {
  const dispatch = useDispatch();
  const { navbarSmaller, navbarSmall } = useSelector(state => ({
    navbarSmaller: state.navbarState.navbarSmaller,
    navbarSmall: state.navbarState.navbarSmall
  }));

  const handleScroll = e => {
    if (
      location.pathname !== "/project" &&
      window.scrollY > 100 &&
      !navbarSmall
    ) {
      dispatch(setNavbarSmallOn());
    } else if (window.scrollY <= 100) {
      dispatch(setNavbarSmallOff());
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", e => handleScroll(e));

    return () => {
      window.removeEventListener("scroll", e => handleScroll(e));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className={`navbar-container ${navbarSmaller ? "smaller" : ""} ${
        navbarSmall ? "small" : ""
      }`}
    >
      <Link
        to="/"
        className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
      >
        <div className="text">Home</div>
        {location.pathname === "/" && (
          <div className="triangle pop-in">
            <img src={triangle} alt="" className="spin-slow" />
          </div>
        )}
      </Link>
      <Link
        to="/projects"
        className={`nav-link ${
          location.pathname === "/projects" ? "active" : ""
        }`}
      >
        <div className="text">Projects</div>
        {location.pathname === "/projects" && (
          <div className="triangle pop-in">
            <img src={triangle} alt="" className="spin-slow" />
          </div>
        )}
      </Link>
      <Link
        to="/about"
        className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
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
    </div>
  );
};

export default withRouter(Navbar);
