import { ChangeEvent, useState } from "react";
import { validateLength, validateNumber } from "@/validate/validate";
import { ErrorStatus } from "@/types/errorStatus";
import { removeNonNumeric } from "@/utils/numberHelper";
import { CardNumbersErrorMessages } from "@/constants/error";
import { CardNumberErrorType } from "@/types/cardNumbers";
import useCardBrands from "./useCardBrand";

const useMultiCardNumbers = () => {
  const [formattedNumbers, setFormattedNumbers] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { cardBrand, identifyBrand } = useCardBrands();

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const newCardBrand = identifyBrand(value);
    if (value.length > newCardBrand.validLength) return;

    const pureValue = removeNonNumeric(value);
    if (!validateIsNumber(pureValue)) return;

    validateValidLength(value, newCardBrand.validLength);

    const formattedArr = formatCardNumber(
      pureValue,
      newCardBrand.cardNumbersFormat
    );
    setFormattedNumbers(formattedArr);
  };

  const validateIsNumber = (value: string) => {
    const isValidNumberResult = validateNumber(value);
    const isValidNumber = isValidNumberResult.isValid;
    if (!isValidNumber) {
      setErrorMessage(isValidNumberResult.error);
    } else {
      resetErrorMessage(isValidNumberResult.error);
    }
    return isValidNumber;
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
    const formattedArr = [];

    for (const number of numberFormat) {
      if (startIndex >= value.length) {
        break;
      }
      const part = value.slice(startIndex, startIndex + number);
      formattedArr.push(part);
      startIndex += number;
    }
    return formattedArr;
  };

  const resetErrorMessage = (resolvedError: ErrorStatus) => {
    if (errorMessage === resolvedError) {
      setErrorMessage(null);
    }
  };

  return {
    onChange: onChangeValue,
    errorMessage:
      errorMessage &&
      CardNumbersErrorMessages[errorMessage as CardNumberErrorType],
    formattedNumbers,
    cardBrand: cardBrand.name,
  };
};

export default useMultiCardNumbers;
