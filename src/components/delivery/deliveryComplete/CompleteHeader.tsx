import { XIcon } from 'assets/icons';
import React from 'react';
import styled from 'styled-components';

function CompleteHeader() {
  return (
    <HeaderContainer>
      <XIcon />
      <HeaderText>배달 완료</HeaderText>
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

export default CompleteHeader;
