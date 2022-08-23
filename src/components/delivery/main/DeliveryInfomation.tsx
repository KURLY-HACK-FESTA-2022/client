import { XIcon } from 'assets/icons';
import Button from 'components/common/Button';
import { deliveryList } from 'libs/utils/mock';
import { Delivery } from 'model/delivery';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

interface Props {
  selectedOrder: number;
}

function DeliveryInfomation({ selectedOrder }: Props) {
  const navigate = useNavigate();
  return (
    <InfomationSection>
      <TitleContainer>
        <Title>상세 정보</Title>
        <XIcon />
      </TitleContainer>
      {deliveryList.map(
        (delivery: Delivery) =>
          delivery.id === selectedOrder && (
            <CategoryList>
              <Category>
                상세주소
                <CategoryContent>{delivery.address}</CategoryContent>
              </Category>
              <Category>
                배송 메시지
                <CategoryContent>{delivery.comment}</CategoryContent>
              </Category>
              <Category>
                공동 현관 비밀번호
                <CategoryContent>{delivery.entrancePassword}</CategoryContent>
              </Category>
              <Category>
                운송장 내역
                <CategoryContent>{delivery.orderNumber}</CategoryContent>
              </Category>
              <Category>
                제품 수량
                <CategoryContent>{delivery.total}</CategoryContent>
              </Category>
            </CategoryList>
          ),
      )}

      <FullViewButton
        variant="longWhite"
        onClick={() => navigate(Path.DELIVERY_DETAIL)}
      >
        전체보기
      </FullViewButton>
    </InfomationSection>
  );
}

const InfomationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px 16px 0px 0px;
  position: relative;
  bottom: 58px;
  background: white;
  z-index: 99;
  padding: 24px 20px;
  width: 360px;
`;

const Title = styled.h2`
  ${({ theme }) => theme.textStyle.bold[2028]};
`;

const CategoryList = styled.ul``;

const Category = styled.li`
  ${({ theme }) => theme.textStyle.regular[1420]};
  color: ${({ theme }) => theme.palette.gray500};
  margin-top: 16px;
`;

const CategoryContent = styled.div`
  margin-top: 7px;
  color: ${({ theme }) => theme.palette.gray800};
`;

const TitleContainer = styled.div`
  display: flex;
  width: 320px;
  justify-content: space-between;
  align-items: center;
`;

const FullViewButton = styled(Button)`
  margin-top: 16px;
`;

export default DeliveryInfomation;
