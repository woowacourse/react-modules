import { useCallback, useMemo, useState } from 'react';
import { CVC_ERROR_TYPES, ERROR_MESSAGE } from '../config';
import { ValidationResult } from '../types';
import { checkIsNumber, checkIsValidLength } from '../validators';
import { createValidationResult } from '../utils';

/**
 * @description
 * `useCVC`는 카드 CVC(CVV) 번호 입력 필드를 관리하고,
 * 입력 값에 대한 유효성 검사를 수행하는 React 훅입니다.
 *
 * @returns {object} CVC 입력 상태 및 관련 기능을 포함하는 객체입니다.
 * @property {string} CVC - 현재 입력된 CVC 번호입니다.
 * @property {ValidationResult} validationResult - CVC 입력에 대한 유효성 검사 결과입니다.
 * @property {(value: string) => keyof typeof CVC_ERROR_TYPES | null} getCVCValidationError - 특정 CVC 입력 값에 대해 유효성 검사 에러를 반환하는 함수입니다.
 * @property {(params: { value: string; options?: { skipValidation?: boolean } }) => void} handleCVCChange - CVC 입력 값을 업데이트하는 함수입니다.
 *   - `params.value` : 업데이트할 입력 문자열입니다.
 *   - `params.options.skipValidation` : 유효성 검사를 건너뛸지 여부입니다. 기본값은 `false`입니다.
 *     `true`로 설정하면 포맷 에러가 있어도 강제로 상태를 업데이트합니다. (예: 서버 자동 입력 대응 등)
 *
 * @example
 * const { CVC, validationResult, handleCVCChange } = useCVC();
 *
 * <input
 *   value={CVC}
 *   onChange={(e) => handleCVCChange({ value: e.target.value })}
 * />
 */
function useCVC() {
  const [CVC, setCVC] = useState('');

  const getCVCValidationError = useCallback((value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 3);

    if (!isNumber) return CVC_ERROR_TYPES.notNumber;
    if (!isValidLength) return CVC_ERROR_TYPES.invalidLength;

    return null;
  }, []);

  const validationResult: ValidationResult = useMemo(
    () =>
      createValidationResult(ERROR_MESSAGE.CVC, [getCVCValidationError(CVC)]),
    [CVC, getCVCValidationError]
  );

  const handleCVCChange = useCallback(
    (value: string, options?: { skipValidation?: boolean }) => {
      const shouldSkipValidation = options?.skipValidation ?? false;

      const errorType = getCVCValidationError(value);

      if (!shouldSkipValidation && errorType) {
        return;
      }

      setCVC(value);
    },
    [getCVCValidationError]
  );

  return {
    CVC,
    validationResult,
    getCVCValidationError,
    handleCVCChange,
  };
}

export default useCVC;
