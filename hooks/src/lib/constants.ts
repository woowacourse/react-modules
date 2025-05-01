export const CARD_NUMBERS_KEY = {
  part1: 'part1',
  part2: 'part2',
  part3: 'part3',
  part4: 'part4',
};
export type CardNumbersKey = keyof typeof CARD_NUMBERS_KEY;

export const EXPIRY_DATE_KEY = {
  month: 'month',
  year: 'year',
};
export type ExpiryDateKey = keyof typeof EXPIRY_DATE_KEY;

export const CARD_NUMBER_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
} as const;
export type CardNumberErrorType = keyof typeof CARD_NUMBER_ERROR_TYPES;

export const EXPIRY_DATE_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
  invalidMonthRange: 'invalidMonthRange',
  expiredDate: 'expiredDate',
} as const;
export type ExpiryDateErrorType = keyof typeof EXPIRY_DATE_ERROR_TYPES;

export const CVC_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
} as const;
export type CVCErrorType = keyof typeof CVC_ERROR_TYPES;

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
};
