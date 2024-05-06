import { IErrorStatus } from "../useInputValidation";
import { contains } from "../utils/contains";

interface InputValidator {
  onChange: Validate;
  onBlur: Validate;
}

export const cardIssuerValidator: InputValidator = {
  onChange: validateCardIssuer,
  onBlur: validateCardIssuer,
};

function validateCardIssuer(value: string): IErrorStatus {
  if (!contains(CARD_ISSUERS, value)) {
    return { isError: true, errorMessage: "지정된 카드 발행사가 아닙니다." };
  }

  return { isError: false, errorMessage: null };
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

export type CardIssuer = (typeof CARD_ISSUERS)[number];
type Validate = (value: string) => IErrorStatus;
