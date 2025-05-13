import { commonConditions, getErrorByRules } from "@utils/validation";
import { ErrorState, ValidationRule } from "@/types/validation";

const cvcValidationRules: ValidationRule<string>[] = [
  {
    condition: commonConditions.hasExactLength(3),
    errorMessage: "CVC는 3자리여야 합니다.",
  },
];

export const getCardCVCError = (cvc: string): ErrorState => {
  return getErrorByRules(cvc, cvcValidationRules);
};
