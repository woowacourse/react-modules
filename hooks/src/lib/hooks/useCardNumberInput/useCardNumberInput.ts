import { useState, useEffect } from "react";
import { validateNumericInput } from "../utils/inputValidation";
import { CARD_BRAND_RULE } from "../useCardBrand/constants";
import { useCardBrand } from "../useCardBrand/useCardBrand";
import { formatCardNumber } from "./utils/cardFormatter";
import { removeNonDigits } from "../utils/inputUtils";

type CardNumberState = {
  value: string;
  isValid: boolean;
};

const useCardNumberInput = () => {
  const [cardNumberState, setCardNumberState] = useState<CardNumberState>({
    value: "",
    isValid: true,
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [formattedCardNumber, setFormattedCardNumber] = useState("");

  const cardBrand = useCardBrand([cardNumberState.value]);

  const getMaxLength = () => {
    if (cardBrand && CARD_BRAND_RULE[cardBrand]) {
      return CARD_BRAND_RULE[cardBrand].length;
    }
    return 16;
  };

  useEffect(() => {
    const formatted = formatCardNumber(cardNumberState.value, cardBrand);
    setFormattedCardNumber(formatted);
  }, [cardNumberState.value, cardBrand]);

  const validateCardNumber = (value: string) => {
    return validateNumericInput(value, getMaxLength());
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = removeNonDigits(e.target.value);

    const { isValid, errorMessage: validationError } =
      validateCardNumber(inputValue);

    setCardNumberState({ value: inputValue, isValid });
    setErrorMessage(validationError);
  };

  const formattedMaxLength = formatCardNumber(
    "1".repeat(getMaxLength()),
    cardBrand
  ).length;

  return {
    cardNumberState,
    errorMessage,
    handleInputChange,
    cardBrand,
    formattedCardNumber,
    maxLength: formattedMaxLength,
  };
};

export default useCardNumberInput;
