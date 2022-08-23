import { faBell, faUser } from '@fortawesome/free-regular-svg-icons';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function DeliveryMenuPage() {
  const navigate = useNavigate();
  return (
    <div className="flex items-center flex-col bg-gray-100">
      <Helmet>
        <title>컬리체이서 | 배송기사 메뉴페이지 </title>
      </Helmet>
      <section className="bg-white h-48 w-full px-6">
        <div className="relative h-24">
          <div className="flex h-20 items-center">
            <button
              onClick={() => {
                navigate(-1);
              }}
              className="mr-5"
            >
              <FontAwesomeIcon icon={faX} className="text-xl text-gray-600" />
            </button>
            <p className="text-2xl pb-1 font-bold">알림</p>
          </div>
          <a href="/delivery-notice/123">
            <FontAwesomeIcon
              icon={faBell}
              className="text-2xl absolute top-6 right-0"
            />
          </a>
        </div>
        <div className="flex mb-8 relative">
          <div className="bg-gray-100 w-14 h-14 rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faUser} className="text-xl text-gray-500" />
          </div>
          <div className="px-4 pt-1">
            <p className="text-gray-600">홍길동</p>
            <p className="text-gray-600">Purple 등급</p>
          </div>
          <div className="pt-1 absolute right-0 top-3">
            <button className="px-4 py-1.5 bg-white text-purple-900 border border-purple-900 text-xs font-normal rounded-2xl mr-2">
              수정
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-white w-full">
        <a href={'/delivery/123'}>
          <div className="text-lg px-6 py-6 border-solid border-t-2 border-gray-100 hover:bg-purple-900 hover:text-white">
            오늘의 배송
          </div>
        </a>
        <a href={'/delivery-complete-list/123'}>
          <div className="text-lg px-6 py-6 border-solid border-t-2 border-gray-100 hover:bg-purple-900 hover:text-white">
            배송 완료 내역
          </div>
        </a>
      </section>
    </div>
  );
}

export default DeliveryMenuPage;
