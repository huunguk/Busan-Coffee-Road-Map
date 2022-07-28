import React from "react";
import "./App.css";
import { Link, Route } from "react-router-dom";
// import styled from 'styled-components'

//yarn add react-router-dom@5 터미널 - 설치
//yarn add styled-components 터미널 - 설치

//서브페이지 연결
import MainCom from "./mainCom";
import CoffeeShop from "./components/coffeeShop";
import BestPlace from "./components/bestPlace";
import OnePickPlace from "./components/OnePick";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    // 상단부분
    <div className="main">
      <header className="header">
        <div className="header_in">
          <ul className="nav">
            <li>
              <Link to="">
                <span>About us</span>
              </Link>
            </li>
            <li>
              <Link to="/components/coffeeshop">RoadMap</Link>
            </li>
          </ul>
          <div className="logo"></div>
          <ul className="nav">
            <li>
              <Link to="/components/bestPlace">Best Place</Link>
            </li>
            <li>
              <Link to="/components/onePickPlace">One Pick Place</Link>
            </li>
          </ul>
        </div>
      </header>
      {/* {본문내용} */}
      <div>
        <Route path="/" exact={true} component={MainCom} />
        <Route path="/components/coffeeshop" component={CoffeeShop} />
        <Route path="/components/bestPlace" component={BestPlace} />
        <Route path="/components/onePickPlace" component={OnePickPlace} />
      </div>
    </div>
  );
}

export default App;
