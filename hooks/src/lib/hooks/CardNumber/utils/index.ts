import {
  commonConditions,
  getErrorByRules,
} from "../../../../utils/validation";
import { ErrorState, ValidationRule } from "../../../types";
import { CardNumberState } from "../types";

export const getCardNumbersError = (
  cardNumbers: CardNumberState
): ErrorState => {
  for (const { value } of Object.values(cardNumbers)) {
    const error = getCardNumberError(value);
    if (!error.isValid) {
      return error;
    }
  }

  return { isValid: true, errorMessage: "" };
};

const cardNumberValidationRules: ValidationRule[] = [
  {
    condition: commonConditions.isNumeric,
    errorMessage: "숫자만 입력해주세요.",
  },
  {
    condition: commonConditions.hasLength(4),
    errorMessage: "카드 번호는 4자리여야 합니다.",
  },
];

const getCardNumberError = (cardNumber: string): ErrorState => {
  return getErrorByRules(cardNumber, cardNumberValidationRules);
};
