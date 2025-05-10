import { useEffect, useState } from "react";
import { detectCardCompany } from "../useCardBrand/useCardBrand";
import {
  getCardNumberMaxLength,
  validateCardNumberForBrand,
} from "../utils/cardBrandUtils";
import CARD_BRAND_FORMAT from "../constants/cardBrandInfo";
import ERROR_MESSAGE from "../constants/errorMessage";

interface UseCardNumberInputResult {
  cardNumber: string;
  formattedCardNumber: string;
  cardBrand: string | null;
  isValid: boolean;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCardNumberInput = (): UseCardNumberInputResult => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const cardBrand = detectCardCompany(cardNumber);

  const isValidCardNumber = (): boolean => {
    if (!cardBrand) return false;
    return validateCardNumberForBrand(cardNumber, cardBrand);
  };
  const isValid = isValidCardNumber();

  const formattedNumber = (): string => {
    if (!cardBrand) return cardNumber;

    const format = CARD_BRAND_FORMAT[cardBrand] || CARD_BRAND_FORMAT.DEFAULT;
    const digits = cardNumber.replace(/\D/g, "");
    const groups = [];
    let cursor = 0;

    for (const len of format) {
      groups.push(digits.slice(cursor, cursor + len));
      cursor += len;
    }

    return groups.filter(Boolean).join(" ");
  };

  const formattedCardNumber = formattedNumber();

  useEffect(() => {
    if (
      (!cardBrand && cardNumber.length > 0) ||
      (cardBrand && !validateCardNumberForBrand(cardNumber, cardBrand))
    ) {
      setErrorMessage(ERROR_MESSAGE.CARD_NUMBER.INVALID);
    } else {
      setErrorMessage("");
    }
  }, [cardNumber, cardBrand]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const maxLength = getCardNumberMaxLength(cardBrand);
    const trimmed = raw.slice(0, maxLength);

    setCardNumber(trimmed);

    if (cardBrand && !validateCardNumberForBrand(trimmed, cardBrand)) {
      setErrorMessage(ERROR_MESSAGE.CARD_NUMBER.INVALID);
    } else {
      setErrorMessage("");
    }
  };

  return {
    cardNumber,
    formattedCardNumber,
    cardBrand,
    isValid,
    errorMessage,
    handleChange,
  };
};

export default useCardNumberInput;
