import {
  GrayBalloonImage,
  PurpleBalloonImage,
  RedBalloonChoiceImage,
  YellowBalloonImage,
} from 'assets/images';
import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import {
  PurpleRectangle,
  RedRectangle,
  WhiteRectangle,
  YellowRectangle,
} from 'assets/icons';

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

  const deliveryState = [
    {
      text: '배송 완료',
      icon: <WhiteRectangle />,
    },
    {
      text: '배송 예정',
      icon: <PurpleRectangle />,
    },
    {
      text: '재배송',
      icon: <YellowRectangle />,
    },
    {
      text: '미배송 수거',
      icon: <RedRectangle />,
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
        height: '404px',
      }}
      level={4} // 지도의 확대 레벨
    >
      <DeliveryStateBar>
        {deliveryState.map(({ text, icon }) => (
          <DeliveryStateList key={`Delivery state ${text}`}>
            {icon}
            <DeliveryStateText>{text}</DeliveryStateText>
          </DeliveryStateList>
        ))}
      </DeliveryStateBar>
      {orderInfomations.map((orderInfomation, index) => {
        const { state, lat, lng } = orderInfomation;
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

const DeliveryStateBar = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 40px;
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 9;
  bottom: 405px;
  ${({ theme }) => theme.textStyle.medium[1420]};
`;

const DeliveryStateList = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  z-index: 99;
`;

const DeliveryStateText = styled.span`
  margin-left: 8px;
`;

export default KakaoMap;
