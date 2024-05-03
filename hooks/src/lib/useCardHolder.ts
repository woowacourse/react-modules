import { ChangeEvent, useState, FocusEvent } from 'react';
import { ALPHABET_REGEXP, ONLY_UPPER_CASE_ALPHABET_REGEXP } from './contexts';
import { validateFilledValue } from './utils/validators';
import { ErrorMessage, UseCardModuleProps } from './types';
import useCardValidation from './useCardValidation';

interface CardHolderValidationErrorMessages {
  empty: string;
  alphabet: string;
}

/**
 * @property {{isOnlyUpperCase: boolean;isNeedChangeUpperCase: boolean;}} alphabet : 카드 소유자의 이름에 대한 유호성 검사 조건으로 오직 대문자로만 입력을 받을 거라면 isOnlyUpperCase 는 true값을, 그렇지 않다면 false 값을 가져야한다. 만약 대문자로 변환된 대문자를 받고 싶다면 isNeedChangeUpperCase를 true로 설정한다.
 */
interface CardHolderValidation {
  alphabet: {
    isOnlyUpperCase: boolean;
    isNeedChangeUpperCase: boolean;
  };
}

type UseCardHolderProps = UseCardModuleProps<CardHolderValidationErrorMessages, CardHolderValidation>;

export default function useCardHolder({ validationErrorMessages, validations: { alphabet } }: UseCardHolderProps) {
  const [cardHolder, setCardHolder] = useState('');
  const [errorMessage, setErrorMessage] = useState<ErrorMessage>(null);

  /**
   * 카드 소유자 이름의 입력값이 있을때, 해당 입력값이 알파벳으로 이루저 졌는지 검사
   * validation.alphabet의 isOnlyUpperCase 값에 따라 알파벳 대문자로만 이루어져야하는지, 대소문자 상관없이 알파벳으로만 이루어지면 되는 지 검사
   * @param value : 검사할 사용자 이름
   * @returns 유효성 검사 통과 여부
   */
  const validateAlphabeticString = (value: string) => {
    const regExp = alphabet.isOnlyUpperCase ? ONLY_UPPER_CASE_ALPHABET_REGEXP : ALPHABET_REGEXP;
    return !value || regExp.test(value);
  };

  const changeEventValidators = [{ test: validateAlphabeticString, errorMessage: validationErrorMessages.alphabet }];
  const blurEventValidators = [{ test: validateFilledValue, errorMessage: validationErrorMessages.empty }];
  const totalValidators = [blurEventValidators[0], ...changeEventValidators, blurEventValidators[1]];

  const { handleValidationChange, handleValidationBlur, handleUpdateValue } = useCardValidation<string>({
    blurEventValidators,
    changeEventValidators,
    totalValidators,
    setValue: setCardHolder,
    setErrorMessage,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleValidationChange(e.target.value);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    handleValidationBlur(e.target.value);
  };

  return {
    cardHolder: cardHolder.toUpperCase(),
    setCardHolder,
    isValid: !!errorMessage,
    errorMessage,
    handleChange,
    handleBlur,
    updateValue: handleUpdateValue,
  };
}
