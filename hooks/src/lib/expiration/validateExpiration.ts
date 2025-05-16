import validation from '../validation';
import { ExpirationStateKey, ExpirationStateType } from './useExpiration';

const validateExpiration = (expiration: ExpirationStateType) => {
  const errorState: Record<ExpirationStateKey, boolean> = {
    year: false,
    month: false
  };

  const getValidationMessage = (expiration: ExpirationStateType) => {
    for (const [k, value] of Object.entries(expiration)) {
      const key = k as ExpirationStateKey;
      if (!validation.isNumber(value) && value !== '') {
        errorState[key] = true;
        return '숫자만 입력하세요.';
      }

      if (!validation.isValidLength(value, 2) && value !== '') {
        errorState[key] = true;
        return '2자리 숫자를 입력하세요.';
      }

      if (!validation.isValidMonth(value) && key === 'month' && value !== '') {
        errorState[key] = true;
        return '유효한 월을 입력하세요.';
      }

      if (!validation.isValidYear(value) && key === 'year' && value !== '') {
        errorState[key] = true;
        return '지나지 않은 연도를 입력해주세요.';
      }

      if (!validation.isValidateDate(expiration.month, expiration.year) && expiration.month !== '' && expiration.year !== '') {
        errorState[key] = true;
        return '지나지 않은 날짜를 입력해주세요.';
      }
    }

    return '';
  };

  const errorMessage = getValidationMessage(expiration);

  return { errorState, errorMessage };
};

export default validateExpiration;
