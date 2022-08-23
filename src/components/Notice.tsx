import { faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

interface ICustomerNoticeProps {
  status: number;
  time: string;
  message: string;
  index: number;
  name: string | null;
}

function Notice({ status, time, message, index, name }: ICustomerNoticeProps) {
  const statusArray = [
    '상품 문의 결과',
    '미배송 판정 실패',
    '미배송 판정',
    '미배송 수거 취소',
    '미배송 수거',
    '미배송 수거 잔행',
  ];
  return (
    <div className="w-full py-4 hover:bg-purple-100 px-6 border-solid border-t-2 border-gray-100">
      <div className="flex py-1 relative">
        {index % 2 == 1 ? (
          <>
            <FontAwesomeIcon
              icon={faBell}
              className="text-2xl mr-3 text-red-400"
            />
            <p className="text-base text-red-400 font-bold">
              {statusArray[status]}
            </p>
          </>
        ) : (
          <>
            <FontAwesomeIcon
              icon={faBell}
              className="text-2xl mr-3 text-purple-900"
            />
            <p className="text-base text-purple-900 font-bold">
              {statusArray[status]}
            </p>
          </>
        )}
        <p className="absolute right-0 text-gray-500 text-xs">{time}</p>
      </div>
      <div className="pt-3">
        <p className="text-sm">{message}</p>
      </div>
      <div>
        <p className="text-sm text-gray-400">{name}</p>
      </div>
    </div>
  );
}

export default Notice;
