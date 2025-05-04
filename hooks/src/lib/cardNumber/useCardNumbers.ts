import { ChangeEvent, useState } from 'react';
import { CARD_NUMBER_ERROR_TYPES, ERROR_MESSAGE } from '../constants';
import { ValidationResult } from '../types';
import { CardNumbersKey } from '../constants';
import { checkIsNumber, checkIsValidLength } from '../validators';

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState<
    Record<CardNumbersKey, string>
  >({
    part1: '',
    part2: '',
    part3: '',
    part4: '',
  });

  const [validationResults, setValidationResults] = useState<
    Record<CardNumbersKey, ValidationResult>
  >({
    part1: { isValid: true, errorMessage: '' },
    part2: { isValid: true, errorMessage: '' },
    part3: { isValid: true, errorMessage: '' },
    part4: { isValid: true, errorMessage: '' },
  });

  const validateCardNumbers = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value, 4);

    if (!isNumber) {
      return CARD_NUMBER_ERROR_TYPES.notNumber;
    }

    if (!isValidLength) {
      return CARD_NUMBER_ERROR_TYPES.invalidLength;
    }

    return null;
  };

  const handleCardNumbersChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { name, value } = event.target;
    const errorType = validateCardNumbers(value);

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResults((prev) => ({
        ...prev,
        [name]: {
          isValid: !Boolean(errorType),
          errorMessage: errorType ? ERROR_MESSAGE.cardNumber[errorType] : '',
        },
      }));
    }

    setCardNumbers((prev) => ({ ...prev, [name]: value }));
  };

  return {
    cardNumbers,
    validationResults,
    validateCardNumbers,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
