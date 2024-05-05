import { useMemo, useState } from 'react';

import REGEXPS from '../constants/regExps';
import { Validator } from '../type';
import getErrorMessage from '../utils/getErrorMessage';
import getOnChange from '../utils/getOnChange';

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

  const onChangeCardNumberPart = setCardNumberParts.map(getOnChange);

  const firstErrorMessage = useMemo(() => {
    return getErrorMessage(firstCardNumberPart, cardNumberPartValidators);
  }, [firstCardNumberPart]);

  const secondErrorMessage = useMemo(() => {
    return getErrorMessage(secondCardNumberPart, cardNumberPartValidators);
  }, [secondCardNumberPart]);

  const thirdErrorMessage = useMemo(() => {
    return getErrorMessage(thirdCardNumberPart, cardNumberPartValidators);
  }, [thirdCardNumberPart]);

  const fourthErrorMessage = useMemo(() => {
    return getErrorMessage(fourthCardNumberPart, cardNumberPartValidators);
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
    onChangeCardNumberPart,
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
