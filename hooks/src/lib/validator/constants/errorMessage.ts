import { BRAND_CARD_NUMBER_LENGTH, VALIDATION_LENGTH } from './validationRules';

export const ERROR_MESSAGE = {
  EXPIRATION: {
    MONTH: {
      IS_NUMBER: '숫자를 입력해주세요',
      IS_NUMBER_RANGE: '1월부터 12월을 입력해주세요',
      IS_EXPIRATION: '유효기간을 다시 확인해주세요',
      IS_VALID_LENGTH: `월은 ${VALIDATION_LENGTH.EXPIRATION.MONTH}자리를 입력해주세요`,
    },
    YEAR: {
      IS_NUMBER: '숫자를 입력해주세요',
      IS_EXPIRATION: '유효기간을 다시 확인해주세요',
      IS_VALID_LENGTH: `연도는 ${VALIDATION_LENGTH.EXPIRATION.YEAR}자리를 입력해주세요`,
    },
  },
  CVC: {
    IS_NUMBER_STRING: '숫자를 입력해주세요',
    IS_VALID_LENGTH: `CVC는 ${VALIDATION_LENGTH.CVC}자리를 입력해주세요`,
  },
  PASSWORD: {
    IS_NUMBER_STRING: '비밀번호는 숫자로 입력해주세요',
    IS_VALID_LENGTH: `비밀번호는 ${VALIDATION_LENGTH.PASSWORD}자리를 입력해주세요`,
  },
  NUMBER: {
    IS_NUMBER_STRING: '숫자를 입력해주세요',
    IS_VALID_FULL_LENGTH_BRAND_VISA: `VISA 카드번호는 총 ${BRAND_CARD_NUMBER_LENGTH.VISA}자리를 입력해주세요`,
    IS_VALID_FULL_LENGTH_BRAND_MASTER: `MASTER 카드번호는 총 ${BRAND_CARD_NUMBER_LENGTH.MASTER}자리를 입력해주세요`,
    IS_VALID_FULL_LENGTH_BRAND_DINERS: `DINERS 카드번호는 총 ${BRAND_CARD_NUMBER_LENGTH.DINERS}자리를 입력해주세요`,
    IS_VALID_FULL_LENGTH_BRAND_AMEX: `AMEX 카드번호는 총 ${BRAND_CARD_NUMBER_LENGTH.AMEX}자리를 입력해주세요`,
    IS_VALID_FULL_LENGTH_BRAND_UNIONPAY: `UNIONPAY 카드번호는 총 ${BRAND_CARD_NUMBER_LENGTH.UNIONPAY}자리를 입력해주세요`,
  },
};
