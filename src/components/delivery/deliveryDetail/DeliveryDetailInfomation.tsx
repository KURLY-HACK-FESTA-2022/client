import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useCurrentLocationCheck from 'hooks/useCurrentLocationCheck';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

function DeliveryDetailInfomation() {
  const { onCurrentLocationCheck } = useCurrentLocationCheck();
  const navigate = useNavigate();
  return (
    <div>
      <Helmet>
        <title>컬리체이서 | 고객 알림페이지</title>
      </Helmet>
      <div className="flex h-20 items-center px-6">
        <button
          onClick={() => {
            navigate(-1);
          }}
          className="mr-5"
        >
          <FontAwesomeIcon icon={faX} className="text-xl text-gray-600" />
        </button>
        <p className="text-2xl pb-1 font-bold">상세 정보</p>
      </div>
    </div>

    // <section>
    //   <h2>상세 정보</h2>
    //   <ul>
    //     <li>상세주소</li>
    //     <li>수령인 이름</li>
    //     <li>배송 메시지</li>
    //     <li>공동 현관 비밀번호</li>
    //     <li>운송장 내역</li>
    //     <li>포장 방법</li>
    //     <li>제품 수량</li>
    //     <li>유의 사항</li>
    //   </ul>
    //   <button>대응 배송</button>
    //   <button onClick={(e) => onCurrentLocationCheck(e)}>배송 완료</button>
    // </section>
  );
}

export default DeliveryDetailInfomation;
