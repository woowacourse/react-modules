import { Dispatch, useState } from "react";
import { validateCardNumber } from "../util/validateCardNumber/validateCardNumber";
import { validateCardNetwork } from "../util/validateCardNetwork/validateCardNetwork";
import { CardNetwork } from "../constants";

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

  return {
    cardNumber,
    setCardNumber,
    cardNetwork,
    errorMessage,
    isError: isError,
  };
}
