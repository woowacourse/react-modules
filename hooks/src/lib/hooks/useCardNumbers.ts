import { useState } from "react";
import useCardBrand from "./useCardBrand";

import { CARD_BRANDS_INFO } from "../constants/cardBrands";
import { ERROR_MESSAGES } from "../constants/messages";
import { INPUT_REGEX } from "../constants/regex";

function useCardNumbers() {
  const { cardBrand, handleCardBrandChange } = useCardBrand();

  const [cardNumbers, setCardNumbers] = useState("");
  const [cardNumbersError, setCardNumbersError] = useState(false);

  const formatCardNumber = (value: string) => {
    const cardNumbers = [...value];
    const formattedNumbers: string[] = [];

    CARD_BRANDS_INFO[cardBrand].formatting.forEach((formatIndex) => {
      formattedNumbers.push(cardNumbers.splice(0, formatIndex).join(""));
    });

    return formattedNumbers;
  };

  const handleCardNumbersChange = (value: string) => {
    handleCardBrandChange(value);

    const isValidNumber = INPUT_REGEX.cardNumber(
      CARD_BRANDS_INFO[cardBrand].maxLength
    ).test(value);
    setCardNumbersError(!isValidNumber);

    setCardNumbers(value);
  };

  const getCardNumbersErrorMessage = () => {
    return cardNumbersError
      ? `${CARD_BRANDS_INFO[cardBrand].maxLength}${ERROR_MESSAGES.maxLengthNumber}`
      : undefined;
  };

  return {
    cardNumbers: formatCardNumber(cardNumbers),
    cardNumbersError,
    getCardNumbersErrorMessage,
    cardBrand,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
