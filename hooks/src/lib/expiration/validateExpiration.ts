import validation from '../validation';
import { ExpirationStateKey, ExpirationStateType } from './useExpiration';

const validateExpiration = (expiration: ExpirationStateType) => {
  const errorState = {
    year: false,
    month: false
  };

  let errorMessage = '';

  for (const [k, value] of Object.entries(expiration)) {
    const key = k as ExpirationStateKey;
    if (!validation.isNumber(value) && value !== '') {
      errorState[key] = true;
      errorMessage = '숫자만 입력하세요.';
      break;
    }

    if (!validation.isValidLength(value, 2) && value !== '') {
      errorState[key] = true;
      errorMessage = '2자리 숫자를 입력하세요.';
      break;
    }

    if (!validation.isValidMonth(value) && key === 'month' && value !== '') {
      errorState[key] = true;
      errorMessage = '유효한 월을 입력하세요.';
      break;
    }

    if (!validation.isValidYear(value) && key === 'year' && value !== '') {
      errorState[key] = true;
      errorMessage = '유효한 연도를 입력하세요.';
      break;
    }

    if (!validation.isValidateDate(expiration.month, expiration.year) && expiration.month !== '' && expiration.year !== '') {
      errorState[key] = true;
      errorMessage = '지나지 않은 날짜를 입력해주세요.';
      break;
    }
  }

  return { errorState, errorMessage };
};

export default validateExpiration;
