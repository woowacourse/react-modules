const COMMON_ERROR_MESSAGE = {
  notNumber: '숫자만 입력해주세요.',
};

export const ERROR_MESSAGE = {
  cardNumber: {
    notNumber: COMMON_ERROR_MESSAGE.notNumber,
    invalidLength: '카드 번호는 네 자리만 입력해야 합니다.',
  },
  expiryDate: {
    notNumber: COMMON_ERROR_MESSAGE.notNumber,
    invalidLength: '유효기간은 두 자리만 입력해야 합니다.',
    invalidMonthRange: '유효한 월(1~12)을 입력해야 합니다.',
    expiredDate: '유효기간은 현재 날짜 이후로 입력해야 합니다.',
  },
  CVC: {
    notNumber: COMMON_ERROR_MESSAGE.notNumber,
    invalidLength: 'CVC는 세 자리만 입력해야 합니다.',
  },
} as const;
