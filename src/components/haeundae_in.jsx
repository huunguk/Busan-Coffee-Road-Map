import React, { Component } from "react";
import './MapContainerstyle.css';

function Item({ user }) {
  return (
    <div className="store_list">
      <img className='store_img' src={user.src} alt="imgaes" />
      <h4>{user.ttl}</h4>
      <p>{user.des}</p>
    </div>
  );
}

function Haeundae() {
  const items = [
    {
      id: 1,
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjAzMTlfMTQ3%2FMDAxNjQ3NzAwMTAzMzY2.4jTs3OSV0fsy5jwnghzGj9uQOC2JUfV-SQQPfZYcFWEg.XcUerehUQyK0bTbgteLTn-_MAElb-keesXCuzjOo64og.JPEG.jiji6643%2FIMG_2441.jpg&type=sc960_832',
      ttl: '라이프커피',
      des: '부산 해운대구 달맞이길65번길 167 5층'
    },
    {
      id: 2,
      src: 'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA1MzBfMTcx%2FMDAxNjUzODg1OTc4MTU2.CVtnv6Xqao49jPqYWnErxyHor0Z4SU7fUUQyKqTkHoAg.iaMsDzn2ypLZoJ4kDTexLRyW-UAzZ0fctFcNjXPxIjAg.JPEG.ghkgus4216%2FKakaoTalk_Photo_2022-05-27-17-25-58_018.jpeg&type=sc960_832',
      ttl: '하브커피',
      des: '부산 해운대구 우동1로 34 1층'
    },
    {
      id: 3,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA2MjZfMTI4%2FMDAxNjU2MjMwMzAzMjM2.Nu67LXC9mjcxOkfDAphf3erQUQANJD-WV5UBuCGSb_wg.F7uYTqvYp1IEwJTSgm5ulM0qaUlsFc88rT3QANhhB2Eg.JPEG%2Fupload_3456de2a97a1f99d86a551bdd4e30cfc.jpeg',
      ttl: '카페몽상가',
      des: '부산 해운대구 우동1로38번길 14-5 2층'
    },
    {
      id: 3,
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fpup-review-phinf.pstatic.net%2FMjAyMjA3MDdfMTIy%2FMDAxNjU3MTgyNDY3OTg3.9ajvXlLPRZlGK0f97WamgyW7dxsFv0s1vCSVLelj7mcg.5iRMAT6Zinc4Ck_YcJ14_8NnQ8eeeT88qiSNOOFMr-Ug.JPEG%2Fupload_b40ddd61e01805e60a9f192c4deb6efb.jpeg',
      ttl: '듀플릿',
      des: '부산 해운대구 우동1로20번길 27-13 1층'
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

export default Haeundae;