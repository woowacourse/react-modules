import useCardField, { ValidationConfig } from './useCardFields';
import { EXPIRY } from '../constants/cardConstants';

export default function useCardExpiry() {
  const monthValidationConfig: ValidationConfig = {
    minValue: EXPIRY.MONTH.MIN,
    maxValue: EXPIRY.MONTH.MAX,
    requiredLength: EXPIRY.MONTH.LENGTH,
    errorMessages: {
      onlyNumbers: '월은 숫자만 입력 가능합니다',
      invalidValue: '유효한 월(1-12)을 입력해주세요',
      emptyValue: '유효기간(월)을 입력해주세요',
    },
  };

  const currentYear = new Date().getFullYear() % 100;
  const yearValidationConfig: ValidationConfig = {
    minValue: currentYear,
    requiredLength: EXPIRY.YEAR.LENGTH,
    errorMessages: {
      onlyNumbers: '연도는 숫자만 입력 가능합니다',
      invalidValue: `유효한 연도 (${currentYear}년도) 이상을 입력해주세요.`,
      emptyValue: '유효기간(연도)을 입력해주세요',
    },
  };

  const month = useCardField(monthValidationConfig);
  const year = useCardField(yearValidationConfig);

  const handleMonthChange = (input: string) => {
    const digitsOnly = input.replace(/\D/g, '');
    month.handleChange(digitsOnly);
  };

  const handleYearChange = (input: string) => {
    const digitsOnly = input.replace(/\D/g, '');
    year.handleChange(digitsOnly);
  };

  const isValid = () => {
    return month.isValid() && year.isValid();
  };

  const reset = () => {
    month.reset();
    year.reset();
  };

  return {
    month: {
      value: month.value,
      error: month.error,
      handleChange: handleMonthChange,
      getErrorMessage: month.getErrorMessage,
      isValid: month.isValid,
    },
    year: {
      value: year.value,
      error: year.error,
      handleChange: handleYearChange,
      getErrorMessage: year.getErrorMessage,
      isValid: year.isValid,
    },
    reset,
    isValid,
    hasError: month.error || year.error,
  };
}
