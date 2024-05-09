import { ChangeEvent, useState } from "react";
import { validateLength, validateRegex } from "@/validate/validate";
// import { CardBrandInfo, cardBrands } from "@/constants/cardBrand";
// import {
//   decideCardBrandByFirstDigits,
//   decideCardBrandByNextTwoDigits,
//   decideCardBrandByNextFourDigits,
// } from "@/utils/checkCardBrand";
import useIdentifyCardBrand from "./useCheckCardBrand";

const useMultiCardNumbers = () => {
  const [numbers, setNumbers] = useState<string>("");
  const [formattedNumbers, setFormattedNumbers] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { cardBrand, identifyBrand } = useIdentifyCardBrand();
  // const [currentCardBrandInfo, setCurrentCardBrandInfo] =
  //   useState<CardBrandInfo>(cardBrands["NONE"]);

  // const decideCardBrand = (value: string) => {
  //   let newCardBrandInfo;

  //   if (value.length >= 1) {
  //     const slicedValue = value.slice(0, 2);
  //     newCardBrandInfo = decideCardBrandByFirstDigits(slicedValue);
  //   }
  //   if (!newCardBrandInfo && value.length >= 2) {
  //     newCardBrandInfo = decideCardBrandByNextTwoDigits(value);
  //   }
  //   if (!newCardBrandInfo && value.length >= 6) {
  //     newCardBrandInfo = decideCardBrandByNextFourDigits(value);
  //   }
  //   if (!newCardBrandInfo) {
  //     newCardBrandInfo = cardBrands["NONE"];
  //   }

  //   setCurrentCardBrandInfo(newCardBrandInfo);
  // };

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    identifyBrand(value);
    const { validLength } = cardBrand;
    if (value.length > validLength) return;

    const isValidNumberResult = validateRegex(value);
    if (!isValidNumberResult.isValid) {
      setErrorMessage(isValidNumberResult.error);
    } else {
      if (errorMessage === isValidNumberResult.error) {
        setErrorMessage(null);
      }
    }
    // decideCardBrand(value);

    const isValidLengthResult = validateLength(value, validLength);
    if (!isValidLengthResult.isValid) {
      setErrorMessage(isValidLengthResult.error);
    } else {
      if (errorMessage === isValidLengthResult.error) {
        setErrorMessage(null);
      }
    }
    const valueNoSpace = [...value].filter((e) => e !== " ").join("");
    const formattedNumbers = formatCardNumber(
      valueNoSpace,
      cardBrand.cardNumbersFormat
    );
    setFormattedNumbers(formattedNumbers);
    setNumbers(valueNoSpace);
  };

  const formatCardNumber = (value: string, numberFormat: number[]) => {
    let startIndex = 0;
    const formattedArr = numberFormat.map((number) => {
      const part = value.slice(startIndex, startIndex + number);
      startIndex += number;
      return part;
    });
    return formattedArr.join(" ");
  };

  return {
    numbers,
    onChange: onChangeValue,
    errorMessage,
    formattedNumbers,
    cardBrand: cardBrand.name,
  };
};

export default useMultiCardNumbers;
