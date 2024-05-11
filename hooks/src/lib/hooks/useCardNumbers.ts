import { useState } from "react";
import useCardBrand from "./useCardBrand";

import { CARD_BRANDS_INFO } from "../constants/cardBrands";
import { ERROR_MESSAGES } from "../constants/messages";
import { INPUT_REGEX } from "../constants/regex";

function useCardNumbers() {
  const { cardBrand, handleCardBrandChange } = useCardBrand();

  const [cardNumbers, setCardNumbers] = useState("");
  const [cardNumbersError, setCardNumbersError] = useState(false);

  const handleCardNumbersChange = (value: string) => {
    handleCardBrandChange(value);

    const isValidNumber = INPUT_REGEX.cardNumber(
      CARD_BRANDS_INFO[cardBrand].maxLength
    ).test(value);
    setCardNumbersError(!isValidNumber);

    setCardNumbers(value);
  };

  const getCardNumberErrorMessage = () => {
    return cardNumbersError
      ? `${CARD_BRANDS_INFO[cardBrand].maxLength}${ERROR_MESSAGES.maxLengthNumber}`
      : undefined;
  };

  return {
    cardNumbers,
    cardNumbersError,
    getCardNumberErrorMessage,
    cardBrand,
    handleCardNumbersChange,
  };
}

export default useCardNumbers;
