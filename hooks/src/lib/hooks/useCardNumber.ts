import { Dispatch, useState } from "react";
import { validateCardNumber } from "../util/validateCardNumber/validateCardNumber";
import { validateCardNetwork } from "../util/validateCardNetwork/validateCardNetwork";
import { CARD_INPUT_LENGTH, CardNetwork } from "../constants";

interface UseCardNumberReturn {
  cardNumber: string[];
  setCardNumber: Dispatch<string[]>;
  errorMessage?: string[];
  cardNetwork: CardNetwork;
  isError: boolean[];
}

export default function useCardNumber(): UseCardNumberReturn {
  const [cardNumber, setCardNumber] = useState(["", "", "", ""]);

  const cardNetwork: CardNetwork = validateCardNetwork(cardNumber);
  const errorMessage: string[] = validateCardNumber(cardNumber, cardNetwork);
  const isError = errorMessage.map((msg) => msg !== "");

  const setValidCardNumber: Dispatch<string[]> = (cardNumbers: string[]) => {
    const groupLengths = CARD_INPUT_LENGTH[cardNetwork];

    const validated = cardNumbers.map((group, index) => {
      const maxLength = groupLengths[index] ?? 0;
      const sanitized = group.replace(/\D/g, "");
      return sanitized.slice(0, maxLength);
    });

    setCardNumber(validated);
  };

  return {
    cardNumber,
    setCardNumber: setValidCardNumber,
    cardNetwork,
    errorMessage,
    isError: isError,
  };
}
