import { ChangeEventHandler, FocusEventHandler } from 'react';
import { useCardBrand, useSingleInput } from '.';
import { CARD_BRAND } from './constants';
import { Validations, Validator, Validators } from './types';
import { formatWithDelimiter } from './utils';
import { validateFilledValue, validateNumber, validateLength } from './utils/validators';

interface ValidationErrors {
  empty: string;
  number: string;
}

const validators: Validators<keyof ValidationErrors> = {
  empty: validateFilledValue,
  number: validateNumber,
};

interface UseCardNumbersProps {
  initialValue: string;
  validations: Validations;
}

export default function useCardNumbers({ initialValue, validations }: UseCardNumbersProps) {
  const onChangeValidators: Validator[] = Object.entries(validations.onChange || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const onBlurValidators: Validator[] = Object.entries(validations.onBlur || {}).map(([key, errorMessage]) => ({
    test: validators[key as keyof ValidationErrors],
    errorMessage,
  }));

  const {
    value: cardNumbers,
    setValue: setCardNumbers,
    isValid,
    errorMessage,
    setErrorMessage,
    handleChange,
    handleBlur,
  } = useSingleInput({
    initialValue,
    validations: { onChange: onChangeValidators, onBlur: onBlurValidators },
  });

  const { brand } = useCardBrand({ cardNumbers });

  const formatCardNumber = (cardNumbers: string) => {
    const segmentLength = brand === 'etc' ? [4, 4, 4, 4] : CARD_BRAND[brand].segmentLength;

    const formattedCardNumber = formatWithDelimiter(cardNumbers, segmentLength, ' ');

    return formattedCardNumber.trim();
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    handleChange(value.split(' ').join(''));
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    const inputValue = e.target.value.split(' ').join('');

    const cardNumberCount = brand === 'etc' ? 16 : CARD_BRAND[brand].cardNumberCount;

    if (validateLength(inputValue, cardNumberCount)) {
      setErrorMessage(`${cardNumberCount}자리를 입력해 주세요.`);
    }

    handleBlur();
  };

  return {
    brand,
    cardNumbers,
    setCardNumbers,
    isValid,
    errorMessage,
    onChange,
    onBlur,
    formatCardNumber,
    validators: [...onChangeValidators, ...onBlurValidators],
  };
}
