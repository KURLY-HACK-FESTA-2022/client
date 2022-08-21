import useCurrentLocationCheck from 'hooks/useCurrentLocationCheck';

function DeliveryDetailInfomation() {
  const { onCurrentLocationCheck } = useCurrentLocationCheck();
  return (
    <section>
      <h2>상세 정보</h2>
      <ul>
        <li>상세주소</li>
        <li>수령인 이름</li>
        <li>배송 메시지</li>
        <li>공동 현관 비밀번호</li>
        <li>운송장 내역</li>
        <li>포장 방법</li>
        <li>제품 수량</li>
        <li>유의 사항</li>
      </ul>
      <button>대응 배송</button>
      <button onClick={(e) => onCurrentLocationCheck(e)}>배송 완료</button>
    </section>
  );
}

export default DeliveryDetailInfomation;
