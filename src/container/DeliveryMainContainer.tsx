import Button from 'components/common/Button';
import DeliveryInfomation from 'components/delivery/main/DeliveryInfomation';
import KakaoMap from 'components/delivery/main/KakaoMap';

function DeliveryMainContainer() {
  return (
    <>
      <KakaoMap />
      <DeliveryInfomation />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Button variant="longWhite">전체보기</Button>
      </div>
    </>
  );
}
export default DeliveryMainContainer;
