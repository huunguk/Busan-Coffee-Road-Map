import React, { Component } from "react";
import './coffeeshopstyle.css';

function Item({ user }) {
  return (
    <div className="store_list">
      <img className='store_img' src={user.src} alt="imgaes" />
      <h4>{user.ttl}</h4>
      <p>{user.des}</p>
    </div>
  );
}

function Yeongdo() {
  const items = [
    {
      id: 1,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MDVfMTEx%2FMDAxNjU2OTkzMjk5Mjk1.K-tZMlTjuqnjaUaqA49F36-FOnx3_xiMoMRXanXnIzsg.wdMaMkkfkwPYq60AR3Ce34G3NexAIoPjQ6CKw17s7d8g.JPEG%2Fupload_32dff9251d70dfa5316450752bf27907.jpg',
      ttl: '오구카페카페',
      des: '부산 영도구 남항서로 52'
    },
    {
      id: 2,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MDFfMjI3%2FMDAxNjU2NjA1ODA4NjY4.EwkTYU97T2TXvdtLnoWCFiMkAWvGKYpyinw5jB4SJbMg.tsIlP9kEMNG0Po9Vali0mSqRosJBOBt9V7lasmxZdTUg.JPEG%2Fupload_176e61d1717a2511ecf40d509c1c0037.jpeg',
      ttl: '신기숲',
      des: '부산 영도구 와치로 65'
    },
    {
      id: 3,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA1MjFfMTM5%2FMDAxNjUzMTMzODI0OTAx.uGBbN5kbW3kO_3VzY03WOLvF5pk-5BX0AesqfpTLR24g.Nd21OEogQaX5GzIyyrhENC14_fKshqKk0WvdaZUMHpQg.JPEG%2Fupload_64e57eee94739a014cba61e1fa4724f9.jpeg',
      ttl: '신기여울',
      des: '부산 영도구 절영로 202-2'
    },
    {
      id: 4,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA2MDNfMzAg%2FMDAxNjIyNzEwOTAzNjQ1.-NX07-EIoJQtCOryQEQHeijXVUkdftoW1hlcWwzLs90g._h_EEjhduxVLSB0RSqTmnjZbXC17LPudmkTmJHC45TQg.JPEG.jjim303%2FKakaoTalk_20210603_175648920_15.jpg',
      ttl: '피아크',
      des: '부산 영도구 해양로195번길 180'
    },
    {
      id: 5,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MjRfOTUg%2FMDAxNjU2MDY3OTQzMzM1.1sjR6_cDI-UR6v0HRwR8yIX-LxDiGw5aFQF9PrmbNqUg.ptoiLvAnjMTnBqg9S6EDkPSUXDfgXPMW7OpH_J9bhM0g.JPEG%2Fupload_c20fe0c68f9af1d2dcc145233eacace3.jpg',
      ttl: 'The Having coffee',
      des: '부산 영도구 절영로 224-1'
    },
    {
      id: 6,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MTdfODEg%2FMDAxNjU4MDQyNzA3Mjg4.KygSWo0wW8ORqWBDm12MjOnu9QlCMoD_ojdOxqF_3CMg.59ut6M1ZLVkpWBFwLQ7Vad8iQnVObB-lZ6syhbmlx9Ug.JPEG%2Fupload_61a5bee11c806c8bfdb919e80df60f51.jpg',
      ttl: '무명일기',
      des: '부산 영도구 봉래나루로 178'
    },
    {
      id: 7,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MjFfMjY3%2FMDAxNjU1ODE4NTU1NTI5.1pZspGu5rqrDC3_MujulFBS53gnAhvLMNlHDjRa9Ndsg.7Ntwm8ZcpQ9ew19gOlUvhES0VcpreKfb4uz61a6x2ikg.JPEG%2Fupload_55dadf2f116ce5fe12846d1c8f724253.jpeg',
      ttl: '모모스 로스터리&커피바',
      des: '부산 영도구 봉래나루로 160'
    },
    {
      id: 8,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MDVfMjY0%2FMDAxNjU0MzU1NTQzNDA2.MceY_FVrbttYLD7QbdDIKbdkjwm7AiNrDLtZzKCVVfAg.FrHAaQwk3j98k_vBWXwkE9Ff2euHw8Zr868XpB812iUg.JPEG%2Fupload_ed4c8fc1512fb0ca59192162fad0d33b.jpeg',
      ttl: '카린 영도 플레이스',
      des: '부산 영도구 청학동로 16'
    },
  ]

  return (
    <div>
      {items.map((user, index) => (
        <Item user={user} key={index} />
      ))}
    </div>
  )
}

export default Yeongdo;