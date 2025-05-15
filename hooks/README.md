# 📦 payment-hook

> 카드 결제 정보를 입력할 때 필요한 상태 관리 및 유효성 검사를 통합한 커스텀 훅입니다.  
> 카드번호, 유효기간, CVC, 비밀번호 입력에 특화되어 있으며, 자동 포맷팅 및 유효성 검사를 지원합니다.

---

## 🛠 설치

```bash
npm install hoyychoi-payment-hook
```

---

## 🚀 제공 훅 목록

```jsx
import { useCardNumber, useExpirationDate, useCvcNumber, usePassword } from "hoyychoi-payment-hook";

const cardNumber = useCardNumber();
const expirationDate = useExpirationDate("/");
const cvcNumber = useCvcNumber();
const password = usePassword();
```

## 🧪 각 훅 설명

| 훅 이름               | 설명                                                         |
| --------------------- | ------------------------------------------------------------ |
| `useCardNumber()`     | 카드번호 입력 관리 + 카드사 자동 인식 (`visa`, `master`, 등) |
| `useExpirationDate()` | MMYY 형식의 만료일 입력 관리 (`12/24` 등)                    |
| `useCvcNumber()`      | CVC 3자리 입력 관리                                          |
| `usePassword()`       | 카드 비밀번호 앞 2자리 입력 관리                             |

`useCardNumber`, `useExpirationDate` 훅은 splitter (구분 문자)를 인자로 받습니다. 기본값은 `" "`입니다.

## 📄 리턴 형태 (`HookReturnType`)

모든 훅은 아래와 같은 객체를 반환합니다:

```tsx
{
  value: string; // 포맷된 표시용 문자열
  onChange: (value: string) => void;
  error: boolean;
  errorMessage: string;
  isLengthComplete: boolean;
  isErrorComplete: boolean;
  isValid: boolean;
  cardType?: CardType; // useCardNumber에서만 제공
}
```

### ✅ 예시 사용

```tsx
const cardNumber = useCardNumber(" - ");

...
<input
  value={cardNumber.value}
  onChange={(e) => cardNumber.onChange(e.target.value)}
/>

{cardNumber.error && <span>{cardNumber.errorMessage}</span>}
```

---

## 🧠 내부 로직 설명

### ✨ 자동 포맷팅

입력값은 `splitter`를 기준으로 자동 포맷됩니다.

예: `"1234567890123456"` → `"1234 5678 9012 3456"`

### ✨ 카드사 인식

`useCardNumber`는 앞 6자리 BIN을 기준으로 아래 카드사를 자동 추출합니다:

- VISA, MasterCard
- AMEX, Diners
- UnionPay 등

```jsx
const cardType = useCardType("412345"); // → "visa"
```

---

## 🔧 유틸 훅

### `useInputValue`

입력값을 `splitter` 제거 후 상태로 관리하며, 최대 길이까지 입력되었는지 판단합니다.

```tsx
const { state, onChange, isLengthComplete } = useInputValue({
  initialState: "",
  maxLength: 16,
  splitter: " ",
});
```

---

## 💬 에러 메시지 구조

에러는 내부적으로 `validateNumericString`, `validateExpirationDate` 등 함수로 검사하며,

에러 발생 시 `error: true`, `errorMessage`에 상세 메시지를 제공합니다.

---

## ✨ 특징 요약

- 상태, 유효성 검사, 포맷팅을 하나의 훅으로 통합
- 카드사 자동 인식 (useCardNumber)
- `splitter`를 통한 사용자 친화적 입력 포맷 지원
- 모든 훅은 동일한 형태의 결과를 반환해 일관된 UI 구현 가능

---

## 📎 예제

```tsx
const expiration = useExpirationDate("/");

return (
  <inputplaceholder="MM/YY"
    value={expiration.value}
    onChange={(e) => expiration.onChange(e.target.value)}
  />
);
```

---

## 🛠 의존성

- React 18+
- TypeScript 지원
