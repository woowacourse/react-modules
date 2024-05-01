const ERROR_MESSAGE = Object.freeze({
  EMPTY_VALUE: "값을 입력해주세요.",
  ONLY_NUMBER: "숫자만 입력해주세요.",
  ONLY_ENGLISH: "영어만 입력해주세요.",

  INVALID_CARD_NUMBER_LENGTH: "숫자 4자리를 입력해주세요.",
  INVALID_MONTH_LENGTH: "월은 숫자 2자리입니다.",
  INVALID_YEAR_LENGTH: "연도는 숫자 2자리입니다.",
  INVALID_CVC_LENGTH: "CVC는 숫자 3자리입니다.",
  INVALID_PASSWORD_LENGTH: "비밀번호는 숫자 3자리입니다.",

  OUT_OF_RANGE_MONTH: "월은 1부터 12사이의 숫자입니다.",
  OUT_OF_RANGE_HOLDER: "사용자 이름은 최대 21자까지 입력할 수 있습니다.",
});

export default ERROR_MESSAGE;
