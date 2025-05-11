import { ChangeEvent, FocusEvent, useState } from 'react';
import { ValidationResult } from '../types';
import {
  formatNumbersByNetwork,
  identifyNetworkByList,
  identifyNetworkByRange,
  removeFormat,
} from '../utils/cardNetwork';
import { NetworkType } from '../utils/constants';
import {
  CARD_NUMBER_ERROR_TYPES,
  CARD_NUMBERS_LENGTH,
  DEFAULT_LENGTH,
  ERROR_MESSAGE,
} from './constants';

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
    const newNumbers = removeFormat(value);

    const { isValid, errorType } = validateCardNumbersChange(newNumbers);
    if (restrictChange && errorType) {
      return;
    }

    if (!restrictChange) {
      setValidationResults({
        isValid,
        errorMessage: errorType ? ERROR_MESSAGE[errorType] : '',
      });
    }

    setCardNumbers(newNumbers);
  };

  const handleCardNumbersBlur = (event: FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const newNumbers = removeFormat(value);

    const { isValid, errorType } = validateCardNumbersBlur(newNumbers);
    setValidationResults({
      isValid,
      errorMessage: errorType ? ERROR_MESSAGE[errorType] : '',
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
