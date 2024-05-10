import { useState } from "react";
import validator from "../utils/validate";
import ERROR_MESSAGE from "../constants/errorMessage";
import { cardHolderFormatter } from "../utils/format";

interface CardHolderState {
  value: string;
  isValid: boolean;
  errorMessage: string;
}

interface Props {
  CardHolderState: CardHolderState;
  handleCardHolderChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const useCardHolderInput = (): Props => {
  const [cardHolderState, setCardHolderState] = useState<CardHolderState>({
    value: "",
    isValid: false,
    errorMessage: "",
  });

  const handleCardHolderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let isValid = true;
    let errorMessage = "";

    if (!validator.isValidEmptyValue(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.EMPTY_VALUE;
    } else if (!validator.isEnglish(value)) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.ONLY_ENGLISH;
    } else if (!validator.isValidLengthRange({ value, maxLength: 21 })) {
      isValid = false;
      errorMessage = ERROR_MESSAGE.INVALID_HOLDER_LENGTH;
    }

    setCardHolderState({
      value: cardHolderFormatter(value),
      isValid,
      errorMessage,
    });
  };

  return { CardHolderState: cardHolderState, handleCardHolderChange };
};

export default useCardHolderInput;
