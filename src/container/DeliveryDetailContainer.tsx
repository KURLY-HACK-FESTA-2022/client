import React, { useEffect, useState } from 'react';
import Button from 'components/common/Button';
import WarningModal from 'components/delivery/deliveryDetail/WarningModal';
import useToggle from 'hooks/useToggle';
import DeliveryDetailInfomation from 'components/delivery/deliveryDetail/DeliveryDetailInfomation';
import styled from 'styled-components';
import { getDistance } from 'libs/utils/location';

interface Location {
  lat: number;
  lng: number;
}

function DeliveryDetailContainer() {
  const [isWarningModal, onToggleWarningModal] = useToggle();
  const [deliveryResponse, setDeliveryResponse] = useState({
    text: 'ds',
    branch: 'undelivery',
  });
  const deliveryLocation = {
    lat: 37.2976555,
    lng: 126.8666754,
  };

  const [beforeLocation, setBeforeLocation] = useState<Location>();
  const [isUpdateFlag, setIsUpdateFlag] = useState(true);
  const [watchId, setWatchId] = useState(-1);

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

  useEffect(() => {
    const onCurrentLocationCheck = () => {
      if (navigator.geolocation) {
        const newId = navigator.geolocation.watchPosition(
          (position) => {
            setIsUpdateFlag(true);
            const newLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };

            //시작
            if (beforeLocation !== undefined) {
              const dist = getDistance({
                beforeLatitude: beforeLocation.lat,
                beforLongitude: beforeLocation.lng,
                newLatitude: newLocation.lat,
                newLongitude: newLocation.lng,
              });
              // 이동거리가 35m미만이면 안바뀜
              if (dist < 0.035) {
                setIsUpdateFlag(false);
              }
            }

            if (isUpdateFlag) {
              setBeforeLocation(newLocation);
            }
          },
          (err) => {
            console.log(err.message);
          },
          { enableHighAccuracy: false, maximumAge: 10000, timeout: 5000 },
        );
        setWatchId(newId);
      }
    };
    onCurrentLocationCheck();
    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, []);
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
