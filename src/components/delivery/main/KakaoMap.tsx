import {
  GrayBalloonImage,
  PurpleBalloonImage,
  RedBalloonChoiceImage,
  YellowBalloonImage,
} from 'assets/images';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function KakaoMap() {
  const markerImageSrc = [
    RedBalloonChoiceImage,
    GrayBalloonImage,
    YellowBalloonImage,
    PurpleBalloonImage,
  ];
  const imageSize = { width: 18, height: 22 };
  const spriteSize = { width: 18, height: 22 };

  const orderInfomations = [
    {
      state: '배송완료',
      lat: 37.566,
      lng: 126.978,
    },
    {
      state: '배송예정',
      lat: 37.6,
      lng: 126.5,
    },
  ];

  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 37.566,
        lng: 126.978,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '450px',
      }}
      level={4} // 지도의 확대 레벨
    >
      {orderInfomations.map((orderInfo, index) => {
        const { state, lat, lng } = orderInfo;
        return (
          <MapMarker
            position={{
              // 마커가 표시될 위치입니다
              lat,
              lng,
            }}
            key={index}
            image={{
              src: markerImageSrc[0],
              size: imageSize,
              options: {
                spriteSize: spriteSize,
              },
            }}
          />
        );
      })}
    </Map>
  );
}

export default KakaoMap;
