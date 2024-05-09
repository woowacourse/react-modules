import { Validator, ValueOf } from '../type';
import { useCallback, useState } from 'react';

import REGEXPS from '../constants/regExps';
import getCardBrand from './getCardBrand';
import getErrorMessage from '../utils/getErrorMessage';
import getFormattedCardNumber from './getFormattedCardNumber';
import getOnChange from '../utils/getOnChange';

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState('');

  const onChange = useCallback(() => getOnChange(setCardNumber), []);

  const errorMessage = getErrorMessage(cardNumber, cardNumberPartValidators);

  const isValid = errorMessage === null;

  const cardBrand = getCardBrand(cardNumber);

  const formattedCardNumber =
    cardBrand && cardBrand.numberLength === cardNumber.length
      ? getFormattedCardNumber(cardNumber, cardBrand.formatArray)
      : null;

  return {
    cardNumber,
    setCardNumber,
    onChange,
    errorMessage,
    isValid,
    cardBrand: cardBrand ?? null,
    formattedCardNumber,
  };
}

const CARD_NUMBER_LENGTH = 16;
export const CARD_NUMBER_ERROR_MESSAGE = {
  overLength: `카드번호는 ${CARD_NUMBER_LENGTH}자리 이하여야 합니다.`,
  notDigit: '카드번호는 숫자만 포함해야 합니다.',
  notSupportedBrand: '지원하지 않는 카드 브랜드입니다.',
  invalidCardLength: '해당 카드 브랜드와는 맞지 않는 번호 길이입니다.',
} as const;

type ErrorMessage = ValueOf<typeof CARD_NUMBER_ERROR_MESSAGE>;

const cardNumberPartValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (cardNumber: string) =>
      cardNumber.length <= CARD_NUMBER_LENGTH,
    message: CARD_NUMBER_ERROR_MESSAGE.overLength,
  },
  {
    checkIsValid: (cardNumber: string) =>
      REGEXPS.onlyDigitNumber.test(cardNumber),
    message: CARD_NUMBER_ERROR_MESSAGE.notDigit,
  },
  {
    checkIsValid: (cardNumber: string) => {
      return getCardBrand(cardNumber) !== null;
    },
    message: CARD_NUMBER_ERROR_MESSAGE.notSupportedBrand,
  },
  {
    checkIsValid: (cardNumber: string) => {
      const cardBrand = getCardBrand(cardNumber);
      if (cardBrand === null) return false;
      return cardBrand?.numberLength === cardNumber.length;
    },
    message: CARD_NUMBER_ERROR_MESSAGE.notSupportedBrand,
  },
];
