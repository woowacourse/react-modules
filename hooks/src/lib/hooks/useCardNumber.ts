import {useState} from 'react';
import {ValidationType} from '../../types/validation';
import {ERROR_MESSAGE, defaultValidationValue} from '../constants/validation';
import {isEmpty, isLengthEqual, isPositiveInteger} from '../utils/validation';

interface CardNumberValidationType {
  first: ValidationType;
  second: ValidationType;
  third: ValidationType;
  fourth: ValidationType;
}

const defaultCardNumberValue = {
  first: '',
  second: '',
  third: '',
  fourth: '',
};

const defaultCardNumberValidationValue = {
  first: defaultValidationValue,
  second: defaultValidationValue,
  third: defaultValidationValue,
  fourth: defaultValidationValue,
};

const MAX_LENGTH = 4;

const useCardNumberValidation = () => {
  const [cardNumber, setCardNumber] = useState(defaultCardNumberValue);
  const [cardNumberValidationResult, setCardNumberValidationResult] =
    useState<CardNumberValidationType>(defaultCardNumberValidationValue);

  const onChange = (label: string, value: string) => {
    validation(label, value);
    setCardNumber((prev) => ({...prev, [label]: value}));
  };

  const validation = (label: string, value: string) => {
    setCardNumberValidationResult(defaultCardNumberValidationValue);

    if (!value || isEmpty(value)) return;

    if (!isPositiveInteger(value)) {
      setCardNumberValidationResult((prev) => ({
        ...prev,
        [label]: {
          isError: true,
          errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
        },
      }));
      return;
    }

    if (!isLengthEqual(value, MAX_LENGTH)) {
      setCardNumberValidationResult((prev) => ({
        ...prev,
        [label]: {
          isError: true,
          errorMessage: `${MAX_LENGTH}${ERROR_MESSAGE.INVALID_LENGTH}`,
        },
      }));
    }
  };

  return {onChange, cardNumber, cardNumberValidationResult};
};

export default useCardNumberValidation;
