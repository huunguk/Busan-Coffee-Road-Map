import React from "react";
import styles from "./mainCom.module.css";

function MainCom() {
  return (
    <div>
      <section className={styles.section}>
        <div className={styles.description}>
          <h3>2022</h3>
          <h4>Busan Coffee Road Map</h4>
          <p>공간 기록장 : 부산, 카페를 돌아다니며 좋았던 공간을 기록한다.</p>
        </div>
        <div className={styles.lbox}></div>
        <div className={styles.rbox}></div>
      </section>
    </div>
  );
}

export default MainCom;
