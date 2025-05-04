import { CardInputItem } from '../types/cardInputItem.types';
import { validateCardInput } from './cardNumberLengthInfo';

export const EXPIRE_DATE_INDEX = {
  MONTH: 0,
  YEAR: 1,
} as const;

export const validateExpiryDate = (data: CardInputItem[], value: string, index: number) => {
  const { isValid, errorMessage } = validateCardInput(value, 2);
  if (!isValid) {
    return {
      isValid,
      isExpired: false,
      errorMessage,
    };
  }

  if (index === EXPIRE_DATE_INDEX.MONTH && (Number(value) > 12 || Number(value) < 1)) {
    return {
      isValid: false,
      isExpired: false,
      errorMessage: '유효기간의 월은 1~12월만 가능합니다.',
    };
  }

  const currentYear = new Date().getFullYear() % 100;
  const currentMonth = new Date().getMonth() + 1;

  if (index === EXPIRE_DATE_INDEX.YEAR && Number(value) < currentYear) {
    return {
      isValid: false,
      isExpired: false,
      errorMessage: `유효기간의 년도는 현재 년도(${currentYear})보다 크거나 같아야 합니다.`,
    };
  }

  if (
    index === EXPIRE_DATE_INDEX.YEAR &&
    data[EXPIRE_DATE_INDEX.YEAR].value &&
    Number(data[EXPIRE_DATE_INDEX.MONTH].value) < currentMonth &&
    Number(data[EXPIRE_DATE_INDEX.YEAR].value) === currentYear
  ) {
    return {
      isValid: false,
      isExpired: true,
      errorMessage: `카드가 만료되었습니다. 유효기간을 확인해주세요.`,
    };
  }

  return {
    isValid: true,
    isExpired: false,
    errorMessage: '',
  };
};
