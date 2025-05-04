import { useState } from "react";
import cardExpirationValidation from "./cardExpirationValidation";
type ExpirationDate = {
  month: string;
  year: string;
};

const defaultExpirationDate = {
  month: "",
  year: "",
};

function useCardExpirationDate() {
  const [expirationDate, setCardNumber] = useState(defaultExpirationDate);

  function handleExpirationDate(value: string, position: keyof ExpirationDate) {
    setCardNumber((prev) => ({ ...prev, [position]: value }));
  }

  const { isCardExpirationError, errorText } = cardExpirationValidation(
    expirationDate.month,
    expirationDate.year
  );

  return {
    expirationDate,
    handleExpirationDate,
    isCardExpirationError,
    errorText,
  };
}

export default useCardExpirationDate;
