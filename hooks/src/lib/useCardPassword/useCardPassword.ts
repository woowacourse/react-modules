import { useState } from "react";
import useCardPasswordValidation from "./useCardPasswordValidation";

const useCardPassword = () => {
  const [cardPassword, setCardPassword] = useState("");
  const { errorState, errorText, validateCardPassword } =
    useCardPasswordValidation();

  const handleCardPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const canUpdate = validateCardPassword(value);

    if (!canUpdate) return;

    setCardPassword(value);
  };

  return {
    cardPassword,
    errorState,
    errorText,
    handleCardPasswordChange,
  };
};

export default useCardPassword;
