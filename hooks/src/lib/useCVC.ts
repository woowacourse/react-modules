import { useState, useEffect } from 'react';
import { validateNumber, validateFilledValue, validateLength, isValid } from './utils/validators';
import { UseCardModuleReturn } from './types';

import { INVALID_INPUT_VALUE } from './constants';
import { sliceText } from './utils/textFormatter';

export interface CardCVCValidationErrorMessages {
  empty: string;
  number: string;
  length: string;
}
export interface UseCardCVCProps {
  cardCVC: string;
  errorMessages: CardCVCValidationErrorMessages;
  validation: {
    length: number;
  };
  isNeedValidValue: boolean;
}
export interface UseCardCVCResult {
  isFilledValue: boolean;
  isValidNumber: boolean;
  isValidLength: boolean;
}

export type UseCardCVCReturn = UseCardModuleReturn<UseCardCVCResult, string>;

export default function useCVC(props: UseCardCVCProps): UseCardCVCReturn {
  const { cardCVC, errorMessages, validation, isNeedValidValue } = props;

  type ErrorMessageKey = keyof typeof errorMessages;
  type Error = ErrorMessageKey[] | null;
  const [error, setError] = useState<Error>(null);

  const validateCVC = () => {
    const newError: ErrorMessageKey[] = [];

    if (!validateFilledValue(cardCVC)) newError.push('empty');
    if (!validateNumber(cardCVC)) newError.push('number');
    if (!validateLength(cardCVC, validation.length)) newError.push('length');

    setError(newError[0] ? newError : null);
  };

  /**
   *  유요한 값만 input에 나타나기를 원하는 경우(isNeedValidValue===true), length에 대한 검사를 제외한 오류가 있을 경우 input의 value를 빈문자열로 변경한다.
   * @param value input value
   * @param error 유효성 검사 결과
   * @returns 변경된 글자
   */
  const getFormattedValue = (value: string) => {
    const slicedText = sliceText(value, validation.length);
    const isOnlyLengthError = error?.[0] === 'length';

    if (isNeedValidValue) {
      return error && !isOnlyLengthError ? INVALID_INPUT_VALUE : slicedText;
    }

    return slicedText;
  };

  useEffect(() => {
    validateCVC();
  }, [cardCVC]);

  return {
    validationFirstErrorMessage: error ? errorMessages[error[0]] : null,
    validationResult: {
      isFilledValue: isValid<ErrorMessageKey>('empty', error),
      isValidNumber: isValid<ErrorMessageKey>('number', error),
      isValidLength: isValid<ErrorMessageKey>('length', error),
    },
    formattedValue: getFormattedValue(cardCVC),
  };
}
