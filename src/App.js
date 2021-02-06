/** @format */
import { connect } from "react-redux";
import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./components/home.component";
import { history } from "./helpers/history";

class App extends Component {
  constructor(props) {
    super(props);
    /*history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });*/
  }

  render() {
    return (
      <Router history={history}>
        <div>
          <div className="mt-3">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
