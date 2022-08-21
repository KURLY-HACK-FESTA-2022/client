import { getDistance } from 'libs/utils/kakaoMapCalc';
import React, { useState } from 'react';

interface Location {
  latitude: number;
  longitude: number;
}

export default function useCurrentLocationCheck() {
  const [beforeLocation, setBeforeLocation] = useState<Location>();
  const [isUpdateFlag, setIsUpdateFlag] = useState(true);

  const onCurrentLocationCheck = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (navigator.geolocation) {
      const newId = navigator.geolocation.watchPosition(
        (position) => {
          setIsUpdateFlag(true);
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          console.log('newLocation', newLocation);

          //시작
          if (beforeLocation !== undefined) {
            const dist = getDistance({
              beforeLatitude: beforeLocation.latitude,
              beforLongitude: beforeLocation.longitude,
              newLatitude: newLocation.latitude,
              newLongitude: newLocation.longitude,
            });
            // //이동거리가 50m미만이면 안바뀜
            if (dist < 0.05) {
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
        { enableHighAccuracy: true, maximumAge: 10000, timeout: 5000 },
      );
    }
  };
  return {
    onCurrentLocationCheck,
  };
}
