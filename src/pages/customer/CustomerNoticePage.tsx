import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Notice from 'components/Notice';
import { myCustomerNotice } from 'model/notice';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function CustomerNoticePage() {
  const navigate = useNavigate();
  const MyCustomerNotice = myCustomerNotice;
  return (
    <div className="h-screen">
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
        <p className="text-2xl pb-1 font-bold">알림</p>
      </div>
      {MyCustomerNotice.map((value, iter) => {
        return (
          <Notice
            key={iter}
            index={iter}
            status={value.status}
            time={value.time}
            message={value.message}
          ></Notice>
        );
      })}
    </div>
  );
}

export default CustomerNoticePage;
