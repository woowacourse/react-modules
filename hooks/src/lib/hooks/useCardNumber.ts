import {useState} from 'react';
import {ValidationType} from '../../types/validation';
import {ERROR_MESSAGE, defaultValidationValue} from '../constants/validation';
import {isEmpty, isLengthBetween, isPositiveInteger} from '../utils/validation';
import useCardBrand from './useCardBrand';

type CardBrand =
  | 'Diners'
  | 'AMEX'
  | 'Visa'
  | 'MasterCard'
  | 'Union'
  | undefined;

const MIN_LENGTH = 14;
const MAX_LENGTH = 16;

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberValidationResult, setCardNumberValidationResult] =
    useState<ValidationType>(defaultValidationValue);
  const [cardBrand, setCardBrand] = useState<CardBrand>();
  const {findBrand} = useCardBrand();

  const onChange = (value: string) => {
    validation(value);
    setCardNumber(value);
  };

  const validation = (value: string) => {
    if (!value || isEmpty(value)) {
      setCardNumberValidationResult(defaultValidationValue);
      return;
    }

    if (!isPositiveInteger(value)) {
      setCardNumberValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.INVALID_NUMBER,
      });
      return;
    }

    if (!isLengthBetween(value, MIN_LENGTH, MAX_LENGTH)) {
      setCardNumberValidationResult({
        isError: true,
        errorMessage: ERROR_MESSAGE.generateInvalidBetweenMsg(
          MIN_LENGTH,
          MAX_LENGTH
        ),
      });
      return;
    }

    setCardNumberValidationResult(defaultValidationValue);
    setCardBrand(findBrand(value));
  };

  return {cardBrand, onChange, cardNumber, cardNumberValidationResult};
};

export default useCardNumber;
