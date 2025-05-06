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
  state, // { first: "", second: "", third: "", forth: "" }
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

| 필드명             | 타입                                      | 설명                                                               |
| ------------------ | ----------------------------------------- | ------------------------------------------------------------------ |
| `state`            | `string` 또는 `Record<string, string>`    | 현재 입력 상태. (예: 카드번호는 `{ first, second, third, forth }`) |
| `onChange`         | `(value: string, index?: number) => void` | 입력값 변경 핸들러                                                 |
| `validateInput`    | `(value: string, index?: number) => void` | 입력값에 대한 유효성 검사 함수                                     |
| `errors`           | `boolean` 또는 `boolean[]`                | 유효하지 않은 입력 여부                                            |
| `errorMessage`     | `string`                                  | 현재 에러에 대한 메시지                                            |
| `isLengthComplete` | `boolean`                                 | 모든 필드가 최대 길이까지 입력되었는지 여부                        |
| `isErrorComplete`  | `boolean`                                 | 모든 필드가 에러 없이 통과되었는지 여부                            |
| `isValid`          | `boolean`                                 | 전체 유효성 통과 여부 (`isLengthComplete` && `isErrorComplete`)    |

### 💡 팁

- 각 훅은 상태 관리 + 유효성 검사를 모두 제공합니다.
- 카드번호나 만료일처럼 필드가 나뉜 경우, onChange, validateInput에 index를 함께 넘겨야 합니다.
- isValid를 통해 제출 가능 여부를 쉽게 판단할 수 있습니다

---

## 🧱 useBaseField

> 입력값 상태와 에러 상태를 공통적으로 관리할 수 있는 내부 기반 훅입니다.
> 카드번호, 만료일 등 단일 필드/다중 필드 입력의 상태 관리 및 유효성 처리를 위한 베이스 역할을 합니다.

📌 시그니처

```ts
const { state, onChange, errors, errorMessage, clearError, changeError, isLengthComplete, isErrorComplete, isValid } =
  useBaseField<T>(props);
```

#### ✅ 제네릭 파라미터

##### T: 입력 상태 타입 (string 또는 Record<string, string>)

📥 파라미터

```ts
interface PropsType<T> {
  initialState: T; // 초기 입력 상태 (예: "", { first: "", second: "" } 등)
  maxLength: number; // 각 필드의 최대 입력 길이
  keyIndexMap?: string[]; // 다중 필드일 경우 index ↔ key 매핑 (예: ["first", "second", ...])
}
```

### 🔄 반환 값

| 키                 | 타입                                        | 설명                                                           |
| ------------------ | ------------------------------------------- | -------------------------------------------------------------- |
| `state`            | `T`                                         | 현재 입력값 상태                                               |
| `onChange`         | `(value: string, index?: number) => void`   | 상태 변경 함수. 다중 필드일 경우 index 필수                    |
| `errors`           | `boolean` or `boolean[]`                    | 에러 여부. 다중 필드일 경우 각 필드별 boolean 배열             |
| `errorMessage`     | `string`                                    | 현재 가장 최근 발생한 에러 메시지                              |
| `clearError`       | `(index?: number) => void`                  | 특정 필드 혹은 전체 에러 상태 초기화                           |
| `changeError`      | `(message: string, index?: number) => void` | 특정 필드 혹은 전체에 에러 설정                                |
| `isLengthComplete` | `boolean`                                   | 모든 필드가 최대 입력 길이를 만족했는지 여부                   |
| `isErrorComplete`  | `boolean`                                   | 모든 필드가 에러 없이 통과했는지 여부                          |
| `isValid`          | `boolean`                                   | 입력값이 완전한지 (`isLengthComplete && isErrorComplete`) 여부 |

✅ 예시: 카드번호

```ts
const { state, onChange, errors, errorMessage, clearError, changeError, isLengthComplete, isErrorComplete, isValid } =
  useBaseField({
    initialState: {
      first: "",
      second: "",
      third: "",
      forth: "",
    },
    maxLength: 4,
    keyIndexMap: ["first", "second", "third", "forth"],
  });
```

### 💡 팁

- 단일 필드라면 initialState를 문자열로, 다중 필드라면 객체로 넘기면 됩니다.

- 외부에서 validateInput 함수 안에서 changeError, clearError를 조합해 유효성 체크 로직을 커스터마이징할 수 있습니다.

- onChange와 validateInput은 분리되어 있어 UX 흐름에 맞게 유연하게 사용할 수 있습니다.
