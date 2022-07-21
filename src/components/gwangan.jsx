import React, { Component } from "react";
import Gwangan_in from "./gwangan_in";
import './coffeeshopstyle.css';

class Gwangan extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  render() {
    return (
      <div>
        <Gwangan_in />
      </div>
    )
  }
}


export default Gwangan;