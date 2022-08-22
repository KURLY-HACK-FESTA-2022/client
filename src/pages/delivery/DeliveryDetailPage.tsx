import DeliveryDetailContainer from 'container/DeliveryDetailContainer';
import React from 'react';
import { Helmet } from 'react-helmet-async';

function DeliveryDetailPage() {
  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <Helmet>
        <title>컬리체이서 | 배송기사 배송 상세페이지 </title>
      </Helmet>
      <h1></h1>
      <DeliveryDetailContainer />
    </div>
  );
}

export default DeliveryDetailPage;
