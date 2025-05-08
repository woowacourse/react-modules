import { useState } from "react";
import { ValidationType } from "../../types/validation";
import { defaultValidationValue } from "../constants/validation";
import {
  isLengthEqual,
  validateNumberWithLengthRange,
} from "../utils/validation";

type CardBrand = "visa" | "masterCard" | "diners" | "amex" | "unionPay";
type CardBrandType = CardBrand | null;

interface UseCardNumberReturn {
  cardNumber: string;
  cardNumberValidation: ValidationType;
  handleCardNumberChange: (value: string) => void;
  cardBrand: CardBrandType;
  formatCardNumber: string[];
}

const CARD_NUMBER_MAX_LENGTH = {
  visa: 16,
  masterCard: 16,
  diners: 14,
  amex: 15,
  unionPay: 16,
};

const getCardBrand = (value: string): CardBrandType => {
  if (isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.visa) && /^4/.test(value)) {
    return "visa";
  }

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.masterCard) &&
    /^5[1-5]/.test(value)
  ) {
    return "masterCard";
  }

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.diners) &&
    /^36/.test(value)
  ) {
    return "diners";
  }

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.amex) &&
    /^3[47]/.test(value)
  ) {
    return "amex";
  }

  const prefix3 = Number(value.slice(0, 3));
  const prefix4 = Number(value.slice(0, 4));
  const prefix6 = Number(value.slice(0, 6));

  if (
    isLengthEqual(value, CARD_NUMBER_MAX_LENGTH.unionPay) &&
    ((prefix6 >= 622126 && prefix6 <= 622925) ||
      (prefix3 >= 624 && prefix3 <= 626) ||
      (prefix4 >= 6282 && prefix4 <= 6288))
  ) {
    return "unionPay";
  }

  return null;
};

const formatByBrand = (cardBrand: CardBrandType, value: string): string[] => {
  switch (cardBrand) {
    case "visa":
    case "masterCard":
    case "unionPay":
      return [
        value.slice(0, 4),
        value.slice(4, 8),
        value.slice(8, 12),
        value.slice(12, 16),
      ];

    case "amex":
      return [value.slice(0, 4), value.slice(4, 10), value.slice(10, 15)];

    case "diners":
      return [value.slice(0, 4), value.slice(4, 10), value.slice(10, 14)];

    default:
      return [];
  }
};

const useCardNumber = (): UseCardNumberReturn => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberValidation, setCardNumberValidation] =
    useState<ValidationType>(defaultValidationValue);
  const [cardBrand, setCardBrand] = useState<CardBrandType>(null);
  const [formatCardNumber, setFormatCardNumber] = useState<string[]>([]);

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);

    const validationResult = validateNumberWithLengthRange(value, 14, 16);
    setCardNumberValidation(validationResult);

    if (validationResult.isError) {
      setCardBrand(null);
      setFormatCardNumber([]);
      return;
    }

    const brand = getCardBrand(value);
    const formattedCardNumber = formatByBrand(brand, value);

    setCardBrand(brand);
    setFormatCardNumber(formattedCardNumber);
  };

  return {
    cardNumber,
    cardNumberValidation,
    handleCardNumberChange,
    cardBrand,
    formatCardNumber,
  };
};

export default useCardNumber;
