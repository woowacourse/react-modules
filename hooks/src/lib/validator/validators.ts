import { createValidator, ValidationRule } from "./index";
import { ValidateField } from "./constants";
import { validationRules } from "./validation-rules";
import { FieldErrorCode } from "./constants/error-messages";
type ValidationRuleObj = {
  check: (value: string) => boolean;
  message: string | ((value: string) => string);
};

function createFieldRules<T extends ValidateField>(
  field: T,
  rules: Record<string, ValidationRuleObj>
): ValidationRule<T>[] {
  return Object.entries(rules).map(([code, { check }]) => ({
    check,
    errorMeta: {
      field,
      code: code as FieldErrorCode[T],
    },
  }));
}

const cvcRules = createFieldRules("cvc", validationRules.cvc);

const cardNumberRules = createFieldRules(
  "cardNumber",
  validationRules.cardNumber
);
const strictCardNumberRules = createFieldRules(
  "strictCardNumber",
  validationRules.strictCardNumber
);

const passwordRules = createFieldRules("password", validationRules.password);

const expiryDateRules = createFieldRules(
  "expiryDate",
  validationRules.expiryDate
);

const validateCVC = createValidator<"cvc">(cvcRules);
const validateCardNumber = createValidator<"cardNumber">(cardNumberRules);
const validatePassword = createValidator<"password">(passwordRules);
const validateExpiryDate = createValidator<"expiryDate">(expiryDateRules);
const validateStrictCardNumber = createValidator<"strictCardNumber">(
  strictCardNumberRules
);

export {
  validateCVC,
  validateCardNumber,
  validatePassword,
  validateExpiryDate,
  validateStrictCardNumber,
};
