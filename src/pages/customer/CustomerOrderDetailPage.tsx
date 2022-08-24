import { faArrowLeft, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductDetail from 'components/ProductDetail';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import ProductInquiry from 'components/ProductInquiry';
import UndeliveryRequest from 'components/UndeliveryRequest';
import userStorage from 'libs/utils/userStorage';
import UndeliveryMessage from 'components/UndeliveryMessage';

const customStyles = {
  content: {
    top: '40%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    borderRadius: '10px',
    border: 'none',
    boxShadow: '0px 0px 3px 3px rgba(200,200,200,0.6)',
  },
};

Modal.setAppElement('#root');

function CustomerOrderDetaulPage() {
  const navigate = useNavigate();
  let subtitle: string;
  const [undeliveryRequest, setUndeliveryRequest] = useState(false);
  const [undeliveryMessage, setUndeliveryMessage] = useState(false);
  const [productInquiry, setProductInquiry] = useState(false);

  function openUndeliveryRequestModal() {
    setUndeliveryRequest(true);
  }
  function openProductInquiryModal() {
    setProductInquiry(true);
  }

  function openUndeliveryMessageModal() {
    setUndeliveryMessage(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }
  function closeMessageModal() {
    setUndeliveryMessage(false);
    setProductInquiry(false);
  }

  function closeModal() {
    setUndeliveryRequest(false);
    setProductInquiry(false);
  }
  return (
    <div className="bg-gray-100" id={'hello'}>
      <Helmet>
        <title>컬리체이서 | 고객 주문 상세페이지</title>
      </Helmet>
      <UndeliveryMessage
        modalIsOpen={undeliveryMessage}
        afterOpenModal={afterOpenModal}
        closeModal={closeMessageModal}
        customStyles={customStyles}
      ></UndeliveryMessage>
      <UndeliveryRequest
        modalIsOpen={undeliveryRequest}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        customStyles={customStyles}
        userStorage={userStorage}
      ></UndeliveryRequest>
      <ProductInquiry
        modalIsOpen={productInquiry}
        afterOpenModal={afterOpenModal}
        closeModal={closeModal}
        customStyles={customStyles}
        userStorage={userStorage}
      ></ProductInquiry>
      <section className="bg-white">
        <div className="flex h-20 items-center px-6">
          <button
            onClick={() => {
              navigate(-1);
            }}
            className="mr-5"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-xl text-gray-600"
            />
          </button>
          <p className="text-2xl pb-1 font-bold">주문 상세 내역</p>
        </div>
        <ProductDetail
          openUndeliveryRequestModal={openUndeliveryRequestModal}
          openProductInquiryModal={openProductInquiryModal}
          orderNumber={'12345678910'}
          openUndeliveryMesssageModal={openUndeliveryMessageModal}
        ></ProductDetail>
      </section>
      <section className="bg-white mt-1.5 px-3">
        <div className="w-full h-16 relative">
          <p className="absolute left-3 font-sans text-xl font-bold top-4">
            배송 상황
          </p>
        </div>
        <div className="h-10 relative">
          <p className="absolute left-3">
            {/* {status} */}
            배송완료
            <span className="text-gray-500 text-sm">
              {' '}
              (2022.08.20.00시 21분)
            </span>
          </p>
          <a
            style={{ textDecoration: 'underline' }}
            className="text-purple-900 absolute right-3"
            href="/delivery-menu/123"
          >
            배송조회
          </a>
        </div>
      </section>
      <section className="bg-white mt-1.5 px-3">
        <div className="w-full h-16 relative">
          <p className="absolute left-3 font-sans text-xl font-bold top-4">
            배송 정보
          </p>
        </div>
        <div className="px-3 pb-2">
          <div className="flex">
            <div className="w-5/12">
              <p className="text-gray-400">수령인</p>
            </div>
            <div className="w-7/12">
              <p>홍길동</p>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-5/12">
              <p className="text-gray-400">휴대폰</p>
            </div>
            <div className="w-7/12">
              <p>010-1234-1234</p>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-5/12">
              <p className="text-gray-400">주소</p>
            </div>
            <div className="w-7/12">
              <p>[06712] 서울 서초구 사임당로 6길 12 (신동아아파트)</p>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-5/12">
              <p className="text-gray-400">받으실 장소</p>
            </div>
            <div className="w-7/12">
              <p>문앞</p>
            </div>
          </div>
          <div className="flex py-2">
            <div className="w-5/12">
              <p className="text-gray-400">공동현관 출입방법</p>
            </div>
            <div className="w-7/12">
              <p>공동현관 비밀번호(******)</p>
            </div>
          </div>
          <div className="flex pt-2 pb-4">
            <div className="w-5/12">
              <p className="text-gray-400">포장 방법</p>
            </div>
            <div className="w-7/12">
              <p>종이 포장재</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white mt-1.5 px-3">
        <div className="w-full h-16 relative">
          <p className="absolute left-3 font-sans text-xl font-bold top-4">
            배송 정보
          </p>
        </div>
        <div className="px-3 pb-2">
          <div className="flex">
            <div className="w-5/12">
              <p className="text-gray-400">미배송 시 조치방법</p>
            </div>
            <div className="w-7/12">
              <p>계좌로 환불</p>
            </div>
          </div>
          <div className="flex pt-2 pb-4">
            <div className="w-5/12">
              <p className="text-gray-400">메세지 전송시점</p>
            </div>
            <div className="w-7/12">
              <p>배송 직후</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CustomerOrderDetaulPage;
