import { useState } from "react";

import { INPUT_REGEX } from "../constants/regex";

function useCardHolder(maxLength: number) {
  const [cardHolder, setCardHolder] = useState("");
  const [cardHolderErrorState, setCardHolderErrorState] = useState({
    isError: false,
    errorMessage: "",
  });

  const updateErrorState = (isValid: boolean) => {
    if (isValid) {
      setCardHolderErrorState({
        isError: false,
        errorMessage: "",
      });
    } else {
      setCardHolderErrorState({
        isError: true,
        errorMessage: "유효하지 않은 이름입니다.",
      });
    }
  };

  const handleNameChange = (value: string) => {
    const upperCaseValue = value.toUpperCase();
    const isValidHolder = INPUT_REGEX.cardHolder(maxLength).test(value);

    updateErrorState(isValidHolder);
    setCardHolder(upperCaseValue);
  };

  return {
    cardHolder,
    cardHolderErrorState,
    handleNameChange,
  };
}

export default useCardHolder;
