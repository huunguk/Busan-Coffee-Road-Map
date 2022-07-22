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

function Gwangan() {
  const items = [
    {
      id: 1,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MThfNTMg%2FMDAxNjU4MTI2NjY4MTc0.zVGzQqGLBVDfZQXGaTART0LMeK8AwV__gsWhuRNZ2b4g.mXyUY5Ao0r5l9F_mk53TOg1M0rzCCbm5MxZzARrxybQg.JPEG%2Fupload_30bddaab6103b5b4264b00b6380bf2a1.jpg',
      ttl: '마이페이보릿쿠키',
      des: '부산 수영구 광남로 103'
    },
    {
      id: 2,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MDFfNDQg%2FMDAxNjU2NjM1OTc5NDg0.GP4Rst5SM95jGl0ueOgdrAfayLkdWSi6ZrC5FfMEtQsg.lnhEzmqkfR4RBKhjDWe67O1lW-l_ZBeoEzhLC2tZBFcg.JPEG%2Fupload_1ad15cfa3c43ae67ff8783b7dcdad16c.jpeg',
      ttl: '어거스타',
      des: '부산광역시 수영구 무학로33번길 43 2층'
    },
    {
      id: 3,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MDZfNzcg%2FMDAxNjU0NTE4ODAyNzM5.qUzb9TdGzC8hpGJAX2IVdz_xbkFxXyELpdc_2UIHXVog.kribGBlUERTlzHOs-1VV9Sfbt8oOCu0cTYdx-TmE9GYg.JPEG%2Fupload_299251b8c003f09bc944029a3ddfe55f.jpg',
      ttl: '필더빌커피바',
      des: '부산 수영구 장대골로31번길 3'
    },
    {
      id: 4,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fmyplace-phinf.pstatic.net%2F20220103_42%2F16411840869893h7EG_JPEG%2Fupload_ab8ddea6c6fae4bfa3e38bab79363246.jpeg',
      ttl: '리안광',
      des: '부산 수영구 광남로 78 1층'
    },
    {
      id: 5,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MTZfNTMg%2FMDAxNjU3OTUwMDY5NjA0.blls98frco1dYI9BNAbdDpuGhRWzlRUP2z0VcUJ59-cg.Q5vMiPz_Bhb4_ipKvUyinYZQ4f2frSCr_2tQIYQvqA4g.JPEG%2Fupload_a1adf63fb68b9738f24da4046a4d6cb8.jpeg',
      ttl: '두넛샵',
      des: '부산 수영구 광안해변로 197 1 ,2층'
    },
    {
      id: 6,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MjdfMTYz%2FMDAxNjU2Mjk5OTgxMDI2.KZxiX9C7ioBlABV0CKk1BnSlf0bA0o9I7MQ4BJcBHNYg.ELG1kKuR4E1SVZv03HFY3TgHOCr6HFY-iCwg8cqjF0Ag.JPEG%2Fupload_16adf13adce2e1463e5c70616ef1fdbd.jpeg',
      ttl: '코펜하겐',
      des: '부산 수영구 남천바다로21번길 47 1층'
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

export default Gwangan;