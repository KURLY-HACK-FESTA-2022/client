import { BellIcon } from 'assets/icons';
import { KurlySmallLogo } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

function MainHeader() {
  return (
    <HeaderContainer>
      {/* id 필요 */}
      <LogoStyled to={Path.DELIVERY_MAIN}>
        <img src={KurlySmallLogo} alt="사이트 로고" />
      </LogoStyled>
      <BellIcon />
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 56px;
  padding: 0 24px;
`;

const LogoStyled = styled(Link)`
  img {
    width: 44px;
    height: 28px;
  }
`;

export default MainHeader;
