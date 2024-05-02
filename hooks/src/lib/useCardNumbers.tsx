import { ChangeEvent } from "react";
import {
  CardNumbersType,
  CardNumberKeys,
  CardNumberErrorType,
} from "../types/cardNumbers";
import useInput from "./useInput";
import { validateNumber, validateOverLength } from "../validate/validate";
import { CardNumbersErrorMessages } from "../constants/error.ts";
import { VALID_LENGTH } from "../constants/system.ts";

const cardNumbersValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, VALID_LENGTH.CARD_NUMBERS);
};
const useCardNumbers = (initialValues: CardNumbersType) => {
  const {
    value: cardNumber1,
    onChange: onChangeNumber1,
    errorStatus: errorStatusNumber1,
    onBlurValidLength: onBlurValidLength1,
  } = useInput<CardNumberErrorType>(
    initialValues["cardNumber1"],
    cardNumbersValidates,
    VALID_LENGTH.CARD_NUMBERS
  );

  const {
    value: cardNumber2,
    onChange: onChangeNumber2,
    errorStatus: errorStatusNumber2,
    onBlurValidLength: onBlurValidLength2,
  } = useInput<CardNumberErrorType>(
    initialValues["cardNumber2"],
    cardNumbersValidates,
    VALID_LENGTH.CARD_NUMBERS
  );

  const {
    value: cardNumber3,
    onChange: onChangeNumber3,
    errorStatus: errorStatusNumber3,
    onBlurValidLength: onBlurValidLength3,
  } = useInput<CardNumberErrorType>(
    initialValues["cardNumber3"],
    cardNumbersValidates,
    VALID_LENGTH.CARD_NUMBERS
  );

  const {
    value: cardNumber4,
    onChange: onChangeNumber4,
    errorStatus: errorStatusNumber4,
    onBlurValidLength: onBlurValidLength4,
  } = useInput<CardNumberErrorType>(
    initialValues["cardNumber4"],
    cardNumbersValidates,
    4
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

  const onBlurArray = {
    cardNumber1: onBlurValidLength1,
    cardNumber2: onBlurValidLength2,
    cardNumber3: onBlurValidLength3,
    cardNumber4: onBlurValidLength4,
  };

  const onBlurValidLength = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name } = e.target;
    onBlurArray[name as CardNumberKeys](e);
  };

  return {
    values: {
      cardNumber1,
      cardNumber2,
      cardNumber3,
      cardNumber4,
    },
    onChange,
    onBlurValidLength,
    errorMessages,
  };
};

export default useCardNumbers;
