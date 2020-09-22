import React, { useEffect } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { connect, useDispatch, useSelector } from "react-redux";
import HomePage from "../components/HomePage/HomePage";
import {
  setNavbarSmallOn,
  setNavbarSmallOff
} from "../store/state/navbarState";

const Routes = ({
  setNavbarSmallOn,
  setNavbarSmallOff,
  location
}) => {
  const dispatch = useDispatch();
  const { navbarSmall } = useSelector(state => ({
    navbarSmall: state.navbarSmall
  }));

  useEffect(() => {
    if (location.pathname === "/") {
      if (navbarSmall) {
        dispatch(setNavbarSmallOff());
      }
    } else if (!navbarSmall) {
      dispatch(setNavbarSmallOn());
    }
  });

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition
        key={location.pathname}
        in={true}
        timeout={1000}
        classNames="page-fade"
      >
        <div>
          <Switch location={location}>
            <Route path="/" exact component={HomePage} />
          </Switch>
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

const wrappedComponent = withRouter(Routes);

export default connect()(wrappedComponent);
