import React from "react"
import { UncontrolledCarousel } from 'reactstrap';
import styles from "./bestPlace.module.css";

function BestPlace() {
  const items = [
    {
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMjA3MDNfMTAy%2FMDAxNjU2ODIwMzkzNzU5.tu7G3weCZOdAuhfOkYWrV-VdJqCySG3DUXEN9zl5r58g.0vQXFlTsgNdK3z76dJeeYlME8B_VO5oWli3VbuIv5pwg.JPEG.jey2380%2F28CE465C-D629-435F-AD06-68AA386CC856.jpg',
      altText: '롱드라이버스',
      caption: '부산 부산진구 서전로57번길 4 1층',
      header: '롱드라이버스'
    },
    {
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20210627_40%2F1624757174013BiuXL_JPEG%2F9HBVBkJTeHI5V2MnRnowN7m5.jpeg.jpg',
      altText: '데이오프데이',
      caption: '부산 부산진구 전포대로216번길 8 1층',
      header: '데이오프데이'
    },
    {
      src: 'https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220322_250%2F1647935969338UaTTy_PNG%2FKakaoTalk_20220322_165659759_03.png',
      altText: '베르크로스터스',
      caption: '부산 부산진구 서전로58번길 115 지상1층, 2층',
      header: '베르크로스터스'
    }
  ];
  return (
    <>
      <section className={styles.section}>
        <UncontrolledCarousel className={styles.slide} items={items} />
        <div className={styles.box}></div>
      </section>
    </>
  );
}

export default BestPlace;