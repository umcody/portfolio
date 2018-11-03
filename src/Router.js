import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Loading from "./components/Loader";

const Home = lazy(() => import("pages/Home"));

class Scroll extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
};

const ScrollToTop = withRouter(Scroll);

class RouterComponent extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Suspense fallback={<Loading show />}>
                  <Home {...props} />
                </Suspense>
              )}
            />
          </Switch>
        </ScrollToTop>
      </Router>
    );
  }
}

export default RouterComponent;
