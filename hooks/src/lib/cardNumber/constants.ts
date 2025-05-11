import { NetworkType } from '../utils/constants';

export const CARD_NUMBER_ERROR_TYPES = {
  notNumber: 'notNumber',
  invalidLength: 'invalidLength',
} as const;

export type CardNumberErrorType = keyof typeof CARD_NUMBER_ERROR_TYPES;

export type ValidateCardNumbersResult = {
  isValid: boolean;
  errorType?: CardNumberErrorType;
};

export const ERROR_MESSAGE = {
  notNumber: '숫자만 입력해주세요.',
  invalidLength: '카드 번호는 네 자리만 입력해야 합니다.',
};

export const CARD_NUMBERS_LENGTH: Record<NetworkType, number> = {
  visa: 16,
  master: 16,
  diners: 14,
  amex: 15,
  union: 16,
};

export const DEFAULT_LENGTH = 16;
