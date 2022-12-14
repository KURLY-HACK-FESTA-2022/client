import React, { Suspense, useMemo } from 'react';
import { Route, Routes } from 'react-router-dom';
import Path from './Path';

const NotFoundPage = React.lazy(() => import('pages/common/NotFoundPage'));
const LoginPage = React.lazy(() => import('pages/common/LoginPage'));
const CreateAccount = React.lazy(
  () => import('pages/common/CreateAccountPage'),
);
const CustomerMainPage = React.lazy(
  () => import('pages/customer/CustomerMainPage'),
);
const CustomerNoticePage = React.lazy(
  () => import('pages/customer/CustomerNoticePage'),
);
const CustomerOrderDetailPage = React.lazy(
  () => import('pages/customer/CustomerOrderDetailPage'),
);
const DeliveryCompleteListPage = React.lazy(
  () => import('pages/delivery/DeliveryCompleteListPage'),
);
const DeliveryCompletePage = React.lazy(
  () => import('pages/delivery/DeliveryCompletePage'),
);
const DeliveryDetailPage = React.lazy(
  () => import('pages/delivery/DeliveryDetailPage'),
);
const DeliveryMenuPage = React.lazy(
  () => import('pages/delivery/DeliveryMenuPage'),
);
const DeliveryNoticePage = React.lazy(
  () => import('pages/delivery/DeliveryNoticePage'),
);
const UndeliveryDetailPage = React.lazy(
  () => import('pages/delivery/UndeliveryDetailPage'),
);
const DeliveryMainPage = React.lazy(
  () => import('pages/delivery/DeliveryMainPage'),
);

const RoutingComponents = [
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LOGIN, element: <LoginPage /> },
  { path: Path.CREATE_ACCOUNT, element: <CreateAccount /> },
  { path: Path.CUSTOMER_MAIN, element: <CustomerMainPage /> },
  {
    path: Path.CUSTOMER_NOTICE,
    element: <CustomerNoticePage />,
  },
  {
    path: Path.CUSTOMER_ORDER_DETAIL,
    element: <CustomerOrderDetailPage />,
  },
  { path: Path.DELIVERY_MAIN, element: <DeliveryMainPage /> },
  {
    path: Path.DELIVERY_DETAIL,
    element: <DeliveryDetailPage />,
  },
  {
    path: Path.UNDELIVERY_DETAIL,
    element: <UndeliveryDetailPage />,
  },
  { path: Path.DELIVERY_MENU, element: <DeliveryMenuPage /> },
  {
    path: Path.DELIVERY_NOTICE,
    element: <DeliveryNoticePage />,
  },
  {
    path: Path.DELIVERY_COMPLETE_List,
    element: <DeliveryCompleteListPage />,
  },
  {
    path: Path.DELIVERY_COMPLETE,
    element: <DeliveryCompletePage />,
  },
];

const DeliveryRoutingComponents = [
  // logged in
  { path: '*', element: <NotFoundPage /> },
  { path: Path.LOGIN, element: <LoginPage /> },
  { path: Path.CREATE_ACCOUNT, element: <CreateAccount /> },
  { path: Path.DELIVERY_MAIN, element: <DeliveryMainPage /> },
  {
    path: Path.DELIVERY_DETAIL,
    element: <DeliveryDetailPage />,
  },
  {
    path: Path.UNDELIVERY_DETAIL,
    element: <UndeliveryDetailPage />,
  },
  { path: Path.DELIVERY_MENU, element: <DeliveryMenuPage /> },
  {
    path: Path.DELIVERY_NOTICE,
    element: <DeliveryNoticePage />,
  },
  {
    path: Path.DELIVERY_COMPLETE_List,
    element: <DeliveryCompleteListPage />,
  },
  {
    path: Path.DELIVERY_COMPLETE,
    element: <DeliveryCompletePage />,
  },
];

export function CustomerRouting() {
  const publicRoutes = useMemo(() => {
    return RoutingComponents.map((component, index) => {
      const { path, element } = component;
      return (
        <Route key={`${component}_${index}`} path={path} element={element} />
      );
    });
  }, [RoutingComponents]);

  return (
    <Suspense fallback={<>....loading</>}>
      <Routes>{publicRoutes}</Routes>;
    </Suspense>
  );
}

// export function DeliveryRouting() {
//   const privateRoutes = useMemo(() => {
//     return DeliveryRoutingComponents.map((component, index) => {
//       const { path, element } = component;
//       return (
//         <Route key={`${component}_${index}`} path={path} element={element} />
//       );
//     });
//   }, [DeliveryRoutingComponents]);

//   return <Routes>{privateRoutes}</Routes>;
// }

// export function Routing() {
//   return (
//     <Suspense fallback={<>....loading</>}>
//       <DeliveryRouting />
//       <CustomerRouting />
//     </Suspense>
//   );
// }
