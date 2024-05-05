import { VALID_LENGTH } from "@/constants/system.ts";
import useInputs from "./useInputs";
import { CardNumberErrorType, CardNumberKeys } from "@/types/cardNumbers";
import { CardNumbersErrorMessages } from "@/constants/error";
import { validateNumber, validateOverLength } from "@/validate/validate";
import { useEffect } from "react";

export const cardNumbersValidates = (value: string) => {
  validateNumber(value);
  validateOverLength(value, VALID_LENGTH.CARD_NUMBERS);
};

export const cardCompanyNumbersInfo = [
  {
    name: "[4,4,4,4]",
    cardNumbersFormat: [4, 4, 4, 4],
  },
  {
    name: "[5,5,5]",
    cardNumbersFormat: [5, 5, 5],
  },
  {
    name: "[3,4,5,6]",
    cardNumbersFormat: [3, 4, 5, 6],
  },
];
type CardCompanyNumbers = {
  name: string;
  cardNumbersFormat: number[];
}[];

const useCardNumbers2 = ({
  cardCompanyNumbersInfo,
  selectedCompany,
}: {
  cardCompanyNumbersInfo: CardCompanyNumbers;
  selectedCompany: string;
}) => {
  const targetCompany = cardCompanyNumbersInfo.find(
    (company) => company.name === selectedCompany
  );

  const cardInputsNumbers = targetCompany!.cardNumbersFormat.length;
  const inputs = Array.from({ length: cardInputsNumbers }, () => "");

  const { values, onChange, onBlurValidLength } =
    useInputs<CardNumberErrorType>(
      inputs,
      cardNumbersValidates,
      targetCompany!.cardNumbersFormat
    );

  const numberValues: Record<CardNumberKeys, string> = {
    cardNumber1: values[0].value,
    cardNumber2: values[1].value,
    cardNumber3: values[2].value,
    cardNumber4: values[3].value,
  };

  const errorMessages = {
    cardNumber1: values[0].error && CardNumbersErrorMessages[values[0].error],
    cardNumber2: values[1].error && CardNumbersErrorMessages[values[1].error],
    cardNumber3: values[2].error && CardNumbersErrorMessages[values[2].error],
    cardNumber4: values[3].error && CardNumbersErrorMessages[values[3].error],
  };

  for (const key in errorMessages) {
    if (errorMessages[key as CardNumberKeys] === null) {
      delete errorMessages[key as CardNumberKeys];
    }
  }

  useEffect(() => {
    console.log("errorMessages", errorMessages);
  }, [errorMessages]);

  return {
    values: numberValues,
    onChange,
    onBlurValidLength,
    errorMessages,
  };
};

export default useCardNumbers2;
