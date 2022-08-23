import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  GrayBalloonImage,
  PurpleBalloonImage,
  RedBalloonChoiceImage,
  YellowBalloonImage,
} from 'assets/images';
import Button from 'components/common/Button';
import { myDeliveryInfo } from 'model/delivery';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function UndeliveryDetailPage() {
  const navigate = useNavigate();
  const MyDeliveryInfo = myDeliveryInfo;

  const markerImageSrc = [
    RedBalloonChoiceImage,
    GrayBalloonImage,
    YellowBalloonImage,
    PurpleBalloonImage,
  ];
  const imageSize = { width: 18, height: 22 };
  const spriteSize = { width: 18, height: 22 };

  return (
    <div>
      <Helmet>
        <title>컬리체이서 | 배송기사 미배송페이지 </title>
      </Helmet>
      <div className="flex h-20 items-center px-6">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mr-5"
        >
          <FontAwesomeIcon icon={faX} className="text-xl text-gray-600" />
        </button>
        <p className="text-2xl pb-1 font-bold">상세 정보</p>
      </div>
      <div className="px-6">
        {MyDeliveryInfo.map((value, iter) => {
          return (
            <div
              key={iter}
              className=" border-solid border-t-2 border-gray-100"
            >
              <p className="text-sm text-gray-500 pt-2 pb-2">{value.title}</p>
              <p className="font-bold pt-2 pb-3">{value.content}</p>
            </div>
          );
        })}
      </div>
      <div className="px-6">
        <div className=" border-solid border-t-2 border-gray-100">
          <p className="text-sm text-gray-500 pt-2 pb-2">고객 요청 메세지</p>
          <p className="font-bold pt-2 pb-3">
            배송 완료가 떠서 수령하러 나갔는데, 제품이 없어요. 이상해서
            배송사진을 보니까 집앞이 아니더라구요. 내일 급히 써야하는 재료인데
            다시 찾아주세요ㅜㅜ
          </p>
        </div>
        <div className=" border-solid border-t-2 border-gray-100">
          <p className="text-sm text-gray-500 pt-2 pb-2">고객 요청 메세지</p>
          <p className="font-bold pt-2 pb-3">예상 배송 위치</p>
          <div className="h-48">
            <Map
              center={{
                // 지도의 중심좌표
                lat: 37.566,
                lng: 126.978,
              }}
              style={{
                // 지도의 크기
                width: '100%',
                height: '276px',
              }}
              level={4} // 지도의 확대 레벨
            >
              <MapMarker
                position={{
                  // 마커가 표시될 위치입니다
                  lat: 37.566,
                  lng: 126.978,
                }}
                image={{
                  src: markerImageSrc[0],
                  size: imageSize,
                  options: {
                    spriteSize: spriteSize,
                  },
                }}
              />
            </Map>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-6 my--500">
        <ButtonContainer>
          <Button
            variant="white"
            onClick={() => {
              navigate('/delivery-complete/123');
            }}
          >
            미배송 수거 취소
          </Button>
          <Button
            variant="purple"
            onClick={() => {
              navigate('/delivery-complete/123');
            }}
          >
            미배송 수거 완료
          </Button>
        </ButtonContainer>
      </div>
    </div>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin: 0 auto;
  margin-top: 100px;
`;

export default UndeliveryDetailPage;
