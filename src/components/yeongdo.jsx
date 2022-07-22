import React, { Component } from "react";
import Yeongdo_in from "./yeongdo_in";
import "./coffeeshopstyle.css";

class Yeongdo extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <div>
        <Yeongdo_in />
      </div>
    );
  }
}

export default Yeongdo;
