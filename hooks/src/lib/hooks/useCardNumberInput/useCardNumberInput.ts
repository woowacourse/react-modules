import { useEffect, useState } from "react";
import { detectCardCompany } from "../utils/cardBrandUtils";
import {
  getCardNumberMaxLength,
  validateCardNumberForBrand,
} from "../utils/cardBrandUtils";
import CARD_BRAND_FORMAT from "../constants/cardBrandInfo";
import ERROR_MESSAGE from "../constants/errorMessage";

export type CardBrand = "VISA" | "MASTERCARD" | "DINERS" | "AMEX" | "UNIONPAY";

interface UseCardNumberInputResult {
  cardNumber: string;
  formattedCardNumber: string;
  cardBrand: CardBrand | null;
  isValid: boolean;
  errorMessage: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCardNumberInput = (): UseCardNumberInputResult => {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const cardBrand = detectCardCompany(cardNumber);

  const validateAndSetError = (
    value: string,
    brand: string | null,
  ): boolean => {
    if (!brand && value.length > 0) {
      setErrorMessage(ERROR_MESSAGE.CARD_NUMBER.INVALID);
      return false;
    }

    if (brand && !validateCardNumberForBrand(value, brand)) {
      setErrorMessage(ERROR_MESSAGE.CARD_NUMBER.INVALID);
      return false;
    }

    setErrorMessage("");
    return true;
  };

  const isValid = cardBrand
    ? validateCardNumberForBrand(cardNumber, cardBrand)
    : false;

  const formattedCardNumber = (() => {
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
  })();

  useEffect(() => {
    validateAndSetError(cardNumber, cardBrand);
  }, [cardNumber, cardBrand]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/\D/g, "");
    const trimmed = raw.slice(0, getCardNumberMaxLength(cardBrand));
    setCardNumber(trimmed);

    const nextBrand = detectCardCompany(trimmed);
    validateAndSetError(trimmed, nextBrand);
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
