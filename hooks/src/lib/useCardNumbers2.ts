import { ChangeEvent, useState } from "react";
import { validateLength, validateNumber } from "@/validate/validate";
import { CardBrandInfo, cardBrandsInfo } from "@/constants/cardBrand";
import {
  decideCardBrandByFirstDigits,
  decideCardBrandByNextTwoDigits,
  decideCardBrandByNextFourDigits,
} from "@/utils/checkCardBrand";

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

    const newValue = value;
    const { validLength } = currentCardBrandInfo;
    if (value.length > validLength) return;

    const isValidNumberResult = validateNumber(value);
    if (!isValidNumberResult.isValid) {
      setErrorMessage(isValidNumberResult.error);
      return;
    } else {
      if (errorMessage === isValidNumberResult.error) {
        setErrorMessage(null);
      }
    }
    decideCardBrand(value);

    const isValidLengthResult = validateLength(value, validLength);
    if (!isValidLengthResult.isValid) {
      setErrorMessage(isValidLengthResult.error);
    } else {
      if (errorMessage === isValidLengthResult.error) {
        setErrorMessage(null);
      }
    }

    formatCardNumber(value, currentCardBrandInfo.cardNumbersFormat);
    setNumbers(newValue);
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
