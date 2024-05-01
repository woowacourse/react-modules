import { useEffect, useState } from 'react';
import useInput, { ValidationType } from './useInput';

const CARD_NUMBER_LENGTH = 4;
const VISA_START_NUMBER = 4;
const MASTERCARD_START_NUMBER = {
  min: 51,
  max: 55,
};

type InitialValueType = [string, string, string, string];

const useCardNumbers = (initialValue: InitialValueType = ['', '', '', '']) => {
  const [cardBrand, setCardBrand] = useState('');

  const isValidLength = (value: string) => {
    return value.length === CARD_NUMBER_LENGTH;
  };

  const isNumber = (value: string) => {
    return /^\d*$/.test(value);
  };

  const isValidCardNumbersLength = (cardNumbers: string[]) => {
    return cardNumbers.join('').length === CARD_NUMBER_LENGTH * initialValue.length;
  };

  const isVisa = (cardNumbers: string[]) => {
    return cardNumbers[0].startsWith(`${VISA_START_NUMBER}`);
  };

  const isMasterCard = (cardNumbers: string[]) => {
    const firstTwoDigits = Number(cardNumbers[0].slice(0, 2));

    return firstTwoDigits >= MASTERCARD_START_NUMBER.min && firstTwoDigits <= MASTERCARD_START_NUMBER.max;
  };

  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: `${CARD_NUMBER_LENGTH}자리의 카드 번호를 입력해주세요.`,
    },
  ];

  const preventInputValidations: ValidationType[] = [
    {
      validate: isNumber,
      message: '숫자만 입력 가능합니다.',
    },
  ];

  const cardNumbers = [
    useInput({ initialValue: initialValue[0], inputValidations, preventInputValidations }),
    useInput({ initialValue: initialValue[1], inputValidations, preventInputValidations }),
    useInput({ initialValue: initialValue[2], inputValidations, preventInputValidations }),
    useInput({ initialValue: initialValue[3], inputValidations, preventInputValidations }),
  ];

  useEffect(() => {
    const cardNumberValues = cardNumbers.map(({ value }) => value);

    if (isValidCardNumbersLength(cardNumberValues)) {
      if (isVisa(cardNumberValues)) {
        setCardBrand('visa');
        return;
      }

      if (isMasterCard(cardNumberValues)) {
        setCardBrand('mastercard');
        return;
      }

      setCardBrand('');
    }
  }, [...cardNumbers.map(({ value }) => value)]);

  return { cardNumbers, cardBrand };
};

export default useCardNumbers;
