import { validateCardInput } from './cardNumberLengthInfo';

const EXPIRE_DATE_INDEX = {
  MONTH: 0,
  YEAR: 1,
} as const;

export const validateExpiryDate = (value: string, index: number) => {
  const { isValid, errorMessage } = validateCardInput(value, 2);
  if (!isValid) {
    return {
      isValid,
      errorMessage,
    };
  }

  if (index === EXPIRE_DATE_INDEX.MONTH && (Number(value) > 12 || Number(value) < 1)) {
    return {
      isValid: false,
      errorMessage: '유효기간의 월은 1~12월만 가능합니다.',
    };
  }

  const currentYear = new Date().getFullYear() % 100;
  if (index === EXPIRE_DATE_INDEX.YEAR && Number(value) < currentYear) {
    return {
      isValid: false,
      errorMessage: `유효기간의 연도는 현재 연도(${currentYear})보다 크거나 같아야 합니다.`,
    };
  }

  return {
    isValid: true,
    errorMessage: '',
  };
};
