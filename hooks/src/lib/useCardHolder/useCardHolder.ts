import { useState } from 'react';
import ValidationResult from '../types/ValidationResult';
import Validation from '../utils/Validation';
import ErrorMessages from '../types/ErrorMessages';

import { validateAllowedLength } from '../utils/validateInitialParams';

interface CardHolderParams {
  allowedLength?: number;
  initialValue?: string;
  errorMessages?: CardHolderErrorMessages;
}

interface CardHolderValidationResult {
  cardHolder: string;
  validationResult: ValidationResult;
  handleUpdateCardHolder: (value: string) => void;
}

interface CardHolderErrorMessages extends ErrorMessages {
  inputLength: (allowedLength: number) => string;
}

export const DEFAULT_LENGTH = {
  /**
   * 카드 소유자 이름 글자수 : 3~30글자 사이로만 허용합니다. 기본값은 20입니다.
   */
  minLength: 3,
  maxLength: 30,
  defaultLength: 20,
};

export const DEFAULT_PARAMS = {
  allowedLength: DEFAULT_LENGTH.defaultLength,
  initialValue: '',
  errorMessages: {
    inputType: '카드 소유자는 영문 대소문자로 입력해 주세요.',
    allowedLengthOutOfRange: `[ERROR] 카드 소유자의 길이는 ${DEFAULT_LENGTH.minLength}~${DEFAULT_LENGTH.maxLength} 사이의 숫자로 설정되어야 합니다. 다시 확인해 주세요.`,
    inputLength: (allowedLength: number) =>
      `카드 소유자는 ${DEFAULT_LENGTH.minLength}~${allowedLength}자 이내로 입력해 주세요.`,
  },
};

export default function useCardHolder({
  allowedLength = DEFAULT_PARAMS.allowedLength,
  initialValue = DEFAULT_PARAMS.initialValue,
  errorMessages = DEFAULT_PARAMS.errorMessages,
}: CardHolderParams = {}): CardHolderValidationResult {
  validateAllowedLength({
    allowedLength,
    minLength: DEFAULT_LENGTH.minLength,
    maxLength: DEFAULT_LENGTH.maxLength,
    errorMessage: errorMessages.allowedLengthOutOfRange as string,
  });

  const [cardHolder, setCardHolder] = useState(initialValue);
  const [validationResult, setValidationResult] = useState<ValidationResult>(
    getValidationResult(initialValue, allowedLength, errorMessages),
  );

  const handleUpdateCardHolder = (value: string) => {
    setCardHolder(value);
    setValidationResult(getValidationResult(value, allowedLength, errorMessages));
  };

  return {
    cardHolder,
    validationResult,
    handleUpdateCardHolder,
  };
}

function getValidationResult(
  value: string,
  allowedLength: number,
  errorMessages: CardHolderErrorMessages,
) {
  if (value === DEFAULT_PARAMS.initialValue) {
    return { isValid: null };
  }

  if (!Validation.isEnglishWithSpace(value)) {
    return { isValid: false, errorMessage: errorMessages.inputType };
  }

  if (
    !Validation.isNumberInRange({
      min: DEFAULT_LENGTH.minLength,
      max: allowedLength,
      value: value.length,
    })
  ) {
    return { isValid: false, errorMessage: errorMessages.inputLength(allowedLength) };
  }

  return { isValid: true };
}
