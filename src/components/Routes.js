import React, { useEffect } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect, useDispatch, useSelector } from "react-redux";
import {
  setNavbarSmallerOn,
  setNavbarSmallerOff
} from "../store/state/navbarState";
import HomePage from "../components/HomePage/HomePage";
import ProjectPage from "./ProjectPage/ProjectPage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";

const Routes = ({ location }) => {
  const dispatch = useDispatch();
  const { navbarSmaller } = useSelector(state => ({
    navbarSmaller: state.navbarState.navbarSmaller
  }));

  useEffect(() => {
    if (location.pathname === "/project" && !navbarSmaller) {
      dispatch(setNavbarSmallerOn());
    } else if (location.pathname !== "/project" && navbarSmaller) {
      dispatch(setNavbarSmallerOff());
    }
  }, [location, dispatch, navbarSmaller]);

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.pathname}
        in={true}
        timeout={800}
        classNames="page-fade"
      >
        <div>
          <Switch location={location}>
            <Route path="/" exact component={HomePage} />
            <Route path="/project" exact component={ProjectPage} />
            <Route path="/about" exact component={AboutPage} />
            <Route path="/contact" exact component={ContactPage} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const wrappedComponent = withRouter(Routes);

export default connect()(wrappedComponent);
