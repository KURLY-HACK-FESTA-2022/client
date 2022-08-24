import { BellIcon, MenuIcon } from 'assets/icons';
import { KurlySmallLogo } from 'assets/images';
import React from 'react';
import { Link } from 'react-router-dom';
import Path from 'routes/Path';
import styled from 'styled-components';

function MainHeader() {
  return (
    <HeaderContainer>
      {/* id 필요 */}
      <Box>
        <Link to={Path.DELIVERY_MENU}>
          <MenuIcon />
        </Link>
        <LogoStyled to={Path.DELIVERY_MAIN}>
          <img src={KurlySmallLogo} alt="사이트 로고" />
        </LogoStyled>
      </Box>
      <Link to={Path.DELIVERY_NOTICE}>
        <BellIcon />
      </Link>
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

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 72px;
`;

const LogoStyled = styled(Link)`
  img {
    width: 44px;
    height: 28px;
  }
`;

export default MainHeader;
