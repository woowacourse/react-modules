import { useMemo, useState } from 'react';

import REGEXPS from '../constants/regExps';
import { Validator } from '../type';

export default function useCardNumber() {
  const [firstCardNumberPart, setFirstCardNumberPart] = useState('');
  const [secondCardNumberPart, setSecondCardNumberPart] = useState('');
  const [thirdCardNumberPart, setThirdCardNumberPart] = useState('');
  const [fourthCardNumberPart, setFourthCardNumberPart] = useState('');
  const cardNumberParts = [
    firstCardNumberPart,
    secondCardNumberPart,
    thirdCardNumberPart,
    fourthCardNumberPart,
  ];

  const setCardNumberParts = [
    setFirstCardNumberPart,
    setSecondCardNumberPart,
    setThirdCardNumberPart,
    setFourthCardNumberPart,
  ];

  const firstErrorMessage = useMemo(() => {
    const reducer = getValidateReducer(firstCardNumberPart);
    return cardNumberPartValidators.reduce(reducer, null);
  }, [firstCardNumberPart]);

  const secondErrorMessage = useMemo(() => {
    const reducer = getValidateReducer(secondCardNumberPart);
    return cardNumberPartValidators.reduce(reducer, null);
  }, [secondCardNumberPart]);

  const thirdErrorMessage = useMemo(() => {
    const reducer = getValidateReducer(thirdCardNumberPart);
    return cardNumberPartValidators.reduce(reducer, null);
  }, [thirdCardNumberPart]);
  const fourthErrorMessage = useMemo(() => {
    const reducer = getValidateReducer(fourthCardNumberPart);
    return cardNumberPartValidators.reduce(reducer, null);
  }, [fourthCardNumberPart]);

  const cardPartErrorMessages = [
    firstErrorMessage,
    secondErrorMessage,
    thirdErrorMessage,
    fourthErrorMessage,
  ];

  const isValidCardNumberParts = cardPartErrorMessages.map(
    message => message === null
  );

  const isValidCardNumber = cardPartErrorMessages.every(
    message => message === null
  );

  return {
    cardNumberParts,
    setCardNumberParts,
    cardPartErrorMessages,
    isValidCardNumber,
    isValidCardNumberParts,
  };
}

const CARD_NUMBER_PART_LENGTH = 4;
export const CARD_NUMBER_PART_ERROR_MESSAGE = {
  invalidLength: `카드번호 한 단위는 ${CARD_NUMBER_PART_LENGTH}자리여야 합니다.`,
  notDigit: '카드번호는 숫자만 포함해야 합니다.',
} as const;

type ErrorMessage =
  (typeof CARD_NUMBER_PART_ERROR_MESSAGE)[keyof typeof CARD_NUMBER_PART_ERROR_MESSAGE];

const cardNumberPartValidators: Validator<string, ErrorMessage>[] = [
  {
    checkIsValid: (cardNumberPart: string) =>
      cardNumberPart.length === CARD_NUMBER_PART_LENGTH,
    message: CARD_NUMBER_PART_ERROR_MESSAGE.invalidLength,
  },
  {
    checkIsValid: (cardNumberPart: string) =>
      REGEXPS.onlyDigitNumber.test(cardNumberPart),
    message: CARD_NUMBER_PART_ERROR_MESSAGE.notDigit,
  },
];

const getValidateReducer =
  (cardNumberPart: string) =>
  (
    errorMessage: ErrorMessage | null,
    validator: Validator<string, ErrorMessage>
  ) => {
    if (errorMessage !== null) return errorMessage;
    if (validator.checkIsValid(cardNumberPart)) return errorMessage;
    return validator.message;
  };
