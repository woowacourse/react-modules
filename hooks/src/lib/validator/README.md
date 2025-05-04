# Validator 라이브러리

이 라이브러리는 결제 정보 입력에 필요한 유효성 검사를 제공합니다.

## 목차

- [Validator 라이브러리](#validator-라이브러리)
  - [목차](#목차)
  - [구조](#구조)
  - [사용 방법](#사용-방법)
  - [유효성 검사 규칙](#유효성-검사-규칙)
  - [커스텀 validator 만들기](#커스텀-validator-만들기)
  - [에러 처리](#에러-처리)

## 구조

라이브러리는 다음과 같은 파일들로 구성되어 있습니다:

- `constants.ts`: 유효성 검사에 필요한 타입 정의와 상수값
- `validation-rules.ts`: 필드별, 에러 코드별 유효성 검사 규칙과 에러 메시지 정의
- `validators.ts`: 각 필드에 대한 validator 구현체
- `index.ts`: 핵심 validator 팩토리 및 모든 validator 내보내기

## 사용 방법

```typescript
import {
  validateCVC,
  validateCardNumber,
  validateStrictCardNumber,
  validatePassword,
  validateExpiryDate,
} from "src/lib/validator";

// CVC 유효성 검사
const cvcResult = validateCVC("123");
if (cvcResult.valid) {
  // 유효한 CVC
} else {
  // 에러 처리
  const errors = cvcResult.errors;
  const errorMessages = errors.map((error) => error.message);
}

// 카드 번호 유효성 검사 (기본)
// - 숫자만 입력 가능
// - 16자리 길이 검증
const cardResult = validateCardNumber("4111111111111111");
// ...

// 카드 번호 유효성 검사 (엄격)
// - 기본 검증 + Luhn 알고리즘을 통한 체크섬 검증
// - 실제 유효한 카드 번호인지 확인
const strictCardResult = validateStrictCardNumber("4111111111111111");
// ...

// 비밀번호 유효성 검사
const passwordResult = validatePassword("1234");
// ...

// 만료일 유효성 검사
const expiryResult = validateExpiryDate("1223");
// ...
```

## 유효성 검사 규칙

각 필드별 유효성 검사 규칙은 `validation-rules.ts`에 정의되어 있습니다:

```typescript
// 예시: CVC 유효성 검사 규칙
const rules = {
  cvc: {
    INVALID_NUMBER: {
      check: (value) => isNumeric(value),
      message: "CVC는 숫자만 입력 가능합니다",
    },
    INVALID_LENGTH: {
      check: (value) => value.length === CVC_LENGTH,
      message: "CVC는 3자리여야 합니다",
    },
  },
  // ... 다른 필드 규칙들
};
```

## 커스텀 validator 만들기

새로운 validator를 만드는 과정은 다음과 같습니다:

1. `constants.ts`에 필드와 에러 코드 추가:

```typescript
export type ValidateField =
  | "cvc"
  | "password"
  | "cardNumber"
  | "expiryDate"
  | "newField";

export type FieldErrorCode = {
  // ... 기존 필드
  newField: "ERROR_CODE_1" | "ERROR_CODE_2";
};
```

2. `validation-rules.ts`에 검증 규칙 추가:

```typescript
export const validationRules = {
  // ... 기존 필드
  newField: {
    ERROR_CODE_1: {
      check: (value) => /* 검증 로직 */,
      message: "에러 메시지"
    },
    ERROR_CODE_2: {
      check: (value) => /* 검증 로직 */,
      message: "에러 메시지"
    }
  }
};
```

3. `validators.ts`에 validator 추가:

```typescript
// 새로운 필드 유효성 검사
const newFieldRules: ValidationRule<"newField">[] = Object.entries(
  validationRules.newField
).map(([code, { check }]) => ({
  check,
  errorMeta: {
    field: "newField",
    code: code as ValidationRule<"newField">["errorMeta"]["code"],
  },
}));

export const validateNewField = createValidator<"newField">(newFieldRules);
```

## 에러 처리

validator는 다음과 같은 형식의 결과를 반환합니다:

```typescript
type ValidationResult = {
  valid: boolean;
  errors: Array<{
    field: ValidateField;
    code: string;
    message: string;
  }>;
};
```

에러 처리 예시:

```typescript
const result = validateCardNumber("1234");
if (!result.valid) {
  result.errors.forEach((error) => {
    console.error(`${error.field} 필드 오류: ${error.message}`);
  });
}
```
