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

  const handleProjectsClick = () => {
    setMobileOpen(false);

    if (location.pathname !== "/") {
      history.push("/");
    }
    setTimeout(() => {
      // window.scrollTo({ top: 200, behavior: "smooth" });
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

    setMobileOpen(false);

    return () => {
      window.removeEventListener("scroll", e => handleScroll(e));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <div
      className={`navbar-container ${navbarSmaller ? "smaller" : ""} ${
        navbarSmall ? "small" : ""
      } ${mobileOpen ? "open" : ""}`}
    >
      <Link
        onClick={handleHomeClick}
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
        onClick={handleProjectsClick}
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

      <div
        className={`burger-menu ${mobileOpen ? "open" : ""}`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
    </div>
  );
};

export default withRouter(Navbar);
