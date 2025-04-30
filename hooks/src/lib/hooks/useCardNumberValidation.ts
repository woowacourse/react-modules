import { Dispatch, useState } from "react";
import { isNumber } from "../util";

type CardNetwork = "VISA" | "MASTER" | "DEFAULT";

interface UseCardNumberReturn {
  cardNumber: string;
  setCardNumber: Dispatch<string>;
  errorMessage?: string;
  cardNetwork: CardNetwork;
}

export default function useCardNumber(): UseCardNumberReturn {
  const [cardNumber, setCardNumber] = useState("");
  let cardNetwork: CardNetwork = "DEFAULT";

  const cardNumberFirstGroup = cardNumber.slice(0, 4);
  const cardNumberSecondGroup = cardNumber.slice(4, 8);
  const cardNumberThirdGroup = cardNumber.slice(8, 12);
  const cardNumberFourthGroup = cardNumber.slice(12, 16);
  const cardPrefix = Number(cardNumberFirstGroup.slice(0, 2));

  if (!cardNumberFirstGroup.startsWith("4")) cardNetwork = "VISA";
  if (cardPrefix >= 51 && cardPrefix <= 54) cardNetwork = "MASTER";

  if (cardNumber.length !== 16)
    return {
      cardNumber,
      setCardNumber,
      errorMessage: "16자리의 공백 없는 숫자만 입력 가능합니다.",
      cardNetwork,
    };

  [
    cardNumberFirstGroup,
    cardNumberSecondGroup,
    cardNumberThirdGroup,
    cardNumberFourthGroup,
  ].forEach((cardNumberGroup) => {
    if (!isNumber(cardNumberGroup))
      return {
        cardNumber,
        setCardNumber,
        errorMessage: "입력값이 숫자가 아닙니다.",
        cardNetwork,
      };
  });

  return {
    cardNumber,
    setCardNumber,
    cardNetwork,
  };
}
