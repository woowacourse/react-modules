import { ChangeEvent, useEffect, useRef, useState } from "react";
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
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = cursorPosition;
      inputRef.current.selectionEnd = cursorPosition;
    }
  }, [cursorPosition]);

  const onChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, selectionStart } = e.target;

    const newCardBrand = identifyBrand(value);
    if (value.length > newCardBrand.validLength) return;

    const pureValue = removeNonNumeric(value);
    if (!validateIsNumber(pureValue)) return;

    validateValidLength(value, newCardBrand.validLength);

    const { formattedArr, isEnd } = formatCardNumber(
      pureValue,
      newCardBrand.cardNumbersFormat
    );

    let newSelectionStart = selectionStart || 0;
    if (isEnd) {
      newSelectionStart += 1;
    }

    setFormattedNumbers(formattedArr);
    setCursorPosition(newSelectionStart);
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
    let lastIndex = 0;
    const formattedArr = [];
    for (const number of numberFormat) {
      if (startIndex >= value.length) {
        break;
      }
      lastIndex = startIndex + number;
      const part = value.slice(startIndex, startIndex + number);
      formattedArr.push(part);
      startIndex += number;
    }

    const isEnd = lastIndex === value.length;
    return { formattedArr, isEnd };
  };

  const resetErrorMessage = (resolvedError: ErrorStatus) => {
    if (errorMessage === resolvedError) {
      setErrorMessage(null);
    }
  };

  return {
    inputRef,
    onChange: onChangeValue,
    errorMessage:
      errorMessage &&
      CardNumbersErrorMessages[errorMessage as CardNumberErrorType],
    formattedNumbers,
    cardBrand: cardBrand.name,
  };
};

export default useMultiCardNumbers;
