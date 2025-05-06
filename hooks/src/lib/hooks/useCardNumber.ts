import { useState } from "react";
import { ValidationType } from "../../types/validation";
import { defaultValidationValue } from "../constants/validation";
import { validateNumberFieldWithLength } from "../utils/validation";

type CardNumberFieldType = "first" | "second" | "third" | "fourth";

interface CardNumberType {
  first: string;
  second: string;
  third: string;
  fourth: string;
}

interface CardNumberValidationType {
  first: ValidationType;
  second: ValidationType;
  third: ValidationType;
  fourth: ValidationType;
}

interface UseCardNumberReturn {
  cardNumber: CardNumberType;
  cardNumberValidation: CardNumberValidationType;
  handleCardNumberChange: (field: CardNumberFieldType, value: string) => void;
}

const initialCardNumber = {
  first: "",
  second: "",
  third: "",
  fourth: "",
};

const initialCardNumberValidation = {
  first: defaultValidationValue,
  second: defaultValidationValue,
  third: defaultValidationValue,
  fourth: defaultValidationValue,
};

const MAX_LENGTH = 4;

const useCardNumber = (): UseCardNumberReturn => {
  const [cardNumber, setCardNumber] =
    useState<CardNumberType>(initialCardNumber);
  const [cardNumberValidation, setCardNumberValidation] =
    useState<CardNumberValidationType>(initialCardNumberValidation);

  const handleCardNumberChange = (
    field: CardNumberFieldType,
    value: string
  ) => {
    setCardNumber((prev) => ({ ...prev, [field]: value }));
    const validationResult = validateNumberFieldWithLength(value, MAX_LENGTH);
    setCardNumberValidation((prev) => ({ ...prev, [field]: validationResult }));
  };

  return { cardNumber, cardNumberValidation, handleCardNumberChange };
};

export default useCardNumber;
