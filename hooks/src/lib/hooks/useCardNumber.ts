import {useState} from 'react';
import {ValidationType} from '../../types/validation';
import {ERROR_MESSAGE, defaultValidationValue} from '../constants/validation';
import {isEmpty, isLengthBetween, isPositiveInteger} from '../utils/validation';
import {getCardBrand} from '../feature/getCardBrand';
import {formatCardNumberBlocks} from '../feature/formatCardNumberBlocks';

const MIN_LENGTH = 14;
const MAX_LENGTH = 16;

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardNumberValidationResult, setCardNumberValidationResult] =
    useState<ValidationType>(defaultValidationValue);

  const cardBrand = cardNumberValidationResult.isError
    ? undefined
    : getCardBrand(cardNumber);

  const formattingCardNumber = formatCardNumberBlocks(cardNumber);

  const onChange = (value: string) => {
    validation(value);
    setCardNumber(value);
  };

  const validation = (value: string) => {
    if (isEmpty(value)) {
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
  };

  return {
    onChange,
    cardNumber,
    cardNumberValidationResult,
    cardBrand,
    formattingCardNumber,
  };
};

export default useCardNumber;
