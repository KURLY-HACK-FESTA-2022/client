import { XIcon } from 'assets/icons';
import React from 'react';
import styled from 'styled-components';

function DeliveryInfomation() {
  return (
    <InfomationSection>
      <TitleContainer>
        <Title>상세 정보</Title>
        <XIcon />
      </TitleContainer>
      <CategoryList>
        <Category>
          상세주소
          <CategoryContent>서울시 강남구 역삼동</CategoryContent>
        </Category>
        <Category>배송 메시지</Category>
        <CategoryContent>안녕하세요. 저희 판매자입니다.</CategoryContent>
        <Category>
          공동 현관 비밀번호
          <CategoryContent>123456</CategoryContent>
        </Category>
        <Category>
          운송장 내역
          <CategoryContent>123456789</CategoryContent>
        </Category>
        <Category>
          제품 수량
          <CategoryContent>1</CategoryContent>
        </Category>
      </CategoryList>
    </InfomationSection>
  );
}

const Title = styled.h2`
  ${({ theme }) => theme.textStyle.bold[2028]};
  font-size: 28px;
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

const InfomationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 16px 16px 0px 0px;
  position: relative;
  bottom: 32px;
  background: white;
  z-index: 99;
  padding: 24px 20px;
  width: 360px;
`;

export default DeliveryInfomation;
