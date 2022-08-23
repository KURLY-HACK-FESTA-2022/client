import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import KakaoMap from 'components/delivery/main/KakaoMap';
import { myDeliveryInfo } from 'model/ delivery';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function UndeliveryDetailPage() {
  const navigate = useNavigate();
  const MyDeliveryInfo = myDeliveryInfo;
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
            <KakaoMap />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-6">
        <button
          className="px-10 py-3 w-6/12 bg-white text-purple-900 border border-purple-900 text-xs font-thin rounded mr-2"
          onClick={() => {
            navigate('/delivery-complete/123');
          }}
        >
          대응 배송
        </button>
        <button
          className="px-10 py-3 w-6/12 bg-purple-900 border border-gray-400 text-white text-xs font-thin rounded"
          onClick={() => {
            navigate('/delivery-complete/123');
          }}
        >
          배송 완료
        </button>
      </div>
    </div>
  );
}

export default UndeliveryDetailPage;
