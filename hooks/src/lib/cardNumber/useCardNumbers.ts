import { ChangeEvent, useState } from 'react';
import { CARD_NUMBER_ERROR_TYPES, ERROR_MESSAGE } from '../constants';
import { ValidationResult } from '../types';
import {
  formatNumbersByNetwork,
  identifyNetworkByList,
  identifyNetworkByRange,
} from '../utils/cardNetwork';

function useCardNumbers() {
  const [cardNumbers, setCardNumbers] = useState('');

  const [validationResults, setValidationResults] = useState<ValidationResult>({
    isValid: true,
    errorMessage: '',
  });

  const checkIsNumber = (value: string) => {
    const regex = /^[0-9]*$/;
    return regex.test(value);
  };

  const checkIsValidLength = (value: string) => {
    return value.length <= 4;
  };

  const validateCardNumbers = (value: string) => {
    const isNumber = checkIsNumber(value);
    const isValidLength = checkIsValidLength(value);

    if (!isNumber) {
      return { isValid: false, errorType: CARD_NUMBER_ERROR_TYPES.notNumber };
    }

    if (!isValidLength) {
      return {
        isValid: false,
        errorType: CARD_NUMBER_ERROR_TYPES.invalidLength,
      };
    }

    return { isValid: true };
  };

  const handleCardNumbersChange = (
    event: ChangeEvent<HTMLInputElement>,
    restrictChange: boolean = true
  ) => {
    const { value } = event.target;
    const { isValid, errorType } = validateCardNumbers(value);

    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResults({
        isValid,
        errorMessage: errorType ? ERROR_MESSAGE.cardNumber[errorType] : '',
      });
    }

    setCardNumbers(value);
  };

  function identifiedNetwork(cardNumbers: string) {
    return (
      identifyNetworkByList(cardNumbers) ?? identifyNetworkByRange(cardNumbers)
    );
  }

  const network = identifiedNetwork(cardNumbers);

  return {
    cardNumbers,
    validationResults,
    validateCardNumbers,
    handleCardNumbersChange,
    network,
    formatNumbersByNetwork,
  };
}

export default useCardNumbers;
