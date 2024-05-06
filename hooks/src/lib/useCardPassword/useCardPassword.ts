import { useState } from "react";
import useCardPasswordValidation from "./useCardPasswordValidation";
import { INPUT_RULES } from "../constants/card-custom-hook";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState("");
  const { errorState, errorText, validateCardPassword } = useCardPasswordValidation();

  const handleCardPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const cardPasswordUpdate = validateCardPassword(value);

    if (!cardPasswordUpdate) return;

    setCardPassword(value);
  };

  const isCardPasswordInputCompleted = cardPassword.length === INPUT_RULES.validCardPasswordNumberLength;

  return {
    cardPassword,
    isCardPasswordInputCompleted,
    errorState,
    errorText,
    handleCardPasswordChange,
  };
};

export default useCardPassword;
