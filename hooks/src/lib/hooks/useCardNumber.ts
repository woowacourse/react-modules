import { useCallback, useState } from "react";
import { validateCardNumber } from "../validator/validators";

interface UseCardNumberReturn {
  cardNumber: string;
  onCardNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isError: boolean;
}

export default function useCardNumber(): UseCardNumberReturn {
  const [cardNumber, setCardNumber] = useState("");
  const { errors } = validateCardNumber(cardNumber);

  const handleCardNumberChange: React.ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setCardNumber(e.target.value);
    }, []);

  return {
    cardNumber,
    onCardNumberChange: handleCardNumberChange,
    errorMessage: errors.at(-1)?.message,
    isError: !!errors.at(-1)?.message,
  };
}
