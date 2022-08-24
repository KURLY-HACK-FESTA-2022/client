import React from 'react';
import { orderProduct1 } from 'model/order';
import ProductWithCheck from './ProductWithCheck';

interface IProductProps {
  orderNumber: string;
  openUndeliveryRequestModal: () => void;
  openProductInquiryModal: () => void;
}

function ProductDetail({
  orderNumber,
  openUndeliveryRequestModal,
  openProductInquiryModal,
}: IProductProps) {
  const myOrderProduct1 = orderProduct1;
  const statusArray = [
    '주문 완료',
    '배송 준비중',
    '배송 중',
    '배송완료',
    '미배송 수거',
  ];
  return (
    <div className="px-3">
      <div className="w-full h-16 relative">
        <p className="absolute left-3 font-sans text-xl font-bold top-4">
          {`주문번호 ${orderNumber}`}
        </p>
        <button className="px-4 py-1 bg-white text-purple-900 border border-purple-900 text-xs font-normal rounded-2xl mr-2 absolute right-0 top-4">
          1:1 문의하기
        </button>
      </div>
      <div className="border-t-2 border-gray-100 py-4">
        {myOrderProduct1.map((value, iter) => {
          return (
            <ProductWithCheck
              key={iter}
              coverImg={value.coverImg}
              status={value.status}
              name={value.name}
              price={value.price}
              options={value.options}
            ></ProductWithCheck>
          );
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          className="px-10 py-3 bg-white text-purple-900 border border-purple-900 text-xs font-thin rounded mr-2"
          onClick={openProductInquiryModal}
        >
          선택 상품 문의
        </button>
        <button
          className="px-10 py-3 bg-purple-900 border border-gray-400 text-white text-xs font-thin rounded"
          onClick={openUndeliveryRequestModal}
        >
          미배송 수거 요청
        </button>
      </div>
      <div className="flex justify-center items-center pt-2 pb-5">
        <p className="text-xs text-gray-400">
          미배송시 수거 요청은 당일 새벽 6시 이전에만 가능합니다.
        </p>
      </div>
    </div>
  );
}

export default ProductDetail;
