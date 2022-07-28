/*global kakao*/
import React, { useEffect } from 'react'
import './MapContainerstyle.css';

const Location = () => {

  useEffect(() => {
    var container = document.getElementById('map');
    var options = {
      center: new kakao.maps.LatLng(35.15275, 129.06673),
      level: 3
    };

    var map = new kakao.maps.Map(container, options);
    var markerPosition = new kakao.maps.LatLng(35.15275, 129.06673);
    var marker = new kakao.maps.Marker({
      position: markerPosition
    });
    marker.setMap(map);

  }, [])


  return (
    <div>
      <section id="section">
        <div id="lbox"><h1></h1></div>
        <div id="map"></div>
      </section>
    </div>
  )
}

export default Location;