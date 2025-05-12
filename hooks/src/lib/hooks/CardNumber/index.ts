import { useCallback, useState } from "react";
import { isNonNumericNonEmpty } from "@utils/validation";
import { INITIAL_CARD_NUMBER_STATE } from "./constants";
import { getCardNumberError } from "./utils";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState(INITIAL_CARD_NUMBER_STATE);

  const handleCardNumberChange = useCallback((cardNumber: string) => {
    const cleanCardNumber = cardNumber.replace(/-/g, "");
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
