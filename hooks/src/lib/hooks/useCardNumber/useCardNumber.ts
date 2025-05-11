import { cardBranRule } from "./domain";
import { CARD_BRANDS, ERROR_MESSAGES } from "./constants";
import { INITIALIZE_VALUE } from "../../constants";
import { isValidNumber } from "../../util";
import { useState, useMemo, useCallback } from "react";
import { CardType } from "./types";
import { isInRange } from "./util";

export default function useCardNumber() {
  const [cardNumber, setCardNumber] = useState(INITIALIZE_VALUE);
  const [cardNumberError, setCardNumberError] = useState(INITIALIZE_VALUE);

  function changeCardNumber(value: string) {
    setCardNumber(value);
  }

  const cardBrand: CardType = useMemo(() => {
    const matched = Object.entries(cardBranRule).find(([_, rule]) => {
      return rule.ranges.some((range) => isInRange(cardNumber, range));
    });

    return (matched?.[0] as CardType) ?? CARD_BRANDS.Unknown;
  }, [cardNumber]);

  const validateCardNumber = useCallback(() => {
    const cardNumberError = cardBranRule[cardBrand].validateLength(cardNumber);
    if (!isValidNumber(cardNumber)) {
      setCardNumberError(ERROR_MESSAGES.number);
      return ERROR_MESSAGES.number;
    }
    if (cardNumberError) {
      setCardNumberError(cardNumberError);
      return cardNumberError;
    }
    setCardNumberError(INITIALIZE_VALUE);
  }, [cardNumber, cardBrand]);

  return {
    cardNumber,
    cardBrand,
    formattedCardNumber: cardBranRule[cardBrand].format(cardNumber),
    inputCount: cardBranRule[cardBrand].inputCount,
    changeCardNumber,
    cardNumberError,
    validateCardNumber,
  };
}
