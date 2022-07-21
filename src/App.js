import React from 'react'
import './App.css';
import { Link, Route } from 'react-router-dom';
// import styled from 'styled-components'

//yarn add react-router-dom@5 터미널 - 설치
//yarn add styled-components 터미널 - 설치

//서브페이지 연결
import MainCom from './mainCom';
import CoffeeShop from './components/coffeeShop';
import Market from './components/market';
import Login from './components/login';


function App() {
  return (
    // 상단부분
    <div>
      <header className='header'>
        <div className='header_in'>
          <div className='logo'></div>
          <ul className='nav'>
            <li><Link to=''>home</Link></li>
            <li><Link to='/components/coffeeshop'>coffeeshop</Link></li>
            <li><Link to='/components/market'>market</Link></li>
            <li><Link to='/components/login'>login</Link></li>
          </ul>
        </div>
      </header>
      {/* {본문내용} */}
      <div>
        <Route path='/' exact={true} component={MainCom} />
        <Route path='/components/coffeeshop' component={CoffeeShop} />
        <Route path='/components/market' component={Market} />
        <Route path='/components/login' component={Login} />
      </div>
    </div>
  );
}

export default App;
