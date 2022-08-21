import CreateAccount from 'pages/common/CreateAccountPage';
import CustomerMainPage from 'pages/customer/CustomerMainPage';
import CustomerNoticePage from 'pages/customer/CustomerNoticePage';
import CustomerOrderDetailPage from 'pages/customer/CustomerOrderDetailPage';
import DeliveryCompleteListPage from 'pages/delivery/DeliveryCompleteListPage';
import DeliveryCompletePage from 'pages/delivery/DeliveryCompletePage';
import DeliveryDetailPage from 'pages/delivery/DeliveryDetailPage';
import DeliveryMainPage from 'pages/delivery/DeliveryMainPage';
import DeliveryMenuPage from 'pages/delivery/DeliveryMenuPage';
import DeliveryNoticePage from 'pages/delivery/DeliveryNoticePage';
import UndeliveryDetailPage from 'pages/delivery/UndeliveryDetailPage';
import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const NotFoundPage = React.lazy(() => import('pages/common/NotFoundPage'));
const LoginPage = React.lazy(() => import('pages/common/LoginPage'));
const TestPage = React.lazy(() => import('pages/common/TestPage'));

const publicRoutingComponents = [
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LOGIN, element: <LoginPage /> },
  { path: Path.CREATE_ACCOUNT, element: <CreateAccount /> },
  { path: Path.LOGIN, element: <TestPage /> },
];

const privateRoutingComponents = [
  // logged in
  { path: Path.TEST, element: <TestPage /> },
  // { path: Path.LandingPage, element: <LandingPage /> },
  { path: Path.DELIVERY_MAIN, element: <DeliveryMainPage></DeliveryMainPage> },
  {
    path: Path.DELIVERY_DETAIL,
    element: <DeliveryDetailPage></DeliveryDetailPage>,
  },
  {
    path: Path.UNDELIVERY_DETAIL,
    element: <UndeliveryDetailPage></UndeliveryDetailPage>,
  },
  { path: Path.DELIVERY_MENU, element: <DeliveryMenuPage></DeliveryMenuPage> },
  {
    path: Path.DELIVERY_NOTICE,
    element: <DeliveryNoticePage></DeliveryNoticePage>,
  },
  {
    path: Path.DELIVERY_COMPLETE_List,
    element: <DeliveryCompleteListPage></DeliveryCompleteListPage>,
  },
  {
    path: Path.DELIVERY_COMPLETE,
    element: <DeliveryCompletePage></DeliveryCompletePage>,
  },
  { path: Path.CUSTOMER_MAIN, element: <CustomerMainPage></CustomerMainPage> },
  {
    path: Path.CUSTOMER_NOTICE,
    element: <CustomerNoticePage></CustomerNoticePage>,
  },
  {
    path: Path.CUSTOMER_ORDER_DETAIL,
    element: <CustomerOrderDetailPage></CustomerOrderDetailPage>,
  },
  // no logged in
  { path: Path.LOGIN, element: <LoginPage /> }, // 테스트 후 지울 것
  { path: '*', element: <NotFoundPage /> },
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
