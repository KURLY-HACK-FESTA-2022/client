import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';
import {
  PurpleRectangle,
  RedRectangle,
  WhiteRectangle,
  YellowRectangle,
} from 'assets/icons';
import { Delivery } from 'model/delivery';
import deliveryStorage from 'libs/utils/deliveryStorage';
// import { getCoordinate } from 'libs/utils/location';

interface DeliveryList {
  deliveryList: Delivery[];
  setSelectedOrder: (id: number) => void;
}

function KakaoMap({ deliveryList, setSelectedOrder }: DeliveryList) {
  const imageSize = { width: 18, height: 22 };
  const spriteSize = { width: 18, height: 22 };

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
  // const [positionList, setPositionList] = useState([]);
  // deliveryList.map((delivery) => {
  //   const { address } = delivery;
  //   getCoordinate({ address, setPositionList });
  // });

  return (
    <KakaoMapWrapper>
      <Map // 지도를 표시할 Container
        center={{
          // 지도의 중심좌표
          lat: 37.565,
          lng: 126.975,
        }}
        style={{
          // 지도의 크기
          width: '100%',
          height: '404px',
        }}
        level={5} // 지도의 확대 레벨
      >
        <DeliveryStateBar>
          {deliveryState.map(({ text, icon }) => (
            <DeliveryStateList key={`Delivery state ${text}`}>
              {icon}
              <DeliveryStateText>{text}</DeliveryStateText>
            </DeliveryStateList>
          ))}
        </DeliveryStateBar>
        {deliveryList.map((delivery, index) => (
          <MapMarker
            position={{
              // 마커가 표시될 위치입니다
              lat: delivery.lat,
              lng: delivery.lng,
            }}
            key={index}
            image={{
              src: delivery.marker,
              size: imageSize,
              options: {
                spriteSize: spriteSize,
              },
            }}
            onClick={() => {
              deliveryStorage.remove();
              deliveryStorage.set(delivery);
              setSelectedOrder(delivery.id);
            }}
          />
        ))}
        {/* {deliveryList?.map((delivery, index) => {
          const { address } = delivery;
          const getResult = async () => {
            console.log(result);
            const result = await getCoordinate(address);
          };
          return (
            <MapMarker
              position={{
                // 마커가 표시될 위치입니다
                lat: 37.566,
                lng: 126.978,
              }}
              key={index}
              image={{
                src: markerImageSrc[0],
                size: imageSize,
                options: {
                  spriteSize: spriteSize,
                },
              }}
              // onClick={() => console.log('marker', lat, lng)}
            />
          );
        })} */}
      </Map>
    </KakaoMapWrapper>
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

const KakaoMapWrapper = styled.div`
  width: 360px;
  height: 404px;
`;

export default KakaoMap;
