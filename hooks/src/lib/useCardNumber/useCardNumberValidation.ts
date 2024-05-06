import { useState } from 'react';
import { isFulledCardNumber, isFulledCardNumbers } from './useCardNumber.util';
import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';
import { isContainsNonNumeric } from '../../utils/number';

const useCardNumberValidation = (cardNumbers: string[]) => {
  const [cardNumberError, setCardNumberError] = useState({
    errorConditions: [false, false, false, false],
    errorMessage: '',
  });

  const validateCardNumbers = (cardIndex: number, value: string) => {
    const newErrorCon = [...cardNumberError.errorConditions];
    let newErrorMessage = '';
    let errorType = '';

    const newCardNumbers = [...cardNumbers];
    newCardNumbers[cardIndex] = value;

    if (isContainsNonNumeric(value)) {
      newErrorCon[cardIndex] = true;
      newErrorMessage = '숫자만 입력 가능합니다.';
      errorType = CARD_NUMBER_ERROR_TYPE.nonNumeric;
    } else if (!isFulledCardNumber(value)) {
      newErrorCon[cardIndex] = true;
      newCardNumbers.forEach((newCardNumber, newCardIndex) => {
        if (cardIndex !== newCardIndex && newCardNumber === '') newErrorCon[newCardIndex] = false;
      });
      newErrorMessage = '카드 번호 4자리를 입력해주세요.';
      errorType = CARD_NUMBER_ERROR_TYPE.notFulledCardNumber;
    } else if (!isFulledCardNumbers(newCardNumbers)) {
      newCardNumbers.forEach((newCardNumber, newCardIndex) => {
        if (isFulledCardNumber(newCardNumber)) {
          newErrorCon[newCardIndex] = true;
        } else {
          newErrorCon[newCardIndex] = false;
        }
      });
      newErrorMessage = '카드 번호는 16자리 숫자여야 합니다.';
      errorType = CARD_NUMBER_ERROR_TYPE.notFulledCardNumbers;
    } else {
      newErrorCon.fill(false);
      errorType = CARD_NUMBER_ERROR_TYPE.notError;
    }

    setCardNumberError({ errorConditions: newErrorCon, errorMessage: newErrorMessage });
    return errorType;
  };

  return {
    cardNumberError,
    validateCardNumbers,
  };
};

export default useCardNumberValidation;
