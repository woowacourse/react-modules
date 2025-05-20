import { useState } from "react";
import { CARD_INPUT_LENGTH, CardNetwork } from "../constants";
import { limitInputNumber } from "../util/limitInputNumber/limitInputNumber";
import { validateCardNetwork } from "../util/validateCardNetwork/validateCardNetwork";
import { validateCardNumber } from "../util/validateCardNumber/validateCardNumber";
import { useInputFocus } from "./internal/useInputFocus";

interface UseCardNumberReturn {
  cardNumber: string[];
  setCardNumber: (input: string[]) => void;
  errorMessage?: string[];
  cardNetwork: CardNetwork;
  isError: boolean[];
  inputRefs?: React.RefObject<HTMLInputElement | null>[];
  moveToNext?: (value: string, index: number) => void;
}

export default function useCardNumber(): UseCardNumberReturn {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);
  const cardNetwork: CardNetwork = validateCardNetwork(cardNumber);
  const errorMessage: string[] = validateCardNumber(cardNumber, cardNetwork);
  const isError = errorMessage.map((msg) => msg !== "");

  const validateInputLength = (value: string, index: number) => {
    const cardInputLength =
      cardNetwork === "PENDING" ? 4 : CARD_INPUT_LENGTH[cardNetwork][index];
    return value.length === cardInputLength;
  };

  const { inputRefs, moveToNext } = useInputFocus({
    inputFieldLength: 4,
    validateInputLength,
  });

  const setValidCardNumber = (cardNumber: string[]) => {
    return limitInputNumber({
      inputNumbers: cardNumber,
      setInputNumber: setCardNumber,
      groupLengths: CARD_INPUT_LENGTH[cardNetwork],
    });
  };

  return {
    cardNumber,
    setCardNumber: setValidCardNumber,
    cardNetwork,
    errorMessage,
    isError: isError,
    inputRefs,
    moveToNext,
  };
}
