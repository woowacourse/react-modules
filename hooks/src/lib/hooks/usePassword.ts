import { useEffect, useState } from 'react';

import { INVALID_INPUT_VALUE } from '../constants';
import { ErrorMessage, UseCardModuleReturn } from '../types';
import { isValid, sliceText, validateFilledValue, validateLength, validateNumber } from '../utils';

export interface PasswordValidationErrorMessages {
  empty: string;
  number: string;
  length: string;
}
export interface UsePasswordProps {
  cardPassword: string;
  errorMessages: PasswordValidationErrorMessages;
  validation: {
    length: number;
  };
  isNeedValidValue: boolean;
}
export interface UsePasswordResult {
  isFilledValue: boolean;
  isValidNumber: boolean;
  isValidLength: boolean;
}

export type UsePasswordReturn = UseCardModuleReturn<ErrorMessage, UsePasswordResult, string>;

export default function usePassword(props: UsePasswordProps) {
  const { cardPassword, errorMessages, validation, isNeedValidValue } = props;

  type ErrorMessageKey = keyof typeof errorMessages;
  type Error = ErrorMessageKey[] | null;
  const [error, setError] = useState<Error>(null);

  const validatePassword = () => {
    const newError: ErrorMessageKey[] = [];

    if (!validateFilledValue(cardPassword)) newError.push('empty');
    if (!validateNumber(cardPassword)) newError.push('number');
    if (!validateLength(cardPassword, validation.length)) newError.push('length');

    setError(newError[0] ? newError : null);
  };

  /**
   *  유요한 값만 input에 나타나기를 원하는 경우(isNeedValidValue===true), length에 대한 검사를 제외한 오류가 있을 경우 input의 value를 빈문자열로 변경한다.
   * @param value input value
   * @param error 유효성 검사 결과
   * @returns 변경된 글자
   */
  const getFormattedValue = () => {
    const slicedText = sliceText(cardPassword, validation.length);
    const isOnlyLengthError = error?.[0] === 'length';

    if (isNeedValidValue) {
      return error && !isOnlyLengthError ? INVALID_INPUT_VALUE : slicedText;
    }

    return slicedText;
  };

  useEffect(() => {
    validatePassword();
  }, [cardPassword]);

  return {
    validationErrorMessage: error ? errorMessages[error[0]] : null,
    validationResult: {
      isFilledValue: isValid<ErrorMessageKey>('empty', error),
      isValidNumber: isValid<ErrorMessageKey>('number', error),
      isValidLength: isValid<ErrorMessageKey>('length', error),
    },
    formattedValue: getFormattedValue(),
  };
}
