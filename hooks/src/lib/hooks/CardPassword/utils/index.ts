import { ErrorState, ValidationRule } from "@/types/validation";
import { commonConditions, getErrorByRules } from "@utils/validation";

const cardPasswordValidationRules: ValidationRule<string>[] = [
  {
    condition: commonConditions.hasExactLength(2),
    errorMessage: "비밀번호는 2자리여야 합니다.",
  },
];

export const getCardPasswordError = (password: string): ErrorState => {
  return getErrorByRules(password, cardPasswordValidationRules);
};
