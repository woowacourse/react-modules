import { validationResult } from '../types/card';

export function validateNumberError(value: string): validationResult {
  if (!/^[0-9]*$/.test(value)) {
    return { isValid: false, errorMessage: '숫자만 입력 가능합니다.' };
  }
  return { isValid: true };
}

export function validateMonthRangeError(value: string): validationResult {
  const month = Number(value);
  if (value !== '' && (month < 1 || month > 12)) {
    return { isValid: false, errorMessage: '1부터 12 사이의 숫자를 입력해주세요.' };
  }
  return { isValid: true };
}

export function validateYearLengthError(value: string): validationResult {
  if (value !== '' && value.length !== 2) {
    return { isValid: false, errorMessage: '2자리 숫자를 입력해주세요.' };
  }
  return { isValid: true };
}

export function validateCvcLengthError(value: string): validationResult {
  if (value !== '' && value.length !== 3) {
    return { isValid: false, errorMessage: 'CVC는 3자리여야 합니다.' };
  }
  return { isValid: true };
}

export function validateCardPasswordLengthError(value: string): validationResult {
  if (value !== '' && value.length !== 2) {
    return { isValid: false, errorMessage: '비밀번호는 2자리여야 합니다.' };
  }
  return { isValid: true };
}
