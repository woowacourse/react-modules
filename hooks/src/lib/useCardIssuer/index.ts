import { useState } from "react";
import useValidation, { IErrorStatus } from "../useValidation";

export default function useCardIssuer() {
  const [value, setValue] = useState("");
  const { errorStatus, validateValue } = useValidation(validateCardIssuer);

  const setCardIssuer = (value: string) => {
    setValue(value);
    validateValue(value);
  };

  return { cardIssuer: value, setCardIssuer, errorStatus };
}

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

function validateCardIssuer(value: string): IErrorStatus {
  if (!cardIssuerSet.has(value)) {
    return { isError: true, errorMessage: "지정된 카드 발행사가 아닙니다." };
  }

  return { isError: false, errorMessage: null };
}
