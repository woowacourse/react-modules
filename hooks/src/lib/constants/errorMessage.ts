export const ERROR_MESSAGES = {
  month: "월은 01에서 12 사이의 숫자여야 합니다.",
  year: "년도는 2자리 숫자로 입력해 주세요.",
  expired: "유효 기간이 만료되었습니다. 유효한 기간을 입력해 주세요.",
  company: "카드사를 선택해 주세요.",
  holder: "유효하지 않은 이름입니다.",
  maxLengthNumber: (maxLength: number) =>
    `${maxLength}자리 숫자로 입력해 주세요.`,
};

export const MAX_LENGTH_ERROR_MESSAGE = (maxLength: number) =>
  `${maxLength}자리 숫자로 입력해 주세요.`;
