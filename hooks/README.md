# bunju-react-hooks

React 애플리케이션에서 신용카드 정보를 안전하게 처리하기 위한 커스텀 훅 모음입니다.

카드 번호, 만료일, CVC 코드, 카드 비밀번호의 입력과 유효성 검사를 쉽게 구현할 수 있습니다.

## 설치

```bash
npm install bunju-react-hooks
# 또는
yarn add bunju-react-hooks
# 또는
pnpm add bunju-react-hooks
```

## 사용 가능한 훅

이 패키지는 다음과 같은 훅을 제공합니다:

- `useCardNumber`: 카드 번호 입력 및 유효성 검사를 위한 훅
- `useCardExpiry`: 카드 만료일 입력 및 유효성 검사를 위한 훅
- `useCardCvc`: 카드 CVC 코드 입력 및 유효성 검사를 위한 훅
- `useCardSecretNumber`: 카드 비밀번호 입력 및 유효성 검사를 위한 훅

## 개별 훅 사용 가이드

### useCardNumber

카드 번호 입력과 유효성 검사를 위한 훅입니다.

```jsx
const {
  cardNumber,
  handleCardNumberChange,
  cardType,
  isValid,
  errorMessage,
  getFormattedCardNumber,
} = useCardNumber();
```

**매개변수:**

- `initialState`: (선택 사항) 초기 카드 번호 값을 지정할 수 있습니다. 기본값은 빈 문자열입니다.

**반환값:**

- `cardNumber`: 현재 입력된 카드 번호 문자열
- `handleCardNumberChange`: 카드 번호 변경 핸들러 함수
- `cardType`: 현재 카드 번호에 따른 카드 타입 ("diners", "amex", "unionpay", "unknown")
- `isValid`: 카드 번호 유효성 여부 (boolean)
- `errorMessage`: 유효성 검사 실패 시 오류 메시지
- `getFormattedCardNumber`: 카드 타입에 맞게 형식화된 카드 번호를 반환하는 함수

**카드 형식:**

- Diners Club: 36으로 시작하는 14자리 (형식: 3612 345678 9012)
- American Express: 34나 37로 시작하는 15자리 (형식: 3412 345678 90123)
- UnionPay: 622126-622925, 624-626, 6282-6288로 시작하는 16자리 (형식: 6221 2612 3456 7890)

**예제:**

```jsx
import { useCardNumber } from "bunju-react-hooks";

function CardForm() {
  const {
    cardNumber,
    handleCardNumberChange,
    cardType,
    isValid,
    errorMessage,
    getFormattedCardNumber,
  } = useCardNumber();

  return (
    <div>
      <input
        type="text"
        value={cardNumber}
        onChange={(e) => handleCardNumberChange(e.target.value)}
        placeholder="카드 번호 입력"
      />
      {!isValid && <p className="error">{errorMessage}</p>}
      <p>카드 타입: {cardType}</p>
      <p>형식화된 카드 번호: {getFormattedCardNumber()}</p>
    </div>
  );
}
```

### useCardExpiry

카드 만료일 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { expiryDate, handleExpiryChange, errorState } = useCardExpiry();
```

**반환값:**

- `expiryDate`: 현재 입력된 만료일 상태 객체
  ```ts
  {
    value: string;
  }
  ```
- `handleExpiryChange`: 만료일 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

### useCardCvc

카드 CVC 코드 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { cvcState, handleCVCState, errorState } = useCardCvc();
```

**반환값:**

- `cvcState`: 현재 입력된 CVC 상태 객체

  ```ts
  {
    value: string;
  }
  ```

- `handleCVCState`: CVC 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

### useCardSecretNumber

카드 비밀번호 입력과 유효성 검사를 위한 훅입니다.

```jsx
const { secretNumber, handleSecretNumberChange, errorState } =
  useCardSecretNumber();
```

**반환값:**

- `secretNumber`: 현재 입력된 카드 비밀번호 상태 객체
  ```ts
  {
    value: string;
  }
  ```
- `handleSecretNumberChange`: 카드 비밀번호 변경 핸들러 함수
- `errorState`: 유효성 검사 결과 객체

  ```ts
  { isValid: boolean, errorMessage: string }
  ```

## 에러 처리

대부분의 훅은 유효성 검사 결과를 반환합니다. useCardNumber의 경우 `isValid`와 `errorMessage`를 직접 반환하며, 다른 훅들은 `errorState` 객체를 통해 다음과 같은 구조로 반환합니다:

```typescript
interface ValidationResult {
  isValid: boolean;
  errorMessage: string;
}
```

`isValid`가 `false`인 경우, `errorMessage`에 오류 메시지가 포함됩니다.
