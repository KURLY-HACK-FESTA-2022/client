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
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food1.jpeg',
    status: 1,
    name: '단백질 대장 프로팅 파워',
    price: 20000,
    options: 1,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food2.jpeg',
    status: 3,
    name: '창억떡 라이스 홀릭',
    price: 22000,
    options: 2,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food3.png',
    status: 2,
    name: '에나멜맛 스트로베리 워커',
    price: 17000,
    options: 3,
  },
];

const orderProduct2: orderProduct[] = [
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food4.png',
    status: 1,
    name: '홀리몰리 대장 마켓컬리',
    price: 22220,
    options: 1,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food5.jpeg',
    status: 3,
    name: '어메이징 뷰티 쏘큣',
    price: 89000,
    options: 2,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food6.jpeg',
    status: 2,
    name: '사랑해요 맨소래담 스킨케어',
    price: 57000,
    options: 3,
  },
];

const orderProduct3: orderProduct[] = [
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food1.jpeg',
    status: 1,
    name: '현실 세계 사후 세계 퀴즈 나라',
    price: 22500,
    options: 1,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food2.jpeg',
    status: 3,
    name: '코코아 크림 도넛 아주아주 맛있지',
    price: 89000,
    options: 2,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food6.jpeg',
    status: 2,
    name: '맥퀸지가 발표한 올해의 도둑',
    price: 57000,
    options: 3,
  },
];

const orderProduct4: orderProduct[] = [
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food2.jpeg',
    status: 1,
    name: '미뇽 크로미뇽 중중 모리 장단',
    price: 20000,
    options: 1,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food4.png',
    status: 3,
    name: '포켓몬스터 피카츄 제일 안좋음',
    price: 89000,
    options: 2,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food6.jpeg',
    status: 2,
    name: '수요일 열시에 약속있다',
    price: 57000,
    options: 3,
  },
];

const orderProduct5: orderProduct[] = [
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food6.jpeg',
    status: 1,
    name: '오늘도 컴퓨터 잘 잠그셨나요?',
    price: 20000,
    options: 1,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food5.jpeg',
    status: 3,
    name: '헬로마켓 번개장터 당근마켓',
    price: 89000,
    options: 2,
  },
  {
    coverImg: 'https://thejobyouhate76.s3.amazonaws.com/food1.jpeg',
    status: 2,
    name: '어도비 일러스트레이터 프리미어 프로',
    price: 57000,
    options: 3,
  },
];

const orderProduct6: orderProduct[] = [
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

export const getMyOrderInfSix: myOrderInfo = {
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
    {
      date: '2022.08.19 (21시 13분)',
      orderProduct: orderProduct4,
    },
    {
      date: '2022.07.12 (14시 53분)',
      orderProduct: orderProduct5,
    },
    {
      date: '2021.04.22 (17시 03분)',
      orderProduct: orderProduct6,
    },
  ],
};

export const getMyOrderInf12: myOrderInfo = {
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
    {
      date: '2022.08.19 (21시 13분)',
      orderProduct: orderProduct4,
    },
    {
      date: '2022.07.12 (14시 53분)',
      orderProduct: orderProduct5,
    },
    {
      date: '2021.04.22 (17시 03분)',
      orderProduct: orderProduct6,
    },
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
    {
      date: '2022.08.19 (21시 13분)',
      orderProduct: orderProduct4,
    },
    {
      date: '2022.07.12 (14시 53분)',
      orderProduct: orderProduct5,
    },
    {
      date: '2021.04.22 (17시 03분)',
      orderProduct: orderProduct6,
    },
  ],
};
