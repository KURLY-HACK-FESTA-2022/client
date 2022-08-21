import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const NotFoundPage = React.lazy(() => import('pages/common/NotFoundPage'));
const LoginPage = React.lazy(() => import('pages/common/LoginPage'));
const DeliveryMainPage = React.lazy(
  () => import('pages/delivery/DeliveryMainPage'),
);
const DeliveryDetailPage = React.lazy(
  () => import('pages/delivery/DeliveryDetailPage'),
);

const CustomerRoutingComponents = [
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LOGIN, element: <LoginPage /> },
];

const DeliveryRoutingComponents = [
  // logged in
  { path: '*', element: <NotFoundPage /> },
  { path: Path.DELIVERY_MAIN, element: <DeliveryMainPage /> },
  { path: Path.DELIVERY_DETAIL, element: <DeliveryDetailPage /> },

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
