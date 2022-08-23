import React, { useState } from 'react';
import Button from 'components/common/Button';
import WarningModal from 'components/delivery/deliveryDetail/WarningModal';
import useToggle from 'hooks/useToggle';
import DeliveryDetailInfomation from 'components/delivery/deliveryDetail/DeliveryDetailInfomation';
import styled from 'styled-components';
import useCurrentLocationCheck from 'hooks/useCurrentLocationCheck';
import { getDistance } from 'libs/utils/kakaoMapCalc';

function DeliveryDetailContainer() {
  const [isWarningModal, onToggleWarningModal] = useToggle();
  const [deliveryResponse, setDeliveryResponse] = useState({
    text: 'ds',
    branch: 'undelivery',
  });
  const { beforeLocation, onCurrentLocationCheck } = useCurrentLocationCheck();
  const deliveryLocation = {
    lat: 37.2976555,
    lng: 126.8666754,
  };

  onCurrentLocationCheck();

  const onDeliveryComplate = () => {
    onToggleWarningModal();
    const dist = getDistance({
      beforeLatitude: beforeLocation?.lat,
      beforLongitude: beforeLocation?.lng,
      newLatitude: deliveryLocation.lat,
      newLongitude: deliveryLocation.lng,
    });
    dist > 0.035 &&
      setDeliveryResponse((prev) => ({
        ...prev,
        branch: 'difference',
      }));
  };
  return (
    <>
      <DeliveryDetailInfomation />
      <ButtonContainer>
        <Button variant="white">대응 배송</Button>
        <Button variant="purple" onClick={onDeliveryComplate}>
          배송 완료
        </Button>
      </ButtonContainer>
      {isWarningModal && (
        <WarningModal
          deliveryResponse={deliveryResponse}
          onToggleModal={onToggleWarningModal}
        />
      )}
    </>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 320px;
  margin: 0 auto;
`;

export default DeliveryDetailContainer;
