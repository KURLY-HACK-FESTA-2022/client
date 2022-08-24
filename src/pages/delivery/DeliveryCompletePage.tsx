import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { EventHandler, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function DeliveryCompletePage() {
  const navigate = useNavigate();
  const [image, setImage] = useState('');
  return (
    <div className="">
      <Helmet>
        <title>컬리체이서 | 배송기사 배송완료 페이지 </title>
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
        <p className="text-2xl pb-1 font-bold">배송 완료</p>
      </div>
      <div className="flex justify-center items-center h-96 px-6 ">
        <img className="max-w-full h-full" src={image}></img>
      </div>

      <div className="flex h-20 justify-center items-center ">
        <label className="px-10 py-3 w-6/12 justify-center bg-purple-900 border border-gray-400 text-white text-xs font-thin rounded">
          사진 추가
          <input
            type="file"
            style={{ display: 'none' }}
            // capture="camera"
            onChange={(e: any) => {
              console.log(e.target.files[0]);
              setImage(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>
      </div>
      <div className="px-6 py-6">
        <div className="">
          <p className="text-sm text-gray-500 pt-2 pb-2">상세 주소</p>
          <p className="font-bold pt-2 pb-3">
            서울 광진구 광장로 63 (유진빌라) 3동 201호
          </p>
        </div>
        <div className=" border-solid border-t-2 border-gray-100">
          <p className="text-sm text-gray-500 pt-2 pb-2">수령인 이름</p>
          <p className="font-bold pt-2 pb-3">홍길동</p>
        </div>
        <div className=" border-solid border-t-2 border-gray-100">
          <p className="text-sm text-gray-500 pt-2 pb-2">운송장 내역</p>
          <p className="font-bold pt-2 pb-3">TT12351487t892984242</p>
        </div>
      </div>
      <div className="flex justify-center items-center px-6">
        <button
          className="px-10 py-3 w-6/12 bg-white text-purple-900 border border-purple-900 text-xs font-thin rounded mr-2"
          onClick={() => {
            navigate('/delivery-complete/123');
          }}
        >
          취소
        </button>
        <button
          className="px-10 py-3 w-6/12 bg-purple-900 border border-gray-400 text-white text-xs font-thin rounded"
          onClick={() => {
            navigate('/delivery-complete/123');
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default DeliveryCompletePage;
