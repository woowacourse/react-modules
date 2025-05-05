import { ValidateField, FieldValueType } from "./constants";
import { validationRules } from "./validation-rules";
import { FieldErrorCode } from "./constants/error-messages";

type ValidationRule<T extends ValidateField> = {
  check: (value: FieldValueType[T]) => boolean;
  errorMeta: {
    field: T;
    code: FieldErrorCode[T];
  };
};

type ValidationResult = {
  valid: boolean;
  errors: Array<{
    field: ValidateField;
    code: FieldErrorCode[ValidateField];
    message: string;
  }>;
};

function createValidator<T extends ValidateField>(
  rules: ValidationRule<T>[]
): (value: FieldValueType[T]) => ValidationResult {
  return (value: FieldValueType[T]) => {
    if (value === "") {
      return { errors: [], valid: true };
    }

    const errors: ValidationResult["errors"] = [];
    rules.forEach(({ check, errorMeta }) => {
      if (!check(value)) {
        const { field, code } = errorMeta;

        const rawMessage = (validationRules[field] as any)[code]?.message;
        const message =
          typeof rawMessage === "function" ? rawMessage(value) : rawMessage;

        errors.push({ field, code, message });
      }
    });

    return { valid: errors.length === 0, errors };
  };
}

export { createValidator, type ValidationRule, type ValidationResult };
