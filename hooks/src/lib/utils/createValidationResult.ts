import { ValidationResult } from '../types';

/**
 * 유효성 검사 결과를 ValidationResult 형태로 변환합니다.
 *
 * @param errorSource - 에러 메세지를 가져올 소스 객체 (예: ERROR_MESSAGE.cvc, ERROR_MESSAGE.expiryDate)
 * @param errorTypes - 에러 타입들 (null 포함 가능)
 */
export function createValidationResult<T extends string>(
  errorSource: Record<T, string>,
  errorTypes: (T | null)[]
): ValidationResult {
  const foundErrorType = errorTypes.find((type) => type != null);
  if (!foundErrorType) {
    return { isValid: true, errorMessage: '' };
  }

  return {
    isValid: false,
    errorMessage: foundErrorType ? errorSource[foundErrorType] : '',
  };
}
