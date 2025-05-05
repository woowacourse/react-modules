export const ERROR_MESSAGE = {
  CARD_NUMBERS: {
    INVALID_LENGTH: '카드 번호는 4자리로 입력해 주세요.',
    NOT_A_NUMBER: '카드 번호는 숫자로 입력해 주세요.',
  },
  EXPIRY_DATE: {
    INVALID_YEAR_LENGTH: '연도는 2자리로 입력해 주세요.',
    INVALID_MONTH_LENGTH: '월은 2자리로 입력해 주세요.',
    YEAR_IS_NOT_A_NUMBER: '연도는 숫자로 입력해 주세요.',
    MONTH_IS_NOT_A_NUMBER: '월은 숫자로 입력해 주세요.',
    INVALID_YEAR: '유효하지 않은 연도입니다.',
    INVALID_MONTH: '유효하지 않은 월입니다.',
  },
  CVC: {
    INVALID_LENGTH: 'CVC는 3자리로 입력해 주세요.',
    NOT_A_NUMBER: 'CVC는 숫자로 입력해 주세요.',
  },
  PASSWORD: {
    INVALID_LENGTH: '카드 비밀번호는 2자리로 입력해 주세요.',
    NOT_A_NUMBER: '카드 비밀번호는 숫자로 입력해 주세요.',
  },
} as const;
