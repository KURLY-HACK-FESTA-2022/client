import { BellIcon } from 'assets/icons';
import React, { useEffect, useState } from 'react';

const kakao = (window as any).kakao;

const MapTest = () => {
  const [map, setMap] = useState(null);
  const firstY = 37.592113779824636;
  const firstX = 126.92199098323738;

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById('map');
    const options = { center: new kakao.maps.LatLng(firstY, firstX), level: 3 };

    // const imageSrc = { BellIcon }, // 마커이미지의 주소입니다
    //   imageSize = new kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
    //   imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
    // const markerImage = new kakao.maps.MarkerImage(
    //   imageSrc,
    //   imageSize,
    //   imageOption,
    // );

    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    const markerPosition = new kakao.maps.LatLng(firstY, firstX);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(kakaoMap);
    // new kakao.maps.Marker({
    //   map: map,
    //   position: new kakao.maps.LatLng(firstY, firstX),
    //   image: markerImage,
    //   zIndex: 1,
    // });
  }, [firstY, firstX]);

  return (
    <div
      style={{
        width: '100%',
        display: 'inline-block',
        marginLeft: '5px',
        marginRight: '5px',
      }}
    >
      <div id="map" style={{ width: '99%', height: '500px' }}></div>
    </div>
  );
};

export default MapTest;
