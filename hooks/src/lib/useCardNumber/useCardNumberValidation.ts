import { useState } from 'react';
import { isFulledCardNumbers } from './useCardNumber.util';
import { CARD_NUMBER_ERROR_TYPE } from './useCardNumber.constant';
import { isContainsNonNumeric } from '../../utils/number';

const useCardNumberValidation = () => {
  const [cardNumberError, setCardNumberError] = useState({
    isError: false,
    errorMessage: '',
  });

  const validateCardNumbers = (value: string, cardNumberLength: number) => {
    let newIsError = cardNumberError.isError;
    let newErrorMessage = '';
    let errorType = '';

    const newCardNumbers = value;

    if (isContainsNonNumeric(value)) {
      newIsError = true;
      newErrorMessage = '숫자만 입력 가능합니다.';
      errorType = CARD_NUMBER_ERROR_TYPE.nonNumeric;
    } else if (!isFulledCardNumbers(newCardNumbers, cardNumberLength)) {
      newIsError = true;
      newErrorMessage = `카드 번호를 모두 입력해주세요.`;
      errorType = CARD_NUMBER_ERROR_TYPE.notFulledCardNumbers;
    } else {
      newIsError = false;
      errorType = CARD_NUMBER_ERROR_TYPE.notError;
    }
    setCardNumberError({ isError: newIsError, errorMessage: newErrorMessage });
    return errorType;
  };

  return {
    cardNumberError,
    validateCardNumbers,
  };
};

export default useCardNumberValidation;
