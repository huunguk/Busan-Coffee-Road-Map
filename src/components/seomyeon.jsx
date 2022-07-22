import React, { Component } from "react";
import Seomyeon_in from "./seomyeon_in";
import "./coffeeshopstyle.css";

class Seomyeon extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <div>
        <Seomyeon_in />
      </div>
    );
  }
}

export default Seomyeon;
