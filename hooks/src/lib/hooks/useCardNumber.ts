import { useState } from "react";
import { CardBrandType } from "../../types/cardBrand";
import { ValidationType } from "../../types/validation";
import { defaultValidationValue } from "../constants/validation";
import { formatByBrand } from "../utils/cardFormatter";
import { getCardBrand } from "../utils/cardIdentifier";
import { validateNumberWithLengthRange } from "../utils/validation";

const CARD_NUMBER_MIN_LENGTH = 14;
const CARD_NUMBER_MAX_LENGTH = 16;

interface UseCardNumberReturn {
  cardNumber: string;
  cardNumberValidation: ValidationType;
  handleCardNumberChange: (value: string) => void;
  cardBrand: CardBrandType;
  formatCardNumber: string[];
}

const useCardNumber = (): UseCardNumberReturn => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardNumberValidation, setCardNumberValidation] =
    useState<ValidationType>(defaultValidationValue);
  const [cardBrand, setCardBrand] = useState<CardBrandType>(null);
  const [formatCardNumber, setFormatCardNumber] = useState<string[]>([]);

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value);

    const validationResult = validateNumberWithLengthRange(
      value,
      CARD_NUMBER_MIN_LENGTH,
      CARD_NUMBER_MAX_LENGTH
    );
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
