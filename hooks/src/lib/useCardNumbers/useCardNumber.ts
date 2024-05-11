import { useState } from "react";

import useCardNumberValidation from "./useCardNumberValidation";

const useCardNumber = () => {
  const [cardNumber, setCardNumber] = useState("");

  const { errorState, errorText, validateCardNumber } =
    useCardNumberValidation();

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    const canUpdate = validateCardNumber(value);

    if (!canUpdate) return;

    setCardNumber(value);
  };

  return {
    cardNumber,
    errorState,
    errorText,
    handleCardNumberChange,
  };
};

export default useCardNumber;
