import DeliveryDetailContainer from 'container/DeliveryDetailContainer';
import React from 'react';
import { Helmet } from 'react-helmet-async';

function DeliveryDetailPage() {
  return (
    <div className="h-screen flex items-center flex-col">
      <Helmet>
        <title>컬리체이서 | 배송기사 배송 상세페이지 </title>
      </Helmet>
      <h1></h1>
      <div className=" h-20 bg-slate-600 w-full ">
        <p className="m-0">상세 정보</p>
      </div>
      <DeliveryDetailContainer />
    </div>
  );
}

export default DeliveryDetailPage;
