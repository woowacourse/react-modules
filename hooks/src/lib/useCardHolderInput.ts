import { useState } from "react";
import useCardHolderValidation from "./validation/useCardHolderValidation";

type CardHolderName = "cardHolder";

const useCardHolderInput = () => {
  const { cardHolderValidation, isCardHolderValid } = useCardHolderValidation();

  const [cardHolder, setCardHolder] = useState({
    value: {
      cardHolder: "",
    },
    ...cardHolderValidation,
  });

  const handleCardHolderChange = (value: string, name: CardHolderName) => {
    if (isCardHolderValid(value, name)) return;
    setCardHolder({
      errorMessage: { ...cardHolder.value, [name]: "" },
      isError: { ...cardHolder.isError, [name]: false },
      value: { ...cardHolder.value, [name]: value },
    });
  };

  return { cardHolder, handleCardHolderChange };
};

export default useCardHolderInput;
