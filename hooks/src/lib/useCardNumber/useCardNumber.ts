import { useState } from "react";

import useCardNumberValidation from "./useCardNumberValidation";

import { INPUT_RULES } from "../constants/cardCustomHook";

type CardBrandType =
  | ""
  | "Diners"
  | "AMEX"
  | "UnionPay"
  | "MasterCard"
  | "Visa";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardBrand, setCardBrand] = useState<CardBrandType>("");

  const { errorState, errorText, validateCardNumber } =
    useCardNumberValidation();

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const canUpdate = validateCardNumber(value);

    if (!canUpdate) return;

    setCardNumber(value);
    setCardBrand(INPUT_RULES.validCardBrand(value));
  };

  return {
    cardNumber,
    errorState,
    errorText,
    cardBrand,
    handleCardNumberChange,
  };
};

export default useCardNumber;
