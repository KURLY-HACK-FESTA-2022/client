import {
  HighWarningIcon,
  LowWarningIcon,
  MidWarningIcon,
  XIcon,
} from 'assets/icons';
import Button from 'components/common/Button';
import ModalTemplate from 'components/common/ModalTemplate';
import React from 'react';
import styled from 'styled-components';

interface Props {
  onToggleModal: () => void;
}

function WarningModal({ onToggleModal }: Props) {
  const deliveryComplateBranchResponse = 'difference';

  const deliveryComplateBranch = [
    {
      branch: 'difference',
      text: '현재 위치와 고객 주소와 일치하지 않습니다. \n그럼에도 배송완료를 진행하시겠습니까?',
      icon: <HighWarningIcon />,
      button: (
        <>
          <Button variant="white" width={132} height={44}>
            예
          </Button>
          <Button variant="purple" width={132} height={44}>
            아니오
          </Button>
        </>
      ),
    },
    {
      branch: 'complaint',
      text: '문의 및 민원이 잦은 고객입니다. \n배송에 유의 부탁드립니다.',
      icon: <MidWarningIcon />,
      button: <Button variant="longPurple">예</Button>,
    },
    {
      branch: 'undelivery',
      text: '미배송으로 인한 재배송 신청 고객입니다. \n주소를 한번 더 점검해주세요',
      icon: <LowWarningIcon />,
      button: <Button variant="longPurple">예</Button>,
    },
    {
      branch: 'incorrectDelivery',
      text: '오배송 실수가 잦은 구역입니다. \n유의하여 배송 부탁드립니다.',
      icon: <LowWarningIcon />,
      button: <Button variant="longPurple">예</Button>,
    },
  ];
  return (
    <ModalTemplate width={320} height={308} onToggleModal={onToggleModal}>
      <ModalInnerStyled>
        <XIconStyled />
        {deliveryComplateBranch.map(
          ({ branch, text, icon, button }) =>
            deliveryComplateBranchResponse === branch && (
              <div key={branch}>
                <WarningIcon>{icon}</WarningIcon>
                <WarningText>{text}</WarningText>
                <ButtonContainer>{button}</ButtonContainer>
              </div>
            ),
        )}
      </ModalInnerStyled>
    </ModalTemplate>
  );
}

const ModalInnerStyled = styled.div`
  padding: 10px;
`;

const XIconStyled = styled(XIcon)`
  position: relative;
  top: 10px;
  left: 273px;
`;

const WarningIcon = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 72px;
`;

const WarningText = styled.span`
  display: flex;
  justify-content: center;
  white-space: pre-wrap;
  margin-top: 24px;
`;

const ButtonContainer = styled.div`
  width: 272px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: 24px;
`;

export default WarningModal;
