import { XIcon } from 'assets/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

function DetailHeader() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <XIcon onClick={() => navigate(Path.DELIVERY_MAIN)} />
      <HeaderText>상세 정보</HeaderText>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 24px;
`;

const HeaderText = styled.h2`
  margin-left: 22px;
  ${({ theme }) => theme.textStyle.bold[2028]}
`;

export default DetailHeader;
