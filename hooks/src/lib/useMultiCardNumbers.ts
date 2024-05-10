import { ChangeEvent, useState } from "react";
import { validateLength, validateNumber } from "@/validate/validate";
import { ErrorStatus } from "@/types/errorStatus";
import { removeNonNumeric } from "@/utils/numberHelper";
import { CardNumbersErrorMessages } from "@/constants/error";
import { CardNumberErrorType } from "@/types/cardNumbers";
import {
  CARD_BRANDS_NAMES,
  CardBrandInfo,
  CardBrandName,
  CardBrands,
} from "@/constants/cardBrand";

const useMultiCardNumbers = () => {
  const [formattedNumbers, setFormattedNumbers] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [cardBrand, setCardBrand] = useState<CardBrandName>("NONE");

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
    setCardBrand(newCardBrand.name);
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

  const identifyBrand = (value: string) => {
    let newCardBrandInfo: CardBrandInfo | null = null;

    CARD_BRANDS_NAMES.forEach((name) => {
      const identifiers = CardBrands[name].identifier;
      if (identifiers) {
        if (
          identifiers.type === "value" &&
          checkValueMatch(value, identifiers.values)
        ) {
          newCardBrandInfo = CardBrands[name];
        } else if (
          identifiers.type === "range" &&
          checkRangeMatch(value, identifiers.values)
        ) {
          newCardBrandInfo = CardBrands[name];
        }
      }
    });

    if (!newCardBrandInfo) {
      newCardBrandInfo = CardBrands["NONE"];
    }
    return newCardBrandInfo;
  };

  const checkValueMatch = (value: string, values: number[]) => {
    return values.some((identifier) => {
      return (
        value.length >= String(identifier).length &&
        value.startsWith(String(identifier))
      );
    });
  };

  const checkRangeMatch = (value: string, ranges: [number, number][]) => {
    return ranges.some(([from, to]) => {
      const maxLength = Math.max(String(from).length, String(to).length);
      if (value.length >= maxLength) {
        const numericValue = parseInt(value.slice(0, maxLength), 10);
        return numericValue >= from && numericValue <= to;
      }
      return false;
    });
  };

  return {
    onChange: onChangeValue,
    errorMessage:
      errorMessage &&
      CardNumbersErrorMessages[errorMessage as CardNumberErrorType],
    formattedNumbers,
    cardBrand: cardBrand,
  };
};

export default useMultiCardNumbers;
