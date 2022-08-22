import { MenuIcon } from 'assets/icons';
import React from 'react';
import Path from 'routes/Path';
import styled from 'styled-components';

const MobileHeaderBlock = styled.div`
  display: none;
  position: relative;
`;

const MobileHeaderInner = styled.div`
  display: flex;
  padding: 12px 10px;
  align-items: center;
`;

// const LogoStyled = styled(Link)`
//   img {
//     width: 40px;
//     height: 30px;
//   }
// `;

const HambergerStyled = styled.div`
  padding-left: 10px;
`;

function TestHeader() {
  return (
    <>
      <MobileHeaderBlock>
        <MobileHeaderInner>
          <HambergerStyled>
            <MenuIcon />
          </HambergerStyled>
          {/* <img src={KurlySmallLogo} alt="사이트 로고" /> */}
        </MobileHeaderInner>
      </MobileHeaderBlock>
    </>
  );
}

export default TestHeader;
