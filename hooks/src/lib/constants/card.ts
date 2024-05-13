export const CARD_TYPES = {
  NONE: {
    INPUT_COUNT: 16,
    FORMATTING_RULE: '4-4-4',
  },
  VISA: {
    INPUT_COUNT: 16,
    FORMATTING_RULE: '4-4-4',
  },
  MASTER: {
    INPUT_COUNT: 16,
    FORMATTING_RULE: '4-4-4',
  },
  DINERS: {
    INPUT_COUNT: 14,
    FORMATTING_RULE: '4-6-4',
  },
  AMEX: {
    INPUT_COUNT: 15,
    FORMATTING_RULE: '4-6-5',
  },
  UNION_PAY: {
    INPUT_COUNT: 16,
    FORMATTING_RULE: '4-4-4',
  },
};

export const ERROR_MESSAGES = {
  ONLY_NUMBERS: '숫자만 입력 가능합니다.',
  STANDARD_CARD_LENGTH: `일반 카드는 ${CARD_TYPES.NONE.INPUT_COUNT}자리 숫자여야 합니다.`,
  VISA_CARD_LENGTH: `Visa 카드는 ${CARD_TYPES.VISA.INPUT_COUNT}자리 숫자여야 합니다.`,
  MASTER_CARD_LENGTH: `Master 카드는 ${CARD_TYPES.MASTER.INPUT_COUNT}자리 숫자여야 합니다.`,
  DINERS_CARD_LENGTH: `Diners 카드는 ${CARD_TYPES.DINERS.INPUT_COUNT}자리 숫자여야 합니다.`,
  AMEX_CARD_LENGTH: `AMEX 카드는 ${CARD_TYPES.AMEX.INPUT_COUNT}자리 숫자여야 합니다.`,
  UNIONPAY_CARD_LENGTH: `UnionPay 카드는 ${CARD_TYPES.UNION_PAY.INPUT_COUNT}자리 숫자여야 합니다.`,
  SELECT_CARD_COMPANY: '카드사를 선택해주세요.',
  ENTER_TWO_DIGITS: '숫자 2개를 입력해주세요.',
  MONTH_RANGE: '월은 1이상 12이하여야 합니다.',
  ONLY_ENGLISH: '영어만 입력 가능합니다.',
  USERNAME_LENGTH_LIMIT: (limit: number) => `${limit}자까지 입력 가능합니다.`,
  CVC_LENGTH: (length: number) => `${length}자리를 입력해주세요.`,
  PASSWORD_LENGTH: (length: number) => `${length}자리를 입력해주세요.`,
  NO_ERROR: '',
};

export const ERROR_TYPES = {
  NON_NUMERIC: 'NonNumeric',
  INVALID_LENGTH_DEFAULT: 'DefaultInvalidLength',
  INVALID_LENGTH_DINERS: 'DinersInvalidLength',
  INVALID_LENGTH_AMEX: 'AMEXInvalidLength',
  INVALID_LENGTH_UNIONPAY: 'UnionPayInvalidLength',
  NO_ERROR: 'NoError',
};
