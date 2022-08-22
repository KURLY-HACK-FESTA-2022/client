import Button from 'components/common/Button';
import DeliveryInfomation from 'components/delivery/main/DeliveryInfomation';
import KakaoMap from 'components/delivery/main/KakaoMap';

function DeliveryMainContainer() {
  return (
    <>
      <KakaoMap />
      <DeliveryInfomation />
      <Button variant="longWhite">전체보기</Button>
    </>
  );
}
export default DeliveryMainContainer;
