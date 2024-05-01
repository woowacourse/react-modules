import { ChangeEvent } from 'react';
import {
  CardNumbersType,
  CardNumberKeys,
  CardNumberErrorType,
} from '../types/cardNumbers';
import useInput from './useInput';
import { validateLength, validateNumber } from '../validate/validate';
import { CardNumbersErrorMessages } from '../constants/error.ts';

const cardNumbersValidates = (value: string) => {
  validateNumber(value);
  validateLength(value, 4);
};

export const useCardNumbers = (initialValues: CardNumbersType) => {
  const {
    value: cardNumber1,
    onChange: onChangeNumber1,
    errorStatus: errorStatusNumber1,
  } = useInput<CardNumberErrorType>(
    initialValues['cardNumber1'],
    cardNumbersValidates
  );

  const {
    value: cardNumber2,
    onChange: onChangeNumber2,
    errorStatus: errorStatusNumber2,
  } = useInput<CardNumberErrorType>(
    initialValues['cardNumber2'],
    cardNumbersValidates
  );

  const {
    value: cardNumber3,
    onChange: onChangeNumber3,
    errorStatus: errorStatusNumber3,
  } = useInput<CardNumberErrorType>(
    initialValues['cardNumber3'],
    cardNumbersValidates
  );

  const {
    value: cardNumber4,
    onChange: onChangeNumber4,
    errorStatus: errorStatusNumber4,
  } = useInput<CardNumberErrorType>(
    initialValues['cardNumber4'],
    cardNumbersValidates
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

  const errorMessages = {
    cardNumber1:
      errorStatusNumber1 && CardNumbersErrorMessages[errorStatusNumber1],
    cardNumber2:
      errorStatusNumber2 && CardNumbersErrorMessages[errorStatusNumber2],
    cardNumber3:
      errorStatusNumber3 && CardNumbersErrorMessages[errorStatusNumber3],
    cardNumber4:
      errorStatusNumber4 && CardNumbersErrorMessages[errorStatusNumber4],
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
    errorMessages,
  };
};
