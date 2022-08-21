import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const NotFoundPage = React.lazy(() => import('pages/common/NotFoundPage'));
const LoginPage = React.lazy(() => import('pages/common/LoginPage'));
const TestPage = React.lazy(() => import('pages/common/TestPage'));

const publicRoutingComponents = [
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LOGIN, element: <LoginPage /> },
  { path: Path.LOGIN, element: <TestPage /> },
];

const privateRoutingComponents = [
  // logged in
  { path: '*', element: <NotFoundPage /> },
  { path: Path.TEST, element: <TestPage /> },
  // { path: Path.LandingPage, element: <LandingPage /> },

  // no logged in
  { path: Path.LOGIN, element: <LoginPage /> }, // 테스트 후 지울 것
];

export function PublicRouting() {
  const publicRoutes = useMemo(() => {
    return publicRoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [publicRoutingComponents]);

  return (
    <Suspense fallback={<>....laoding</>}>
      <Routes>{publicRoutes}</Routes>
    </Suspense>
  );
}

export function PrivateRouting() {
  const privateRoutes = useMemo(() => {
    return privateRoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [privateRoutingComponents]);

  return (
    <Suspense fallback={<>....loging</>}>
      <Routes>{privateRoutes}</Routes>
    </Suspense>
  );
}
