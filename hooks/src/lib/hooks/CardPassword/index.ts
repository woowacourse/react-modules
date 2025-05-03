import { useState } from "react";
import { INITIAL_CARD_PASSWORD } from "./constants";
import { CardPasswordState } from "./types";
import { validateCardPassword } from "./utils";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState<CardPasswordState>(
    INITIAL_CARD_PASSWORD
  );

  const handleCardPasswordChange = (value: string) => {
    if (value.length > 2) {
      return;
    }

    setCardPassword({ value });
  };

  return {
    cardPassword,
    handleCardPasswordChange,
    errorState: validateCardPassword(cardPassword.value),
  };
};

export default useCardPassword;
