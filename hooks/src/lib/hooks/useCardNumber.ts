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

  const lastError = errors.at(-1);
  const errorMessage = lastError?.message as string | undefined;

  return {
    cardNumber,
    onCardNumberChange: handleCardNumberChange,
    errorMessage,
    isError: !!errorMessage,
  };
}
