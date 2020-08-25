import React, { Component, Fragment } from "react";

class Grid extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }

  render() {
    return (
      <Fragment className="grid-container">
        <div className="card1"></div>
        <div className="card1"></div>
      </Fragment>
    );
  }
}

export default Grid;
