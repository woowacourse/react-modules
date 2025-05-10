import {
  commonConditions,
  getErrorByRules,
} from "../../../../utils/validation";
import { ErrorState, ValidationRule } from "../../../types";

const cardNumberValidationRules: ValidationRule[] = [
  {
    condition: commonConditions.isFilled,
    errorMessage: "카드 번호를 입력해주세요.",
  },
  {
    condition: commonConditions.hasLengthInRange(14, 16),
    errorMessage: "카드 번호는 14 ~ 16자리여야 합니다.",
  },
];

export const getCardNumberError = (cardNumber: string): ErrorState => {
  return getErrorByRules(cardNumber, cardNumberValidationRules);
};
