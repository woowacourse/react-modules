import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/errorMessage';
import { isEmpty, isValidLength, isNumber } from '../utils/validate';
import { isOverInputLength } from '../utils/overInputLength';
import { initialError } from '../utils/initial';
import { ErrorType } from '../types/errorType';
import { INPUT_RULE } from '../constants/inputRule';
import { identifyCardBrand } from '../utils/identifyCardBrand';

type ValitationResult = {
  numbers: string;
  cardBrand: string;
  error: ErrorType;
  handleCardNumbers: (value: string) => void;
};

type UpdateErrorArgs =
  | { isValid: true; errorMessage: string }
  | { isValid: false };

export default function useCardNumbers(): ValitationResult {
  const [numbers, setNumbers] = useState('');
  const [error, setError] = useState<ErrorType>(initialError);
  const cardBrand = identifyCardBrand(numbers);

  const updateError = (args: UpdateErrorArgs) => {
    setError({
      isValid: args.isValid,
      errorMessage: args.isValid ? args.errorMessage : '',
    });
  };

  const handleCardNumbers = (value: string) => {
    // 😱length 수정 필요
    if (isOverInputLength(value, 16)) return;

    validate(value);

    setNumbers(value);
  };

  const validate = (value: string) => {
    if (isEmpty(value)) {
      updateError({ isValid: false });
      return;
    }

    if (!isNumber(value)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.NOT_A_NUMBER,
      });
      return;
    }
    // 😱length 매개변수 수정 필요
    if (!isValidLength(value, INPUT_RULE.CARD_NUMBERS.MAX_LENGTH)) {
      updateError({
        isValid: true,
        errorMessage: ERROR_MESSAGE.CARD_NUMBERS.INVALID_LENGTH(
          INPUT_RULE.CARD_NUMBERS.MAX_LENGTH
        ),
      });
      return;
    }
    updateError({ isValid: false });
  };

  return { numbers, cardBrand, error, handleCardNumbers };
}
