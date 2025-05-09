import { ValidateField, FieldValueType } from "./constants";
import { validationRules } from "./validation-rules";
import { FieldErrorCode } from "./constants/error-messages";

// ValidationRule 및 ValidationRules 타입 정의
interface ValidationRule<T extends ValidateField> {
  message: string | ((value: FieldValueType[T]) => string);
  check: (value: FieldValueType[T]) => boolean;
}

type ValidationRules = {
  [K in ValidateField]: Record<FieldErrorCode[K], ValidationRule<K>>;
};

type ValidationRuleParam<T extends ValidateField> = {
  check: (value: FieldValueType[T]) => boolean;
  errorMeta: {
    field: T;
    code: FieldErrorCode[T];
  };
  applyWhen?: (value: FieldValueType[T]) => boolean;
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
  rules: ValidationRuleParam<T>[]
): (value: FieldValueType[T]) => ValidationResult {
  return (value: FieldValueType[T]) => {
    if (value === "") {
      return { errors: [], valid: true };
    }

    const errors: ValidationResult["errors"] = [];
    for (const { check, applyWhen, errorMeta } of rules) {
      if (applyWhen && !applyWhen(value)) continue;
      if (!check(value)) {
        const { field, code } = errorMeta;

        const ruleSet = (validationRules as ValidationRules)[field];
        const rawMessage = ruleSet[code]?.message;

        const message =
          typeof rawMessage === "function" ? rawMessage(value) : rawMessage;

        errors.push({ field, code, message });
        break;
      }
    }

    return { valid: errors.length === 0, errors };
  };
}

export { createValidator, type ValidationRuleParam, type ValidationResult };
