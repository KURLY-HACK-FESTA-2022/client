import React from 'react';
import Button from 'components/common/Button';
import WarningModal from 'components/delivery/deliveryDetail/WarningModal';
import useToggle from 'hooks/useToggle';
import DeliveryDetailInfomation from 'components/delivery/deliveryDetail/DeliveryDetailInfomation';

function DeliveryDetailContainer() {
  const [isWarningModal, onToggleWarningModal] = useToggle();

  return (
    <>
      <DeliveryDetailInfomation />
      <Button variant="white">대응 배송</Button>
      {/* <Button variant="purple" onClick={}>
        배송 완료
      </Button> */}
      <WarningModal onToggleModal={onToggleWarningModal} />
    </>
  );
}

export default DeliveryDetailContainer;
