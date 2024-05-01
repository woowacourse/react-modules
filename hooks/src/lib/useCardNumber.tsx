import { useState } from "react";
import useValidation from "./useValidation";

const cardNumberPartValidators = [
  (value: string) => {
    if (value.length !== 4) {
      return "카드번호 한 단위는 4자리여야 합니다.";
    }
  },
  (value: string) => {
    if (!/^\d+$/.test(value)) {
      return "카드번호는 숫자만 포함해야 합니다.";
    }
  },
];

export default function useCardNumber() {
  const cardNumberPartUseStates = [useState(""), useState(""), useState(""), useState("")];
  const cardNumberPartValidations = [
    useValidation(cardNumberPartValidators),
    useValidation(cardNumberPartValidators),
    useValidation(cardNumberPartValidators),
    useValidation(cardNumberPartValidators),
  ];
  const cardNumberPartValues = cardNumberPartUseStates.map((state) => state[0]);

  const setCardNumber = (value: string, index: number) => {
    const [, setCardNumberPart] = cardNumberPartUseStates[index];
    const validateCardNumberPart = cardNumberPartValidations[index].validate;

    setCardNumberPart(value);
    validateCardNumberPart(value);
  };

  const cardNumberPartErrorStates = cardNumberPartValidations.map(({ errorStatus }) => errorStatus);

  return { cardNumber: cardNumberPartValues, setCardNumber, cardNumberPartErrorStates };
}
