import { faX, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { myCompleteInfo } from 'model/complete';
import React, { EventHandler, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export type completeDetailName = {
  status: number;
  orderNumber: string;
  createAt: string;
  address: string;
  name: string;
  statusName: string;
};

function DeliveryCompleteListPage() {
  const navigate = useNavigate();
  const [native, setNative] = useState('');
  const nativeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNative(e.target.value);
  };

  const [all, setAll] = useState(true);
  const [complete, setComplete] = useState(false);
  const [redelivery, setRedelivery] = useState(false);
  const [miss, setMiss] = useState(false);

  const MyCompleteInfo = myCompleteInfo;
  const CompleteDetailName: completeDetailName[] = [];

  for (let i = 0; i < MyCompleteInfo.length; i++) {
    const temp: completeDetailName = {
      ...MyCompleteInfo[i],
      statusName: '',
    };
    if (MyCompleteInfo[i].status === 0) {
      temp.statusName = '배송 완료';
    } else if (MyCompleteInfo[i].status === 1) {
      temp.statusName = '재배송 완료';
    } else if (MyCompleteInfo[i].status === 2) {
      temp.statusName = '미배송 수거';
    } else if (MyCompleteInfo[i].status === 3) {
      temp.statusName = '미배송 취소';
    }
    CompleteDetailName.push(temp);
  }

  useEffect(() => {
    const date = new Date();
    setNative(date.toISOString().substring(0, 10));
  }, []);
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
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="text-xl text-gray-600"
          />
        </button>
        <p className="text-2xl pb-1 font-bold">배송 완료 내역</p>
      </div>
      <div className="px-6">
        <input
          type={'date'}
          className="w-full border border-solid border-gray-300 p-3 rounded"
          value={native}
          onChange={nativeChange}
        ></input>
      </div>
      <div className="py-5 px-6">
        <button
          className={
            all
              ? 'px-3 py-2 bg-purple-900 border border-gray-400 text-white text-sm font-thin rounded mr-2'
              : 'px-3 py-2  bg-white text-gray-400 border border-gray-400 text-sm font-normal rounded mr-2'
          }
          onClick={() => {
            setAll(true);
            setComplete(false);
            setRedelivery(false);
            setMiss(false);
          }}
        >
          전체
        </button>
        <button
          className={
            complete
              ? 'px-3 py-2 bg-purple-900 border border-gray-400 text-white text-sm font-thin rounded mr-2'
              : 'px-3 py-2  bg-white text-gray-400 border border-gray-400 text-sm font-normal rounded mr-2'
          }
          onClick={() => {
            setAll(false);
            setComplete(true);
            setRedelivery(false);
            setMiss(false);
          }}
        >
          배송 완료
        </button>
        <button
          className={
            redelivery
              ? 'px-3 py-2 bg-purple-900 border border-gray-400 text-white text-sm font-thin rounded mr-2'
              : 'px-3 py-2  bg-white text-gray-400 border border-gray-400 text-sm font-normal rounded mr-2'
          }
          onClick={() => {
            setAll(false);
            setComplete(false);
            setRedelivery(true);
            setMiss(false);
          }}
        >
          재배송
        </button>
        <button
          className={
            miss
              ? 'px-3 py-2 bg-purple-900 border border-gray-400 text-white text-sm font-thin rounded mr-2'
              : 'px-3 py-2  bg-white text-gray-400 border border-gray-400 text-sm font-normal rounded mr-2'
          }
          onClick={() => {
            setAll(false);
            setComplete(false);
            setRedelivery(false);
            setMiss(true);
          }}
        >
          오배송
        </button>
      </div>
      {CompleteDetailName.map((value, iter) => {
        return (
          <div
            key={iter}
            className="block px-6 border-solid border-t-2 border-gray-100 py-5 hover:bg-purple-100"
          >
            <div className="flex relative items-center">
              {value.status == 0 ? (
                <div
                  className={
                    'px-2 py-0.5 text-xs border border-purple-900 text-purple-900 rounded-3xl mr-3'
                  }
                >
                  {value.statusName}
                </div>
              ) : value.status == 1 ? (
                <div
                  className={
                    'px-2 py-0.5 text-xs border border-yellow-500 text-yellow-500 rounded-3xl mr-3'
                  }
                >
                  {value.statusName}
                </div>
              ) : value.status == 2 ? (
                <div
                  className={
                    'px-2 py-0.5 text-xs border border-red-600 text-red-600 rounded-3xl mr-3'
                  }
                >
                  {value.statusName}
                </div>
              ) : (
                <div
                  className={
                    'px-2 py-0.5 text-xs border border-orange-600 text-orange-600 rounded-3xl mr-3'
                  }
                >
                  {value.statusName}
                </div>
              )}
              <p className="text-xs text-purple-900">{value.orderNumber}</p>
              <p className="text-xs absolute right-0">{value.createAt}</p>
            </div>
            <div className="py-2">
              <p>{value.address}</p>
            </div>
            <div className="text-xs">
              <p>{value.name}</p>
            </div>
            {value.status === 0 ? (
              <div className="pt-3 flex justify-end">
                <button
                  className="py-1 px-4 rounded-2xl bg-purple-900 text-white text-sm font-thin"
                  onClick={() => {
                    navigate('/delivery-complete/123');
                  }}
                >
                  배송 완료 확인
                </button>
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}

export default DeliveryCompleteListPage;
