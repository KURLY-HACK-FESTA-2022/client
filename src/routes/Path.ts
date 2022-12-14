const Path = {
  LOGIN: '/',
  CREATE_ACCOUNT: '/create-account',
  DELIVERY_MAIN: '/delivery/:id',
  DELIVERY_DETAIL: '/delivery-detail/:id',
  UNDELIVERY_DETAIL: '/undelivery-detail/:id',
  DELIVERY_MENU: '/delivery-menu/:id',
  DELIVERY_NOTICE: '/delivery-notice/:id',
  DELIVERY_COMPLETE_List: '/delivery-complete-list/:id',
  DELIVERY_COMPLETE: '/delivery-complete/:id',
  CUSTOMER_MAIN: '/customer/:id',
  CUSTOMER_NOTICE: '/customer-notice/:id',
  CUSTOMER_ORDER_DETAIL: '/customer-order-detail/:id',
  NOTFOUND: '/*',
} as const;

export default Path;
