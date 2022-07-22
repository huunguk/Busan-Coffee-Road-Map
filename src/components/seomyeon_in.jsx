import React, { Component } from "react";
import './coffeeshopstyle.css';

function Item({ user }) {
  return (
    <div className="store_list">
      <img className='store_img' src={user.src} alt="imgaes" />
      <h4>{user.ttl}</h4>
      <p>{user.adress}</p>
    </div>
  );
}

function Seomyeon() {
  const items = [
    {
      id: 1,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MjlfNTkg%2FMDAxNjU2NDk3NzUwMjYz.y2EUUy68QBcioXr1EI2Pv9zlBV_CcLmYSWFoXRmz_Wog.qk27sXkG9di1_IxN6nQHmo7QNSsif00iUERJaGAp1Xog.JPEG%2Fupload_73ca4699e4c99090c915ba4410272463.jpeg',
      ttl: '고더샵',
      adress: '부산 부산진구 서전로 60'
    },
    {
      id: 2,
      src: 'https://mblogthumb-phinf.pstatic.net/MjAyMTAzMTJfMjc3/MDAxNjE1NTMzNzcyMjY2.9LMGPyc4opCxI3GgY0nDPhGOkPVqOhRx-62pRtETB9kg.PzCX_JZGMNTzOnPHWATxDAlX_BMg8nxbCRz9uVGyRVsg.JPEG.jshim84/20210228_113430.jpg?type=w800',
      ttl: 'GOOF:',
      adress: '부산 부산진구 동성로 25'
    },
    {
      id: 3,
      src: 'https://cdn.st-news.co.kr/news/photo/202201/4033_10723_4529.jpg',
      ttl: '얼룩',
      adress: '부산 부산진구 전포대로210번길 48 2층'
    },
    {
      id: 4,
      src: 'https://img1.daumcdn.net/thumb/R800x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fy4Cvp%2FbtrCcEflmbF%2FFd40GtKOo1rGhh5erWJrck%2Fimg.jpg',
      ttl: '컵플',
      adress: '부산 부산진구 전포대로186번길 17 1층'
    },
    {
      id: 5,
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA2MjNfMjE1%2FMDAxNjU1OTUyMzIwMTAz.myH9BZifm-dExYFSGza4kNRU2odLs6lhvj7XHtw9kBUg.nVQoLmtpOtheWQv_MQD-9efEOsIIBIUsHyuNn59O4PQg.JPEG.ililyyou%2FP20220623_112039256_7386BBA1-90C9-4E49-AB13-92F074791C99.JPG&type=a340',
      ttl: '마셰리27',
      adress: '부산 부산진구 동성로15번길 33 1층'
    },
    {
      id: 6,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MDVfMTY1%2FMDAxNjU2OTk3MDQ3MDAx.sXNzhd1tlhoHKnXfGifwm6nrqHWfHa1b2jYL-4jwGG8g.S9I6Ik6SUC7Wq4Np1ek8vkNXGsNq6bOgsxFQqCXKrIkg.JPEG%2Fupload_d96f9f5eda15bee1e97249eee0d4b33b.jpg',
      ttl: '달조리법',
      adress: '부산 부산진구 전포대로210번길 8 1층'
    },
    {
      id: 7,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MTVfMyAg%2FMDAxNjU3ODY2MjUwMTM1.RVCMrEXLCq5RpKFMXuxlV_tECKDH2y-Ah9-6V1b_fYgg.9vGdIwJMGAc9rirSb60Vgj5ty-pmAPl4rF2sGCq12Y4g.JPEG%2Fupload_3ed373719876ff2280d8a4f7b6d94c4f.jpg',
      ttl: '트와엣모아',
      adress: '부산 부산진구 전포대로176번길 40 1층'
    },
    {
      id: 8,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MjFfMjcy%2FMDAxNjU4NDEwNjM4OTQ5.q5PLJ2HmHtIMyYQ_nWU9UViVtqOZl6G11xLsbWKhkKAg._awMbIbngvHOvpaA0Hlu8C14qa044SmQU4Wlrrvfq00g.JPEG%2Fupload_9131af75c617ca8d5c051e3250924a8f.jpg',
      ttl: '의란',
      adress: '부산 부산진구 동성로49번길 3 2층'
    },
    {
      id: 9,
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMTA4MjRfMTk0%2FMDAxNjI5ODExODQyNDM1.azZSTWZLfn3SGh7XLzuZU-XpUZEUR95ggjofrMpWUqwg.7vSTRcsAGidX3TUCh4_il4fSENAotYCr3xH95zeIWlwg.JPEG.chltndms22%2FIMG_4924.JPG&type=sc960_832',
      ttl: 'setter espresso',
      adress: '부산 부산진구 서전로57번길 38 1층'
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