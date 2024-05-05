import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";
import { ERROR_MESSAGES } from "../constants/messages";

function useCardHolder() {
  const [cardHolder, setCardHolder] = useState("");
  const [cardHolderError, setCardHolderError] = useState(false);

  const handleCardHolderChange = (value: string) => {
    const isValidHolder = INPUT_REGEX.cardHolder.test(value);
    setCardHolderError(!isValidHolder);
    setCardHolder(value.toUpperCase());
  };

  const getCardHolderErrorMessage = () => {
    return cardHolderError ? ERROR_MESSAGES.cardHolder : undefined;
  };

  return {
    cardHolder,
    cardHolderError,
    getCardHolderErrorMessage,
    handleCardHolderChange,
  };
}

export default useCardHolder;
