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

  return {
    cardNumber,
    onCardNumberChange: setCardNumber,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
