import { useState } from 'react';
import { isFulledCardNumber, isFulledCardNumbers } from './useCardNumber.util';
import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';
import { isContainsNonNumeric } from '../../utils/number';

const useCardNumberValidation = (cardNumbers: string[]) => {
  const [cardNumberError, setCardNumberError] = useState({
    isError: [false, false, false, false],
    errorMessage: '',
  });

  const validateCardNumbers = (cardIndex: number, value: string) => {
    if (isContainsNonNumeric(value)) {
      setCardNumberError((prevCardNumberError) => {
        const newErrorConditions = [...prevCardNumberError.isError];
        newErrorConditions[cardIndex] = true;

        return {
          isError: newErrorConditions,
          errorMessage: '숫자만 입력 가능합니다.',
        };
      });

      return CARD_NUMBER_ERROR_TYPE.nonNumeric;
    }

    const newCardNumbers = [...cardNumbers];
    newCardNumbers[cardIndex] = value;

    if (!isFulledCardNumber(value)) {
      setCardNumberError((prevCardNumberError) => {
        const newErrorConditions = [...prevCardNumberError.isError];
        newErrorConditions[cardIndex] = true;

        newCardNumbers.forEach((cardNumbers, newCardIndex) => {
          if (cardIndex !== newCardIndex && cardNumbers === '') newErrorConditions[newCardIndex] = false;
        });

        return {
          isError: newErrorConditions,
          errorMessage: '카드 번호 4자리를 입력해주세요.',
        };
      });

      return CARD_NUMBER_ERROR_TYPE.notFulledCardNumber;
    }

    if (!isFulledCardNumbers(newCardNumbers)) {
      setCardNumberError({
        isError: newCardNumbers.map((cardNumber) => (isFulledCardNumber(cardNumber) ? false : true)),
        errorMessage: '카드 번호는 16자리 숫자여야 합니다.',
      });

      return CARD_NUMBER_ERROR_TYPE.notFulledCardNumbers;
    }

    setCardNumberError({
      isError: [false, false, false, false],
      errorMessage: '',
    });

    return CARD_NUMBER_ERROR_TYPE.notError;
  };

  return {
    cardNumberError,
    validateCardNumbers,
  };
};

export default useCardNumberValidation;
