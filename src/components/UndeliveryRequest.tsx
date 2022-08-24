import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';

interface IUndeliveryRequest {
  modalIsOpen: boolean;
  afterOpenModal: () => void;
  closeModal: () => void;
  customStyles: any;
  userStorage: any;
}

function UndeliveryRequest({
  modalIsOpen,
  afterOpenModal,
  closeModal,
  customStyles,
  userStorage,
}: IUndeliveryRequest) {
  const [message, setMessage] = useState('');
  const [check, setCheck] = useState(false);
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
          미배송 수거 요청
        </p>
        <button onClick={closeModal} className="absolute right-2">
          <FontAwesomeIcon icon={faX} className="text-base text-gray-600" />
        </button>
      </div>
      <p className="pl-2 text-sm text-gray-500">배송기사 전달 메세지</p>
      <div className="px-2 mt-2">
        <textarea
          className="border border-2 w-full h-36 text-sm p-3"
          placeholder={'배송기사분께 메세지를 작성해주세요.'}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        ></textarea>
      </div>
      <p className="pl-2 text-red-500" style={{ fontSize: '11px' }}>
        배송기사의 시간대 공선과 비교하여 오배송이 아니라 판정될 경우 수거
        요청이 거절될 수 있습니다.
      </p>
      <div className="flex px-2 mt-4">
        <input
          type={'checkbox'}
          className=" scale-125 accent-purple-900 mr-2"
          onChange={(e) => {
            setCheck(!check);
          }}
        ></input>
        <p className="pl-2 text-sm text-gray-500">
          미수령 하신게 확실하신건가요?
        </p>
      </div>
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
            localStorage.setItem('undeliveryMessage', message);
            localStorage.setItem('undeliveryIsExist', 'true');
            closeModal();
          }}
        >
          미배송 수거 요청
        </button>
      </div>
    </Modal>
  );
}

export default UndeliveryRequest;
