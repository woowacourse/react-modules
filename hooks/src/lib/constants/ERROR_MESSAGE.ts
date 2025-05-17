const ERROR_MESSAGE: Record<string, string> = {
  IS_NOT_NUMERIC: '입력값이 숫자가 아닙니다.',
  IS_OVER_LENGTH: '입력값이 최대 길이를 초과했습니다.',
  IS_NOT_MONTH_NUMBER: '월은 01 ~ 12 사이의 숫자여야 합니다.',
  IS_OVER_EXPIRATION: '유효 기간이 만료되었습니다.',
} as const;

export default ERROR_MESSAGE;
