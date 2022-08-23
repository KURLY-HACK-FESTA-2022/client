import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeliveryDetailContainer from 'container/DeliveryDetailContainer';
import { myDeliveryInfo } from 'model/ delivery';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function DeliveryDetailPage() {
  const navigate = useNavigate();
  const MyDeliveryInfo = myDeliveryInfo;
  return (
    <div>
      <Helmet>
        <title>컬리체이서 | 고객 알림페이지</title>
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
    // <section>
    //   <h2>상세 정보</h2>
    //   <ul>
    //     <li>상세주소</li>
    //     <li>수령인 이름</li>
    //     <li>배송 메시지</li>
    //     <li>공동 현관 비밀번호</li>
    //     <li>운송장 내역</li>
    //     <li>포장 방법</li>
    //     <li>제품 수량</li>
    //     <li>유의 사항</li>
    //   </ul>
    //   <button>대응 배송</button>
    //   <button onClick={(e) => onCurrentLocationCheck(e)}>배송 완료</button>
    // </section>
  );
}

export default DeliveryDetailPage;
