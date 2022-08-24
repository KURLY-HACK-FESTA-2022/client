export type orderProduct = {
  coverImg: string;
  status: number;
  name: string;
  price: number;
  options: number;
};

export type orderList = {
  date: string;
  orderProduct: orderProduct[];
};

export type myOrderInfo = {
  name: string;
  grade: number;
  orderList: orderList[];
};

export const orderProduct1: orderProduct[] = [
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 1,
    name: '단백질 대장 프로팅 파워',
    price: 20000,
    options: 1,
  },
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 3,
    name: '창억떡 라이스 홀릭',
    price: 22000,
    options: 2,
  },
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 2,
    name: '에나멜맛 스트로베리 워커',
    price: 17000,
    options: 3,
  },
];

const orderProduct2: orderProduct[] = [
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 1,
    name: '단백질 대장 프로팅 파워',
    price: 20000,
    options: 1,
  },
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 3,
    name: '단백질 대장 프로팅 파워',
    price: 89000,
    options: 2,
  },
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 2,
    name: '단백질 대장 프로팅 파워',
    price: 57000,
    options: 3,
  },
];

const orderProduct3: orderProduct[] = [
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 1,
    name: '단백질 대장 프로팅 파워',
    price: 20000,
    options: 1,
  },
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 3,
    name: '단백질 대장 프로팅 파워',
    price: 89000,
    options: 2,
  },
  {
    coverImg:
      'https://thejobyouhate76.s3.amazonaws.com/1660921214250logo192.png',
    status: 2,
    name: '단백질 대장 프로팅 파워',
    price: 57000,
    options: 3,
  },
];

export const getMyOrderInfo: myOrderInfo = {
  name: '홍길동',
  grade: 0,
  orderList: [
    {
      date: '2022.08.19 (21시 13분)',
      orderProduct: orderProduct1,
    },
    {
      date: '2022.07.12 (14시 53분)',
      orderProduct: orderProduct2,
    },
    {
      date: '2021.04.22 (17시 03분)',
      orderProduct: orderProduct3,
    },
  ],
};
