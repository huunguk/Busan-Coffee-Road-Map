import React, { Component } from "react";
import './coffeeshopstyle.css';
import Haeundae_in from "./haeundae_in";


class Haeundae extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <div>
        <Haeundae_in />
      </div>
    )
  }
}

export default Haeundae;