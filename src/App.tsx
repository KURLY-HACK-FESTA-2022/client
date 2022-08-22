import GlobalStyles from 'libs/styles/globalStyles';
import theme from 'libs/styles/theme';
import { isLogin } from 'libs/utils/auth';
import React from 'react';
import { DeliveryRouting } from 'routes/Routing';
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      {/* <GlobalStyles /> */}
      <ThemeProvider theme={theme}>
        <DeliveryRouting />
      </ThemeProvider>
    </>
  );

  // 로그인 구현시 아래 코드 사용
  // return <>{isLogin ? <PrivateRouting /> : <PublicRouting />}</>;
}

export default App;
