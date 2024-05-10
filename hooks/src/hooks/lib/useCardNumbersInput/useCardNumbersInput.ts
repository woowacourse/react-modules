import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import CARD_BRAND from "../constants/cardBrand";
import getCardBrand from "../utils/getCardBrand";
import { cardNumberFormatter } from "../utils/format";

type CardBrand = "VISA" | "MASTER_CARD" | "DINERS" | "AMEX" | "UNION_PAY" | "UNDEFINED";

interface CardNumbersState {
  value: string;
  isValid: boolean;
  errorMessage: string;
  cardBrand: CardBrand;
}

interface Props {
  CardNumbersState: CardNumbersState;
  handleCardNumbersChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCardNumbersInput = (): Props => {
  const [cardNumbersState, setCardNumbersState] = useState<CardNumbersState>({
    value: "",
    isValid: false,
    errorMessage: "",
    cardBrand: "UNDEFINED",
  });

  const handleCardNumbersChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\s+/g, "");
    let isValid = true;
    let errorMessage = "";

    const cardBrand = getCardBrand(value);
    const slicedValue = value.slice(0, CARD_BRAND[cardBrand].matchedLength);

    if (!validator.isValidEmptyValue(slicedValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isValidDigit(slicedValue)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.ONLY_NUMBER;
    } else if (!validator.isValidLength({ value: slicedValue, matchedLength: CARD_BRAND[cardBrand].matchedLength })) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.INVALID_CARD_NUMBER_LENGTH(CARD_BRAND[cardBrand].name, CARD_BRAND[cardBrand].matchedLength);
    }

    setCardNumbersState({
      value: cardNumberFormatter(value, CARD_BRAND[cardBrand].format),
      isValid,
      errorMessage,
      cardBrand,
    });
  };

  return { CardNumbersState: cardNumbersState, handleCardNumbersChange };
};

export default useCardNumbersInput;
