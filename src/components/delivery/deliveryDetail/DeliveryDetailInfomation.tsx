import deliveryStorage from 'libs/utils/deliveryStorage';
import styled from 'styled-components';

function DeliveryDetailInfomation() {
  const delivery = deliveryStorage.get();
  return (
    <InfomationSection>
      <TitleContainer>
        <Title>상세 정보</Title>
      </TitleContainer>
      <CategoryList>
        <Category>
          상세주소
          <CategoryContent>{delivery?.address}</CategoryContent>
        </Category>
        <Category>
          수령인 이름
          <CategoryContent>이재하</CategoryContent>
        </Category>
        <Category>
          배송 메시지
          <CategoryContent>{delivery?.comment}</CategoryContent>
        </Category>
        <Category>
          공동 현관 비밀번호
          <CategoryContent>{delivery?.entrancePassword}</CategoryContent>
        </Category>
        <Category>
          운송장 내역
          <CategoryContent>{delivery?.orderNumber}</CategoryContent>
        </Category>
        <Category>
          포장 방법
          <CategoryContent>개인 보냉백 사용</CategoryContent>
        </Category>
        <Category>
          제품 수량
          <CategoryContent>{delivery?.total}</CategoryContent>
        </Category>
        <Category>
          유의사항
          <CategoryContent>
            - 제품의 색상이 불일치할 경우, 제품을 반품하여 주시기 바랍니다.
          </CategoryContent>
        </Category>
      </CategoryList>
    </InfomationSection>
  );
}

const InfomationSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 24px 20px;
  width: 360px;
  margin-bottom: 16px;
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

export default DeliveryDetailInfomation;
