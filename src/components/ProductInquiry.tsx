import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Modal from 'react-modal';

interface IProductInquiry {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
  customStyles: any;
}

function ProductInquiry({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
}: IProductInquiry) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Undelivery Request Modal"
    >
      <div className="w-full h-12 relative">
        <p className="absolute left-2 font-sans text-base font-bold">
          선택 상품 문의
        </p>
        <button onClick={closeModal} className="absolute right-2">
          <FontAwesomeIcon icon={faX} className="text-base text-gray-600" />
        </button>
      </div>
      <p className="pl-2 text-sm text-gray-500">문의 사유</p>
      <div className="px-2 mt-2 relative">
        <select className="w-full h-12 border border-2 text-sm p-3 rounded">
          <option value={0}>제품 손상</option>
          <option value={1}>단순 변심</option>
          <option value={2}>환불</option>
          <option value={3}>묶음 재배송</option>
        </select>
      </div>
      <p className="pl-2 text-sm text-gray-500 mt-4">상세 설명</p>
      <div className="px-2 mt-2">
        <textarea
          className="border border-2 w-full h-36 text-sm p-3"
          placeholder={'문의 사유 관련하여 상세 설명을 기입해주세요.'}
        ></textarea>
      </div>
      <div className="px-2 mt-2 flex justify-center items-center text-center">
        <input
          type={'file'}
          id={'input-file'}
          style={{ display: 'none' }}
        ></input>
        <label
          htmlFor={'input-file'}
          className="w-full py-2 bg-white text-purple-900 border border-purple-900 text-sm font-thin rounded mr-2"
        >
          사진 첨부
        </label>
      </div>
      <div className="flex px-3 mt-4">
        <input
          type={'checkbox'}
          className=" scale-125 accent-purple-900 mr-2"
        ></input>
        <p className="pl-2 text-xs text-gray-500">
          사유 확인 후, 선택 조치에 따라 처리합니다.
        </p>
      </div>
      <div className="flex justify-center items-center px-2 mt-4">
        <button
          className="w-6/12 py-2 bg-white text-purple-900 border border-purple-900 text-sm font-thin rounded mr-2"
          onClick={closeModal}
        >
          취소
        </button>
        <button className="w-6/12 py-2 bg-purple-900 border border-gray-400 text-white text-sm font-thin rounded">
          문의하기
        </button>
      </div>
    </Modal>
  );
}

export default ProductInquiry;
