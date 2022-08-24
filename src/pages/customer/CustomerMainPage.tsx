import { faUser, faBell } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Product from 'components/Product';
import { getMyOrderInfo, getMyOrderInfSix, getMyOrderInf12 } from 'model/order';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function CustomerMainPage() {
  const navigate = useNavigate();
  const [myOrderInfo, setMyOrderInfo] = useState(getMyOrderInfo);
  const [threeMonth, setThreeMonth] = useState(true);
  const [sixMonth, setSixMonth] = useState(false);
  const [oneYear, setOneYear] = useState(false);
  const [threeYear, setThreeYear] = useState(false);
  const [searchData, setSearchData] = useState([]);

  return (
    <div className="flex items-center flex-col bg-gray-100">
      <Helmet>
        <title>컬리체이서 | 고객 메인페이지</title>
      </Helmet>
      <section className="bg-white h-48 w-full px-6">
        <div className="relative h-24">
          <a href="/customer/123">
            <img
              src={'https://thejobyouhate76.s3.amazonaws.com/kurlyLogoNoBg.png'}
              alt={'profile'}
              className="w-14 h-10 absolute top-6"
            ></img>
          </a>
          <a href="/customer-notice/123">
            <FontAwesomeIcon
              icon={faBell}
              className="text-2xl absolute top-8 right-0"
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

      <section className="bg-white mt-2 w-full">
        <div className="h-16 px-6 flex items-center">
          <p className="font-bold text-xl">배송 내역</p>
        </div>
        <div className="py-1 px-6">
          <button
            className={
              threeMonth
                ? 'px-3 py-1 bg-purple-900 border border-gray-400 text-white text-base font-thin rounded mr-2'
                : 'px-3 py-1  bg-white text-gray-400 border border-gray-400 text-base font-normal rounded mr-2'
            }
            onClick={() => {
              setThreeMonth(true);
              setSixMonth(false);
              setOneYear(false);
              setThreeYear(false);
              setMyOrderInfo(getMyOrderInfo);
            }}
          >
            3개월
          </button>
          <button
            className={
              sixMonth
                ? 'px-3 py-1 bg-purple-900 border border-gray-400 text-white text-base font-thin rounded mr-2'
                : 'px-3 py-1  bg-white text-gray-400 border border-gray-400 text-base font-normal rounded mr-2'
            }
            onClick={() => {
              setThreeMonth(false);
              setSixMonth(true);
              setOneYear(false);
              setThreeYear(false);
              setMyOrderInfo(getMyOrderInfSix);
            }}
          >
            6개월
          </button>
          <button
            className={
              oneYear
                ? 'px-3 py-1 bg-purple-900 border border-gray-400 text-white text-base font-thin rounded mr-2'
                : 'px-3 py-1  bg-white text-gray-400 border border-gray-400 text-base font-normal rounded mr-2'
            }
            onClick={() => {
              setThreeMonth(false);
              setSixMonth(false);
              setOneYear(true);
              setThreeYear(false);
              setMyOrderInfo(getMyOrderInf12);
            }}
          >
            1년
          </button>
          <button
            className={
              threeYear
                ? 'px-3 py-1 bg-purple-900 border border-gray-400 text-white text-base font-thin rounded mr-2'
                : 'px-3 py-1  bg-white text-gray-400 border border-gray-400 text-base font-normal rounded mr-2'
            }
            onClick={() => {
              setThreeMonth(false);
              setSixMonth(false);
              setOneYear(false);
              setThreeYear(true);
              setMyOrderInfo(getMyOrderInf12);
            }}
          >
            3년
          </button>
        </div>
        {myOrderInfo.orderList.map((value1, iter1) => {
          return (
            <div key={iter1} className="px-3">
              <div className="w-full h-16 relative">
                <p className="absolute left-3 font-sans text-xl font-bold top-4">
                  {value1.date}
                </p>
                <a
                  className="absolute right-3 top-4"
                  href="/customer-order-detail/123"
                >
                  주문상세
                  <span className="text-2xl">{' >'}</span>
                </a>
              </div>
              <div className="border-t-2 border-gray-100 py-4">
                {value1.orderProduct.map((value2, iter2) => {
                  return (
                    <Product
                      key={iter2}
                      coverImg={value2.coverImg}
                      status={value2.status}
                      name={value2.name}
                      price={value2.price}
                      options={value2.options}
                    ></Product>
                  );
                })}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default CustomerMainPage;
