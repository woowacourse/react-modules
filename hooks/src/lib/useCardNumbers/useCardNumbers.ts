import ValidationResult, { ValidationError } from "../types/ValidationResult";
import formatCardNumber, {
  calculateValidCardNumberLength,
} from "./utils/formatCardNumber";
import identifyCardGlobalBrand, {
  CardGlobalBrand,
} from "./utils/identifyCardGLobalBrand";
import { useMemo, useState } from "react";
import {
  validateAfterUpdate,
  validateBeforeUpdate,
} from "./utils/validateCardNumber";

interface CardNumberValidationResult {
  cardNumber: string;
  validationResult?: ValidationResult;
  cardGlobalBrand?: CardGlobalBrand;
  maxLength?: number;
  formattedCardNumber?: string[];
  handleUpdateCardNumber: (value: string) => void;
}

export default function useCardNumber(
  initialValues: string = ""
): CardNumberValidationResult {
  const [cardNumber, setCardNumber] = useState(initialValues);

  const [validationResult, setValidationResult] = useState<ValidationResult>();

  const { cardGlobalBrand, validCardNumberLength, formattedCardNumber } =
    useMemo(() => {
      const cardGlobalBrand = identifyCardGlobalBrand(cardNumber);
      const validCardNumberLength =
        calculateValidCardNumberLength(cardGlobalBrand);
      const formattedCardNumber = formatCardNumber(cardNumber, cardGlobalBrand);

      return { cardGlobalBrand, validCardNumberLength, formattedCardNumber };
    }, [cardNumber]);

  const handleUpdateCardNumber = (cardNumber: string) => {
    const cardGlobalBrand = identifyCardGlobalBrand(cardNumber);
    const validCardNumberLength =
      calculateValidCardNumberLength(cardGlobalBrand);

    try {
      validateBeforeUpdate(cardNumber, validCardNumberLength);

      setCardNumber(cardNumber);
      setValidationResult({ isValid: true });

      validateAfterUpdate(cardNumber, validCardNumberLength);
    } catch (error) {
      if (error instanceof ValidationError) {
        setValidationResult({
          isValid: false,
          errorType: error.errorType,
          errorMessage: error.errorMessage,
        });
      }
    }
  };

  return {
    cardNumber,
    validationResult,
    cardGlobalBrand,
    maxLength: validCardNumberLength,
    formattedCardNumber,
    handleUpdateCardNumber,
  };
}
