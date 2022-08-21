import GlobalStyles from 'libs/styles/globalStyles';
import { isLogin } from 'libs/utils/auth';
import React from 'react';
import { DeliveryRouting } from 'routes/Routing';

function App() {
  return (
    <>
      <GlobalStyles />
      <DeliveryRouting />
    </>
  );

  // 로그인 구현시 아래 코드 사용
  // return <>{isLogin ? <PrivateRouting /> : <PublicRouting />}</>;
}

export default App;
