import DetailHeader from 'components/common/DetailHeader';
import DeliveryDetailContainer from 'container/DeliveryDetailContainer';
import React from 'react';
import { Helmet } from 'react-helmet-async';

function DeliveryDetailPage() {
  return (
    <div>
      <Helmet>
        <title>컬리체이서 | 배송기사 배송 상세페이지 </title>
      </Helmet>
      <DetailHeader />
      <DeliveryDetailContainer />
    </div>
  );
}

export default DeliveryDetailPage;
