import DetailHeader from 'components/delivery/deliveryDetail/DetailHeader';
import DeliveryDetailContainer from 'container/DeliveryDetailContainer';
import React from 'react';
import { Helmet } from 'react-helmet-async';

function DeliveryDetailPage() {
  return (
    <>
      <Helmet>
        <title>컬리체이서 | 고객 알림페이지</title>
      </Helmet>
      <DetailHeader />
      <DeliveryDetailContainer />
    </>
  );
}

export default DeliveryDetailPage;
