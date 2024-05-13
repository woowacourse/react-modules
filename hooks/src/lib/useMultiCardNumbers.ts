import { ChangeEvent, useEffect, useRef, useState } from "react";
import { validateLength, validateNumber } from "@/validate/validate";
import { removeNonNumeric } from "@/utils/numberHelper";
import { CardNumbersErrorMessages } from "@/constants/error";
import { CardNumberErrorType } from "@/types/cardNumbers";
import useCardBrands from "./useCardBrand";
import { formatNumberToArray } from "@/utils/formatNumberToArray";

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

    const { formattedArr, isEnd } = formatNumberToArray(
      pureValue,
      newCardBrand.cardNumbersFormat
    );

    setFormattedNumbers(formattedArr);

    let newSelectionStart = selectionStart || 0;
    if (isEnd) {
      newSelectionStart += 1;
    }

    if (inputRef.current) {
      inputRef.current.selectionStart = newSelectionStart;
      inputRef.current.selectionEnd = newSelectionStart;
    }
    setCursorPosition(newSelectionStart);
  };

  const validateIsNumber = (value: string) => {
    const isValidNumberResult = validateNumber(value);
    const isValidNumber = isValidNumberResult.isValid;

    const numberErrorMessage = CardNumbersErrorMessages.isNotNumber;
    !isValidNumberResult.isValid
      ? setErrorMessage(numberErrorMessage)
      : resetErrorMessage(numberErrorMessage);

    return isValidNumber;
  };

  const validateValidLength = (value: string, validLength: number) => {
    const isValidLengthResult = validateLength(value, validLength);
    const lengthErrorMessage = CardNumbersErrorMessages.isNotNumber;

    !isValidLengthResult.isValid
      ? setErrorMessage(lengthErrorMessage)
      : resetErrorMessage(lengthErrorMessage);
  };

  const resetErrorMessage = (resolvedError: string) => {
    if (errorMessage === resolvedError) setErrorMessage(null);
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
