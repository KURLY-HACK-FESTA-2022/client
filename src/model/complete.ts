export type completeDetail = {
  status: number;
  orderNumber: string;
  createAt: string;
  address: string;
  name: string;
};

export const myCompleteInfo: completeDetail[] = [
  {
    status: 0,
    address: '서울 광진구 광장로 03 (유진빌라) 3동 201호',
    createAt: '23:48:52',
    orderNumber: 'SS1231563464534',
    name: '홍길동',
  },
  {
    status: 0,
    address: '서울 광진구 광장로 03 (유진빌라) 3동 201호',
    createAt: '18:44:23',
    orderNumber: 'WW12512515146634',
    name: '홍길동',
  },
  {
    status: 1,
    address: '서울 광진구 광장로 03 (유진빌라) 3동 201호',
    createAt: '14:55:43',
    orderNumber: 'GG123515134335325',
    name: '홍길동',
  },
  {
    status: 2,
    address: '서울 광진구 광장로 03 (유진빌라) 3동 201호',
    createAt: '23:55:44',
    orderNumber: 'TT134513663253234',
    name: '홍길동',
  },
  {
    status: 3,
    address: '서울 광진구 광장로 03 (유진빌라) 3동 201호',
    createAt: '11:23:33',
    orderNumber: 'PP141562332532632',
    name: '홍길동',
  },
];
