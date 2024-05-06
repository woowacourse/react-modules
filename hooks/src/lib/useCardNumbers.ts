import { ChangeEvent, FocusEvent } from 'react';
import {
  CardNumbers,
  CardNumberKeys,
  CardNumberError,
} from '../types/cardNumbers';
import useInput from './useInput';
import { validateLengthOver, validateNumber } from '../validate/validate';
import { CARD_NUMBERS_ERROR_MESSAGES } from '../constants/error';
import { CARD_NUMBER_LENGTH } from '../constants/length';

const cardNumbersValidates = (value: string) => {
  validateNumber(value);
  validateLengthOver(value, CARD_NUMBER_LENGTH);
};

const useCardNumbers = (initialValues: CardNumbers) => {
  const validLength = CARD_NUMBER_LENGTH;
  const {
    value: cardNumber1,
    onChange: onChangeNumber1,
    onBlurValidLength: onBlurNumber1,
    errorStatus: errorStatusNumber1,
  } = useInput<CardNumberError>(
    initialValues['cardNumber1'],
    cardNumbersValidates,
    validLength
  );

  const {
    value: cardNumber2,
    onChange: onChangeNumber2,
    onBlurValidLength: onBlurNumber2,
    errorStatus: errorStatusNumber2,
  } = useInput<CardNumberError>(
    initialValues['cardNumber2'],
    cardNumbersValidates,
    validLength
  );

  const {
    value: cardNumber3,
    onChange: onChangeNumber3,
    onBlurValidLength: onBlurNumber3,
    errorStatus: errorStatusNumber3,
  } = useInput<CardNumberError>(
    initialValues['cardNumber3'],
    cardNumbersValidates,
    validLength
  );

  const {
    value: cardNumber4,
    onChange: onChangeNumber4,
    onBlurValidLength: onBlurNumber4,
    errorStatus: errorStatusNumber4,
  } = useInput<CardNumberError>(
    initialValues['cardNumber4'],
    cardNumbersValidates,
    validLength
  );

  const onChangeArray = {
    cardNumber1: onChangeNumber1,
    cardNumber2: onChangeNumber2,
    cardNumber3: onChangeNumber3,
    cardNumber4: onChangeNumber4,
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    onChangeArray[name as CardNumberKeys](e);
  };

  const onBlurArray = {
    cardNumber1: onBlurNumber1,
    cardNumber2: onBlurNumber2,
    cardNumber3: onBlurNumber3,
    cardNumber4: onBlurNumber4,
  };

  const onBlur = (e: FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    onBlurArray[name as CardNumberKeys](e);
  };

  const errorMessages = {
    cardNumber1:
      errorStatusNumber1 && CARD_NUMBERS_ERROR_MESSAGES[errorStatusNumber1],
    cardNumber2:
      errorStatusNumber2 && CARD_NUMBERS_ERROR_MESSAGES[errorStatusNumber2],
    cardNumber3:
      errorStatusNumber3 && CARD_NUMBERS_ERROR_MESSAGES[errorStatusNumber3],
    cardNumber4:
      errorStatusNumber4 && CARD_NUMBERS_ERROR_MESSAGES[errorStatusNumber4],
  };

  for (const key in errorMessages) {
    if (errorMessages[key as CardNumberKeys] === null) {
      delete errorMessages[key as CardNumberKeys];
    }
  }

  return {
    values: {
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
    },
    onChange,
    onBlur,
    errorMessages,
  };
};

export default useCardNumbers;
