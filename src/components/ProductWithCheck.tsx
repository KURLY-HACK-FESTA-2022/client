import React from 'react';

interface IProductProps {
  coverImg: string;
  status: number;
  name: string;
  price: number;
  options: number;
}

function ProductWithCheck({
  coverImg,
  status,
  name,
  price,
  options,
}: IProductProps) {
  const statusArray = [
    '주문 완료',
    '배송 준비중',
    '배송 중',
    '배송완료',
    '미배송 수거',
  ];
  return (
    <div className="flex w-full px-2">
      <div className="w-1/12 flex justify-center items-center">
        <input
          type={'checkbox'}
          className="scale-150 accent-purple-900"
        ></input>
      </div>
      <div className="w-3/12">
        <img src={coverImg} alt={name} className="max-w-full h-auto"></img>
      </div>
      <div className="w-8/12 pt-3 pl-2">
        <p className="text-gray-400 text-xs">{statusArray[status]}</p>
        <p className="text-gray-600 mt-1">{name}</p>
        <p className=" text-sm font-bold">
          {`${price}원`}
          <span className="font-light">{` | ${options}개`}</span>
        </p>
      </div>
    </div>
  );
}

export default ProductWithCheck;
