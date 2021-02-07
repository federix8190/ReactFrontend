/** @format */

import React, { Component } from "react";
import { connect } from "react-redux";
import "../App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

import { getPersons } from "../actions/persons.action";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: undefined,
      content: "Este es el home page",
    };
  }

  loadPersons() {
    const { dispatch, persons } = this.props;

    dispatch(getPersons()).then(() => {
      this.setState({
        persons: persons,
      });
    });
  }

  render() {
    if (!this.state.persons) {
      this.loadPersons();
    }

    return (
      <div className="content">
        <div className="container">
          <header className="jumbotron center-jumbotron">
            <h3 className="center">{this.state.content}</h3>
          </header>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { persons } = state.persons;
  return {
    persons,
  };
}

export default connect(mapStateToProps)(Home);
