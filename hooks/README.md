## 📦 kirin-payment-hook

> payment앱 관련 입력 폼 유효성 검사 로직을 커스텀 훅으로 제공합니다. 카드 결제 정보와 관련된 입력값 유효성 검증에 최적화되어 있습니다.
> 

---

## 🛠 설치

```bash
npm install kirin-payment-hook
```

---

## 🚀 제공 훅 목록

```jsx
import {
  useCardNumberValidation,
  useExpirationDateValidation,
  useCvcNumberValidation,
  usePasswordValidation,
} from 'kirin-payment-hook';
```

| Hook 이름 | 설명 |
| --- | --- |
| `useCardNumberValidation` | 카드 번호 (4자리 x 4칸) 입력 유효성 검사 |
| `useExpirationDateValidation` | 만료일 (MM/YY) 형식 유효성 검사 |
| `useCvcNumberValidation` | CVC 번호 3자리 유효성 검사 |
| `usePasswordValidation` | 비밀번호 숫자 2자리 입력 유효성 검사 |

---

## 🧪 사용 예시

```tsx
const { errors, errorMessage, validateInput, noError } = useCardNumberValidation();

const handleChange = (value: string, index: number) => {
  validateInput(value, index);
};

```

## 🧩 타입

모든 훅은 아래와 같은 형태의 객체를 반환합니다:

```

{
  errors: boolean | boolean[];
  errorMessage: string;
  validateInput: (value: string, index?: number) => void;
  noError: boolean;
}

```

### 🔍 리턴 타입 설명 표

| 필드명 | 타입 | 설명 |
| --- | --- | --- |
| `errors` | `boolean` | `boolean[]` | 유효성 검사 결과. 단일 필드일 경우 `boolean`, 다중 필드일 경우 `boolean[]`로 각 필드의 에러 상태를 나타냄 (`true` = 에러 있음). |
| `errorMessage` | `string` | 현재 입력에 해당하는 에러 메시지 문자열. 에러가 없으면 빈 문자열일 수 있음. |
| `validateInput` | `(value: string, index?: number) => void` | 입력값 유효성 검사를 수행하는 함수. index가 필요한 훅(ex. 카드번호 4자리 배열 등)에서는 `index`를 함께 전달. |
| `noError` | `boolean` | `errors`가 `false`거나 `errors` 배열의 모든 값이 `false`일 때 `true`. 즉, **모든 입력값이 유효한 상태**를 의미함. |