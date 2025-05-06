import validateNumber from "./validateNumber";
import validateMaxLength from "./validateMaxLength";
import { validationMessages } from "../../constants/validationMessages";

type ValidationResult = {
  isValid: boolean;
  errorMessage: null | string;
};

type checkBasicValidationProps = {
  value: string;
  maxLength: number;
};

export const checkBasicValidation = ({
  value,
  maxLength,
}: checkBasicValidationProps): ValidationResult => {
  if (!validateNumber(value)) {
    return { isValid: false, errorMessage: validationMessages.numberOnly };
  }

  if (!validateMaxLength(value, maxLength)) {
    return {
      isValid: false,
      errorMessage: validationMessages.limitedLength(maxLength),
    };
  }
  return { isValid: true, errorMessage: null };
};
