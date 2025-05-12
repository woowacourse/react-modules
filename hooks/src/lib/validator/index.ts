import { ValidateField } from "./constants";
import { validationRules } from "./validation-rules";

type ValidationError = {
  field: string;
  code: string;
  message: string;
};

type ValidationResult = {
  valid: boolean;
  errors: ValidationError[];
};

/**
 * 특정 필드에 대한 유효성 검증기를 생성합니다.
 * @param field 검증할 필드 이름
 * @returns 검증 함수
 */
function createValidator(field: ValidateField) {
  return (value: string): ValidationResult => {
    if (value === "") return { errors: [], valid: true };

    const fieldRules = validationRules[field];

    if (!fieldRules) throw new Error(`해당 ${field} 필드가 존재하지 않습니다`);

    const errors: ValidationError[] = [];

    for (const [code, rule] of Object.entries(fieldRules)) {
      // 검증 실패 시 에러 추가
      if (!rule.check(value)) {
        const message =
          typeof rule.message === "function"
            ? rule.message(value)
            : rule.message;

        errors.push({ field, code, message });
        // 첫번째 에러가 발생하면 더 이상 검증하지 않음

        break;
      }
    }

    return { valid: errors.length === 0, errors };
  };
}

function createValidatorWithMultipleAndMostRelevantErrors(
  field: ValidateField
) {
  return (value: string): ValidationResult => {
    if (value === "") return { errors: [], valid: true };

    const fieldRules = validationRules[field];

    if (!fieldRules) throw new Error(`해당 ${field} 필드가 존재하지 않습니다`);

    const errors: ValidationError[] = [];

    for (const [code, rule] of Object.entries(fieldRules)) {
      if (rule.applyWhen && !rule.applyWhen(value)) continue;
      // applyWhen이 true인 경우에만 검증

      if (!rule.check(value)) {
        const message =
          typeof rule.message === "function"
            ? rule.message(value)
            : rule.message;

        errors.push({ field, code, message });
        // 첫번째 에러가 발생하면 더 이상 검증하지 않음
      }
    }

    return { valid: errors.length === 0, errors };
  };
}

export { createValidator, createValidatorWithMultipleAndMostRelevantErrors };
