# 📦 payment-hook

> 카드 결제 입력 폼을 위한 입력 상태 + 유효성 검사 통합 커스텀 훅을 제공합니다.
> 각 훅은 입력 상태 관리와 유효성 검사를 모두 처리하며, 카드번호, 만료일, CVC, 비밀번호 입력에 최적화되어 있습니다.

---

## 🛠 설치

```bash
npm install hoyychoi-payment-hook
```

---

## 🚀 제공 훅 목록

```jsx
import { useCardNumber, useExpirationDate, useCvcNumber, usePassword } from "hoyychoi-payment-hook";
```

| Hook 이름           | 설명                                                  |
| ------------------- | ----------------------------------------------------- |
| `useCardNumber`     | 카드 번호 (4자리 × 4칸) 입력 상태 및 유효성 통합 관리 |
| `useExpirationDate` | 만료일 (MM/YY) 입력 상태 및 유효성 통합 관리          |
| `useCvcNumber`      | CVC 번호 (3자리) 입력 상태 및 유효성 통합 관리        |
| `usePassword`       | 카드 비밀번호 앞 2자리 입력 상태 및 유효성 통합 관리  |

---

## 🧪 사용 예시

```tsx
const {
  state, // { first: "", second: "", third: "", fourth: "" }
  onChange,
  errors,
  errorMessage,
  validateInput,
  isValid,
} = useCardNumber();

const handleChange = (value: string, index: number) => {
  onChange(value, index); // 입력 상태 업데이트
  validateInput(value, index); // 유효성 검사
};
```

## 🧩 타입

모든 훅은 아래와 같은 형태의 객체를 반환합니다:

```

{
  state,               // 입력 상태 (string 또는 객체)
  onChange,            // 입력 상태 업데이트 함수
  errors,              // 유효성 오류 여부 (boolean 또는 boolean[])
  errorMessage,        // 에러 메시지 (string)
  validateInput,       // 유효성 검사 함수
  isLengthComplete,    // 입력이 최대 길이에 도달했는지 여부
  isErrorComplete,     // 에러가 모두 해결되었는지 여부
  isValid              // 전체 유효성 검사 통과 여부
}



```

### 🔍 리턴 타입 설명 표

| 필드명             | 타입                                      | 설명                                                                |
| ------------------ | ----------------------------------------- | ------------------------------------------------------------------- |
| `state`            | `string` 또는 `Record<string, string>`    | 현재 입력 상태. (예: 카드번호는 `{ first, second, third, fourth }`) |
| `onChange`         | `(value: string, index?: number) => void` | 입력값 변경 핸들러                                                  |
| `validateInput`    | `(value: string, index?: number) => void` | 입력값에 대한 유효성 검사 함수                                      |
| `errors`           | `boolean` 또는 `boolean[]`                | 유효하지 않은 입력 여부                                             |
| `errorMessage`     | `string`                                  | 현재 에러에 대한 메시지                                             |
| `isLengthComplete` | `boolean`                                 | 모든 필드가 최대 길이까지 입력되었는지 여부                         |
| `isErrorComplete`  | `boolean`                                 | 모든 필드가 에러 없이 통과되었는지 여부                             |
| `isValid`          | `boolean`                                 | 전체 유효성 통과 여부 (`isLengthComplete` && `isErrorComplete`)     |

### 💡 팁

- 각 훅은 상태 관리 + 유효성 검사를 모두 제공합니다.
- 카드번호나 만료일처럼 필드가 나뉜 경우, onChange, validateInput에 index를 함께 넘겨야 합니다.
- isValid를 통해 제출 가능 여부를 쉽게 판단할 수 있습니다

---

## 🧱 (base) 입력 필드 상태 및 에러 관리 훅

> 입력값 상태와 에러 상태를 분리하여 관리할 수 있도록 useInputValue와 useErrors 훅을 제공합니다.
> 카드번호, 만료일 등 단일/다중 필드의 입력 관리 및 유효성 검증 로직 구현 시 활용됩니다.

---

### 📦 훅 구성

| 훅 이름         | 역할                                                              |
| --------------- | ----------------------------------------------------------------- |
| `useInputValue` | 입력값 상태 및 변경 핸들러, 길이 검증 (`isLengthComplete`) 관리   |
| `useErrors`     | 에러 상태 및 메시지 관리, 전체 에러 통과 여부 (`isErrorComplete`) |

## 🔧 `useInputValue`

입력값의 상태 및 길이 완료 여부를 관리합니다.

```ts
interface InputValueType<T> {
  initialState: T; // 예: "", 또는 { first: "", second: "" }
  maxLength: number; // 각 필드 최대 입력 길이
  keyIndexMap?: string[]; // 다중 필드일 경우 index → key 매핑
}
```

### 사용 예시 (다중 필드)

```ts
const { state, onChange, isLengthComplete } = useInputValue({
  initialState: {
    first: "",
    second: "",
    third: "",
    fourth: "",
  },
  maxLength: 4,
  keyIndexMap: ["first", "second", "third", "fourth"],
});
```

### 반환값

| 키                 | 타입                                      | 설명                                         |
| ------------------ | ----------------------------------------- | -------------------------------------------- |
| `state`            | `T`                                       | 현재 입력값 상태                             |
| `onChange`         | `(value: string, index?: number) => void` | 상태 변경 함수                               |
| `isLengthComplete` | `boolean`                                 | 모든 필드가 최대 입력 길이를 만족했는지 여부 |

---

## 🔧 `useErrors`

에러 상태, 메시지 및 전체 에러 완료 여부를 관리합니다.

```ts
interface UseErrorsProps<T> {
  initialErrorState: T; // 예: { first: false, second: false, ... }
}
```

### 사용 예시

```ts
const { errors, errorMessage, clearError, changeError, isErrorComplete } = useErrors({
  initialErrorState: {
    first: false,
    second: false,
    third: false,
    fourth: false,
  },
});
```

### 반환값

| 키                | 타입                                      | 설명                                  |
| ----------------- | ----------------------------------------- | ------------------------------------- |
| `errors`          | `Record<string, boolean>`                 | 각 필드의 에러 상태                   |
| `errorMessage`    | `string`                                  | 가장 최근 설정된 에러 메시지          |
| `clearError`      | `(type: string) => void`                  | 특정 필드 에러 상태 초기화            |
| `changeError`     | `(type: string, message: string) => void` | 특정 필드에 에러 상태 및 메시지 설정  |
| `isErrorComplete` | `boolean`                                 | 모든 필드가 에러 없이 통과했는지 여부 |

---

## ✨ 함께 사용하기

`useInputValue`와 `useErrors`를 조합해 입력 상태와 유효성 검증을 분리된 책임으로 관리할 수 있습니다.

### 조합 예시

```ts
const input = useInputValue({
  initialState: { first: "", second: "" },
  maxLength: 4,
  keyIndexMap: ["first", "second"],
});

const errors = useErrors({
  initialErrorState: { first: false, second: false },
});

const isValid = input.isLengthComplete && errors.isErrorComplete;
```
