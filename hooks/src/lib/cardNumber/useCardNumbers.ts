import { ChangeEvent, FocusEvent, useState } from 'react';
import {
  CARD_NUMBER_ERROR_TYPES,
  ERROR_MESSAGE,
  NetworkType,
} from '../constants';
import { ValidationResult } from '../types';
import {
  formatNumbersByNetwork,
  identifyNetworkByList,
  identifyNetworkByRange,
} from '../utils/cardNetwork';

const CARD_NUMBERS_LENGTH: Record<NetworkType, number> = {
  visa: 16,
  master: 16,
  diners: 14,
  amex: 15,
  union: 16,
};

const DEFAULT_LENGTH = 16;

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

  const checkIsValidLength = (value: string, network: NetworkType | '') => {
    const validLength =
      network !== '' ? CARD_NUMBERS_LENGTH[network] : DEFAULT_LENGTH;
    return value.length <= validLength;
  };

  const validateCardNumbersChange = (value: string) => {
    const isNumber = checkIsNumber(value);
    if (!isNumber) {
      return { isValid: false, errorType: CARD_NUMBER_ERROR_TYPES.notNumber };
    }

    const network = identifiedNetwork(value);
    const isValidLength = checkIsValidLength(value, network);
    if (!isValidLength) {
      return {
        isValid: false,
        errorType: CARD_NUMBER_ERROR_TYPES.invalidLength,
      };
    }

    return { isValid: true };
  };

  const validateCardNumbersBlur = (value: string) => {
    const network = identifiedNetwork(value);
    const validLength =
      network !== '' ? CARD_NUMBERS_LENGTH[network] : DEFAULT_LENGTH;

    if (value.length !== validLength) {
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
    const { isValid, errorType } = validateCardNumbersChange(value);

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

  const handleCardNumbersBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const { isValid, errorType } = validateCardNumbersBlur(value);

    setValidationResults({
      isValid,
      errorMessage: errorType ? ERROR_MESSAGE.cardNumber[errorType] : '',
    });
  };

  function identifiedNetwork(cardNumbers: string): NetworkType | '' {
    return (
      identifyNetworkByList(cardNumbers) ?? identifyNetworkByRange(cardNumbers)
    );
  }

  const network = identifiedNetwork(cardNumbers);

  return {
    cardNumbers,
    validationResults,
    validateCardNumbersChange,
    validateCardNumbersBlur,
    handleCardNumbersChange,
    handleCardNumbersBlur,
    network,
    formatNumbersByNetwork,
  };
}

export default useCardNumbers;
