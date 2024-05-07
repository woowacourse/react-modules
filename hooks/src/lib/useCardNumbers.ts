import { ChangeEvent } from "react";
import {
  CardNumbersType,
  CardNumberKeys,
  CardNumberErrorType,
} from "@/types/cardNumbers";
import { validLength, validateNumber } from "@/validate/validate";
import { CardNumbersErrorMessages } from "@/constants/error.ts";
import { VALID_LENGTH } from "@/constants/system.ts";
import useInput from "./common/useInput";

export const cardNumbersValidates = [
  (value: string) => validateNumber(value),
  (value: string) => validLength(value, VALID_LENGTH.CARD_NUMBERS),
];

const useCardNumbers = (initialValues: CardNumbersType) => {
  const cardNumbersConfig = {
    validates: cardNumbersValidates,
    validLength: VALID_LENGTH.CARD_NUMBERS,
  };

  const {
    value: cardNumber1,
    onChange: onChangeNumber1,
    errorStatus: errorStatusNumber1,
  } = useInput<CardNumberErrorType>({
    initialValue: initialValues["cardNumber1"],
    ...cardNumbersConfig,
  });

  const {
    value: cardNumber2,
    onChange: onChangeNumber2,
    errorStatus: errorStatusNumber2,
  } = useInput<CardNumberErrorType>({
    initialValue: initialValues["cardNumber2"],
    ...cardNumbersConfig,
  });

  const {
    value: cardNumber3,
    onChange: onChangeNumber3,
    errorStatus: errorStatusNumber3,
  } = useInput<CardNumberErrorType>({
    initialValue: initialValues["cardNumber3"],
    ...cardNumbersConfig,
  });

  const {
    value: cardNumber4,
    onChange: onChangeNumber4,
    errorStatus: errorStatusNumber4,
  } = useInput<CardNumberErrorType>({
    initialValue: initialValues["cardNumber4"],
    ...cardNumbersConfig,
  });

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

export default useCardNumbers;
