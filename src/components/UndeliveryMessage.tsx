import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';

interface IUndeliveryRequest {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
  customStyles: any;
}

function UndeliveryMessage({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
}: IUndeliveryRequest) {
  return (
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Undelivery Request Modal"
    >
      <p className="pl-2 text-sm text-gray-500">
        서비스 사용에 불편함을 드려 죄송합니다. 빠르게 배송기사와의 동선 파악 후
        사후 조치를 진행하겠습니다.
      </p>
      <div className="flex justify-center items-center px-2 mt-4">
        <button
          className="w-6/12 py-2 bg-white text-purple-900 border border-purple-900 text-sm font-thin rounded mr-2"
          onClick={closeModal}
        >
          취소
        </button>
        <button
          className="w-6/12 py-2 bg-purple-900 border border-gray-400 text-white text-sm font-thin rounded"
          onClick={(e) => {
            closeModal();
          }}
        >
          확인
        </button>
      </div>
    </Modal>
  );
}

export default UndeliveryMessage;
