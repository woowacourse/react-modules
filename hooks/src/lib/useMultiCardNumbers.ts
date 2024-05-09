import { ChangeEvent, useState } from "react";
import { validateLength, validateRegex } from "@/validate/validate";
import useIdentifyCardBrand from "./useIdentifyCardBrand";
import { ErrorStatus } from "@/types/errorStatus";

const useMultiCardNumbers = () => {
  const [numbers, setNumbers] = useState<string>("");
  const [formattedNumbers, setFormattedNumbers] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { cardBrand, identifyBrand } = useIdentifyCardBrand();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    identifyBrand(value);
    if (value.length > cardBrand.validLength) return;

    validateIsNumber(value);
    validateValidLength(value, cardBrand.validLength);

    const valueNoSpace = [...value].filter((e) => e !== " ").join("");
    const formattedNumbers = formatCardNumber(
      valueNoSpace,
      cardBrand.cardNumbersFormat
    );

    setFormattedNumbers(formattedNumbers);
    setNumbers(valueNoSpace);
  };

  const validateIsNumber = (value: string) => {
    const isValidNumberResult = validateRegex(value);
    if (!isValidNumberResult.isValid) {
      setErrorMessage(isValidNumberResult.error);
    } else {
      resetErrorMessage(isValidNumberResult.error);
    }
  };

  const validateValidLength = (value: string, validLength: number) => {
    const isValidLengthResult = validateLength(value, validLength);
    if (!isValidLengthResult.isValid) {
      setErrorMessage(isValidLengthResult.error);
    } else {
      resetErrorMessage(isValidLengthResult.error);
    }
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

  const resetErrorMessage = (resolvedError: ErrorStatus) => {
    if (errorMessage === resolvedError) {
      setErrorMessage(null);
    }
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
