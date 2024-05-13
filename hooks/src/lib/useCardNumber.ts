import { useState, ChangeEvent } from "react";
import { REGEX, CARD_FORMAT } from "./constants";
import useCardTypeCheck from "./useCardTypeCheck";

interface ValidationResult {
  isValid: boolean;
  errorMessages: string[];
}

const insertSpacesIntoCardNumber = (
  cardNumber: string,
  cardType: string
): string => {
  const { numberFormat } = CARD_FORMAT[cardType];
  const formattedNumberParts: string[] = [];

  let index = 0;
  for (let i = 0; i < numberFormat.length; i++) {
    const segmentLength = numberFormat[i];
    const segment = cardNumber.slice(index, index + segmentLength);
    formattedNumberParts.push(segment);
    index += segmentLength;
  }

  return formattedNumberParts.join(" ").trim();
};

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [validationResult, setValidationResult] = useState<ValidationResult>({
    isValid: false,
    errorMessages: [],
  });
  const { handleCardTypeChange } = useCardTypeCheck();

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const numericValue = value.replace(/\s/g, "");

    const newCardType = handleCardTypeChange(numericValue);

    const isNumericInput = (value: string) => REGEX.onlyNumber.test(value);
    const isValidateCardNumber = (value: string) =>
      value.length === CARD_FORMAT[newCardType].maxNumberLength;
    const errors: string[] = [];
    const isNumeric = isNumericInput(numericValue);
    const isValidNumber = isValidateCardNumber(numericValue);

    if (!isNumeric) {
      errors.push("숫자를 입력해주세요.");
      setValidationResult({
        isValid: false,
        errorMessages: errors,
      });
      return;
    }

    if (!isValidNumber) {
      errors.push(
        `${CARD_FORMAT[newCardType].maxNumberLength}자리 숫자를 입력해주세요.`
      );
    }

    const formattedCardNumber = insertSpacesIntoCardNumber(
      numericValue,
      newCardType
    );

    setValidationResult({
      isValid: isNumeric && isValidNumber,
      errorMessages: errors,
    });
    setCardNumber(formattedCardNumber);
  };

  return { validationResult, cardNumber, handleCardNumberChange };
};

export default useCardNumber;
