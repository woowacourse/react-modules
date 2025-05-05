import { useCallback, useState } from "react";
import { validateStrictCardNumber } from "../validator/validators";

interface UseStrictCardNumberReturn {
  cardNumber: string;
  onCardNumberChange: React.ChangeEventHandler<HTMLInputElement>;
  errorMessage?: string;
  isError: boolean;
}

export default function useStrictCardNumber(): UseStrictCardNumberReturn {
  const [cardNumber, setCardNumber] = useState("");
  const { errors } = validateStrictCardNumber(cardNumber);

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
