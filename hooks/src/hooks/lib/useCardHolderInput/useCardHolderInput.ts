import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { cardHolderFormatting } from "../utils/format";

interface CardHolderState {
  value: string;
  errorMessage: string;
  isValid: boolean;
}

interface Props {
  CardHolderState: CardHolderState;
  handleCardHolderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCardHolderInput = (): Props => {
  const [cardHolderState, setCardHolderState] = useState<CardHolderState>({
    value: "",
    errorMessage: "",
    isValid: false,
  });

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let errorMessage = "";
    let isValid = true;

    if (!validator.isValidEmptyValue(value)) {
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
      isValid = false;
    } else if (!validator.isEnglish(value)) {
      errorMessage = ERROR_MESSAGE.ONLY_ENGLISH;
      isValid = false;
    } else if (!validator.isValidLengthRange({ value, maxLength: 21 })) {
      errorMessage = ERROR_MESSAGE.INVALID_HOLDER_LENGTH;
      isValid = false;
    }

    setCardHolderState({
      value: cardHolderFormatting(value),
      errorMessage,
      isValid,
    });
  };

  return { CardHolderState: cardHolderState, handleCardHolderChange };
};

export default useCardHolderInput;
