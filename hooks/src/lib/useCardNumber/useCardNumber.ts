import { useState } from "react";

import useCardNumberFormat from "./useCardNumberFormat";
import useCardNumberValidation from "./useCardNumberValidation";
import cardInputValidator from "../validators/cardInputValidator";

export type CardBrandType =
  | "None"
  | "Diners"
  | "AMEX"
  | "UnionPay"
  | "MasterCard"
  | "Visa";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardBrand, setCardBrand] = useState<CardBrandType>("None");

  const { cardNumberFormat, updateCardNumberFormat } = useCardNumberFormat();

  const { errorState, errorText, validateCardNumber } =
    useCardNumberValidation();

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const canUpdate = validateCardNumber(value);

    if (!canUpdate) return;

    setCardNumber(value);
    setCardBrand(cardInputValidator.validateCardBrand(value));

    updateCardNumberFormat(value);
  };

  return {
    cardNumber,
    cardNumberFormat,
    cardBrand,
    errorState,
    errorText,
    handleCardNumberChange,
  };
};

export default useCardNumber;
