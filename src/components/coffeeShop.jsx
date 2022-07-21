import React, { Component } from "react";
import './coffeeshopstyle.css';
import Seomyeon from './seomyeon';
import Haeundae from './haeundae';
import Gwangan from './gwangan';
import Yeongdo from './yeongdo';

const menuList = {
  0: <Seomyeon />,
  1: <Haeundae />,
  2: <Gwangan />,
  3: <Yeongdo />,
};

class App extends React.Component {
  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) => {
    this.setState({ menu: menuIndex });
  }

  render() {
    return (
      <div className="wrap">
        <div className="menuBar">
          <ul className="tabs">
            <li className={`${this.state.menu === 0 ? 'active' : ''}`} onClick={() => this.changeMenu(0)}>서면</li>
            <li className={`${this.state.menu === 1 ? 'active' : ''}`} onClick={() => this.changeMenu(1)}>해운대</li>
            <li className={`${this.state.menu === 2 ? 'active' : ''}`} onClick={() => this.changeMenu(2)}>광안리</li>
            <li className={`${this.state.menu === 3 ? 'active' : ''}`} onClick={() => this.changeMenu(3)}>영도</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
      </div>
    )
  }
}

export default App;