import { useEffect, useState } from 'react';
import useInput, { ValidationType } from './useInput';

type InitialValueType = [string, string, string, string];

const useCardNumbers = (initialValue: InitialValueType) => {
  const [cardBrand, setCardBrand] = useState('');

  const isValidLength = (value: string) => {
    return value.length === 4;
  };

  const isNumber = (value: string) => {
    return /^\d*$/.test(value);
  };

  const isVisa = (cardNumbers: string[]) => {
    return cardNumbers[0].startsWith('4') && cardNumbers.join('').length === 16;
  };

  const isMasterCard = (cardNumbers: string[]) => {
    const firstTwoDigits = Number(cardNumbers[0].slice(0, 2));

    return firstTwoDigits >= 51 && firstTwoDigits <= 55 && cardNumbers.join('').length === 16;
  };

  const inputValidations: ValidationType[] = [
    {
      validate: isValidLength,
      message: '4자리의 카드 번호를 입력해주세요.',
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

    if (isVisa(cardNumberValues)) setCardBrand('visa');

    if (isMasterCard(cardNumberValues)) setCardBrand('mastercard');

    if (cardNumberValues.length === 16 && !isVisa(cardNumberValues) && !isMasterCard(cardNumberValues)) {
      setCardBrand('');
    }
  }, [...cardNumbers.map(({ value }) => value)]);

  return { cardNumbers, cardBrand };
};

export default useCardNumbers;
