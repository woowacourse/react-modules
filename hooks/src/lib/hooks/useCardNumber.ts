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

const CARD_NUMBER_MAX_LENGTH: Record<CardBrand, number> = {
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

const CARD_FORMAT_SEGMENTS: Record<CardBrand, number[]> = {
  visa: [4, 4, 4, 4],
  masterCard: [4, 4, 4, 4],
  diners: [4, 6, 4],
  amex: [4, 6, 5],
  unionPay: [4, 4, 4, 4],
};

const formatByBrand = (cardBrand: CardBrandType, value: string): string[] => {
  if (!cardBrand) return [];

  const formatInfo = CARD_FORMAT_SEGMENTS[cardBrand];
  if (!formatInfo) return [];

  return formatInfo.map((segmentLength, index) => {
    const startIndex = formatInfo
      .slice(0, index)
      .reduce((sum, length) => sum + length, 0);

    return value.slice(startIndex, startIndex + segmentLength);
  });
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
