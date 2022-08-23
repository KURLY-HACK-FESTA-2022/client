import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notice from 'components/Notice';
import { myDeliveryNotice } from 'model/notice';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function DeliveryNoticePage() {
  const navigate = useNavigate();
  const MyDeliveryNotice = myDeliveryNotice;
  return (
    <div className="h-screen">
      <Helmet>
        <title>컬리체이서 | 배송기사 알림페이지 </title>
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
        <p className="text-2xl pb-1 font-bold">알림</p>
      </div>
      {MyDeliveryNotice.map((value, iter) => {
        return (
          <Notice
            key={iter}
            index={iter}
            status={value.status}
            time={value.time}
            message={value.message}
            name={value.name}
          ></Notice>
        );
      })}
    </div>
  );
}

export default DeliveryNoticePage;
