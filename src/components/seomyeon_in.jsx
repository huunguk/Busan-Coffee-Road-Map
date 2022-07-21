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

function Seomyeon() {
  const items = [
    {
      id: 1,
      src: 'https://images-kr.amoremall.com/fileupload/brand/31/2022/03/10/%EC%99%BC%EC%AA%BD_%EB%A9%94%EC%9D%B8%20750x660.jpg?shrink=387:341',
      ttl: '제목1',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 2,
      src: 'https://images-kr.amoremall.com/fileupload/brand/10/2022/04/15/1)%20%E9%87%89%EB%9A%AE%EC%98%96_%EC%92%93_%20%EF%A7%8E%EB%B6%BF%EC%94%A4%20_%EB%8C%80_%EF%A7%9E%C2%80.jpg?shrink=387:341',
      ttl: '제목2',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 3,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목3',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 4,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목4',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 5,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목4',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 6,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목4',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 6,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목4',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 6,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목4',
      des: '2022-07-20 ~ 2022-07-22'
    },
    {
      id: 6,
      src: 'https://images-kr.amoremall.com/fileupload/brand/15/2021/08/12/img_HERA.png?shrink=387:341',
      ttl: '제목4',
      des: '2022-07-20 ~ 2022-07-22'
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

export default Seomyeon;