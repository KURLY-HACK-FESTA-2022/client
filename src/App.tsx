import { isLogin } from 'libs/utils/auth';
import React from 'react';
import { PrivateRouting, PublicRouting } from 'routes/Routing';

function App() {
  return (
    <>
      <PrivateRouting />
    </>
  );

  // 로그인 구현시 아래 코드 사용
  // return <>{isLogin ? <PrivateRouting /> : <PublicRouting />}</>;
}

export default App;
