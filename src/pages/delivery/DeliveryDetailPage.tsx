import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DetailHeader from 'components/delivery/deliveryDetail/DetailHeader';
import DeliveryDetailContainer from 'container/DeliveryDetailContainer';
import { myDeliveryInfo } from 'model/ delivery';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function DeliveryDetailPage() {
  const navigate = useNavigate();
  const MyDeliveryInfo = myDeliveryInfo;
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
