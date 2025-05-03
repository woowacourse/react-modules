export interface ExpirationDateInput {
  month: string;
  year: string;
}

export interface ExpirationDateValidationResult {
  isValid: { month: boolean; year: boolean };
  message: string;
}

export const validateExpirationDate = (date: ExpirationDateInput): ExpirationDateValidationResult => {
  const { month, year } = date;

  const result: ExpirationDateValidationResult['isValid'] = {
    month: true,
    year: true,
  };

  let message = '';
  let hasError = false;

  if (!isNumber(month)) {
    result.month = false;
    message = '숫자만 입력해 주세요.';
    hasError = true;
  } else if (!isTwoDigits(month)) {
    result.month = false;
    message = '2자리의 숫자를 입력해 주세요.';
    hasError = true;
  } else if (!isValidMonth(month)) {
    result.month = false;
    message = '1~12 사이의 숫자를 입력해 주세요.';
    hasError = true;
  }

  if (!isNumber(year)) {
    result.year = false;
    if (!hasError) message = '숫자만 입력해 주세요.';
    hasError = true;
  } else if (!isTwoDigits(year)) {
    result.year = false;
    if (!hasError) message = '2자리의 숫자를 입력해 주세요.';
    hasError = true;
  }

  return { isValid: result, message };
};

const isNumber = (value: string) => !Number.isNaN(Number(value));
const isTwoDigits = (value: string) => value.length === 2;
const isValidMonth = (month: string) => {
  const monthNumber = Number(month);
  return monthNumber >= 1 && monthNumber <= 12;
};
