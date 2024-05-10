import { useState } from "react";

import useCardNumberValidation from "./useCardNumbersValidation";

import { formattingCardNumber, getCardNumberInputRules } from "./useCardNumber.utils";

const useCardNumbers = () => {
  const [cardNumbers, setCardNumbers] = useState<string[]>([]);

  const { validationResult, validateCardNumber } = useCardNumberValidation();

  const handleCardNumberChange = (value: string) => {
    const { formattingRule, maxLength, errorText } = getCardNumberInputRules(value);

    const canCardNumberUpdate = validateCardNumber(value, maxLength, errorText);

    if (!canCardNumberUpdate) return;

    const formattedCardNumber = formattingCardNumber(value, formattingRule);

    setCardNumbers(formattedCardNumber);
  };

  return {
    cardNumbers,
    validationResult,
    handleCardNumberChange,
  };
};

export default useCardNumbers;
