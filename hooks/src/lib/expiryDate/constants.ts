export const EXPIRY_DATE_KEY = {
  month: 'month',
  year: 'year',
};

export type ExpiryDateKey = keyof typeof EXPIRY_DATE_KEY;

export const EXPIRY_DATE_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
  invalidMonthRange: 'invalidMonthRange',
  expiredDate: 'expiredDate',
} as const;

export type ExpiryDateErrorType = keyof typeof EXPIRY_DATE_ERROR_TYPES;

export type ValidateExpiryDateResult = {
  isValid: boolean;
  errorType?: ExpiryDateErrorType;
};

export const ERROR_MESSAGE = {
  notNumber: '숫자만 입력해주세요.',
  invalidLength: '유효기간은 두 자리만 입력해야 합니다.',
  invalidMonthRange: '유효한 월(1~12)을 입력해야 합니다.',
  expiredDate: '유효기간은 현재 날짜 이후로 입력해야 합니다.',
};
