export const ERROR_MESSAGE = {
  NO_INPUT: "입력필드는 비어있을 수 없습니다.",
  CARD_HOLDER: {
    INVALID_CHARACTERS: "카드 소유자 이름은 영어 대문자와 공백만 입력 가능합니다.",
    MAX_LENGTH_EXCEEDED: "카드 소유자 이름은 공백 포함 15자까지만 입력 가능합니다.",
  },
  CARD__NUMBER: {
    INVALID_NUMBERS: "카드 번호는 숫자만 입력 가능합니다.",
    INVALID_LENGTH: "카드 번호는 4자리까지만 입력 가능합니다.",
  },
  CARD_CVC: {
    INVALID_NUMBERS: "카드 CVC는 숫자만 입력 가능합니다.",
    MAX_LENGTH_EXCEEDED: "카드 CVC는 3자리까지만 입력 가능합니다.",
  },
  CARD_EXPIRY_DATE: {
    INVALID_MONTH_FORMAT: "카드 유효기간의 월은 숫자만 입력 가능합니다.",
    MONTH_OUT_OF_RANGE: "카드 유효기간의 월은 1부터 12까지만 입력 가능합니다.",
    INVALID_YEAR_FORMAT: "카드 유효기간의 년은 숫자만 입력 가능합니다.",
    EXPIRED_CARD: "카드 유효기간이 만료되었습니다.",
  },
  CARD_PASSWORD: {
    INVALID_NUMBERS: "카드 비밀번호는 숫자만 입력 가능합니다.",
    MAX_LENGTH_EXCEEDED: "카드 비밀번호는 2자리까지만 입력 가능합니다.",
  },
};
