import React from "react";
import { UncontrolledCarousel } from "reactstrap";
import styles from "./bestPlace.module.css";

function BestPlace() {
  const items = [
    {
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220718_138%2F16581213829172oQOL_JPEG%2FKakaoTalk_20220718_114025101_04.jpg",
      altText: "민락더마켓",
    },
    {
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220718_58%2F1658121361740D1fQk_JPEG%2FKakaoTalk_20220718_114025101_01.jpg",
      altText: "민락더마켓2",
    },
    {
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220718_286%2F1658121368982y7005_JPEG%2FKakaoTalk_20220718_114025101_07.jpg",
      altText: "민락더마켓3",
    },
    {
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220718_132%2F16581214075717pOH8_JPEG%2FKakaoTalk_20220718_114025101_09.jpg",
      altText: "민락더마켓4",
    },
    {
      src: "https://search.pstatic.net/common/?autoRotate=true&quality=95&type=w750&src=https%3A%2F%2Fldb-phinf.pstatic.net%2F20220718_192%2F1658121388982dqrRz_JPEG%2FKakaoTalk_20220718_114025101_02.jpg",
      altText: "민락더마켓5",
    },
  ];
  return (
    <>
      <section className={styles.section}>
        <div className={styles.box}>
          <h3>
            마켓을 통한 공동체의 연결을 꿈꾸는
            <br />
            <span>광안리 문화복합공간 밀락더마켓</span>
            <br />
            2022년 7/15일 밀락더마켓 part.1이 공개되었습니다
          </h3>
          <h5>
            세번째 워터프론트 마켓! 부산에서 사랑받는 로컬 브랜드들을 만날 수
            있는것은 물론 <br />
            스탠드형 계단 좌석을 통해 가장 가까운 위치에서 일몰과 광안대교를
            편안하게 감상하세요! <br />
            부산에서 만나는 뉴욕바이브 🗽 밀락더마켓에서 여유를 즐겨보세요!
          </h5>
          <p>
            부산광역시 수영구 민락수변로17번길 56 MILLAC THE MARKET 56,
            <br />
            millaksubyeon-ro 17beon-gil, suyeong-gu Busan, Republic of Korea
          </p>
        </div>
        <UncontrolledCarousel className={styles.slide} items={items} />
      </section>
    </>
  );
}

export default BestPlace;
