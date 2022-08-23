export type customerNotice = {
  status: number;
  time: string;
  message: string;
};

export type deliveryNotice = {
  status: number;
  time: string;
  message: string;
  name: string;
};

export const myCustomerNotice: customerNotice[] = [
  {
    status: 1,
    time: '12:30:06',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
  },
  {
    status: 3,
    time: '18:22:11',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
  },
  {
    status: 2,
    time: '23:45:22',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
  },
  {
    status: 1,
    time: '12:30:06',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
  },
  {
    status: 1,
    time: '18:22:11',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
  },
  {
    status: 1,
    time: '23:45:22',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
  },
];

export const myDeliveryNotice: deliveryNotice[] = [
  {
    status: 1,
    time: '12:30:06',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
    name: '김춘추',
  },
  {
    status: 3,
    time: '18:22:11',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
    name: '정우성',
  },
  {
    status: 2,
    time: '23:45:22',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
    name: '이정재',
  },
  {
    status: 1,
    time: '12:30:06',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
    name: '이효리',
  },
  {
    status: 1,
    time: '18:22:11',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
    name: '이병헌',
  },
  {
    status: 1,
    time: '23:45:22',
    message:
      '나랏말씀이 듕궉에 달아 발음이 서로 사맛디 아니할쎄 김수한무거북이와두루미 헌법 제 1조 1항',
    name: '해밍턴',
  },
];
