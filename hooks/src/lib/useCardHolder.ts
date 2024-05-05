import { useEffect, useState } from 'react';
import { ALPHABET_REGEXP, ONLY_UPPER_CASE_ALPHABET_REGEXP } from './constants';
import { isValid, validateFilledValue } from './utils/validators';
import { ErrorMessage, UseCardModuleReturn } from './types';
import { CARD_HOLDER_MAX_LENGTH, INVALID_INPUT_VALUE } from './constants/system';
import { sliceText } from './utils/textFormatter';

export interface CardHolderValidationErrorMessages {
  empty: string;
  alphabet: string;
  length: string;
}
export interface UseCardHolderProps {
  cardHolder: string;
  errorMessages: CardHolderValidationErrorMessages;
  validation: {
    isOnlyUpperCase: boolean;
    maxLength?: number;
  };
  isNeedValidValue: boolean;
  isNeedUpperCase: boolean;
}
export interface UseCardHolderResult {
  isFilledValue: boolean;
  isValidAlphabet: boolean;
  isValidLength: boolean;
}
export type UseCardHolderReturn = UseCardModuleReturn<ErrorMessage, UseCardHolderResult, string>;

export default function useCardHolder(props: UseCardHolderProps): UseCardHolderReturn {
  const { cardHolder, errorMessages, validation, isNeedValidValue, isNeedUpperCase } = props;

  type ErrorMessageKey = keyof typeof errorMessages;
  type Error = ErrorMessageKey[] | null;

  const [error, setError] = useState<Error>(null);
  const maxLength = validation.maxLength || CARD_HOLDER_MAX_LENGTH;
  /**
   * 카드 소유자 이름에 대한 입력값이 알파벳으로 이루저 졌는지 검사
   * validation.alphabet의 isOnlyUpperCase 값에 따라 알파벳 대문자로만 이루어져야하는지, 대소문자 상관없이 알파벳으로만 이루어지면 되는 지 검사
   * @param value : 검사할 사용자 이름
   * @returns 유효성 검사 통과 여부
   */
  const validateAlphabeticString = (value: string) => {
    const regExp = validation.isOnlyUpperCase ? ONLY_UPPER_CASE_ALPHABET_REGEXP : ALPHABET_REGEXP;
    return regExp.test(value);
  };

  const validateMexLength = (value: string) => value.length <= maxLength;

  const validateCardHolder = (value: string) => {
    const newError: ErrorMessageKey[] = [];

    if (!validateFilledValue(value)) {
      newError.push('empty');
    }
    if (!validateAlphabeticString(value)) {
      newError.push('alphabet');
    }
    if (!validateMexLength(value)) {
      newError.push('length');
    }

    setError(newError[0] ? newError : null);
  };

  const changeUpperCase = (value: string) => (isNeedUpperCase ? value.toUpperCase() : value);

  /**
   *  유요한 값만 input에 나타나기를 원하는 경우(isNeedValidValue===true), length에 대한 검사를 제외한 오류가 있을 경우 input의 value를 빈문자열로 변경한다.
   * @param value input value
   * @param error 유효성 검사 결과
   * @returns 변경된 글자
   */
  const getFormattedValue = (value: string) => {
    const slicedText = sliceText(value, maxLength);
    const isOnlyLengthError = error?.[0] === 'length';

    if (isNeedValidValue) {
      return error && !isOnlyLengthError ? INVALID_INPUT_VALUE : changeUpperCase(slicedText);
    }
    return changeUpperCase(slicedText);
  };

  useEffect(() => {
    validateCardHolder(cardHolder);
  }, [cardHolder]);

  return {
    validationErrorMessage: error ? errorMessages[error[0]] : null,
    validationResult: {
      isFilledValue: isValid<ErrorMessageKey>('empty', error),
      isValidAlphabet: isValid<ErrorMessageKey>('alphabet', error),
      isValidLength: isValid<ErrorMessageKey>('length', error),
    },
    formattedValue: getFormattedValue(cardHolder),
  };
}
