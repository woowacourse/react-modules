import { Dispatch, useState } from "react";
import {
  CardNetwork,
  validateCardNetwork,
  validateCardNumber,
} from "../util/validateCardNumber";

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
  const errorMessage: string[] = validateCardNumber(cardNumber);

  const isError = errorMessage.map((msg) => msg !== "");

  return {
    cardNumber,
    setCardNumber,
    cardNetwork,
    errorMessage,
    isError: isError,
  };
}
