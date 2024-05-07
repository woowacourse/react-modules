import { ChangeEvent } from "react";
import { CardNumbersType, CardNumberErrorType } from "@/types/cardNumbers";
import { validLength, validateNumber } from "@/validate/validate";
import { VALID_LENGTH } from "@/constants/system.ts";
import useInput from "./common/useInput";

export const cardNumbersValidates = [
  (value: string) => validateNumber(value),
  (value: string) => validLength(value, VALID_LENGTH.CARD_NUMBERS),
];

const useCardNumbers2 = (initialValues: CardNumbersType) => {
  const cardNumbersConfig = {
    validates: cardNumbersValidates,
    validLength: VALID_LENGTH.CARD_NUMBERS,
  };

  const { value, onChange, errorStatus } = useInput<CardNumberErrorType>({
    initialValue: initialValues["cardNumber1"],
    ...cardNumbersConfig,
  });

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const slicedValue = value.slice(0, 2);
    const secondSlicedValue = value.slice(2, 6);

    if (slicedValue[0] === "4") {
      return "VISA";
    }
    if (
      slicedValue[0] === "5" &&
      slicedValue[1] >= "1" &&
      slicedValue[1] <= "5"
    ) {
      return "MASTER";
    }
    if (slicedValue == "34" || slicedValue == "37") {
      return "AMEX";
    }
    if (slicedValue == "36") {
      return "DINERS";
    }
    if (slicedValue == "62") {
      if (secondSlicedValue[0] === "2") {
        if (+secondSlicedValue >= 2126 && +secondSlicedValue <= 2925) {
          return "UNION_PAY";
        }
      }
    }

    onChange(e);
  };

  return {
    value,
    onChange: onChangeValue,
    errorStatus,
  };
};

export default useCardNumbers2;
