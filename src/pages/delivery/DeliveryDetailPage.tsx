import DeliveryDetailInfomation from 'components/delivery/deliveryDetail/DeliveryDetailInfomation';
import React from 'react';
import { Helmet } from 'react-helmet-async';

function DeliveryDetailPage() {
  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>컬리체이서 | 배송기사 배송 상세페이지 </title>
      </Helmet>
      <DeliveryDetailInfomation />
      <h1></h1>
    </div>
  );
}

export default DeliveryDetailPage;
