import { useState } from "react";
import useValidation from "../useValidation/useValidation";

export const CARD_ISSUERS = [
  "BC카드",
  "신한카드",
  "카카오뱅크",
  "현대카드",
  "우리카드",
  "롯데카드",
  "하나카드",
  "국민카드",
] as const;

export type CardIssuer = typeof CARD_ISSUERS;

const cardIssuerSet = new Set<string>(CARD_ISSUERS);

const cardIssuerValidators = [
  (value: string) => {
    if (!cardIssuerSet.has(value)) {
      return "지정된 카드 발행사가 아닙니다.";
    }
  },
];

export default function useCardIssuer() {
  const [value, setValue] = useState("");
  const { errorStatus, validate } = useValidation(cardIssuerValidators);

  const setCardIssuer = (string: string) => {
    setValue(string);
    validate(string);
  };

  return { cardIssuer: value, setCardIssuer, errorStatus };
}
