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
    const v = value.trim();
    const errors = rules
      .map(({ check, errorMeta }) => {
        if (!check(v)) {
          // 타입 안정성이 확보가 된 상황인데.. 꼭 코드 수를 늘릴 필요는 없어서 이렇게 했습니다.
          const field = errorMeta.field;
          const code = errorMeta.code;
          const message = (validationRules[field] as any)[code].message;
          return { ...errorMeta, message };
        }
        return null;
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);
    return { valid: errors.length === 0, errors };
  };
}
export { createValidator, type ValidationRule, type ValidationResult };

export * from "./validators";
