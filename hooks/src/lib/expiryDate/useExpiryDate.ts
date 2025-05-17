import { useCallback, useMemo, useState } from 'react';
import {
  ERROR_MESSAGE,
  EXPIRY_DATE_ERROR_TYPES,
  EXPIRY_DATE_KEY,
  ExpiryDateKey,
} from '../config';
import { ValidationResult } from '../types';
import {
  checkIsExpiredDate,
  checkIsInRange,
  checkIsNumber,
  checkIsValidLength,
} from '../validators';
import { createValidationResult } from '../utils';

/**
 * @description
 * `useExpiryDate`는 카드의 만료일(`month`, `year`) 입력 필드를 관리하고,
 * 각 입력 값의 유효성 검사 및 만료 여부를 검사하는 React 훅입니다.
 *
 * @returns {object} 만료일 입력 상태 및 관련 기능을 포함하는 객체입니다.
 * @property {Record<ExpiryDateKey, string>} expiryDate - 현재 입력된 만료일(month, year) 값입니다.
 * @property {Record<ExpiryDateKey, ValidationResult>} validationResults - 만료일 입력에 대한 유효성 검사 결과입니다.
 * @property {(name: ExpiryDateKey, value: string) => keyof typeof EXPIRY_DATE_ERROR_TYPES | null} getExpiryDateValidationError - 특정 입력 값(month/year)에 대한 포맷 유효성 검사 에러를 반환하는 함수입니다.
 * @property {(name: ExpiryDateKey, value: string, other: Record<ExpiryDateKey, string>) => keyof typeof EXPIRY_DATE_ERROR_TYPES | null} getExpiryDateExpiredError - 특정 입력 값이 이미 만료된 경우 에러를 반환하는 함수입니다.
 * @property {(key: ExpiryDateKey, value: string, options?: { skipValidation?: boolean }) => void} handleExpiryDateChange - 만료일 입력 값을 업데이트하는 함수입니다.
 *   - `key` : 업데이트할 필드 이름입니다. (`month` 또는 `year`)
 *   - `value` : 업데이트할 입력 문자열입니다.
 *   - `options.skipValidation` : 유효성 검사를 건너뛸지 여부입니다. 기본값은 `false`입니다.
 *     `true`로 설정하면 포맷 에러가 있어도 강제로 상태를 업데이트합니다. (예: 서버 응답 적용, 자동 입력 상황)
 *
 * @example
 * const { expiryDate, validationResults, handleExpiryDateChange } = useExpiryDate();
 *
 * <input
 *   value={expiryDate.month}
 *   onChange={(e) => handleExpiryDateChange('month', e.target.value)}
 * />
 * <input
 *   value={expiryDate.year}
 *   onChange={(e) => handleExpiryDateChange('year', e.target.value)}
 * />
 */
function useExpiryDate() {
  const [expiryDate, setExpiryDate] = useState<Record<ExpiryDateKey, string>>({
    month: '',
    year: '',
  });

  const getExpiryDateValidationError = useCallback(
    (name: ExpiryDateKey, value: string) => {
      if (value === '') return null;

      const isNumber = checkIsNumber(value);
      const isValidLength = checkIsValidLength(value, 2);
      const isMonthInRange = checkIsInRange(Number(value), 1, 12);

      if (!isNumber) return EXPIRY_DATE_ERROR_TYPES.notNumber;
      if (!isValidLength) return EXPIRY_DATE_ERROR_TYPES.invalidLength;
      if (name === EXPIRY_DATE_KEY.month && !isMonthInRange)
        return EXPIRY_DATE_ERROR_TYPES.invalidMonthRange;

      return null;
    },
    []
  );

  const getExpiryDateExpiredError = useCallback(
    (
      name: ExpiryDateKey,
      value: string,
      other: Record<ExpiryDateKey, string>
    ) => {
      if (value === '') return null;

      const targetMonth = name === EXPIRY_DATE_KEY.month ? value : other.month;
      const targetYear = name === EXPIRY_DATE_KEY.year ? value : other.year;
      const isExpiredDate = checkIsExpiredDate(targetMonth, targetYear);

      if (isExpiredDate) return EXPIRY_DATE_ERROR_TYPES.expiredDate;

      return null;
    },
    []
  );

  const validationResults: Record<ExpiryDateKey, ValidationResult> = useMemo(
    () => ({
      month: createValidationResult(ERROR_MESSAGE.expiryDate, [
        getExpiryDateExpiredError(
          EXPIRY_DATE_KEY.month,
          expiryDate.month,
          expiryDate
        ),
        getExpiryDateValidationError(EXPIRY_DATE_KEY.month, expiryDate.month),
      ]),
      year: createValidationResult(ERROR_MESSAGE.expiryDate, [
        getExpiryDateExpiredError(
          EXPIRY_DATE_KEY.year,
          expiryDate.year,
          expiryDate
        ),
        getExpiryDateValidationError(EXPIRY_DATE_KEY.year, expiryDate.year),
      ]),
    }),
    [expiryDate, getExpiryDateExpiredError, getExpiryDateValidationError]
  );

  const handleExpiryDateChange = useCallback(
    (
      key: ExpiryDateKey,
      value: string,
      options?: { skipValidation?: boolean }
    ) => {
      const shouldSkipValidation = options?.skipValidation ?? false;

      const errorType = getExpiryDateValidationError(key, value);

      if (!shouldSkipValidation && errorType) {
        return;
      }

      setExpiryDate((prev) => ({ ...prev, [key]: value }));
    },
    [expiryDate]
  );

  return {
    expiryDate,
    validationResults,
    getExpiryDateValidationError,
    getExpiryDateExpiredError,
    handleExpiryDateChange,
  };
}

export default useExpiryDate;
