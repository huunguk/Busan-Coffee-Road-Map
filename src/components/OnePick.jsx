/*global kakao*/
import React, { useEffect } from "react";
import "./onepickrstyle.css";

const Location = () => {
  useEffect(() => {
    var container = document.getElementById("map");
    var options = {
      center: new kakao.maps.LatLng(35.15275, 129.06673),
      level: 3,
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(35.15275, 129.06673);
    var marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(map);
  }, []);

  return (
    <div>
      <section id="section">
        <div id="lbox">
          <div id="map"></div>
        </div>
        <div id="rbox">
          <div class="rbox_li">
            <div class="img"></div>
            <h3>도토리다방</h3>
            <p>
              가정집을 리모델링 한 곳이라 구석구석 엔틱한 분위기가 독특하다.
              <br />
              무엇보다 식용 색소로 캐릭터 그림을 그려주며, 귀여운 크리마트가
              독보적이다.
            </p>
            <div>
              <ul class="rbox_list">
                <li>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3OmHRxj65CepkJZNYhN0btRokVX2_VH2Pg&usqp=CAU"></img>
                </li>
                <li>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRyoyhd4a-q0k-MKmVqQJTKROxZMD9AOU5jQ&usqp=CAU"></img>
                </li>
                <li>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLe8OntCO7_Ijq7QBuxrurcTYuMhz0Ms1Q-A&usqp=CAU"></img>
                </li>
              </ul>
            </div>
            <span class="rbox_span">
              <a href="https://map.naver.com/v5/entry/place/1836213025?id=1836213025">
                도토리다방 더 알아보기
              </a>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Location;
