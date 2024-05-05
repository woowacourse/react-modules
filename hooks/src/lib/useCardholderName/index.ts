import REGEXPS from '../constants/regExps';
import { Validator } from '../type';
import { useState } from 'react';

export default function useCardholderName() {
  const [cardholderName, setCardholderName] = useState('');

  const errorMessage = cardholderNameValidators.reduce(
    (message: ErrorMessage | null, validator) => {
      if (message !== null) return message;
      if (validator.checkIsValid(cardholderName)) return message;
      return validator.message;
    },
    null
  );

  const isValid = errorMessage === null;

  return { cardholderName, setCardholderName, isValid, errorMessage };
}

export const CARD_HOLDER_NAME_ERROR_MESSAGE = {
  notCapitalAndNotSpace: '소유자명은 영문 대문자와 공백만 포함해야 합니다.',
  hasPadding: '소유자명 양 끝에 공백이 포함될 수 없습니다.',
  hasTwoBlank: '소유자명의 사이 공백은 최대 한 칸 입력할 수 있습니다',
} as const;

type ErrorMessage =
  (typeof CARD_HOLDER_NAME_ERROR_MESSAGE)[keyof typeof CARD_HOLDER_NAME_ERROR_MESSAGE];

const TWO_BLANKS = '  ';
const cardholderNameValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (name: string) => REGEXPS.onlyCapitalOrSpace.test(name),
    message: CARD_HOLDER_NAME_ERROR_MESSAGE.notCapitalAndNotSpace,
  },
  {
    checkIsValid: (name: string) => name.trim() === name,
    message: CARD_HOLDER_NAME_ERROR_MESSAGE.hasPadding,
  },
  {
    checkIsValid: (name: string) => !name.includes(TWO_BLANKS),
    message: CARD_HOLDER_NAME_ERROR_MESSAGE.hasTwoBlank,
  },
];
