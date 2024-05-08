import { ChangeEvent, useState } from "react";
import { validLength, validateNumber } from "@/validate/validate";
import { VALID_LENGTH } from "@/constants/system.ts";
import { cardBrandsInfo, CardBrandInfo } from "@/data/cardCompanyNumbersInfo";
import { CardNumbersErrorMessages } from "@/constants/error";
import { ErrorStatus } from "@/types/errorStatus";
import {
  decideCardBrandByFirstDigits,
  decideCardBrandByNextTwoDigits,
  decideCardBrandByNextFourDigits,
} from "@/utils/checkCardBrand";

export const cardNumbersValidates = [
  (value: string) => validateNumber(value),
  (value: string) => validLength(value, VALID_LENGTH.CARD_NUMBERS),
];

const useCardNumbers2 = () => {
  const [numbers, setNumbers] = useState("");
  const [formattedNumbers, setFormattedNumbers] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [currentCardBrandInfo, setCurrentCardBrandInfo] =
    useState<CardBrandInfo>(cardBrandsInfo["NONE"]);

  const decideCardBrand = (value: string) => {
    let newCardBrandInfo;

    if (value.length >= 1) {
      newCardBrandInfo = decideCardBrandByFirstDigits(value);
    }
    if (!newCardBrandInfo && value.length >= 2) {
      newCardBrandInfo = decideCardBrandByNextTwoDigits(value);
    }
    if (!newCardBrandInfo && value.length >= 6) {
      newCardBrandInfo = decideCardBrandByNextFourDigits(value);
    }
    if (!newCardBrandInfo) {
      newCardBrandInfo = cardBrandsInfo["NONE"];
    }
    setCurrentCardBrandInfo(newCardBrandInfo);
  };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNumbers(value);
    handleNumberValidation(value);
    decideCardBrand(value);
    handleLengthValidation(value);
  };

  const handleNumberValidation = (value: string) => {
    const numberError = CardNumbersErrorMessages[ErrorStatus.IS_NOT_NUMBER];

    if (!validateNumber(value).isValid) {
      setErrorMessage(numberError);
    } else {
      if (errorMessage === numberError) {
        setErrorMessage(null);
      }
    }
  };

  const handleLengthValidation = (value: string) => {
    const lengthError = CardNumbersErrorMessages[ErrorStatus.INVALID_LENGTH];

    const { validLength, cardNumbersFormat } = currentCardBrandInfo;

    const isValidLength = value.length === validLength;
    if (!isValidLength && !errorMessage) {
      setErrorMessage(lengthError);
    }
    if (isValidLength && errorMessage === lengthError) {
      setErrorMessage(null);
    }
    if (isValidLength) {
      formatCardNumber(value, cardNumbersFormat);
    }
  };

  const formatCardNumber = (value: string, numberFormat: number[]) => {
    let startIndex = 0;
    const formattedArr = numberFormat.map((number) => {
      const part = value.slice(startIndex, startIndex + number);
      startIndex += number;
      return part;
    });

    setFormattedNumbers(formattedArr.join(" "));
  };

  return {
    numbers,
    onChange: onChangeValue,
    errorMessage,
    formattedNumbers,
    cardBrand: currentCardBrandInfo.name,
  };
};

export default useCardNumbers2;
