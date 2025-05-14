export const ERROR_MESSAGE = {
  INVALID_NUMBER: '숫자만 입력 가능합니다.',
  INVALID_MONTH: '유효한 월(MM)의 범위를 입력해주세요.(01~12)',
  generateInvalidLengthMsg: (number: number) => `${number}자리를 입력해주세요.`,
  generateInvalidYearMsg: (year: number) =>
    `유효한 연도(YY)를 입력해주세요.(${year}년 이상)`,
  generateInvalidBetweenMsg: (min: number, max: number) =>
    `${min}자리 이상 ${max}자리 이내로 입력해주세요.`,
};

export const defaultValidationValue = {
  isError: false,
  errorMessage: null,
};
