import { Dispatch, useState } from "react";
import { validateCardNumber } from "../validator/validators";

interface UseCardNumberReturn {
  cardNumber: string;
  onCardNumberChange: Dispatch<string>;
  errorMessage?: string;
  isError: boolean;
}

export default function useCardNumber(): UseCardNumberReturn {
  const [cardNumber, setCardNumber] = useState("");

  const { errors } = validateCardNumber(cardNumber);

  const handleCardNumberChange = (value: string) => {
    setCardNumber(value.trim());
  };

  return {
    cardNumber,
    onCardNumberChange: handleCardNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
