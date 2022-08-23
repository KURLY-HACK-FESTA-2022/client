import { getDistance } from 'libs/utils/kakaoMapCalc';
import { useCallback, useState } from 'react';

interface Location {
  lat: number;
  lng: number;
}

export default function useCurrentLocationCheck() {
  let beforeLocation = {
    lat: 0,
    lng: 0,
  };
  let isUpdateFlag = true;

  const onCurrentLocationCheck = useCallback(() => {
    if (navigator.geolocation) {
      const newId = navigator.geolocation.watchPosition(
        (position) => {
          // setIsUpdateFlag(true);
          isUpdateFlag = true;
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
              // setIsUpdateFlag(false);
              isUpdateFlag = false;
            }
          }

          if (isUpdateFlag) {
            // setBeforeLocation(newLocation);
            beforeLocation = newLocation;
          }
        },
        (err) => {
          console.log(err.message);
        },
        { enableHighAccuracy: false, maximumAge: 10000, timeout: 5000 },
      );
    }
  }, []);
  return {
    beforeLocation,
    onCurrentLocationCheck,
  };
}
