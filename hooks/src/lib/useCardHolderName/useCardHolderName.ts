import { useState } from "react";
import useCardHolderNameValidation from "./useCardHolderNameValidation";

const useCardHolderName = () => {
  const [holderName, setHolderName] = useState("");
  const { errorState, errorText, validateCardHolderName } = useCardHolderNameValidation();

  const handleCardHolderNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    const capUpdateHolderName = validateCardHolderName(value);

    if (!capUpdateHolderName) return;

    setHolderName(value.toUpperCase());
  };

  return { holderName, errorState, errorText, handleCardHolderNameChange };
};

export default useCardHolderName;
