import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const NotFoundPage = React.lazy(() => import('pages/NotFoundPage'));
const LoginPage = React.lazy(() => import('pages/LoginPage'));
const DeliveryMainPage = React.lazy(() => import('pages/DeliveryMainPage'));

const CustomerRoutingComponents = [
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LOGIN, element: <LoginPage /> },
  { path: Path.LOGIN, element: <DeliveryMainPage /> },
];

const DeliveryRoutingComponents = [
  // logged in
  { path: '*', element: <NotFoundPage /> },
  { path: Path.DELIVERYMAIN, element: <DeliveryMainPage /> },
  // { path: Path.LandingPage, element: <LandingPage /> },

  // no logged in
  { path: Path.LOGIN, element: <LoginPage /> }, // 테스트 후 지울 것
];

export function CustomerRouting() {
  const publicRoutes = useMemo(() => {
    return CustomerRoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [CustomerRoutingComponents]);

  return (
    <Suspense fallback={<>....laoding</>}>
      <Routes>{publicRoutes}</Routes>
    </Suspense>
  );
}

export function DeliveryRouting() {
  const privateRoutes = useMemo(() => {
    return DeliveryRoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [DeliveryRoutingComponents]);

  return (
    <Suspense fallback={<>....loging</>}>
      <Routes>{privateRoutes}</Routes>
    </Suspense>
  );
}
