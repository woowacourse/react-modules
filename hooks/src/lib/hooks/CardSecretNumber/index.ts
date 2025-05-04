import { useState } from "react";
import { INITIAL_SECRET_NUMBER } from "./constants";
import { CardSecretNumberState } from "./types";
import { validateCardSecretNumber } from "./utils";

const useCardSecretNumber = (
  initialState: CardSecretNumberState = INITIAL_SECRET_NUMBER
) => {
  const [secretNumber, setSecretNumber] =
    useState<CardSecretNumberState>(initialState);

  const handleSecretNumberChange = (value: string) => {
    if (value.length > 2) {
      return;
    }

    setSecretNumber({ value });
  };

  return {
    secretNumber,
    handleSecretNumberChange,
    errorState: validateCardSecretNumber(secretNumber.value),
  };
};

export default useCardSecretNumber;
