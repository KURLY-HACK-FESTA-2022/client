import { getDistance } from 'libs/utils/kakaoMapCalc';
import { useState } from 'react';

interface Location {
  lat: number;
  lng: number;
}

export default function useCurrentLocationCheck() {
  const [beforeLocation, setBeforeLocation] = useState<Location>();
  const [isUpdateFlag, setIsUpdateFlag] = useState(true);

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
    }
  };
  return {
    beforeLocation,
    onCurrentLocationCheck,
  };
}
