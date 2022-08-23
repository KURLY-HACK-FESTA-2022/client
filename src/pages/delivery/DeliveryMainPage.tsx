import MainHeader from 'components/delivery/main/MainHeader';
import DeliveryMainContainer from 'container/DeliveryMainContainer';
import React from 'react';
import { Helmet } from 'react-helmet-async';

function DeliveryMainPage() {
  return (
    <div>
      <Helmet>
        <title>컬리체이서 | 배송기사 메인페이지 </title>
      </Helmet>
      <MainHeader />
      <DeliveryMainContainer />
    </div>
  );
}

export default DeliveryMainPage;
