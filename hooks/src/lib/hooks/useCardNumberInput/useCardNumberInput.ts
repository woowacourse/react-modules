import { useState } from "react";
import { validateNumericInput } from "../utils/inputValidation";
import { CARD_BRAND_RULE } from "../useCardBrand/constants";
import { useCardBrand } from "../useCardBrand/useCardBrand";

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

  const cardBrand = useCardBrand([cardNumberState.value]);

  const validateCardNumber = (value: string) => {
    return validateNumericInput(value, getMaxLength());
  };

  const getMaxLength = () => {
    if (cardBrand && CARD_BRAND_RULE[cardBrand]) {
      return CARD_BRAND_RULE[cardBrand].length;
    }
    return 16;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, "");

    const { isValid, errorMessage: validationError } =
      validateCardNumber(inputValue);

    setCardNumberState({ value: inputValue, isValid });
    setErrorMessage(validationError);
  };

  return {
    cardNumberState,
    errorMessage,
    handleInputChange,
    cardBrand,
  };
};

export default useCardNumberInput;
