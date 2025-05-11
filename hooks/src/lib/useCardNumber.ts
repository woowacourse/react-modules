import { useState } from "react";
import {
  getCardBrand,
  formatCardNumber,
  numberRegex,
  isExceedCardNumberLength,
  isShortOfCardNumberLength,
} from "../\butils/card";
import { CARD_BRAND } from "../constants/cardBrand";

interface CustomErrorMessagesType {
  length?: string;
}

type CardBrandType = keyof typeof CARD_BRAND;

export default function useCardNumber(
  customErrorMessage?: CustomErrorMessagesType
) {
  const [cardNumber, setCardNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const isValid = !errorMessage;

  const validateCardNumberLength = (
    value: string,
    cardNumberLength: number | null
  ) => {
    if (isExceedCardNumberLength(value, cardNumberLength)) return;

    setCardNumber(value);

    if (isShortOfCardNumberLength(value, cardNumberLength)) {
      setErrorMessage(
        customErrorMessage
          ? `${cardNumberLength}${customErrorMessage.length}`
          : `${cardNumberLength}자리를 입력해 주세요.`
      );
      return;
    }

    setErrorMessage("");
  };

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;

    if (!numberRegex.test(value)) return;

    const brand = getCardBrand(value);
    const brandLength = CARD_BRAND[brand].length;

    validateCardNumberLength(value, brandLength);
  };

  const cardBrand = (): CardBrandType => {
    return getCardBrand(cardNumber);
  };

  const formattedCardNumber = () => {
    const brand = cardBrand();
    const pattern = CARD_BRAND[brand].format;
    return formatCardNumber(cardNumber, brand, pattern);
  };

  return {
    cardNumber,
    formattedCardNumber,
    errorMessage,
    isValid,
    handleCardNumberChange,
    cardBrand,
  };
}
