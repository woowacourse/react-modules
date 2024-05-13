import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import ErrorMessages from '../types/ErrorMessages';

import { validateAllowedLength } from '../utils/validateInitialParams';
import { getValidationResult } from './useCardCVC.util';

interface CardCVCParams {
  allowedLength?: number;
  initialValue?: string;
  errorMessages?: ErrorMessages;
}

interface CVCValidationResult {
  CVC: string;
  validationResult: ValidationResult;
  handleUpdateCVC: (value: string) => void;
}

export const DEFAULT_LENGTH = {
  /**
   * 카드 CVC 번호의 자릿수 : 3자리 또는 4자리만 허용합니다.
   */
  minLength: 3,
  maxLength: 4,
};

export const DEFAULT_PARAMS = {
  allowedLength: DEFAULT_LENGTH.minLength,
  initialValue: '',
  errorMessages: {
    inputType: 'CVC 번호는 숫자로만 입력해 주세요.',
    inputLength: (allowedLength: number) =>
      `CVC 번호는 ${allowedLength}자리의 숫자로 입력해 주세요.`,
    allowedLengthOutOfRange: `[ERROR] CVC 자릿수는 ${DEFAULT_LENGTH.minLength}~${DEFAULT_LENGTH.maxLength} 사이의 숫자로 설정되어야 합니다. 다시 확인해 주세요.`,
  },
};

export default function useCardCVC({
  allowedLength = DEFAULT_PARAMS.allowedLength,
  initialValue = DEFAULT_PARAMS.initialValue,
  errorMessages = DEFAULT_PARAMS.errorMessages,
}: CardCVCParams = {}): CVCValidationResult {
  validateAllowedLength({
    allowedLength,
    minLength: DEFAULT_LENGTH.minLength,
    maxLength: DEFAULT_LENGTH.maxLength,
    errorMessage: errorMessages.allowedLengthOutOfRange as string,
  });

  const [CVC, setCVC] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, allowedLength, errorMessages),
  );

  const handleUpdateCVC = (value: string) => {
    setCVC(value);
    setValidationResult(getValidationResult(value, allowedLength, errorMessages));
  };

  return { CVC, validationResult, handleUpdateCVC };
}
