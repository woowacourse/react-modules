import ValidationResult, {
  ERROR_MESSAGE,
  ERROR_TYPE,
  ValidationError,
} from "../types/ValidationResult";

import Validation from "../utils/Validation";
import { useState } from "react";

type CardGlobalBrand = "Visa" | "Master" | "Diners" | "AMEX" | "UnionPay";

const isVisaCard = (cardNumber: string) => {
  return cardNumber.startsWith("4");
};

const isMasterCard = (cardNumber: string) => {
  return ["51", "52", "53", "54", "55"].some((startingNumber) =>
    cardNumber.startsWith(startingNumber)
  );
};

const isDinersCard = (cardNumber: string) => {
  return cardNumber.startsWith("36");
};

const isAmexCard = (cardNumber: string) => {
  return ["34", "37"].some((startingNumber) =>
    cardNumber.startsWith(startingNumber)
  );
};

const isUnionPayCard = (cardNumber: string) => {
  if (cardNumber.length >= 3) {
    const targetNumber = parseInt(cardNumber.slice(0, 3));
    if (624 <= targetNumber && targetNumber <= 626) {
      return true;
    }
  }

  if (cardNumber.length >= 4) {
    const targetNumber = parseInt(cardNumber.slice(0, 4));
    if (6282 <= targetNumber && targetNumber <= 6288) {
      return true;
    }
  }

  if (cardNumber.length >= 6) {
    const targetNumber = parseInt(cardNumber.slice(0, 6));
    if (622126 <= targetNumber && targetNumber <= 622925) {
      return true;
    }
  }

  return false;
};

const identifyCardGlobalBrand = (
  cardNumber: string
): CardGlobalBrand | undefined => {
  if (isVisaCard(cardNumber)) {
    return "Visa";
  }
  if (isMasterCard(cardNumber)) {
    return "Master";
  }
  if (isDinersCard(cardNumber)) {
    return "Diners";
  }
  if (isAmexCard(cardNumber)) {
    return "AMEX";
  }
  if (isUnionPayCard(cardNumber)) {
    return "UnionPay";
  }
};

interface CardNumberValidationResult {
  cardNumber: string;
  cardGlobalBrand?: CardGlobalBrand;
  formattedCardNumber?: string[];
  validationResult?: ValidationResult;
  handleUpdateCardNumber: (value: string) => void;
}

export default function useCardNumber(
  initialValues: string = ""
): CardNumberValidationResult {
  const [cardNumber, setCardNumber] = useState(initialValues);

  const [validationResult, setValidationResult] = useState<ValidationResult>();

  const updateCardNumber = (cardNumber: string) => {
    setCardNumber(cardNumber);
    setValidationResult({ isValid: true });
  };

  const handleUpdateCardNumber = (value: string) => {
    try {
      validateBeforeUpdate(value);

      updateCardNumber(value);

      validateAfterUpdate(value);
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
    cardGlobalBrand: identifyCardGlobalBrand(cardNumber),
    formattedCardNumber: [""], // TODO 카드 포맷팅
    validationResult,
    handleUpdateCardNumber,
  };
}

const validateBeforeUpdate = (value: string) => {
  if (!Validation.isNumeric(value)) {
    throw new ValidationError(
      ERROR_TYPE.numericOnly,
      ERROR_MESSAGE.numericOnly
    );
  }
};

const validateAfterUpdate = (value: string) => {
  if (!Validation.hasLength(value, 16)) {
    throw new ValidationError(
      ERROR_TYPE.invalidLength,
      ERROR_MESSAGE.invalidLength
    );
  }
};
