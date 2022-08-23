export const getDistance = ({
  beforeLatitude,
  beforLongitude,
  newLatitude,
  newLongitude,
}: any) => {
  if (beforeLatitude === newLatitude && beforLongitude === newLongitude) {
    return 0;
  } else {
    const radBeforeLatitude = (Math.PI * beforeLatitude) / 180;
    const radNewLatitude = (Math.PI * newLatitude) / 180;
    const theta = beforLongitude - newLongitude;
    const radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radBeforeLatitude) * Math.sin(radNewLatitude) +
      Math.cos(radBeforeLatitude) *
        Math.cos(radNewLatitude) *
        Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;
    //KM로 변환
    console.log(
      'getDistance',
      beforeLatitude,
      beforLongitude,
      newLatitude,
      newLongitude,
      dist,
    );
    return dist;
  }
};

// export function useCoordinate(address: string) {
//   const [coordinate, setCoordinate] = useState<any>();
//   const getCoordinate = (address: string) => {
//     const geocoder = new kakao.maps.services.Geocoder();
//     geocoder.addressSearch(address, (result, status) => {
//       if (status === kakao.maps.services.Status.OK) {
//         console.log(result);
//         return { lat: result[0].x, lng: result[0].y };
//       }
//       return { lat: 0, lng: 0 };
//     });
//   };

//   return coordinate;
// }

// export const getCoordinate = ({ address, setPositionList }: any) => {
//   const geocoder = new kakao.maps.services.Geocoder();
//   geocoder.addressSearch(address, (result, status) => {
//     if (status === kakao.maps.services.Status.OK) {
//       console.log(result);
//       setPositionList((prev: any) => [...prev, result]);
//     }
//   });
// };
