import { useCallback, useState } from "react";
import { isNonNumericNonEmpty } from "@utils/validation";
import { getCardNumberError } from "./utils";
import { UseCardHookReturn } from "../types";

const useCardNumber = (): UseCardHookReturn => {
  const [cardNumber, setCardNumber] = useState({
    value: "",
  });

  const handleCardNumberChange = useCallback((value: string) => {
    const cleanCardNumber = value.replace(/-/g, "");
    if (isNonNumericNonEmpty(cleanCardNumber)) {
      return;
    }

    setCardNumber((prev) => ({
      ...prev,
      value: cleanCardNumber,
    }));
  }, []);

  return {
    value: cardNumber.value,
    onChange: handleCardNumberChange,
    errorState: getCardNumberError(cardNumber.value),
  };
};

export default useCardNumber;
