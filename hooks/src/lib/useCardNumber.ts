import { UseCardModuleProps } from './types';
import { validateNumber, validateFilledValue, validateLength } from './utils/validators';

interface CardNumberValidationErrors {
  empty: string;
  number: string;
  length: string;
}

interface CardNumberValidations {
  cardNumberLength: number[];
}

export default function useCardNumber({
  validationErrorMessages,
  validations,
}: UseCardModuleProps<CardNumberValidationErrors, CardNumberValidations>) {
  /**
   * 카드 번호 입력 필드의 key(=index)에 따라 해당 입력 필드에 입력되어야하는 카드 번호 숫자를 기준으로 입력값이 유효한지 검사
   * @param value : 카드 번호 입력값
   * @param key : 카드 번호 입력 필드의  모든 카드 번호 입력 필드의 속에서 순서 (index)
   */
  const validateCardNumberLength = (value: string, key: number) =>
    validateLength(value, validations.cardNumberLength[key]);

  const changeEventValidators = [{ test: validateNumber, errorMessage: validationErrorMessages.number }];

  const blurEventValidators = [
    { test: validateFilledValue, errorMessage: validationErrorMessages.empty },
    { test: validateCardNumberLength, errorMessage: validationErrorMessages.length },
  ];

  const totalValidators = [blurEventValidators[0], ...changeEventValidators, blurEventValidators[1]];

  return { changeEventValidators, blurEventValidators, totalValidators };
}
