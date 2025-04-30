import { Dispatch, useState } from "react";
import {
  CardNetwork,
  isCardNumberNumeric,
  validateCardNetwork,
} from "../util/validateCardNumber";

interface UseCardNumberReturn {
  cardNumber: string;
  setCardNumber: Dispatch<string>;
  errorMessage?: string;
  cardNetwork: CardNetwork;
  isError: boolean;
}

export default function useCardNumber(): UseCardNumberReturn {
  const [cardNumber, setCardNumber] = useState("");

  const cardNetwork: CardNetwork = validateCardNetwork(cardNumber);
  let errorMessage: string = "";

  if (!isCardNumberNumeric(cardNumber))
    errorMessage = "카드 번호는 숫자만 입력 가능합니다.";

  if (cardNumber.length !== 16)
    errorMessage = "16자리의 공백 없는 숫자만 입력 가능합니다.";

  return {
    cardNumber,
    setCardNumber,
    cardNetwork,
    errorMessage,
    isError: !!errorMessage,
  };
}
